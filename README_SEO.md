# SEO Implementation Guide for Hastradar Consultancy

## Overview
This document outlines SEO best practices and maintenance procedures for the Hastradar Consultancy website.

## 1. Meta Tags & Titles

### Title Template
For service pages: `{Service Name} | Hastradar Consultancy - IPR, Arbitration & Corporate Law`

For home page: `Hastradar Consultancy — IPR · Arbitration · Cyber & Corporate Law`

**Best Practices:**
- Keep titles under 60 characters
- Include primary keyword near the beginning
- Make each title unique across the site

### Meta Description Template
`{1-line service summary}. Expert legal advisory for businesses, startups & MSMEs. Contact: +91 11 2345 6789.`

**Best Practices:**
- Keep under 155 characters
- Include a call-to-action
- Use natural language, not keyword stuffing
- Make each description unique

## 2. Structured Data (JSON-LD)

### Organization Schema
Located in the `<head>` of every page. Update if company details change.

### Service Schema
Add to each service page with:
- `serviceType`: The specific legal service
- `provider`: Link to Organization schema
- `areaServed`: ["IN", "Global"]
- `description`: 1-2 sentence overview

### FAQ Schema
Minimum 3 Q&A pairs per service page. Questions should reflect actual user queries from:
- Google autocomplete
- People Also Ask
- Client inquiries

### Breadcrumb Schema
Add to all pages except homepage. Must match visible breadcrumb navigation.

## 3. Image Optimization

### Alt Text Pattern
`{Subject} — Hastradar Consultancy`

Example: `Trademark registration process — Hastradar Consultancy`

**Best Practices:**
- Be descriptive but concise (under 125 characters)
- Include context relevant to the page
- Don't start with "Image of" or "Picture of"
- Don't keyword stuff

### Image Naming
Use descriptive filenames with hyphens:
- Good: `trademark-filing-workflow.jpg`
- Bad: `IMG_1234.jpg`

### Formats
- Use WebP with JPEG/PNG fallback
- Provide multiple sizes via `srcset`
- Implement lazy loading for below-the-fold images

## 4. Content Guidelines

### Service Pages
Each service page must include:

1. **H1 heading** with primary keyword
   - Pattern: `{Service Name} — Hastradar Consultancy`
   
2. **Word count**: 800-1,500 words minimum
   
3. **Content structure**:
   - Introduction (what is the service?)
   - Benefits (why choose this service?)
   - Process (how does it work?)
   - Who needs it (target audience)
   - FAQ section (3-8 Q&A)
   
4. **Internal links**: Minimum 2-3 to related services or blog posts
   
5. **CTAs**: At least 2 (top and bottom of page)

### Blog Posts

#### SEO Checklist for Each Post:
- [ ] Target keyword identified
- [ ] Title includes target keyword (under 60 chars)
- [ ] Meta description written (under 155 chars)
- [ ] URL slug is clean (lowercase, hyphens, no stop words)
- [ ] H1 includes target keyword
- [ ] Minimum 1,200 words
- [ ] 2-3 internal links to service pages
- [ ] 1-2 external citations to authoritative sources
- [ ] Images have descriptive alt text
- [ ] FAQ section at end (if applicable)
- [ ] Author bio added
- [ ] Categories and tags assigned

#### Primary Keywords to Target:
- intellectual property consultant India
- IPR consultant India
- trademark registration India
- patent filing India
- arbitration services India
- corporate law consultant Delhi
- legal process outsourcing India
- cyber law consultant India
- legal tech solutions India

#### Long-tail Blog Topics:
1. "How to register a trademark in India — step by step"
2. "Patent filing in India: common mistakes & how to avoid them"
3. "When should startups outsource legal work? LPO benefits for MSMEs"
4. "Cyber law compliance checklist for fintech startups in India"
5. "Understanding arbitration vs litigation for business disputes"
6. "IP portfolio management for growing startups"
7. "Data protection compliance for Indian e-commerce businesses"
8. "Copyright registration process in India explained"
9. "How to choose the right trademark class in India"
10. "Legal considerations for AI and machine learning products"

## 5. URL Structure

### Pattern
`/services/{service-slug}`
`/blog/{post-slug}`

### Rules
- All lowercase
- Use hyphens, not underscores
- Remove stop words (a, an, the, of)
- Keep under 60 characters
- Match primary keyword where possible

Examples:
- Good: `/services/trademark-registration-protection`
- Bad: `/services/Trademark_Registration_and_Protection_Services`

## 6. Canonical URLs

Every page must have a canonical tag pointing to its preferred URL:

