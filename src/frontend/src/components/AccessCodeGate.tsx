import { ReactNode, useState, useEffect } from 'react';
import { Lock, Unlock } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface AccessCodeGateProps {
  children: ReactNode;
}

const CORRECT_CODE = '1122';
const SESSION_KEY = 'access_code_unlocked';

/**
 * Manual access-code gate component
 * 
 * Requires entering code "1122" to unlock the landing page
 * Access is persisted in sessionStorage for the current browser session
 * Includes a visible lock button to reset and return to the gate
 */
export default function AccessCodeGate({ children }: AccessCodeGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if already unlocked in this session
    const unlocked = sessionStorage.getItem(SESSION_KEY);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Validate code
    if (code.trim() === CORRECT_CODE) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsUnlocked(true);
    } else {
      setError('Invalid access code. Please check your code and try again.');
    }

    setIsSubmitting(false);
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
      <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, oklch(var(--gold)) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10 max-w-lg w-full space-y-12 text-center">
          {/* Lock icon with gold glow */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-gold/20 rounded-full" />
              <Lock className="relative w-16 h-16 text-gold" strokeWidth={1.5} />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-tighter text-foreground">
              The Clearing™
            </h1>
            
            <div className="flex items-center justify-center gap-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-gold" />
              <div className="h-1 w-1 rounded-full bg-gold" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent via-gold to-gold" />
            </div>
          </div>

          {/* Access code form */}
          <div className="space-y-6 max-w-md mx-auto">
            <div className="inline-block px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                Access Required
              </span>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              Please enter your access code to continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    setCode(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter access code"
                  className="text-center text-lg tracking-widest bg-background/50 border-gold/20 focus:border-gold/50 transition-colors"
                  autoFocus
                  disabled={isSubmitting}
                />
                {error && (
                  <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-1">
                    {error}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={!code.trim() || isSubmitting}
                className="w-full bg-gold hover:bg-gold-dark text-background font-medium tracking-wide transition-all shadow-gold"
              >
                {isSubmitting ? 'Verifying...' : 'Unlock'}
              </Button>
            </form>
          </div>

          {/* Tagline */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground/60 italic tracking-wide">
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
      <Button
        onClick={handleLock}
        variant="ghost"
        size="icon"
        className="fixed top-4 right-4 z-50 text-gold hover:text-gold-light hover:bg-gold/10 transition-colors"
        title="Lock and return to gate"
      >
        <Unlock className="w-5 h-5" />
      </Button>
      {children}
    </>
  );
}
