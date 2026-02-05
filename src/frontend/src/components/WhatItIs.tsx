import { Separator } from '@/components/ui/separator';

export default function WhatItIs() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        What The Clearing™ Is
      </h2>
      
      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p>
          The Clearing™ is a private, one-to-one session designed for those seeking clarity, not comfort. 
          It is structured, non-predictive, and ethically grounded. This is not fortune-telling. 
          This is not therapy. This is not reassurance-based coaching.
        </p>
        
        <p>
          Using tarot and symbolic systems as reflective tools, we examine what is present in your 
          situation—patterns, tensions, choices—and clarify what you may already sense but have not 
          yet articulated.
        </p>
        
        <Separator className="my-12" />
        
        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">This is not:</h3>
          <ul className="space-y-3 list-none">
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Fortune-telling or prediction</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Therapy or mental health treatment</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Reassurance-based coaching or validation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>A space for emotional venting without structure</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
