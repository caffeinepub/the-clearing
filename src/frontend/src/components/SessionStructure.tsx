export default function SessionStructure() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto bg-card/30">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        What Happens in the Session
      </h2>
      
      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p className="text-foreground font-medium">
          75 minutes. Private. Structured.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <span className="text-2xl font-light mr-4 text-muted-foreground">1</span>
            <div>
              <h3 className="font-medium text-foreground mb-2">Clarity</h3>
              <p>We establish what you're working with—the question, the threshold, the tension.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-2xl font-light mr-4 text-muted-foreground">2</span>
            <div>
              <h3 className="font-medium text-foreground mb-2">Insight</h3>
              <p>Tarot is used as a reflective mirror. We examine patterns, dynamics, and what is asking to be seen.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-2xl font-light mr-4 text-muted-foreground">3</span>
            <div>
              <h3 className="font-medium text-foreground mb-2">Responsibility</h3>
              <p>We identify what is yours to hold, what is yours to release, and what choice is present.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-2xl font-light mr-4 text-muted-foreground">4</span>
            <div>
              <h3 className="font-medium text-foreground mb-2">Integration</h3>
              <p>You leave with insight and a grounded next step. No promises. No predictions. Only clarity.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
