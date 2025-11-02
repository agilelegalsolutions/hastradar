# SEO Testing & Verification Guide

This document provides step-by-step instructions to verify all SEO implementations on the Hastradar Consultancy website.

## Pre-Deployment Checklist

### 1. Google Analytics Setup
- [ ] Replace `G-XXXXXXXXXX` in all HTML files with actual GA4 tracking ID
- [ ] Test tracking in Google Analytics Real-Time reports
- [ ] Set up conversion goals (form submissions, phone clicks)

### 2. Google Search Console
- [ ] Add and verify property for https://www.hastradar.com
- [ ] Submit sitemap.xml
- [ ] Verify no manual actions or security issues

### 3. Image Assets
- [ ] Create og-default.jpg (1200×630px) and upload to /static/
- [ ] Create logo.png and upload to /static/
- [ ] Optimize all images with WebP format
- [ ] Add descriptive alt text to all images

---

## Manual Testing Instructions

### Test 1: Lighthouse Audit

**Desktop:**
```bash
# Run from Chrome DevTools
1. Open https://www.hastradar.com in Chrome
2. Open DevTools (F12)
3. Go to Lighthouse tab
4. Select:
   - Mode: Navigation
   - Device: Desktop
   - Categories: All
5. Click "Analyze page load"
6. Take screenshot of results
```

**Mobile:**
```bash
# Same steps as desktop but select "Mobile" device
```

**Target Scores:**
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: 100

---

### Test 2: Structured Data Validation

#### 2a. Google Rich Results Test

Visit each page and test:

**Homepage:**
```
1. Go to: https://search.google.com/test/rich-results
2. Enter URL: https://www.hastradar.com/
3. Verify schemas detected:
   - Organization (LegalService)
   - BreadcrumbList
   - WebSite
4. Check for errors (should be 0)
```

**Service Page (Trademark):**
```
1. Enter URL: https://www.hastradar.com/services/trademark-registration-protection
2. Verify schemas:
   - Service
   - BreadcrumbList
   - FAQPage
3. Check FAQ renders correctly
```

#### 2b. Schema.org Validator

```
1. Go to: https://validator.schema.org/
2. Test each page's JSON-LD
3. Verify no errors or warnings
```

---

### Test 3: Sitemap Validation

```bash
# Check sitemap is accessible
curl https://www.hastradar.com/sitemap.xml

# Validate XML syntax
1. Go to: https://www.xml-sitemaps.com/validate-xml-sitemap.html
2. Enter: https://www.hastradar.com/sitemap.xml
3. Verify no errors
```

**Checklist:**
- [ ] All URLs use https://www.hastradar.com (canonical domain)
- [ ] lastmod dates are current
- [ ] changefreq and priority values are appropriate
- [ ] No 404 or redirect URLs in sitemap

---

### Test 4: robots.txt Validation

```bash
# Check robots.txt
curl https://www.hastradar.com/robots.txt

# Test using Google Search Console
1. Go to GSC → Settings → robots.txt Tester
2. Verify sitemap URL is correct
3. Test that public pages are allowed
```

**Checklist:**
- [ ] Sitemap URL is correct
- [ ] No unintended Disallow rules
- [ ] Format is correct

---

### Test 5: Canonical URLs & Redirects

#### 5a. HTTPS Redirect
```bash
# Test HTTP to HTTPS redirect
curl -I http://hastradar.com
# Should return: 301 Moved Permanently
# Location: https://www.hastradar.com/

curl -I http://www.hastradar.com
# Should return: 301 to https://www.hastradar.com/
```

#### 5b. WWW Canonicalization
```bash
# Test non-www to www redirect
curl -I https://hastradar.com
# Should return: 301 Moved Permanently
# Location: https://www.hastradar.com/
```

#### 5c. Trailing Slash
```bash
# Test trailing slash redirect
curl -I https://www.hastradar.com/services
# Should return: 301 to https://www.hastradar.com/services/
```

#### 5d. Canonical Tags
```bash
# Check canonical tag exists on every page
curl https://www.hastradar.com/ | grep "rel=\"canonical\""
curl https://www.hastradar.com/services/trademark-registration-protection | grep "rel=\"canonical\""

# Verify canonical points to correct URL
```

**Checklist:**
- [ ] HTTP → HTTPS works (301)
- [ ] Non-www → www works (301)
- [ ] Trailing slash behavior is consistent
- [ ] Every page has canonical tag
- [ ] Canonical URLs use https://www.hastradar.com

