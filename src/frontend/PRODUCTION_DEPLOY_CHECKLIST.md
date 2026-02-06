# Production Deployment Checklist

Use this checklist to ensure successful deployment to production, especially when using custom domains like `clearing.icp0.io`.

## Pre-Deployment

- [ ] All code changes committed and pushed
- [ ] Backend changes reviewed and tested
- [ ] Frontend changes reviewed and tested
- [ ] Build timestamp placeholder present in `frontend/index.html`
- [ ] All interactive elements have visible focus states
- [ ] Footer attribution link is visible in both light and dark modes
- [ ] No invisible clickable areas at bottom of page

## Build & Deploy

- [ ] Run full backend build: `dfx build backend --network ic`
- [ ] Run full frontend build: `dfx build frontend --network ic`
- [ ] Deploy backend: `dfx deploy backend --network ic`
- [ ] Deploy frontend: `dfx deploy frontend --network ic`
- [ ] Capture full build/deploy output in `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md`
  - [ ] Paste complete stdout/stderr from build commands
  - [ ] Paste complete stdout/stderr from deploy commands
  - [ ] Record all canister IDs
  - [ ] Note DFX version and commit hash

## Canister Verification

- [ ] Get frontend canister ID: `dfx canister id frontend --network ic`
- [ ] Verify canister is running: `dfx canister status frontend --network ic`
- [ ] Test direct ic0.app URL: `https://<canister-id>.ic0.app`
- [ ] Confirm access-code gate loads on ic0.app URL
- [ ] Verify all sections render correctly
- [ ] Test booking CTA button functionality
- [ ] Record verification results in `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md`

## Custom Domain Verification (clearing.icp0.io)

### Initial Check
- [ ] Navigate to `https://clearing.icp0.io` in fresh browser session
- [ ] Verify no 400/canister resolution errors
- [ ] Confirm access-code gate screen loads
- [ ] Test in both light and dark modes
- [ ] Record pass/fail results in `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md`

### If Seeing Errors:
1. **Capture Diagnostics**
   - [ ] Copy full error details from BuildFailureDiagnostics component
   - [ ] Paste into `frontend/DEPLOYMENT_NOTE_clearing-icp0-io.md`
   - [ ] Paste into `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md` BuildFailureDiagnostics section
   - [ ] Note exact error message and browser console output
   - [ ] Capture network tab details (F12 → Network)

2. **Check Canister Mapping**
   - [ ] Verify custom domain is mapped to correct canister ID
   - [ ] Check Internet Computer dashboard for domain configuration
   - [ ] Confirm boundary node alias is active
   - [ ] Verify DNS records are correct

3. **Verify Build Currency**
   - [ ] Check build timestamp in page source: `<meta name="build-timestamp" content="...">`
   - [ ] Compare with local build timestamp
   - [ ] If mismatch, redeploy frontend

4. **Test Canonical URL**
   - [ ] On access-code gate, verify displayed URL is correct
   - [ ] Test "Copy Link to Share" button (if present)
   - [ ] Verify copied URL matches expected format

## Fresh Session Verification

- [ ] Open new incognito/private browser window
- [ ] Navigate to `https://clearing.icp0.io`
- [ ] Confirm access-code gate is the **first screen** shown
- [ ] Enter code "1122" and verify unlock works
- [ ] Confirm all landing page sections load correctly
- [ ] Scroll to bottom and verify footer is visible
- [ ] Test footer attribution link (should be gold and underlined)
- [ ] Verify "I'm Ready To Book" button is visible and clickable
- [ ] Test keyboard navigation (Tab key) through all interactive elements
- [ ] Verify all focus states are visible

## Accessibility Verification

- [ ] All interactive elements have visible focus states (Tab through page)
- [ ] Footer link has sufficient contrast in dark mode
- [ ] No invisible clickable areas (use browser DevTools to inspect)
- [ ] All buttons and links have appropriate hover states
- [ ] Decorative motifs have `pointer-events: none`

## Post-Deployment

- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile device
- [ ] Verify all images and assets load
- [ ] Test Stripe configuration (if admin)
- [ ] Verify booking flow works end-to-end
- [ ] Test access code gate with invalid code
- [ ] Verify readiness quiz functionality

## Troubleshooting Reference

### Common Issues:

**Issue**: 400 Bad Request or "Could not resolve canister"
- **Cause**: Custom domain not mapped to canister
- **Fix**: Verify domain mapping in IC dashboard, wait for DNS propagation
- **Reference**: See `PRODUCTION_GO_LIVE_RUNBOOK.md` troubleshooting section and `DEPLOYMENT_NOTE_clearing-icp0-io.md`

**Issue**: Old version of site loads
- **Cause**: Browser cache or CDN cache
- **Fix**: Hard refresh (Ctrl+Shift+R), clear browser cache, or wait for cache expiration

**Issue**: Access-code gate doesn't show
- **Cause**: JavaScript error or build issue
- **Fix**: Check browser console, verify build completed successfully, redeploy
- **Reference**: Check BuildFailureDiagnostics output in browser

**Issue**: Canonical URL shows wrong domain
- **Cause**: `getCanonicalGateUrl()` not detecting domain correctly
- **Fix**: Check `frontend/src/utils/urlParams.ts` logic, verify hostname detection

**Issue**: Footer link not visible
- **Cause**: Insufficient contrast in dark mode
- **Fix**: Verify footer uses `text-gold` class, check CSS color tokens
- **Code Fix**: Ensure Footer.tsx uses `className="text-gold underline"` on link

**Issue**: Invisible clickable area at bottom
- **Cause**: Decorative element receiving pointer events
- **Fix**: Ensure all motif overlays have `pointer-events: none` in CSS
- **Code Fix**: Check `frontend/src/index.css` for `.motif-overlay { pointer-events: none; }`
- **Reference**: See `DEPLOYMENT_NOTE_clearing-icp0-io.md` for detailed fix

## Documentation

- [ ] Update `DEPLOYMENT_NOTE_clearing-icp0-io.md` with any issues encountered
- [ ] Complete all sections of `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md`
- [ ] Document resolution steps for future reference
- [ ] Update this checklist if new steps are needed
- [ ] Paste captured diagnostics into appropriate files

## Related Documentation

- **Go-Live Runbook**: `PRODUCTION_GO_LIVE_RUNBOOK.md` - Complete deployment procedure
- **Log Capture**: `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md` - Template for capturing logs
- **Domain Setup**: `DOMAIN_SETUP_GUIDE.md` - Guide for purchasing and configuring domains
- **Issue Tracking**: `DEPLOYMENT_NOTE_clearing-icp0-io.md` - Known issues and resolutions

## Sign-Off

- Deployed by: _______________
- Date: _______________
- Frontend Canister ID: _______________
- Backend Canister ID: _______________
- Build Timestamp: _______________
- Verified URLs:
  - [ ] `https://clearing.icp0.io` - Status: [ ] PASS [ ] FAIL
  - [ ] `https://<canister-id>.ic0.app` - Status: [ ] PASS [ ] FAIL
- Verification Status: [ ] PASS [ ] FAIL
- Notes: _______________
