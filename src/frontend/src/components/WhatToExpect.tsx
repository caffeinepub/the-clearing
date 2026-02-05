import { Separator } from '@/components/ui/separator';

export default function WhatToExpect() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        What to Expect from The Clearing
      </h2>
      
      <div className="space-y-16">
        {/* During the Session */}
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-foreground">During the Session</h3>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              The session is 75 minutes, conducted one-to-one via video call. You will be asked to 
              articulate what you are working with—not as a story, but as a question or threshold.
            </p>
            <p>
              Tarot is used as a reflective tool. The cards do not predict. They mirror what is present: 
              patterns, tensions, choices, and what may be asking to be seen or released.
            </p>
            <p>
              You will be guided through a structured process of clarity, insight, responsibility, and 
              integration. This is not a passive experience. You are an active participant in your own seeing.
            </p>
            <p>
              The session is recorded and sent to you afterward for your own reflection.
            </p>
          </div>
        </div>

        <Separator />

        {/* This Work Is Most Helpful If You */}
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-foreground">This Work Is Most Helpful If You</h3>
          <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Are at a threshold—a decision point, a transition, or a moment of uncertainty</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Sense something but cannot yet name it</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Are willing to see what is present, even if it is uncomfortable</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Value clarity over certainty</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Are ready to take responsibility for what you see</span>
            </li>
          </ul>
        </div>

        <Separator />

        {/* This Session Is Not Designed For */}
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-foreground">This Session Is Not Designed For</h3>
          <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Predictions about specific outcomes or timelines</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Emotional processing or therapeutic intervention</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Validation of what you already believe</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Decision-making on your behalf</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-muted-foreground">—</span>
              <span>Crisis support or mental health care</span>
            </li>
          </ul>
        </div>

        <Separator />

        {/* After the Session */}
        <div className="space-y-6">
          <h3 className="text-2xl font-light text-foreground">After the Session</h3>
          <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              You will receive a recording of the session within 24 hours. This is yours to revisit 
              as needed.
            </p>
            <p>
              What you do with the clarity you receive is entirely your responsibility. There is no 
              follow-up, no ongoing relationship, and no expectation of further contact unless you 
              choose to book another session in the future.
            </p>
            <p>
              This is a complete, contained experience. You arrive with a question. You leave with insight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
