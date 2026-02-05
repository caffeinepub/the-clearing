# Specification

## Summary
**Goal:** Remove the broken Practitioner banner while making the access-code gate screen feel more mysterious and visually engaging without changing its behavior.

**Planned changes:**
- Remove (or stop rendering) the bottom Aurora Arcana banner `<img>` from `frontend/src/components/PractitionerAuthority.tsx` while keeping the TikTok and Instagram access links intact.
- Visually refine `frontend/src/components/AccessCodeGate.tsx` to better match a mysterious “locked gate” vibe (enhanced background/lighting, improved typography/spacing, optional subtle animation) while preserving the existing dark + gold styling and maintaining readability on mobile and desktop.

**User-visible outcome:** The landing page no longer shows the Practitioner banner, and the access-code entry screen looks more enticing and polished while still unlocking only with code “1122” and behaving exactly as before.
