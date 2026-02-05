import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border/50">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg font-light text-muted-foreground mb-8 italic">
          Clarity is the service. Choice is the outcome.
        </p>
        
        <div className="text-center text-sm text-muted-foreground/60">
          <p>
            © 2026. Built with <Heart className="inline h-4 w-4 text-gold fill-gold" /> using caffeine.ai
          </p>
        </div>
      </div>
    </footer>
  );
}