---

### Test 6: Meta Tags

Check on key pages (Home, Service page, Blog):

```bash
# View all meta tags
curl -s https://www.hastradar.com/ | grep -i "<meta"

# Check specific tags
curl -s https://www.hastradar.com/ | grep "og:title"
curl -s https://www.hastradar.com/ | grep "twitter:card"
```

**Checklist for each page:**
- [ ] `<title>` tag present and unique
- [ ] Title under 60 characters
- [ ] Meta description present and unique
- [ ] Description under 155 characters
- [ ] Canonical tag present
- [ ] og:title, og:description, og:image present
- [ ] twitter:card, twitter:title present
- [ ] No duplicate meta tags

---

### Test 7: Open Graph Validation

#### Facebook Sharing Debugger
```
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter URL: https://www.hastradar.com/
3. Click "Scrape Again" if needed
4. Verify:
   - Title displays correctly
   - Description displays correctly
   - Image displays (og-default.jpg)
   - No errors or warnings
```

#### Twitter Card Validator
```
1. Go to: https://cards-dev.twitter.com/validator
2. Enter URL
3. Verify card preview looks correct
```

---

### Test 8: Mobile-Friendly Test

```
1. Go to: https://search.google.com/test/mobile-friendly
2. Enter URL: https://www.hastradar.com/
3. Verify: "Page is mobile friendly"
4. Check for any mobile usability issues
```

**Manual Mobile Testing:**
- [ ] Test on real mobile device (iOS/Android)
- [ ] Check navigation menu works
- [ ] Verify touch targets are large enough
- [ ] Ensure text is readable without zooming
- [ ] Test form submission

---

### Test 9: Page Speed

#### Google PageSpeed Insights
```
1. Go to: https://pagespeed.web.dev/
2. Enter URL: https://www.hastradar.com/
3. Run test for Mobile and Desktop
4. Review Core Web Vitals:
   - LCP (Largest Contentful Paint) < 2.5s
   - FID (First Input Delay) < 100ms
   - CLS (Cumulative Layout Shift) < 0.1
```

#### GTmetrix
```
1. Go to: https://gtmetrix.com/
2. Test URL
3. Check Performance Score
4. Review Waterfall to identify slow resources
```

**Optimization Checklist:**
- [ ] Images are compressed and in WebP format
- [ ] CSS and JS are minified
- [ ] Fonts use font-display: swap
- [ ] Preconnect to external domains implemented
- [ ] Browser caching configured (.htaccess)
- [ ] Gzip/Brotli compression enabled

---

### Test 10: Security Headers

```bash
# Check security headers
curl -I https://www.hastradar.com/

# Should see these headers:
# Strict-Transport-Security: max-age=31536000
# X-Frame-Options: DENY
# X-Content-Type-Options: nosniff
# Referrer-Policy: no-referrer-when-downgrade
# Content-Security-Policy: [policy string]
```

**Use online tool:**
```
1. Go to: https://securityheaders.com/
2. Enter: https://www.hastradar.com/
3. Target grade: A or A+
```

---

### Test 11: Accessibility

#### WAVE Tool
```
1. Go to: https://wave.webaim.org/
2. Enter URL
3. Check for:
   - 0 errors
   - Resolve critical warnings
   - Verify alt text on all images
   - Check heading structure (one H1 per page)
```

#### Manual Keyboard Navigation
```
- [ ] Tab through entire page
- [ ] All interactive elements are focusable
- [ ] Focus indicators are visible
- [ ] No keyboard traps
```

#### Screen Reader Test
```
- [ ] Test with NVDA (Windows) or VoiceOver (Mac)
- [ ] Verify all content is accessible
- [ ] Links have descriptive text
- [ ] Images have alt text
```

---

### Test 12: Internal Links

```bash
# Check for broken internal links
# Use a crawler like Screaming Frog (free for 500 URLs)

1. Install Screaming Frog SEO Spider
2. Crawl: https://www.hastradar.com/
3. Check:
   - Response Codes (no 404s)
   - Redirect chains (no 3+ redirects)
   - Orphan pages (linked from sitemap but not internal links)
```

**Manual checks:**
- [ ] Footer links work on all pages
- [ ] Navigation menu links work
- [ ] Breadcrumb links work
- [ ] Service page cross-links work
- [ ] Blog internal links work

