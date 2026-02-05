import SectionShell from './SectionShell';

export default function EthicsAndBoundaries() {
  return (
    <SectionShell backgroundVariant="subtle" accentLabel="Ethics & Boundaries">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Ethics & Boundaries
      </h2>
      
      <div className="max-w-3xl mx-auto space-y-8 text-lg md:text-xl leading-relaxed">
        <p className="text-muted-foreground">
          The Clearing™ is a <span className="text-foreground font-medium">non-predictive session</span>. No claims are made about future outcomes. 
          This work is not therapy, medical care, or mental health treatment.
        </p>
        
        <p className="text-muted-foreground">
          You retain full responsibility for your choices, actions, and interpretations. 
          This session provides clarity and perspective—not direction or certainty.
        </p>
        
        <p className="text-muted-foreground">
          If you are in crisis or experiencing a mental health emergency, please contact 
          a licensed mental health professional or emergency services immediately.
        </p>
        
        <div className="pt-8 border-t border-gold/20">
          <p className="text-foreground text-xl md:text-2xl font-light text-center">
            By booking, you acknowledge that you understand and accept these terms.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
