import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { UserProfile, Booking, ShoppingItem, Availability, PaymentStatus } from '../backend';

export function useGetCallerUserProfile() {
  const { actor, isFetching: actorFetching } = useActor();

  const query = useQuery<UserProfile | null>({
    queryKey: ['currentUserProfile'],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not available');
      return actor.getCallerUserProfile();
    },
    enabled: !!actor && !actorFetching,
    retry: false,
  });

  return {
    ...query,
    isLoading: actorFetching || query.isLoading,
    isFetched: !!actor && query.isFetched,
  };
}

export function useSaveCallerUserProfile() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (profile: UserProfile) => {
      if (!actor) throw new Error('Actor not available');
      return actor.saveCallerUserProfile(profile);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['currentUserProfile'] });
    },
  });
}

export function useIsStripeConfigured() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['stripeConfigured'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isStripeConfigured();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetStripeConfiguration() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (config: { secretKey: string; allowedCountries: string[] }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.setStripeConfiguration(config);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['stripeConfigured'] });
    },
  });
}

export type CheckoutSession = {
  id: string;
  url: string;
};

export function useCreateCheckoutSession() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async (items: ShoppingItem[]): Promise<CheckoutSession> => {
      if (!actor) throw new Error('Actor not available');
      const baseUrl = `${window.location.protocol}//${window.location.host}`;
      const successUrl = `${baseUrl}/#/payment-success`;
      const cancelUrl = `${baseUrl}/#/payment-failure`;
      const result = await actor.createCheckoutSession(items, successUrl, cancelUrl);
      const session = JSON.parse(result) as CheckoutSession;
      return session;
    },
  });
}

export function useCreateBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { clientName: string; clientEmail: string; sessionTime: bigint }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.createBooking(params.clientName, params.clientEmail, params.sessionTime);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });
}

export function useGetBooking(bookingId: string | null) {
  const { actor, isFetching } = useActor();

  return useQuery<Booking | null>({
    queryKey: ['booking', bookingId],
    queryFn: async () => {
      if (!actor || !bookingId) return null;
      return actor.getBooking(bookingId);
    },
    enabled: !!actor && !isFetching && !!bookingId,
  });
}

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['allBookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useIsCallerAdmin() {
  const { actor, isFetching } = useActor();

  return useQuery<boolean>({
    queryKey: ['isAdmin'],
    queryFn: async () => {
      if (!actor) return false;
      return actor.isCallerAdmin();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetAvailableTimeSlots() {
  const { actor, isFetching } = useActor();

  return useQuery<Availability[]>({
    queryKey: ['availableTimeSlots'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAvailableTimeSlots();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSetAvailableTimeSlots() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (slots: Availability[]) => {
      if (!actor) throw new Error('Actor not available');
      return actor.setAvailableTimeSlots(slots);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['availableTimeSlots'] });
    },
  });
}

export function useUpdateBookingPaymentStatus() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { bookingId: string; status: PaymentStatus }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateBookingPaymentStatus(params.bookingId, params.status);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
}

export function useUpdateBookingWithVirtualMeetingLink() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (params: { bookingId: string; meetingLink: string }) => {
      if (!actor) throw new Error('Actor not available');
      return actor.updateBookingWithVirtualMeetingLink(params.bookingId, params.meetingLink);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
      queryClient.invalidateQueries({ queryKey: ['allBookings'] });
    },
  });
}
