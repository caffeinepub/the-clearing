import { ReactNode, useState, useEffect } from 'react';
import { Lock } from 'lucide-react';
import { getSecretParameter } from '../utils/urlParams';

interface InviteGateProps {
  children: ReactNode;
}

const INVITE_PARAM = 'invite';

/**
 * Invite-link gate component
 * 
 * Unlocks when a valid invite secret is present in the URL hash (e.g., #invite=xxx)
 * The secret is persisted in sessionStorage and cleared from the visible URL
 * No manual code entry - access is granted only via forwarded invite links
 */
export default function InviteGate({ children }: InviteGateProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for invite secret in URL hash or sessionStorage
    const inviteSecret = getSecretParameter(INVITE_PARAM);
    
    if (inviteSecret) {
      setIsUnlocked(true);
    }
    
    setIsLoading(false);
  }, []);

  // Show nothing while checking for invite
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

          {/* Exclusivity message */}
          <div className="space-y-6 max-w-md mx-auto">
            <div className="inline-block px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full">
              <span className="text-gold text-sm font-medium tracking-widest uppercase">
                By Invitation Only
              </span>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed">
              This offering is available exclusively to those who have received a direct invitation.
            </p>

            <p className="text-base text-muted-foreground/70 leading-relaxed">
              If you have been invited, please open the link that was forwarded to you.
            </p>
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

  // Show unlocked content
  return <>{children}</>;
}
