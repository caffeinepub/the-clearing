import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function WhatItIs() {
  return (
    <SectionShell accentLabel="The Foundation">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        What The Clearing™ Is
      </h2>
      
      <div className="space-y-10 text-lg md:text-xl leading-relaxed">
        <p className="text-foreground/90">
          The Clearing™ is a private, one-to-one session designed for those seeking <span className="text-gold font-medium">clarity, not comfort</span>. 
          It is structured, non-predictive, and ethically grounded. This is not fortune-telling. 
          This is not therapy. This is not reassurance-based coaching.
        </p>
        
        <p className="text-muted-foreground">
          Using tarot and symbolic systems as reflective tools, we examine what is present in your 
          situation—patterns, tensions, choices—and clarify what you may already sense but have not 
          yet articulated.
        </p>
        
        <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-gold pl-6">
            This is not:
          </h3>
          <ul className="space-y-5 pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Fortune-telling or prediction
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Therapy or mental health treatment
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Reassurance-based coaching or validation
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                A space for emotional venting without structure
              </span>
            </li>
          </ul>
        </div>
      </div>
    </SectionShell>
  );
}
