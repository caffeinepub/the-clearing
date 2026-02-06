import { ReactNode, useState, useEffect } from 'react';
import { Lock, Unlock, Sparkles, Link2, Check, Info } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { getCanonicalGateUrl } from '../utils/urlParams';

interface AccessCodeGateProps {
  children: ReactNode;
}

const CORRECT_CODE = '1122';
const SESSION_KEY = 'access_code_unlocked';

/**
 * Manual access-code gate component with refined gold accent aesthetic featuring nebula backgrounds, starfield overlays, and polished visual hierarchy
 */
export default function AccessCodeGate({ children }: AccessCodeGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [canonicalUrl, setCanonicalUrl] = useState('');

  useEffect(() => {
    const unlocked = sessionStorage.getItem(SESSION_KEY);
    if (unlocked === 'true') {
      setIsUnlocked(true);
    }
    
    setCanonicalUrl(getCanonicalGateUrl());
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

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

  const handleCopyLink = async () => {
    try {
      const gateUrl = getCanonicalGateUrl();
      await navigator.clipboard.writeText(gateUrl);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy link:', err);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  if (isLoading) {
    return null;
  }

  if (!isUnlocked) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden gate-container">
        {/* Celestial nebula background */}
        <div className="celestial-nebula-bg" />
        
        {/* Starfield overlay */}
        <div className="celestial-starfield-overlay" />
        
        {/* Constellation corner marks */}
        <div className="celestial-constellation-corners constellation-top-left" />
        <div className="celestial-constellation-corners constellation-top-right" />
        <div className="celestial-constellation-corners constellation-bottom-left" />
        <div className="celestial-constellation-corners constellation-bottom-right" />
        
        {/* Layered background treatment with gold accent */}
        <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-40" />
        
        {/* Animated subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.025] gate-grid">
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
          {/* Lock icon with gold glow */}
          <div className="flex justify-center">
            <div className="relative gate-lock-container">
              {/* Outer glow rings */}
              <div className="absolute inset-0 blur-3xl bg-gold/25 rounded-full animate-pulse-slow" />
              <div className="absolute inset-0 blur-2xl bg-gold-glow/35 rounded-full gate-glow-ring" />
              
              {/* Lock icon */}
              <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-8 border border-gold/30 shadow-gold">
                <Lock className="w-20 h-20 text-gold drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]" strokeWidth={1.2} />
              </div>

              {/* Sparkle accents */}
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-gold-light/60 gate-sparkle-1" />
              <Sparkles className="absolute -bottom-1 -left-1 w-5 h-5 text-gold-muted/50 gate-sparkle-2" />
            </div>
          </div>

          {/* Title with enhanced typography */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-6xl md:text-7xl font-light tracking-tighter text-foreground gate-title">
                The Clearing™
              </h1>
              <p className="text-lg md:text-xl text-gold/90 font-light tracking-wide italic">
                A Portal to Clarity
              </p>
            </div>
            
            {/* Enhanced divider */}
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-gold/50 to-gold" />
              <div className="relative">
                <div className="absolute inset-0 blur-md bg-gold/40 rounded-full" />
                <div className="relative h-2 w-2 rounded-full bg-gold shadow-glow-subtle" />
              </div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent via-gold/50 to-gold" />
            </div>
          </div>

          {/* Access code form with gold styling */}
          <div className="space-y-8 max-w-md mx-auto">
            <div className="inline-block px-8 py-3 border border-gold/35 bg-gold/8 backdrop-blur-md rounded-full shadow-glow-subtle gate-badge">
              <span className="text-gold text-sm font-medium tracking-[0.2em] uppercase">
                Access Required
              </span>
            </div>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
              Enter your access code to unveil what awaits within.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6 pt-6">
              <div className="space-y-3">
                <div className="relative group">
                  <Input
                    type="text"
                    value={code}
                    onChange={(e) => {
                      setCode(e.target.value);
                      setError('');
                    }}
                    placeholder="• • • •"
                    className="text-center text-xl tracking-[0.5em] bg-background/60 backdrop-blur-sm border-gold/30 focus:border-gold/70 focus:shadow-gold transition-all h-14 rounded-xl"
                    autoFocus
                    disabled={isSubmitting}
                  />
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
                className="w-full h-14 bg-gold hover:bg-gold-light text-background font-medium tracking-wide transition-all shadow-gold hover:shadow-gold-lg text-lg rounded-xl disabled:opacity-40 disabled:cursor-not-allowed gate-unlock-btn"
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

            {/* Shareable link section */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
                <Info className="w-3 h-3" />
                <span>Share this link with others</span>
              </div>
              
              <div className="bg-background/40 backdrop-blur-sm border border-gold/20 rounded-lg p-3">
                <p className="text-xs text-muted-foreground/80 font-mono break-all">
                  {canonicalUrl}
                </p>
              </div>

              <Button
                type="button"
                variant="outline"
                onClick={handleCopyLink}
                className="w-full h-12 border-gold/30 hover:border-gold/50 hover:bg-gold/5 text-gold hover:text-gold-light transition-all rounded-xl"
              >
                {copyStatus === 'success' ? (
                  <span className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Link Copied!
                  </span>
                ) : copyStatus === 'error' ? (
                  <span className="flex items-center gap-2">
                    <Link2 className="w-4 h-4" />
                    Failed to Copy
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Link2 className="w-4 h-4" />
                    Copy Link to Share
                  </span>
                )}
              </Button>
            </div>
          </div>

          {/* Tagline with gold styling */}
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
