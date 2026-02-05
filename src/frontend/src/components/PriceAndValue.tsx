export default function PriceAndValue() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-12">
        Investment
      </h2>
      
      <div className="text-center space-y-8">
        <div>
          <p className="text-6xl font-light text-foreground mb-4">$177</p>
          <p className="text-xl text-muted-foreground">75-minute private session</p>
        </div>
        
        <div className="max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground">
          <p>
            This is a complete, contained session—not an introduction, not a consultation, 
            not the first step in a series. You receive the full work in one sitting.
          </p>
          
          <p>
            No discounts. No urgency. No scarcity tactics. The price reflects the depth, 
            structure, and containment of the work.
          </p>
          
          <p className="text-foreground font-medium">
            If the price is a barrier, this is not the right time.
          </p>
        </div>
      </div>
    </section>
  );
}
