import { Separator } from '@/components/ui/separator';

export default function WhoThisIsFor() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        Who This Is For / Not For
      </h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">This is for you if:</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You take responsibility for your own perception</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You are at a threshold of change and need clarity</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You value insight over comfort</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You are willing to see what is present, not what you wish were true</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You understand that clarity is not the same as certainty</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-6 text-foreground">This is not for you if:</h3>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You are seeking predictions about the future</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You want emotional venting without structure</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You are looking for validation or reassurance</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You expect someone else to make decisions for you</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>You are in crisis and need immediate mental health support</span>
            </li>
          </ul>
        </div>
      </div>
      
      <Separator className="my-12" />
      
      <p className="text-center text-muted-foreground italic">
        This work is for those who are ready. If you are not sure, you are not ready.
      </p>
    </section>
  );
}
