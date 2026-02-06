import { SiTiktok, SiInstagram } from 'react-icons/si';
import SectionShell from './SectionShell';

export default function PractitionerAuthority() {
  return (
    <SectionShell accentLabel="The Practitioner" motifVariant="circle" backgroundVariant="subtle">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter mb-16 text-center">
        About the Practitioner
      </h2>
      
      <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
        <div className="mx-auto md:mx-0 space-y-8">
          <div className="relative w-64 h-64 md:w-full md:h-auto aspect-square rounded-lg overflow-hidden border-2 border-celestial-primary/30 shadow-celestial group">
            <img 
              src="/assets/generated/facilitator-headshot.user-upload.dim_400x400.jpg"
              alt="David Tessis - Founder of Aurora Arcana"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center gap-6 pt-2">
            <a 
              href="https://tiktok.com/@auroraarcanallc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-celestial-primary transition-colors"
              aria-label="TikTok - @auroraarcanallc"
            >
              <SiTiktok className="w-7 h-7" />
            </a>
            <a 
              href="https://instagram.com/auroraarcanallc" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-celestial-primary transition-colors"
              aria-label="Instagram - @auroraarcanallc"
            >
              <SiInstagram className="w-7 h-7" />
            </a>
          </div>
        </div>
        
        <div className="space-y-8 text-lg md:text-xl leading-relaxed">
          <p className="text-foreground/90">
            <span className="font-medium text-celestial-primary">David Tessis</span> is a seasoned esoteric educator, tarot practitioner, and certified life and health coch with nearly 20 yers of experience in divination and over six years of professional coaching practice. He is the founder of <span className="text-celestial-primary font-medium">Aurora Arcana</span>, a private spiritual practice devoted to clarity, ethical discernment, and serious inner work at moments of genuine transition.
          </p>
          
          <p className="text-muted-foreground">
            David's work is deeply informed by <span className="text-foreground/80 font-medium italic">A Course in Miracles</span>, particularly its teachings on perception, forgiveness, responsibility, and the quiet authority that emerges when illusion is relinquished rather than resisted. His facilitation emphasizes choice over compulsion, clarity over reassurance, and love expressed through honesty rather than sentimentality. This framework allows his sessions to remain grounded, non-dogmatic, and profoundly practical—even when engaging symbolic and esoteric material.
          </p>
          
          <p className="text-muted-foreground">
            At the heart of his practice is <span className="text-celestial-primary font-medium">The Clearing™</span>, a structured, one-to-one guidance experience designed to dissolve confusion by illuminating the underlying pattern at work. David also works with tarot as a reflective and revelatory tool, supported by a broad range of divinatory systems including Lenormand cards, astrology-based tools, oracle decks, cowrie shells, and pendulum work. These modalities are used not to predict outcomes, but to surface truth, restore agency, and support self-sovereign decision-making.
          </p>
          
          <div className="border-l-2 border-celestial-primary pl-6 py-4">
            <p className="text-foreground italic font-light text-xl md:text-2xl">
              Known for his calm presence, perceptive insight, and ethical restraint, David brings both lightness and seriousness to his work—holding space that is compassionate without being indulgent, and powerful without being forceful.
            </p>
          </div>
          
          <p className="text-muted-foreground">
            His sessions are particularly well-suited for those who are ready to meet themselves honestly, reclaim their inner authority, and choose with integrity rather than fear. Drawing from the principles of <span className="text-foreground/80 font-medium italic">A Course in Miracles</span> and his deep familiarity with esoteric and occult traditions, David's work resonates with audiences seeking authentic spiritual guidance rooted in both ancient wisdom and contemporary clarity.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
