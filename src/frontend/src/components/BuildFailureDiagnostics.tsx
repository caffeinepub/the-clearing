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

  const getBuildTimestamp = (): string => {
    try {
      const metaTag = document.querySelector('meta[name="build-timestamp"]');
      return metaTag?.getAttribute('content') || 'Unknown';
    } catch {
      return 'Unknown';
    }
  };

  const handleCopy = () => {
    const buildTimestamp = getBuildTimestamp();
    const errorText = `
=== Build/Deployment Diagnostics ===

Current URL: ${window.location.href}
Current Host: ${window.location.hostname}
Current Origin: ${window.location.origin}
Current Pathname: ${window.location.pathname}
Referrer: ${document.referrer || 'None'}
Build Timestamp: ${buildTimestamp}

Failing Step: ${error.step}
Error Message: ${error.message}
Error Timestamp: ${new Date(error.timestamp).toISOString()}

${error.stack ? `Stack Trace:\n${error.stack}` : 'No stack trace available'}

=== Browser Info ===
User Agent: ${navigator.userAgent}

=== Deployment Note ===
Please paste this diagnostic information into:
frontend/DEPLOYMENT_NOTE_clearing-icp0-io.md
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

          <div className="space-y-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            <div><strong>Current URL:</strong> {window.location.href}</div>
            <div><strong>Current Host:</strong> {window.location.hostname}</div>
            <div><strong>Current Origin:</strong> {window.location.origin}</div>
            <div><strong>Current Pathname:</strong> {window.location.pathname}</div>
            <div><strong>Referrer:</strong> {document.referrer || 'None'}</div>
            <div><strong>Build Timestamp:</strong> {getBuildTimestamp()}</div>
          </div>

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
            Copy the error details above and paste them into <code className="bg-muted px-1 py-0.5 rounded">frontend/DEPLOYMENT_NOTE_clearing-icp0-io.md</code> for troubleshooting.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
