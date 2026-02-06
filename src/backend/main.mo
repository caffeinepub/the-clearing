import Stripe "stripe/stripe";
import AccessControl "authorization/access-control";
import OutCall "http-outcalls/outcall";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import List "mo:core/List";
import Random "mo:core/Random";
import MixinAuthorization "authorization/MixinAuthorization";
import MixinStorage "blob-storage/Mixin";
import Storage "blob-storage/Storage";
import InviteLinksModule "invite-links/invite-links-module";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);
  include MixinStorage();

  let inviteState = InviteLinksModule.initState();

  public type UserProfile = {
    name : Text;
    email : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  var stripeConfiguration : ?Stripe.StripeConfiguration = null;

  public query func isStripeConfigured() : async Bool {
    stripeConfiguration != null;
  };

  public shared ({ caller }) func setStripeConfiguration(config : Stripe.StripeConfiguration) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can perform this action");
    };
    stripeConfiguration := ?config;
  };

  func getStripeConfiguration() : Stripe.StripeConfiguration {
    switch (stripeConfiguration) {
      case (null) { Runtime.trap("Stripe needs to be configured first") };
      case (?config) { config };
    };
  };

  public shared ({ caller }) func getStripeSessionStatus(sessionId : Text) : async Stripe.StripeSessionStatus {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can check payment status");
    };
    await Stripe.getSessionStatus(getStripeConfiguration(), sessionId, transform);
  };

  public shared ({ caller }) func createCheckoutSession(items : [Stripe.ShoppingItem], successUrl : Text, cancelUrl : Text) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create checkout sessions");
    };
    await Stripe.createCheckoutSession(getStripeConfiguration(), caller, items, successUrl, cancelUrl, transform);
  };

  public query func transform(input : OutCall.TransformationInput) : async OutCall.TransformationOutput {
    OutCall.transform(input);
  };

  public type Booking = {
    id : Text;
    owner : Principal;
    clientName : Text;
    clientEmail : Text;
    sessionTime : Time.Time;
    paymentStatus : PaymentStatus;
    bookingTime : Time.Time;
    virtualMeetingLink : ?Text;
  };

  public type PaymentStatus = {
    #pending;
    #completed : { sessionId : Text };
    #failed : { error : Text };
  };

  public type Availability = {
    id : Text;
    dayOfWeek : DayOfWeek;
    startTime : TimeOfDay;
    endTime : TimeOfDay;
    isRecurring : Bool;
    blackoutDates : [BlackoutDate];
  };

  public type DayOfWeek = {
    #monday;
    #tuesday;
    #wednesday;
    #thursday;
    #friday;
    #saturday;
    #sunday;
  };

  public type TimeOfDay = {
    hours : Nat;
    minutes : Nat;
  };

  public type BlackoutDate = {
    start : Time.Time;
    end : Time.Time;
  };

  var availableTimeSlots : List.List<Availability> = List.empty<Availability>();
  let bookings = Map.empty<Text, Booking>();

  public shared ({ caller }) func createBooking(clientName : Text, clientEmail : Text, sessionTime : Time.Time) : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can create bookings");
    };

    if (not isTimeSlotAvailable(sessionTime)) {
      Runtime.trap("Selected time slot is not available");
    };

    let bookingId = clientEmail.concat(Time.now().toText());
    let booking : Booking = {
      id = bookingId;
      owner = caller;
      clientName;
      clientEmail;
      sessionTime;
      paymentStatus = #pending;
      bookingTime = Time.now();
      virtualMeetingLink = null;
    };

    bookings.add(bookingId, booking);
    bookingId;
  };

  public shared ({ caller }) func updateBookingPaymentStatus(bookingId : Text, status : PaymentStatus) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update payment status");
    };

    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) {
        let updatedBooking : Booking = {
          booking with
          paymentStatus = status;
        };
        bookings.add(bookingId, updatedBooking);
      };
    };
  };

  public query ({ caller }) func getBooking(bookingId : Text) : async Booking {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view bookings");
    };

    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) {
        if (booking.owner != caller and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only view your own bookings");
        };
        booking;
      };
    };
  };

  public query ({ caller }) func getBookingsForClient(clientEmail : Text) : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view bookings");
    };

    let allBookings = bookings.values().toArray();
    allBookings.filter<Booking>(
      func(booking) {
        (booking.owner == caller or AccessControl.isAdmin(accessControlState, caller)) and booking.clientEmail == clientEmail;
      }
    );
  };

  public shared ({ caller }) func cancelBooking(bookingId : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can cancel bookings");
    };

    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) {
        if (booking.owner != caller and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Only booking owner or admin can cancel");
        };
        bookings.remove(bookingId);
      };
    };
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all bookings");
    };
    bookings.values().toArray();
  };

  public shared ({ caller }) func setAvailableTimeSlots(slots : [Availability]) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can set time slots");
    };
    availableTimeSlots.clear();
    for (slot in slots.values()) {
      availableTimeSlots.add(slot);
    };
  };

  public query func getAvailableTimeSlots() : async [Availability] {
    availableTimeSlots.toArray();
  };

  func isTimeSlotAvailable(sessionTime : Time.Time) : Bool {
    let timeOfDay = extractTimeOfDay(sessionTime);
    let dayOfWeek = extractDayOfWeek(sessionTime);

    switch (dayOfWeek) {
      case (null) { return false };
      case (?day) {
        let filteredSlots = availableTimeSlots.toArray().filter(
          func(slot) {
            slot.dayOfWeek == day and isTimeWithinRange(timeOfDay, slot.startTime, slot.endTime);
          }
        );

        if (filteredSlots.size() > 0) {
          let conflictingBookings = bookings.values().toArray().filter(
            func(booking) {
              booking.sessionTime == sessionTime;
            }
          );
          conflictingBookings.size() == 0;
        } else { false };
      };
    };
  };

  func extractTimeOfDay(_timestamp : Time.Time) : TimeOfDay {
    { hours = 0; minutes = 0 };
  };

  func extractDayOfWeek(_timestamp : Time.Time) : ?DayOfWeek {
    ?#monday;
  };

  func isTimeWithinRange(time : TimeOfDay, startTime : TimeOfDay, endTime : TimeOfDay) : Bool {
    let timeMinutes = time.hours * 60 + time.minutes;
    let startMinutes = startTime.hours * 60 + startTime.minutes;
    let endMinutes = endTime.hours * 60 + endTime.minutes;
    timeMinutes >= startMinutes and timeMinutes <= endMinutes;
  };

  public shared ({ caller }) func updateBookingWithVirtualMeetingLink(bookingId : Text, meetingLink : Text) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can update meeting link");
    };

    switch (bookings.get(bookingId)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) {
        let updatedBooking : Booking = {
          booking with
          virtualMeetingLink = ?meetingLink;
        };
        bookings.add(bookingId, updatedBooking);
      };
    };
  };

  public type FileReference = {
    id : Text;
    blob : Storage.ExternalBlob;
  };

  let files = Map.empty<Text, FileReference>();

  public query ({ caller }) func getFile(id : Text) : async FileReference {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access files");
    };
    switch (files.get(id)) {
      case (?file) { file };
      case (null) { Runtime.trap("File not found") };
    };
  };

  public shared ({ caller }) func uploadFile(id : Text, blob : Storage.ExternalBlob) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can upload files");
    };
    let file : FileReference = { id; blob };
    files.add(id, file);
  };

  public query ({ caller }) func getFileList(_from : Nat, _to : Nat) : async [FileReference] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view file list");
    };
    files.values().toArray();
  };

  public shared ({ caller }) func generateInviteCode() : async Text {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can generate invite codes");
    };
    let blob = await Random.blob();
    let code = InviteLinksModule.generateUUID(blob);
    InviteLinksModule.generateInviteCode(inviteState, code);
    code;
  };

  public shared ({ caller }) func submitRSVP(name : Text, attending : Bool, inviteCode : Text) : async () {
    InviteLinksModule.submitRSVP(inviteState, name, attending, inviteCode);
  };

  public query ({ caller }) func getAllRSVPs() : async [InviteLinksModule.RSVP] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view RSVPs");
    };
    InviteLinksModule.getAllRSVPs(inviteState);
  };

  public query ({ caller }) func getInviteCodes() : async [InviteLinksModule.InviteCode] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view invite codes");
    };
    InviteLinksModule.getInviteCodes(inviteState);
  };
};
