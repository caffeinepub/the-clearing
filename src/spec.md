# Specification

## Summary
**Goal:** Publish Draft Version 33 to live/production on the IC network and provide complete, price-conscious domain setup documentation and an actionable go-live runbook.

**Planned changes:**
- Execute the production deployment checklist to build and deploy backend and frontend canisters to the IC network, and record a full deployment log (date/time, operator, commit hash, DFX version, full command output).
- Update `frontend/DOMAIN_SETUP_GUIDE.md` to fully cover low-cost registrar options and step-by-step domain connection to the frontend canister (how to find canister ID, DNS record examples, and high-level IC custom domain mapping steps).
- Complete `frontend/PRODUCTION_GO_LIVE_RUNBOOK.md` end-to-end with environment validation, exact deploy commands aligned to the checklist, and post-deploy verification steps (ic0.app URL and `https://clearing.icp0.io`), including checks for access-code gate (1122), booking CTA, footer visibility, and no invisible clickable areas at the page bottom.

**User-visible outcome:** The app is live on production (IC canister URL and, if configured, the custom domain), and users have clear documentation to deploy, verify, and connect a low-cost purchased domain to the frontend canister.
