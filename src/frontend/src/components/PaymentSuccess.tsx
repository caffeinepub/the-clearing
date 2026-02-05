import { useEffect, useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PaymentSuccess() {
  const [bookingDetails, setBookingDetails] = useState<{
    date?: string;
    time?: string;
    email?: string;
  }>({});

  useEffect(() => {
    // Parse URL parameters for booking details if available
    const params = new URLSearchParams(window.location.search);
    setBookingDetails({
      date: params.get('date') || undefined,
      time: params.get('time') || undefined,
      email: params.get('email') || undefined,
    });
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-2xl">Payment Successful!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          <p className="text-muted-foreground">
            Your booking has been confirmed. You will receive a confirmation email shortly.
          </p>

          {bookingDetails.date && (
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-semibold">Date:</span> {bookingDetails.date}
              </p>
              {bookingDetails.time && (
                <p>
                  <span className="font-semibold">Time:</span> {bookingDetails.time}
                </p>
              )}
              {bookingDetails.email && (
                <p>
                  <span className="font-semibold">Email:</span> {bookingDetails.email}
                </p>
              )}
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            Your virtual meeting link will be sent to you via email before your session.
          </p>

          <Button
            onClick={() => (window.location.href = '/')}
            className="w-full"
          >
            Return to Home
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
