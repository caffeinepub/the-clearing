import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gold/20 bg-card/20 motif-grain">
      <div className="max-w-4xl mx-auto space-y-8 motif-content">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <p className="text-center text-2xl md:text-3xl font-light text-foreground italic tracking-wide">
          Clarity is the service. Choice is the outcome.
        </p>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <div className="text-center text-sm text-muted-foreground/60 pt-4">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-gold fill-gold" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
