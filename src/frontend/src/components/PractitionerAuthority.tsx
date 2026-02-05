import { SiTiktok, SiInstagram } from 'react-icons/si';
import SectionShell from './SectionShell';

export default function PractitionerAuthority() {
  return (
    <SectionShell backgroundVariant="subtle" accentLabel="The Practitioner">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        The Practitioner
      </h2>
      
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="md:w-2/5 flex-shrink-0">
          <div className="relative group">
            {/* Gold border glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/30 via-gold/10 to-transparent rounded-sm blur-xl group-hover:blur-2xl transition-all duration-500" />
            
            {/* Image container */}
            <div className="relative border-2 border-gold/20 group-hover:border-gold/40 transition-all duration-500 rounded-sm overflow-hidden">
              <img 
                src="/assets/generated/facilitator-headshot.user-upload.dim_400x400.jpg" 
                alt="David Tessis - The Practitioner"
                className="relative w-full aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
        
        <div className="md:w-3/5 space-y-8 text-lg md:text-xl leading-relaxed">
          <h3 className="text-3xl md:text-4xl font-light text-foreground">
            David Tessis <span className="text-muted-foreground text-2xl">(he/him)</span>
          </h3>
          
          <p className="text-muted-foreground">
            Founder of Aurora Arcana. <span className="text-gold font-medium">Nearly 20 years of experience</span> working with tarot as a tool 
            for clarity and perception. Certified life and health coach with over 6 years of practice.
          </p>
          
          <p className="text-muted-foreground">
            David works with tarot, Lenormand, astrology dice, oracle decks, cowrie shells, and pendulum. 
            His approach is grounded, structured, and non-predictive. He does not tell you what will happen. 
            He helps you see what is.
          </p>
          
          <div className="pt-4 border-l-2 border-gold pl-6">
            <p className="text-foreground text-2xl font-light italic">
              This is not mysticism. This is discernment.
            </p>
          </div>

          <div className="flex items-center gap-8 pt-6">
            <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-gold transition-colors">
              <SiTiktok className="w-6 h-6" />
              <span className="text-base tracking-wide">TikTok</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground/60 hover:text-gold transition-colors">
              <SiInstagram className="w-6 h-6" />
              <span className="text-base tracking-wide">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
