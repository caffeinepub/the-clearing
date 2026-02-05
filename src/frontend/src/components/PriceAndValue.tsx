import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function PriceAndValue() {
  return (
    <SectionShell accentLabel="Investment" motifVariant="grain" backgroundVariant="elevated">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Price & Value
      </h2>
      
      <div className="space-y-16 text-lg md:text-xl leading-relaxed">
        <div className="text-center space-y-6">
          <div className="text-6xl md:text-7xl lg:text-8xl font-light text-gold tracking-tight">
            $177
          </div>
          <p className="text-muted-foreground text-xl">
            for a 90-minute session
          </p>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="space-y-8 max-w-3xl mx-auto">
          <p className="text-foreground/90">
            This is not a casual conversation. This is structured, focused work designed to help you 
            move through a specific threshold with clarity and precision.
          </p>
          
          <p className="text-muted-foreground">
            The value is not in the time spent. The value is in the clarity gained—and the decisions 
            you are able to make as a result.
          </p>
          
          <p className="text-muted-foreground">
            If you are not sure whether this is worth the investment, you are not ready for the work.
          </p>
        </div>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <p className="text-center text-xl md:text-2xl text-foreground font-light italic tracking-wide border-t border-gold/20 pt-12">
          Clarity is the service. Choice is the outcome.
        </p>
      </div>
    </SectionShell>
  );
}
