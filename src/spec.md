# Specification

## Summary
**Goal:** Improve landing-page clarity and perceived value by refining “What to Expect” copy (benefits + post-session connection language) and moving the “Readiness” section closer to the top.

**Planned changes:**
- Update the “After the Session” copy in `frontend/src/components/WhatToExpect.tsx` to remove “no ongoing relationship” language and replace it with wording that avoids client dependency while still welcoming bounded, optional ongoing connection.
- Revise/expand the “What to Expect from The Clearing” copy in `frontend/src/components/WhatToExpect.tsx` to more concretely describe practical, tangible benefits and outcomes, while keeping an informative tone and preserving readiness-filtering language and existing constraints (e.g., non-predictive tarot, not therapy, active engagement, not recorded, 90-minute session).
- Reorder landing-page sections in `frontend/src/App.tsx` so the “Readiness” section (`<WhoThisIsFor />`) renders immediately after the “Foundation” section (`<WhatItIs />`), without removing any sections.

**User-visible outcome:** Visitors see the “Readiness” section immediately after “Foundation,” and the “What to Expect” section more clearly explains practical outcomes and allows for appropriate ongoing connection without implying dependency.
