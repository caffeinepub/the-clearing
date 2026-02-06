# Domain Setup Guide for The Clearing

This guide explains how to purchase a low-cost domain and connect it to your Internet Computer-hosted frontend canister.

## Overview

Your application is hosted on the Internet Computer (IC) and accessible via a direct canister URL like `https://<canister-id>.ic0.app`. To use a custom domain (like `clearing.icp0.io` or `theclearing.com`), you need to:

1. Purchase a domain from a registrar
2. Configure DNS records
3. Map the domain to your IC canister

**Important**: Domain purchase happens through a registrar's website (not in this app). This guide helps you choose a registrar and configure the domain.

## Step 1: Choose a Domain Registrar

### Low-Cost Registrar Options

Here are popular registrars known for competitive pricing:

| Registrar | Typical Price Range | Notes |
|-----------|-------------------|-------|
| **Namecheap** | $8-15/year | Good intro pricing, free WHOIS privacy |
| **Porkbun** | $6-12/year | Very competitive pricing, free WHOIS privacy |
| **Cloudflare** | $8-10/year | At-cost pricing (no markup), requires Cloudflare account |
| **Google Domains** | $12-20/year | Now part of Squarespace, reliable but pricier |
| **GoDaddy** | $10-20/year | Watch for renewal pricing (often higher than intro) |

### Factors Affecting Domain Cost

1. **Top-Level Domain (TLD)**:
   - `.com` - Most popular, typically $10-15/year
   - `.io` - Tech-focused, typically $30-40/year
   - `.ai` - AI/tech, typically $60-100/year
   - `.xyz` - Budget option, typically $1-5/year (first year)
   - `.app` - Modern, typically $15-20/year

2. **Introductory vs. Renewal Pricing**:
   - Many registrars offer low first-year pricing
   - **Always check renewal price** before purchasing
   - Example: $2 first year, $15/year renewal

3. **WHOIS Privacy Protection**:
   - Hides your personal info from public WHOIS database
   - Some registrars include free, others charge $5-10/year
   - **Recommended**: Choose registrar with free WHOIS privacy

4. **Additional Services** (usually optional):
   - Email hosting: $5-10/month (not needed for this app)
   - SSL certificate: Free via IC (don't pay extra)
   - Website builder: Not needed (you have this app)

### Price-Conscious Checklist

Before purchasing, verify:
- [ ] Renewal price is acceptable (not just first-year price)
- [ ] WHOIS privacy is included for free
- [ ] No hidden fees or required add-ons
- [ ] Total annual cost fits your budget
- [ ] Registrar has good reputation (check reviews)

### Recommended Approach

**For lowest cost**:
- Use **Porkbun** or **Namecheap**
- Choose `.com` or `.xyz` TLD
- Verify free WHOIS privacy included
- Check renewal price before purchase
- **Expected cost**: $8-15/year for `.com`, $1-5/year for `.xyz`

**For best value**:
- Use **Cloudflare** (at-cost pricing, no markup)
- Choose `.com` or `.app` TLD
- Includes free WHOIS privacy
- **Expected cost**: $8-10/year for `.com`

## Step 2: Purchase Your Domain

1. **Visit your chosen registrar's website**
2. **Search for your desired domain name**
   - Example: `theclearing.com`
   - Try variations if taken: `the-clearing.com`, `clearingsessions.com`
3. **Check the price**
   - Verify both first-year and renewal pricing
   - Ensure WHOIS privacy is included or add it
4. **Complete purchase**
   - Create account with registrar
   - Enter payment information
   - Complete checkout

**You now own the domain!** Next, configure it to point to your IC canister.

## Step 3: Get Your Frontend Canister ID

Before configuring DNS, you need your frontend canister ID. There are several ways to retrieve it:

### Method 1: Using DFX CLI (Recommended)

