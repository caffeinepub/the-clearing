import Hero from './components/Hero';
import WhatItIs from './components/WhatItIs';
import WhatToExpect from './components/WhatToExpect';
import SessionStructure from './components/SessionStructure';
import WhoThisIsFor from './components/WhoThisIsFor';
import PractitionerAuthority from './components/PractitionerAuthority';
import PriceAndValue from './components/PriceAndValue';
import EthicsAndBoundaries from './components/EthicsAndBoundaries';
import Footer from './components/Footer';
import AccessCodeGate from './components/AccessCodeGate';
import { ThemeProvider } from 'next-themes';

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <AccessCodeGate>
        <div className="min-h-screen bg-background text-foreground">
          <Hero />
          <WhatItIs />
          <WhatToExpect />
          <SessionStructure />
          <WhoThisIsFor />
          <PractitionerAuthority />
          <PriceAndValue />
          <EthicsAndBoundaries />
          <Footer />
        </div>
      </AccessCodeGate>
    </ThemeProvider>
  );
}
