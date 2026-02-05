import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useGetAllBookings, useIsCallerAdmin } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function AdminDashboard() {
  const { data: isAdmin, isLoading: isAdminLoading } = useIsCallerAdmin();
  const { data: bookings, isLoading: bookingsLoading } = useGetAllBookings();

  if (isAdminLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-gold" />
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Access Denied</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              You do not have permission to access the admin dashboard.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 max-w-6xl">
      <h1 className="text-3xl font-serif font-bold mb-6 text-gold">Admin Dashboard</h1>

      <Tabs defaultValue="bookings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="bookings">Bookings</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>All Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              {bookingsLoading ? (
                <div className="flex justify-center py-8">
                  <Loader2 className="h-6 w-6 animate-spin" />
                </div>
              ) : bookings && bookings.length > 0 ? (
                <div className="space-y-2">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <p className="font-semibold">{booking.clientName}</p>
                      <p className="text-sm text-muted-foreground">{booking.clientEmail}</p>
                      <p className="text-sm">
                        Status:{' '}
                        {booking.paymentStatus.__kind__ === 'completed'
                          ? 'Completed'
                          : booking.paymentStatus.__kind__ === 'pending'
                            ? 'Pending'
                            : 'Failed'}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-muted-foreground py-8">No bookings yet</p>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="availability" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Availability Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Availability management interface coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
