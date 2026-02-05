import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function WhatToExpect() {
  return (
    <SectionShell backgroundVariant="subtle" accentLabel="The Experience">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        What to Expect from The Clearing
      </h2>
      
      <div className="space-y-20">
        {/* Value & Benefits Overview */}
        <div className="space-y-8">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed">
            <p className="text-foreground font-medium text-2xl md:text-3xl">
              The Clearing offers a rare opportunity: <span className="text-gold">90 minutes of focused, structured attention</span> on 
              what matters most to you right now.
            </p>
            <p className="text-muted-foreground">
              This is not abstract guidance. It is a practical process designed to help you:
            </p>
            <ul className="space-y-5 text-lg md:text-xl leading-relaxed pl-8">
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Name what is actually happening</span> beneath the surface noise—the real issue, not the presenting symptom
                </span>
              </li>
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Clarify decisions</span> by seeing the actual choice points, trade-offs, and what you are truly weighing
                </span>
              </li>
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Surface hidden patterns</span> that have been shaping your choices, relationships, or work without your full awareness
                </span>
              </li>
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Distinguish signal from noise</span>—what is essential versus what is distraction, fear, or inherited expectation
                </span>
              </li>
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Identify concrete next steps</span> grounded in what you now see, not what you wish were true
                </span>
              </li>
              <li className="flex items-start group">
                <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">•</span>
                <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="text-foreground font-medium">Release what no longer serves</span>—old stories, obligations, or identities that have become constraints
                </span>
              </li>
            </ul>
            <p className="text-muted-foreground pt-4">
              The value is not in being told what to do. It is in <span className="text-foreground font-medium">gaining the clarity to see for yourself</span>—
              and the confidence to act on what you see. Many participants describe leaving with a sense of relief, direction, 
              and renewed agency over their path forward.
            </p>
            <p className="text-foreground font-medium text-xl pt-2">
              This is practical work. The insights are actionable. The impact is tangible.
            </p>
          </div>
        </div>

        <Separator className="bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

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
              What you do with the clarity you receive is entirely your responsibility. <span className="text-foreground font-medium">This work 
              is designed to support your autonomy, not create dependence.</span> You are not expected to return for ongoing sessions 
              or maintain a client relationship.
            </p>
            <p className="text-muted-foreground">
              That said, <span className="text-foreground font-medium">connection is welcome.</span> If you wish to share how the insights landed, 
              book another session in the future, or simply stay in touch, you are invited to do so. The boundary is clear: 
              this is not a dependency model. It is a space for clarity, and you remain the authority on your own path.
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
