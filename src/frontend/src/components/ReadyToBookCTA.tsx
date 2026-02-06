import { Button } from '@/components/ui/button';
import SectionShell from './SectionShell';

export default function ReadyToBookCTA() {
  return (
    <SectionShell motifVariant="star" backgroundVariant="elevated" withFlourishDivider>
      <div id="booking-section" className="text-center space-y-12">
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
            className="text-lg px-12 py-6 bg-celestial-primary hover:bg-celestial-lavender text-background font-medium tracking-wide shadow-celestial-lg hover:shadow-celestial-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-celestial-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <a 
              href="https://tr.ee/TeHpNDTUkY" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              I'm Ready To Book
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
