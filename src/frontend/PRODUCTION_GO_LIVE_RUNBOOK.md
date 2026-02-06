# Production Go-Live Runbook

This runbook provides step-by-step instructions for deploying The Clearing to production and verifying the deployment is successful.

## Prerequisites

- [ ] DFX CLI installed and configured
- [ ] Access to the Internet Computer project
- [ ] All code changes committed and tested locally
- [ ] Custom domain configured (if applicable): `clearing.icp0.io`
- [ ] `DEPLOYMENT_LOG_CAPTURE_TEMPLATE.md` ready for capturing output

## Step 1: Pre-Deployment Verification

### Code Review
- [ ] All features tested locally
- [ ] Access code gate works (code: `1122`)
- [ ] Booking CTA links to correct external URL (`https://tr.ee/TeHpNDTUkY`)
- [ ] Footer attribution link is visible in both light and dark modes
- [ ] All interactive elements have visible focus states
- [ ] No invisible clickable areas at page bottom

### Environment Check

**Verify DFX version**:
