import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  const handleBooking = () => {
    window.location.href = 'https://linktr.ee/auroraarcana';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/generated/hero-background-authority.dim_1920x1080.png)',
          filter: 'brightness(0.5) contrast(1.1)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="mb-6">
          <div className="inline-block px-6 py-2 border border-gold/30 bg-gold/5 backdrop-blur-sm rounded-full">
            <span className="text-gold text-sm font-medium tracking-widest uppercase">
              By Invitation Only
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-white drop-shadow-2xl">
          The Clearing™
        </h1>
        
        <p className="text-xl md:text-2xl font-light text-gray-100 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Clarity over comfort. Perception over prediction. Responsibility over reassurance.
        </p>
        
        <Button 
          onClick={handleBooking}
          size="lg"
          className="bg-gold hover:bg-gold-light text-black font-semibold px-12 py-6 text-lg shadow-2xl hover:shadow-gold/50 transition-all duration-300 hover:scale-105"
        >
          Ready to Book
          <ExternalLink className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
