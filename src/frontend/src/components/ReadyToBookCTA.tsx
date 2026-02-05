import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import SectionShell from './SectionShell';

export default function ReadyToBookCTA() {
  const handleBooking = () => {
    window.location.href = 'https://linktr.ee/auroraarcana';
  };

  return (
    <SectionShell backgroundVariant="elevated">
      <div className="text-center space-y-10">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter">
            Ready to Begin?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            If you've read this far and it resonates, the next step is yours to take.
          </p>
        </div>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-6">
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-gold to-gold" />
          <div className="h-2 w-2 rounded-full bg-gold shadow-gold" />
          <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-gold to-gold" />
        </div>
        
        <div>
          <Button 
            onClick={handleBooking}
            size="lg"
            className="bg-gold hover:bg-gold-light text-black font-semibold px-14 py-7 text-xl shadow-gold-xl hover:shadow-gold-lg transition-all duration-500 hover:scale-105 rounded-full"
          >
            Ready to Book
            <ExternalLink className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </SectionShell>
  );
}
