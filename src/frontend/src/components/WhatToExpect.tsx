import { Separator } from '@/components/ui/separator';
import SectionShell from './SectionShell';

export default function WhatToExpect() {
  return (
    <SectionShell accentLabel="The Experience" motifVariant="grain">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        What to Expect
      </h2>
      
      <div className="space-y-16 text-lg md:text-xl leading-relaxed">
        <div className="space-y-6">
          <p className="text-foreground/90">
            The Clearing™ is designed to help you:
          </p>
          <ul className="space-y-4 pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-foreground">Name what is present</strong> — the issue, tension, or question you're carrying
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-foreground">Clarify your decision space</strong> — what you can and cannot control
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-foreground">Surface hidden patterns</strong> — recurring dynamics or blind spots
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-foreground">Identify your next step</strong> — the smallest, clearest action forward
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold text-xl">•</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                <strong className="text-foreground">Release what constrains you</strong> — false narratives, outdated beliefs, or misplaced responsibility
              </span>
            </li>
          </ul>
        </div>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-gold pl-6">
            During the Session
          </h3>
          <ul className="space-y-5 pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You will be asked direct, clarifying questions
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Tarot cards will be used as a reflective framework, not as predictive tools
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                You will be invited to articulate what you already know but have not yet said
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                The session is structured, focused, and time-bounded
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-gold pl-6">
            This Session Is Most Helpful If You:
          </h3>
          <ul className="space-y-5 pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Come with a specific question, tension, or threshold in mind
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Are willing to be challenged on your assumptions
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-gold/60 group-hover:text-gold transition-colors text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Are prepared to take responsibility for what you discover
              </span>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-bronze pl-6">
            This Session Is Not Designed For:
          </h3>
          <ul className="space-y-5 pl-8">
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                General life advice or open-ended exploration
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Emotional processing without a specific focus
              </span>
            </li>
            <li className="flex items-start group">
              <span className="mr-4 text-bronze text-xl">—</span>
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                Seeking validation for decisions you've already made
              </span>
            </li>
          </ul>
        </div>

        <Separator className="my-16 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="space-y-8">
          <h3 className="text-2xl md:text-3xl font-light text-foreground border-l-2 border-gold pl-6">
            After the Session
          </h3>
          <div className="space-y-6 text-muted-foreground">
            <p>
              You will leave with clarity on your situation and a sense of your next step. 
              The session is designed to be complete in itself.
            </p>
            <p>
              If you find the work valuable and wish to return for a future threshold, 
              you are welcome to book again. This is not ongoing work—it is threshold work. 
              Each session stands alone.
            </p>
            <p>
              You may reach out with brief follow-up questions within 48 hours if needed, 
              but extended correspondence is not part of the offering.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