```html
<link rel="canonical" href="https://www.hastradar.com/services/trademark-registration-protection">
```

**Canonical Domain**: `https://www.hastradar.com` (www with HTTPS)

All other variations should 301 redirect:
- http://hastradar.com → https://www.hastradar.com
- https://hastradar.com → https://www.hastradar.com
- http://www.hastradar.com → https://www.hastradar.com

## 7. Site Performance

### Target Metrics (Lighthouse)
- Performance: ≥ 90
- Accessibility: ≥ 95
- Best Practices: ≥ 95
- SEO: 100

### Optimization Checklist
- [ ] Images optimized and properly sized
- [ ] CSS/JS minified
- [ ] Unused CSS removed
- [ ] Fonts use `font-display: swap`
- [ ] Preconnect to external domains
- [ ] Critical resources preloaded
- [ ] Lazy loading for below-fold images
- [ ] Browser caching configured
- [ ] Gzip/Brotli compression enabled

## 8. Analytics & Tracking

### Google Analytics 4
Tag ID should be in environment variable or config file.

**Key Events to Track:**
- Form submissions
- Phone number clicks
- Email clicks
- Button clicks (CTAs)
- PDF downloads
- Outbound links

### Google Search Console
- Property verified at root domain
- Sitemap submitted
- Weekly monitoring of:
  - Coverage issues
  - Core Web Vitals
  - Mobile usability
  - Manual actions

## 9. Local SEO

### Google Business Profile
Ensure NAP (Name, Address, Phone) consistency:
- **Name**: Hastradar Consultancy
- **Address**: House No - 224, Second Floor, Block - A, Pocket - 7, Sector - 17, Rohini, New Delhi 110089
- **Phone**: +91 11 2345 6789, +91 9811343159
- **Email**: info@hastradar.com

### Local Citations
Submit to:
- Google Business Profile
- Justdial
- Sulekha
- IndiaMART
- Legal directories (Bar Council listings)
- Industry-specific directories

## 10. Link Building & Outreach

See `SEO/backlink-outreach.md` for detailed outreach strategy.

**Quick Tips:**
- Focus on quality over quantity
- Target industry-relevant sites
- Create linkable assets (guides, infographics, case studies)
- Guest post on legal blogs and startup resources
- Get listed in government/educational resources

## 11. Regular Maintenance Tasks

### Weekly
- Check Google Search Console for errors
- Monitor Core Web Vitals
- Review new search queries

### Monthly
- Run Lighthouse audit
- Update blog content calendar
- Review and update meta descriptions for low CTR pages
- Check for broken links
- Monitor backlink profile

### Quarterly
- Audit and update old content
- Review keyword rankings
- Analyze competitor SEO strategies
- Update FAQs based on new common questions
- Review and optimize underperforming pages

## 12. Content Addition Workflow

When adding a new page or blog post:

1. **Research**
   - Identify target keyword
   - Check search volume and difficulty
   - Analyze top-ranking competitors
   
2. **Create**
   - Write content following guidelines above
   - Add meta tags (title, description)
   - Create/optimize images
   - Add structured data
   
3. **Technical**
   - Set clean URL slug
   - Add canonical tag
   - Add to sitemap.xml
   - Create internal links from existing pages
   
4. **Review**
   - Run through SEO checklist
   - Test on mobile
   - Validate structured data
   - Check page speed
   
5. **Publish & Promote**
   - Submit URL to Google Search Console
   - Share on social media
   - Send in newsletter (if applicable)
   - Notify relevant stakeholders

## 13. Tools & Resources

### Free Tools
- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- Google Rich Results Test
- Lighthouse (in Chrome DevTools)
- Mobile-Friendly Test

### Recommended Paid Tools
- Ahrefs or SEMrush (keyword research, backlinks)
- Screaming Frog (site audits)
- GTmetrix (performance monitoring)

## 14. Common Issues & Solutions

### Issue: Page not indexed
**Solution**: Check robots.txt, add to sitemap, submit via Search Console

### Issue: Low CTR in search results
**Solution**: Rewrite meta title/description to be more compelling

### Issue: High bounce rate
**Solution**: Improve page load speed, add clear CTAs, ensure content matches search intent

### Issue: Duplicate content
**Solution**: Use canonical tags, consolidate similar pages, add unique content

### Issue: Poor mobile performance
**Solution**: Optimize images, reduce JavaScript, improve server response time

## 15. Contact for SEO Issues

For technical SEO issues or questions about this guide, contact:
- Technical Team: tech@hastradar.com
- For content/legal review: legal@hastradar.com

---

**Last Updated**: November 2024
**Next Review**: February 2025
