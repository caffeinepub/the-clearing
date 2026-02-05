import { ReactNode, useState, useEffect } from 'react';
import { Lock, Unlock, Sparkles } from 'lucide-react';
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
      <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden gate-container">
        {/* Layered background treatment */}
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-40" />
        
        {/* Animated subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03] gate-grid">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, oklch(var(--gold)) 1.5px, transparent 0)',
            backgroundSize: '48px 48px'
          }} />
        </div>

        {/* Floating ambient particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gate-particle gate-particle-1" />
          <div className="gate-particle gate-particle-2" />
          <div className="gate-particle gate-particle-3" />
        </div>

        {/* Vignette effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-background/40" />

        <div className="relative z-10 max-w-xl w-full space-y-14 text-center">
          {/* Lock icon with enhanced gold glow and pulse */}
          <div className="flex justify-center">
            <div className="relative gate-lock-container">
              {/* Outer glow rings */}
              <div className="absolute inset-0 blur-3xl bg-gold/30 rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 blur-2xl bg-accent-glow/40 rounded-full gate-glow-ring" />
              
              {/* Lock icon */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-8 border border-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                <Lock className="w-20 h-20 text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]" strokeWidth={1.2} />
              </div>

              {/* Sparkle accents */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold/60 gate-sparkle-1" />
              <Sparkles className="absolute -bottom-1 -left-1 w-5 h-5 text-gold/40 gate-sparkle-2" />
            </div>
          </div>

          {/* Title with enhanced typography */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h1 className="text-6xl md:text-7xl font-light tracking-tighter text-foreground gate-title">
                The Clearing™
              </h1>
              <p className="text-lg md:text-xl text-gold/80 font-light tracking-wide italic">
                A Portal to Clarity
              </p>
            </div>
            
            {/* Enhanced divider */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/60 to-gold" />
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gold/40 rounded-full" />
                <div className="relative h-2 w-2 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold/60 to-gold" />
            </div>
          </div>

          {/* Access code form with enhanced styling */}
          <div className="space-y-8 max-w-md mx-auto">
            <div className="inline-block px-8 py-3 border border-gold/40 bg-gold/10 backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(212,175,55,0.15)] gate-badge">
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Access Required
              </span>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Enter your access code to unveil what awaits within.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              <div className="space-y-3">
                <div className="relative">
                  <Input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError('');
                    }}
                    placeholder="• • • •"
                    className="text-center text-xl tracking-[0.5em] bg-background/60 backdrop-blur-sm border-gold/30 focus:border-gold/70 focus:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all h-14 rounded-xl"
                    autoFocus
                    disabled={isSubmitting}
                  />
                  {/* Input glow on focus */}
                  <div className="absolute inset-0 -z-10 blur-xl bg-gold/0 group-focus-within:bg-gold/10 transition-all rounded-xl pointer-events-none" />
                </div>
                
                {error && (
                  <p className="text-sm text-destructive animate-in fade-in slide-in-from-top-2 duration-300 bg-destructive/10 py-2 px-4 rounded-lg border border-destructive/20">
                    {error}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={!code.trim() || isSubmitting}
                className="w-full h-14 bg-gold hover:bg-gold-light text-background font-medium tracking-wide transition-all shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] text-lg rounded-xl disabled:opacity-40 disabled:cursor-not-allowed gate-unlock-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <span className="inline-block w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                    Verifying...
                  </span>
                ) : (
                  <span className="flex items-center gap-3">
                    <Unlock className="w-5 h-5" />
                    Unlock
                  </span>
                )}
              </Button>
            </form>
          </div>

          {/* Tagline with enhanced styling */}
          <div className="pt-12 space-y-4">
            <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
            <p className="text-base text-muted-foreground/70 italic tracking-wide font-light">
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
