export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden motif-grain">
      {/* Background image with enhanced treatment */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url(/assets/generated/hero-background-authority.dim_1920x1080.png)',
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/40" />
      
      {/* Gold accent glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-gold/5 via-transparent to-transparent" />
      
      {/* Subtle alchemy circle motif */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/generated/alchemy-circle-line.dim_1024x1024.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          opacity: 0.03
        }}
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Invitation badge */}
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="inline-block px-8 py-3 border border-gold/40 bg-gold/10 backdrop-blur-md rounded-full shadow-gold">
            <span className="text-gold text-sm md:text-base font-medium tracking-[0.2em] uppercase">
              By Invitation Only
            </span>
          </div>
        </div>

        {/* Main title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tighter mb-10 text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
          The Clearing™
        </h1>
        
        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-6 mb-10 animate-in fade-in duration-1000 delay-300">
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent via-gold to-gold" />
          <div className="h-2 w-2 rounded-full bg-gold shadow-gold" />
          <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent via-gold to-gold" />
        </div>
        
        {/* Tagline */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
          Clarity over comfort.<br className="md:hidden" /> Perception over prediction.<br className="md:hidden" /> Responsibility over reassurance.
        </p>
      </div>
    </section>
  );
}
