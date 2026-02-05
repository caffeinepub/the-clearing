import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function WhatToExpect() {
  return (
    <SectionShell backgroundVariant="subtle" accentLabel="The Experience">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        What to Expect from The Clearing
      </h2>
      
      <div className="space-y-20">
        {/* During the Session */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground border-l-2 border-gold pl-6">
            During the Session
          </h3>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed pl-8">
            <p className="text-muted-foreground">
              The session is <span className="text-gold font-medium">90 minutes</span>, conducted one-to-one via video call. You will be asked to 
              articulate what you are working with—not as a story, but as a question or threshold.
            </p>
            <p className="text-muted-foreground">
              Tarot is used as a reflective tool. The cards do not predict. They mirror what is present: 
              patterns, tensions, choices, and what may be asking to be seen or released.
            </p>
            <p className="text-muted-foreground">
              You will be guided through a structured process of clarity, insight, responsibility, and 
              integration. This is not a passive experience. <span className="text-foreground font-medium">You are an active participant in your own seeing.</span>
            </p>
            <p className="text-muted-foreground">
              <span className="text-foreground font-medium">This session requires your full presence and active engagement.</span> You are welcome 
              to take notes during or immediately after to integrate what is learned. Sessions are intentionally 
              not recorded—this ensures you remain fully present rather than deferring attention to "listen later."
            </p>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* This Work Is Most Helpful If You */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground border-l-2 border-gold pl-6">
            This Work Is Most Helpful If You
          </h3>
          <ul className="space-y-5 text-lg md:text-xl leading-relaxed pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Are at a threshold—a decision point, a transition, or a moment of uncertainty
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Sense something but cannot yet name it
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Are willing to see what is present, even if it is uncomfortable
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Value clarity over certainty
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Are ready to take responsibility for what you see
              </span>
            </li>
          </ul>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* This Session Is Not Designed For */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground border-l-2 border-bronze pl-6">
            This Session Is Not Designed For
          </h3>
          <ul className="space-y-5 text-lg md:text-xl leading-relaxed pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-bronze/60 group-hover:text-bronze transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Predictions about specific outcomes or timelines
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze/60 group-hover:text-bronze transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Emotional processing or therapeutic intervention
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze/60 group-hover:text-bronze transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Validation of what you already believe
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze/60 group-hover:text-bronze transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Decision-making on your behalf
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze/60 group-hover:text-bronze transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Crisis support or mental health care
              </span>
            </li>
          </ul>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        {/* After the Session */}
        <div className="space-y-8">
          <h3 className="text-3xl md:text-4xl font-light text-foreground border-l-2 border-gold pl-6">
            After the Session
          </h3>
          <div className="space-y-6 text-lg md:text-xl leading-relaxed pl-8">
            <p className="text-muted-foreground">
              What you do with the clarity you receive is entirely your responsibility. There is no 
              follow-up, no ongoing relationship, and no expectation of further contact unless you 
              choose to book another session in the future.
            </p>
            <p className="text-foreground font-medium text-xl">
              This is a complete, contained experience. You arrive with a question. You leave with insight.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
