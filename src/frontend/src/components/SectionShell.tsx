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
 * Reusable section wrapper for consistent high-authority layout with optional esoteric motifs
 * Provides standardized spacing, max-width, optional visual treatments, and subtle symbolic overlays
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
    subtle: 'bg-card/20',
    elevated: 'bg-card/40 border-y border-border/50'
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
          <div className="mb-8 flex justify-center">
            <div className="inline-block px-5 py-1.5 border border-gold/20 bg-gold/5 backdrop-blur-sm rounded-full">
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
          <Separator className="mt-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        )}
      </div>
    </section>
  );
}
