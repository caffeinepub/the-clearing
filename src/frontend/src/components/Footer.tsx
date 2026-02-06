import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-gold/15 bg-card/15 motif-grain">
      <div className="max-w-4xl mx-auto space-y-10 motif-content">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        
        <p className="text-center text-2xl md:text-3xl font-light text-foreground italic tracking-wide">
          Clarity is the service. Choice is the outcome.
        </p>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
        
        <div className="text-center text-sm text-muted-foreground pt-6">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-gold fill-gold" /> using{' '}
            <a 
              href="https://caffeine.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors underline decoration-gold/40 hover:decoration-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm px-1"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
