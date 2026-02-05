import { ReactNode, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Unlock } from 'lucide-react';

interface AccessCodeGateProps {
  children: ReactNode;
}

const CORRECT_CODE = '1122';
const SESSION_KEY = 'access_code_unlocked';

/**
 * Access-code gate component
 * 
 * Requires entering the correct code (1122) to unlock the landing page
 * Unlocked state persists for the browser session via sessionStorage
 * Provides a visible "Lock" action to reset and return to the gate
 */
export default function AccessCodeGate({ children }: AccessCodeGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Check sessionStorage on mount
  useEffect(() => {
    const unlocked = sessionStorage.getItem(SESSION_KEY);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (code === CORRECT_CODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsUnlocked(true);
    } else {
      setError('Incorrect access code. Please try again.');
      setCode('');
    }
  };

  const handleLock = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsUnlocked(false);
    setCode('');
    setError('');
  };

  // Show nothing while checking session
  if (isLoading) {
    return null;
  }

  // Show the gate if not unlocked
  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Lock className="w-12 h-12 text-gold" />
            </div>
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
              The Clearing™
            </h1>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
            <p className="text-lg text-muted-foreground">
              Enter your access code to continue
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="access-code" className="text-foreground">
                Access Code
              </Label>
              <Input
                id="access-code"
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter code"
                className="text-center text-lg tracking-widest"
                autoFocus
              />
              {error && (
                <p className="text-sm text-destructive">{error}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold-light text-black font-semibold"
              size="lg"
            >
              Enter
            </Button>
          </form>

          <div className="pt-4 text-center">
            <p className="text-sm text-muted-foreground/60 italic">
              Clarity over comfort. Perception over prediction.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show unlocked content with lock button
  return (
    <>
      <button
        onClick={handleLock}
        className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground hover:text-foreground hover:border-gold/50 transition-all"
        title="Lock and return to access code screen"
      >
        <Unlock className="w-4 h-4" />
        <span className="hidden sm:inline">Lock</span>
      </button>
      {children}
    </>
  );
}
