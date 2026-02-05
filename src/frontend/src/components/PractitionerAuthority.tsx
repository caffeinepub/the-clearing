import { SiTiktok, SiInstagram } from 'react-icons/si';

export default function PractitionerAuthority() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto bg-card/30">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        The Practitioner
      </h2>
      
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-transparent rounded-sm -m-2" />
            <img 
              src="/assets/generated/facilitator-headshot.user-upload.dim_400x400.jpg" 
              alt="The Practitioner"
              className="relative w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
        
        <div className="md:w-2/3 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <h3 className="text-2xl font-light text-foreground">David Tessis (he/him)</h3>
          
          <p>
            Founder of Aurora Arcana. Nearly 20 years of experience working with tarot as a tool 
            for clarity and perception. Certified life and health coach with over 6 years of practice.
          </p>
          
          <p>
            David works with tarot, Lenormand, astrology dice, oracle decks, cowrie shells, and pendulum. 
            His approach is grounded, structured, and non-predictive. He does not tell you what will happen. 
            He helps you see what is.
          </p>
          
          <p className="text-foreground font-medium">
            This is not mysticism. This is discernment.
          </p>

          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <SiTiktok className="w-5 h-5" />
              <span className="text-sm tracking-wide">TikTok</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground/60">
              <SiInstagram className="w-5 h-5" />
              <span className="text-sm tracking-wide">Instagram</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
