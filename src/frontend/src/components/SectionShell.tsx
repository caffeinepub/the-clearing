import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  withSeparator?: boolean;
  accentLabel?: string;
  backgroundVariant?: 'default' | 'subtle' | 'elevated';
  motifVariant?: 'none' | 'grain' | 'moon' | 'star' | 'circle';
  withFlourishDivider?: boolean;
}

/**
 * Reusable section wrapper with refined gold accents, improved spacing rhythm, and optional esoteric motifs for polished visual hierarchy
 */
export default function SectionShell({
  children,
  className = '',
  withSeparator = false,
  accentLabel,
  backgroundVariant = 'default',
  motifVariant = 'none',
  withFlourishDivider = false
}: SectionShellProps) {
  const bgClasses = {
    default: '',
    subtle: 'bg-card/15',
    elevated: 'bg-card/30 border-y border-border/40'
  };

  const motifClasses = {
    none: '',
    grain: 'motif-grain',
    moon: 'motif-moon',
    star: 'motif-star',
    circle: 'motif-circle'
  };

  return (
    <section className={`py-24 md:py-32 px-6 ${bgClasses[backgroundVariant]} ${motifClasses[motifVariant]} ${className}`}>
      <div className="max-w-4xl mx-auto motif-content">
        {accentLabel && (
          <div className="mb-10 flex justify-center">
            <div className="inline-block px-6 py-2 border border-gold/25 bg-gold/6 backdrop-blur-sm rounded-full shadow-glow-subtle">
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                {accentLabel}
              </span>
            </div>
          </div>
        )}
        
        {withFlourishDivider && (
          <div className="motif-flourish-divider" aria-hidden="true" />
        )}
        
        {children}
        
        {withSeparator && (
          <Separator className="mt-20 bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        )}
      </div>
    </section>
  );
}
