import SectionShell from './SectionShell';

export default function SessionStructure() {
  return (
    <SectionShell backgroundVariant="elevated" accentLabel="The Process">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        What Happens in the Session
      </h2>
      
      <div className="space-y-10 text-lg md:text-xl leading-relaxed">
        <p className="text-center text-2xl md:text-3xl text-gold font-light tracking-wide">
          90 minutes. Private. Structured.
        </p>
        
        <div className="grid gap-10 mt-16">
          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
              <span className="text-3xl font-light text-gold">1</span>
            </div>
            <div className="pt-2 space-y-3">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">Clarity</h3>
              <p className="text-muted-foreground">
                We establish what you're working with—the question, the threshold, the tension.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
              <span className="text-3xl font-light text-gold">2</span>
            </div>
            <div className="pt-2 space-y-3">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">Insight</h3>
              <p className="text-muted-foreground">
                Tarot is used as a reflective mirror. We examine patterns, dynamics, and what is asking to be seen.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
              <span className="text-3xl font-light text-gold">3</span>
            </div>
            <div className="pt-2 space-y-3">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">Responsibility</h3>
              <p className="text-muted-foreground">
                We identify what is yours to hold, what is yours to release, and what choice is present.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-8 group">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center group-hover:bg-gold/20 group-hover:border-gold/50 transition-all duration-300">
              <span className="text-3xl font-light text-gold">4</span>
            </div>
            <div className="pt-2 space-y-3">
              <h3 className="text-2xl md:text-3xl font-light text-foreground">Integration</h3>
              <p className="text-muted-foreground">
                You leave with insight and a grounded next step. No promises. No predictions. Only clarity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
