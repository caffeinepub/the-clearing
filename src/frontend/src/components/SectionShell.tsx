import { ReactNode } from 'react';
import { Separator } from '@/components/ui/separator';

interface SectionShellProps {
  children: ReactNode;
  className?: string;
  withSeparator?: boolean;
  accentLabel?: string;
  backgroundVariant?: 'default' | 'subtle' | 'elevated';
}

/**
 * Reusable section wrapper for consistent high-authority layout
 * Provides standardized spacing, max-width, and optional visual treatments
 */
export default function SectionShell({
  children,
  className = '',
  withSeparator = false,
  accentLabel,
  backgroundVariant = 'default'
}: SectionShellProps) {
  const bgClasses = {
    default: '',
    subtle: 'bg-card/20',
    elevated: 'bg-card/40 border-y border-border/50'
  };

  return (
    <section className={`py-24 md:py-32 px-6 ${bgClasses[backgroundVariant]} ${className}`}>
      <div className="max-w-4xl mx-auto">
        {accentLabel && (
          <div className="mb-8 flex justify-center">
            <div className="inline-block px-5 py-1.5 border border-gold/20 bg-gold/5 backdrop-blur-sm rounded-full">
              <span className="text-gold text-xs font-medium tracking-widest uppercase">
                {accentLabel}
              </span>
            </div>
          </div>
        )}
        
        {children}
        
        {withSeparator && (
          <Separator className="mt-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        )}
      </div>
    </section>
  );
}
