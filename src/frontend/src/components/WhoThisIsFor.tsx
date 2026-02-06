import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';
import ReadinessQuiz from './ReadinessQuiz';

export default function WhoThisIsFor() {
  return (
    <SectionShell accentLabel="Readiness" motifVariant="star" backgroundVariant="subtle">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        Who This Is For / Not For
      </h2>
      
      <div className="grid md:grid-cols-2 gap-16 mb-20">
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-celestial-primary pl-6">
            This is for you if:
          </h3>
          <ul className="space-y-5 text-lg leading-relaxed">
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-lavender text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You take responsibility for your own perception
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-periwinkle text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are at a threshold of change and need clarity
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-rose text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You value insight over comfort
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-moonstone text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are willing to see what is present, not what you wish were true
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-mint text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You understand that clarity is not the same as certainty
              </span>
            </li>
          </ul>
        </div>
        
        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-celestial-deep pl-6">
            This is not for you if:
          </h3>
          <ul className="space-y-5 text-lg leading-relaxed">
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-deep text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are seeking predictions about the future
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-deep text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You want emotional venting without structure
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-deep text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are looking for validation or reassurance
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-deep text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You expect someone else to make decisions for you
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-celestial-deep text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You are in crisis and need immediate mental health support
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="space-y-12">
        <p className="text-center text-xl md:text-2xl text-foreground font-light italic tracking-wide">
          Not sure if you're ready? Take this brief assessment.
        </p>
        
        <ReadinessQuiz />
      </div>
    </SectionShell>
  );
}
