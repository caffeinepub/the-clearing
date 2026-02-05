# Specification

## Summary
**Goal:** Replace the “Facilitator” headshot in the PractitionerAuthority section with the newly uploaded photo served as a frontend static asset.

**Planned changes:**
- Crop/resize the uploaded photo into a centered square headshot and export as a web-optimized JPG for use on the landing page.
- Add the new headshot image under `frontend/public` so it is served directly by the frontend build.
- Update the PractitionerAuthority (Facilitator/Practitioner) headshot `<img>` to reference the new static asset and ensure it maintains a square aspect on mobile and desktop (no stretching).

**User-visible outcome:** The landing page “Facilitator” section displays the newly uploaded headshot correctly across device sizes.
