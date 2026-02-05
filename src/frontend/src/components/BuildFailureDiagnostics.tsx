import { useState, useEffect } from 'react';
import { AlertCircle, Copy, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { errorCapture, AppError } from '../utils/captureAppErrors';

export default function BuildFailureDiagnostics() {
  const [error, setError] = useState<AppError | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const latestError = errorCapture.getLatestError();
    if (latestError && latestError.message) {
      setError(latestError);
    }

    const unsubscribe = errorCapture.subscribe((newError) => {
      if (newError.message) {
        setError(newError);
      }
    });

    return unsubscribe;
  }, []);

  if (!error || !error.message) {
    return null;
  }

  const handleCopy = () => {
    const errorText = `
Step: ${error.step}
Message: ${error.message}
Timestamp: ${new Date(error.timestamp).toISOString()}
${error.stack ? `\nStack Trace:\n${error.stack}` : ''}
    `.trim();

    navigator.clipboard.writeText(errorText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDismiss = () => {
    setError(null);
    errorCapture.clearErrors();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <Card className="max-w-2xl w-full max-h-[80vh] overflow-auto">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive mt-1" />
            <div>
              <CardTitle className="text-xl">Build/Deployment Error</CardTitle>
              <p className="text-sm text-muted-foreground mt-1">
                An error occurred during initialization
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={handleDismiss}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert variant="destructive">
            <AlertTitle className="font-semibold">Failing Step: {error.step}</AlertTitle>
            <AlertDescription className="mt-2 font-mono text-sm whitespace-pre-wrap break-words">
              {error.message}
            </AlertDescription>
          </Alert>

          {error.stack && (
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Stack Trace:</h4>
              <pre className="bg-muted p-3 rounded-md text-xs overflow-x-auto whitespace-pre-wrap break-words">
                {error.stack}
              </pre>
            </div>
          )}

          <div className="flex gap-2">
            <Button onClick={handleCopy} variant="outline" className="flex-1">
              <Copy className="h-4 w-4 mr-2" />
              {copied ? 'Copied!' : 'Copy Error Details'}
            </Button>
            <Button onClick={handleDismiss} variant="default" className="flex-1">
              Dismiss
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            Copy the error details above and share them with your development team for troubleshooting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
