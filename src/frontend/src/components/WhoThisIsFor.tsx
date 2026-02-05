import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function WhoThisIsFor() {
  return (
    <SectionShell accentLabel="Readiness">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Who This Is For / Not For
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-gold pl-6">
            This is for you if:
          </h3>
          <ul className="space-y-5 text-lg leading-relaxed">
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You take responsibility for your own perception
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are at a threshold of change and need clarity
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You value insight over comfort
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are willing to see what is present, not what you wish were true
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You understand that clarity is not the same as certainty
              </span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-bronze pl-6">
            This is not for you if:
          </h3>
          <ul className="space-y-5 text-lg leading-relaxed">
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are seeking predictions about the future
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You want emotional venting without structure
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are looking for validation or reassurance
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You expect someone else to make decisions for you
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are in crisis and need immediate mental health support
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <p className="text-center text-xl md:text-2xl text-foreground font-light italic tracking-wide">
        This work is for those who are ready. If you are not sure, you are not ready.
      </p>
    </SectionShell>
  );
}
