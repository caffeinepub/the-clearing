import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function EthicsAndBoundaries() {
  return (
    <SectionShell accentLabel="Ethics & Boundaries" motifVariant="grain" backgroundVariant="subtle">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Ethics & Boundaries
      </h2>
      
      <div className="space-y-10 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
        <p className="text-foreground/90">
          This work is <span className="text-celestial-primary font-medium">not therapy</span>, <span className="text-celestial-primary font-medium">not medical advice</span>, 
          and <span className="text-celestial-primary font-medium">not a substitute for professional mental health care</span>.
        </p>
        
        <p className="text-muted-foreground">
          If you are in crisis, experiencing suicidal ideation, or dealing with acute mental health 
          challenges, please seek support from a licensed mental health professional immediately.
        </p>
        
        <Separator className="my-16 bg-gradient-to-r from-transparent via-celestial-primary/30 to-transparent" />
        
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-foreground">
            What This Work Is Not:
          </h3>
          <ul className="space-y-4 pl-8">
            <li className="flex items-start">
              <span className="mr-4 text-celestial-lavender/60 text-xl">—</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Not fortune-telling.</strong> I do not predict the future or claim to know what will happen.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-celestial-periwinkle/60 text-xl">—</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Not therapy.</strong> I am not a licensed therapist, counselor, or mental health professional.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-celestial-rose/60 text-xl">—</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Not medical advice.</strong> I do not diagnose, treat, or prescribe for any medical or psychological condition.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-4 text-celestial-moonstone/60 text-xl">—</span>
              <span className="text-muted-foreground">
                <strong className="text-foreground">Not a guarantee.</strong> I cannot guarantee specific outcomes or results from this work.
              </span>
            </li>
          </ul>
        </div>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-celestial-primary/30 to-transparent" />

        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-light text-foreground">
            Your Responsibility:
          </h3>
          <p className="text-muted-foreground">
            By booking a session, you acknowledge that you are responsible for your own decisions, 
            actions, and outcomes. This work is designed to support your clarity—not to replace your 
            judgment or agency.
          </p>
        </div>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-celestial-primary/30 to-transparent" />

        <p className="text-center text-xl text-foreground font-light italic tracking-wide border-t border-celestial-primary/20 pt-12">
          This work is for those who are ready to take full responsibility for what they discover.
        </p>
      </div>
    </SectionShell>
  );
}
