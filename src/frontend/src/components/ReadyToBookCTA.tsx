import { Button } from '@/components/ui/button';
import SectionShell from './SectionShell';

export default function ReadyToBookCTA() {
  return (
    <SectionShell motifVariant="star" backgroundVariant="elevated" withFlourishDivider>
      <div className="text-center space-y-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
          Ready to Book?
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
          If you are ready for clarity—not comfort—and prepared to take responsibility for what you discover, 
          book your session below.
        </p>
        
        <div className="pt-8">
          <Button 
            asChild
            size="lg"
            className="text-lg px-12 py-6 bg-gold hover:bg-gold-light text-black font-medium tracking-wide shadow-gold-lg hover:shadow-gold-xl transition-all duration-300"
          >
            <a 
              href="https://linktr.ee/davidtessis" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Your Session
            </a>
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground/60 pt-8">
          Sessions are by invitation only. Availability is limited.
        </p>
      </div>
    </SectionShell>
  );
}
