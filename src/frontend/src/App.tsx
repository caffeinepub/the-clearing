import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import WhatItIs from './components/WhatItIs';
import WhoThisIsFor from './components/WhoThisIsFor';
import WhatToExpect from './components/WhatToExpect';
import SessionStructure from './components/SessionStructure';
import PractitionerAuthority from './components/PractitionerAuthority';
import PriceAndValue from './components/PriceAndValue';
import EthicsAndBoundaries from './components/EthicsAndBoundaries';
import ReadyToBookCTA from './components/ReadyToBookCTA';
import Footer from './components/Footer';
import AccessCodeGate from './components/AccessCodeGate';
import BuildFailureDiagnostics from './components/BuildFailureDiagnostics';
import { ThemeProvider } from 'next-themes';
import { errorCapture } from './utils/captureAppErrors';

export default function App() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Subscribe to error capture
    const unsubscribe = errorCapture.subscribe((error) => {
      if (error.message) {
        setHasError(true);
      } else {
        setHasError(false);
      }
    });

    // Check for initial errors
    const latestError = errorCapture.getLatestError();
    if (latestError && latestError.message) {
      setHasError(true);
    }

    return unsubscribe;
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      {hasError && <BuildFailureDiagnostics />}
      <AccessCodeGate>
        <div className="min-h-screen bg-background text-foreground">
          <Hero />
          <WhatItIs />
          <WhoThisIsFor />
          <WhatToExpect />
          <SessionStructure />
          <PractitionerAuthority />
          <PriceAndValue />
          <EthicsAndBoundaries />
          <ReadyToBookCTA />
          <Footer />
        </div>
      </AccessCodeGate>
    </ThemeProvider>
  );
}
