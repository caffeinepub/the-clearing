import SectionShell from './SectionShell';

export default function PriceAndValue() {
  return (
    <SectionShell accentLabel="Investment">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Investment
      </h2>
      
      <div className="text-center space-y-12">
        <div className="space-y-6">
          <div className="inline-block">
            <p className="text-7xl md:text-8xl lg:text-9xl font-light text-gold tracking-tighter">
              $177
            </p>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-gold to-transparent mt-4" />
          </div>
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            90-minute private session
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed pt-8">
          <p className="text-muted-foreground">
            This is a <span className="text-foreground font-medium">complete, contained session</span>—not an introduction, not a consultation, 
            not the first step in a series. You receive the full work in one sitting.
          </p>
          
          <p className="text-muted-foreground">
            No discounts. No urgency. No scarcity tactics. The price reflects the depth, 
            structure, and containment of the work.
          </p>
          
          <div className="pt-6 border-t border-gold/20">
            <p className="text-foreground text-2xl font-light italic">
              If the price is a barrier, this is not the right time.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