---

### Test 13: Content Quality

**On-Page SEO Checklist (per page):**
- [ ] One H1 per page with target keyword
- [ ] Logical heading hierarchy (H1 > H2 > H3)
- [ ] Content length 800+ words (service pages)
- [ ] Target keyword in:
  - Title tag
  - Meta description
  - H1 heading
  - First paragraph
  - At least one H2
  - Image alt text (if relevant)
- [ ] Internal links (2-3 minimum)
- [ ] External links to authoritative sources (1-2)
- [ ] Clear CTA (call-to-action)

---

### Test 14: Local SEO

**Google Business Profile:**
- [ ] Name: Hastradar Consultancy
- [ ] Address: House No - 224, Second Floor, Block - A, Pocket - 7, Sector - 17, Rohini, New Delhi 110089
- [ ] Phone: +91 11 2345 6789
- [ ] Website: https://www.hastradar.com
- [ ] Categories: Legal Services, Intellectual Property Attorney
- [ ] NAP consistency across all citations

**Schema Verification:**
- [ ] Organization schema includes geo coordinates
- [ ] Address is complete and formatted correctly
- [ ] Phone numbers match everywhere

---

### Test 15: Analytics Verification

#### Google Analytics 4
```
1. Log into GA4
2. Go to Realtime report
3. Open website in new browser/device
4. Verify your visit appears in Realtime
5. Test event tracking:
   - Click phone number (should fire contact_click event)
   - Click email link (should fire contact_click event)
   - Submit contact form (should fire form_submission event)
```

#### Google Search Console
```
1. Log into GSC
2. Go to Coverage report
3. Verify pages are indexed
4. Check for errors
5. Review Core Web Vitals report
```

---

## Automated Testing Script

Create a simple Node.js script to test critical elements:

```javascript
// test-seo.js
const https = require('https');

const tests = [
    {
        name: 'Homepage returns 200',
        url: 'https://www.hastradar.com/',
        expect: 200
    },
    {
        name: 'Sitemap is accessible',
        url: 'https://www.hastradar.com/sitemap.xml',
        expect: 200
    },
    {
        name: 'robots.txt is accessible',
        url: 'https://www.hastradar.com/robots.txt',
        expect: 200
    },
    {
        name: 'Service page returns 200',
        url: 'https://www.hastradar.com/services/trademark-registration-protection',
        expect: 200
    }
];

tests.forEach(test => {
    https.get(test.url, (res) => {
        if (res.statusCode === test.expect) {
            console.log(`✓ ${test.name}`);
        } else {
            console.log(`✗ ${test.name} - Got ${res.statusCode}`);
        }
    });
});
```

Run with:
```bash
node test-seo.js
```

---

## Post-Launch Monitoring

### Weekly Tasks
- [ ] Check Google Search Console for new errors
- [ ] Monitor Core Web Vitals
- [ ] Review new search queries
- [ ] Check for 404 errors

### Monthly Tasks
- [ ] Run Lighthouse audit
- [ ] Review Analytics data
- [ ] Update blog content calendar
- [ ] Check backlink profile
- [ ] Review keyword rankings

---

## Reporting Template

### SEO Health Report

**Date:** [Date]
**Tested By:** [Name]

#### Lighthouse Scores
- Performance (Mobile): __/100
- Performance (Desktop): __/100
- Accessibility: __/100
- Best Practices: __/100
- SEO: __/100

#### Structured Data
- Organization schema: ✓ / ✗
- Service schema: ✓ / ✗
- FAQPage schema: ✓ / ✗
- Breadcrumb schema: ✓ / ✗
- Errors: [count]

#### Technical SEO
- Sitemap submitted: ✓ / ✗
- robots.txt valid: ✓ / ✗
- Canonical URLs: ✓ / ✗
- HTTPS enforced: ✓ / ✗
- Mobile-friendly: ✓ / ✗

#### Core Web Vitals
- LCP: __s (< 2.5s)
- FID: __ms (< 100ms)
- CLS: __ (< 0.1)

#### Issues Found
1. [Issue description]
2. [Issue description]

#### Recommendations
1. [Recommendation]
2. [Recommendation]

---

## Contact for Issues

- **Technical SEO:** tech@hastradar.com
- **Content/Legal:** legal@hastradar.com
- **Analytics:** marketing@hastradar.com

---

**Document Version:** 1.0
**Last Updated:** November 2024
