import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export class ExternalBlob {
    getBytes(): Promise<Uint8Array<ArrayBuffer>>;
    getDirectURL(): string;
    static fromURL(url: string): ExternalBlob;
    static fromBytes(blob: Uint8Array<ArrayBuffer>): ExternalBlob;
    withUploadProgress(onProgress: (percentage: number) => void): ExternalBlob;
}
export interface BlackoutDate {
    end: Time;
    start: Time;
}
export interface TransformationOutput {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export type Time = bigint;
export interface Availability {
    id: string;
    startTime: TimeOfDay;
    isRecurring: boolean;
    endTime: TimeOfDay;
    dayOfWeek: DayOfWeek;
    blackoutDates: Array<BlackoutDate>;
}
export interface http_header {
    value: string;
    name: string;
}
export interface http_request_result {
    status: bigint;
    body: Uint8Array;
    headers: Array<http_header>;
}
export interface RSVP {
    name: string;
    inviteCode: string;
    timestamp: Time;
    attending: boolean;
}
export interface InviteCode {
    created: Time;
    code: string;
    used: boolean;
}
export interface ShoppingItem {
    productName: string;
    currency: string;
    quantity: bigint;
    priceInCents: bigint;
    productDescription: string;
}
export interface TransformationInput {
    context: Uint8Array;
    response: http_request_result;
}
export interface TimeOfDay {
    hours: bigint;
    minutes: bigint;
}
export interface Booking {
    id: string;
    paymentStatus: PaymentStatus;
    clientName: string;
    sessionTime: Time;
    owner: Principal;
    clientEmail: string;
    bookingTime: Time;
    virtualMeetingLink?: string;
}
export type StripeSessionStatus = {
    __kind__: "completed";
    completed: {
        userPrincipal?: string;
        response: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface StripeConfiguration {
    allowedCountries: Array<string>;
    secretKey: string;
}
export type PaymentStatus = {
    __kind__: "pending";
    pending: null;
} | {
    __kind__: "completed";
    completed: {
        sessionId: string;
    };
} | {
    __kind__: "failed";
    failed: {
        error: string;
    };
};
export interface FileReference {
    id: string;
    blob: ExternalBlob;
}
export interface UserProfile {
    name: string;
    email: string;
}
export enum DayOfWeek {
    tuesday = "tuesday",
    wednesday = "wednesday",
    saturday = "saturday",
    thursday = "thursday",
    sunday = "sunday",
    friday = "friday",
    monday = "monday"
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    cancelBooking(bookingId: string): Promise<void>;
    createBooking(clientName: string, clientEmail: string, sessionTime: Time): Promise<string>;
    createCheckoutSession(items: Array<ShoppingItem>, successUrl: string, cancelUrl: string): Promise<string>;
    generateInviteCode(): Promise<string>;
    getAllBookings(): Promise<Array<Booking>>;
    getAllRSVPs(): Promise<Array<RSVP>>;
    getAvailableTimeSlots(): Promise<Array<Availability>>;
    getBooking(bookingId: string): Promise<Booking>;
    getBookingsForClient(clientEmail: string): Promise<Array<Booking>>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getFile(id: string): Promise<FileReference>;
    getFileList(_from: bigint, _to: bigint): Promise<Array<FileReference>>;
    getInviteCodes(): Promise<Array<InviteCode>>;
    getStripeSessionStatus(sessionId: string): Promise<StripeSessionStatus>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    isStripeConfigured(): Promise<boolean>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    setAvailableTimeSlots(slots: Array<Availability>): Promise<void>;
    setStripeConfiguration(config: StripeConfiguration): Promise<void>;
    submitRSVP(name: string, attending: boolean, inviteCode: string): Promise<void>;
    transform(input: TransformationInput): Promise<TransformationOutput>;
    updateBookingPaymentStatus(bookingId: string, status: PaymentStatus): Promise<void>;
    updateBookingWithVirtualMeetingLink(bookingId: string, meetingLink: string): Promise<void>;
    uploadFile(id: string, blob: ExternalBlob): Promise<void>;
}
