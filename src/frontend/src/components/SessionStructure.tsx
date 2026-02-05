import SectionShell from './SectionShell';

export default function SessionStructure() {
  const phases = [
    {
      number: 1,
      title: 'Arrival & Framing',
      duration: '10 minutes',
      description: 'We establish the question, tension, or threshold you are working with.'
    },
    {
      number: 2,
      title: 'The Reading',
      duration: '50 minutes',
      description: 'Using tarot as a reflective framework, we examine what is present—patterns, tensions, choices—and clarify what you may already sense but have not yet articulated.'
    },
    {
      number: 3,
      title: 'Integration & Next Steps',
      duration: '20 minutes',
      description: 'We synthesize what emerged and identify your clearest next step forward.'
    },
    {
      number: 4,
      title: 'Closing',
      duration: '10 minutes',
      description: 'Space for final questions and completion of the session.'
    }
  ];

  return (
    <SectionShell accentLabel="The Structure" motifVariant="moon" backgroundVariant="elevated">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Session Structure
      </h2>
      
      <p className="text-xl md:text-2xl text-center text-muted-foreground mb-16 font-light">
        90 minutes, structured in four phases
      </p>
      
      <div className="space-y-12">
        {phases.map((phase) => (
          <div 
            key={phase.number}
            className="flex gap-8 items-start group hover:bg-card/30 p-6 rounded-lg transition-all duration-300"
          >
            <div className="flex-shrink-0">
              <div className="w-16 h-16 rounded-full border-2 border-gold bg-gold/10 flex items-center justify-center text-2xl font-light text-gold group-hover:bg-gold/20 group-hover:shadow-gold transition-all duration-300">
                {phase.number}
              </div>
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex items-baseline justify-between gap-4 flex-wrap">
                <h3 className="text-2xl md:text-3xl font-light text-foreground">
                  {phase.title}
                </h3>
                <span className="text-sm text-gold font-medium tracking-wider uppercase">
                  {phase.duration}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {phase.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
