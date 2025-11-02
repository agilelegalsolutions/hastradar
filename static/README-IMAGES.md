# Image Assets for Hastradar Consultancy

## Required Images

### 1. Open Graph / Social Media Image
**Filename:** `og-default.jpg`
**Location:** `/static/og-default.jpg`
**Dimensions:** 1200 × 630 pixels
**Format:** JPEG or PNG
**Max Size:** < 1MB

**Content:**
- Hastradar Consultancy logo
- Tagline: "IPR · Arbitration · Cyber & Corporate Law"
- Professional legal/corporate background
- Blue color scheme (#1e3a8a, #3730a3)

### 2. Company Logo
**Filename:** `logo.png`
**Location:** `/static/logo.png`
**Dimensions:** 500 × 500 pixels (square) or similar
**Format:** PNG with transparency
**Max Size:** < 100KB

**Variations needed:**
- `logo.png` - Full color
- `logo-white.png` - White version for dark backgrounds
- `favicon.ico` - 32×32, 16×16 sizes

### 3. Service Page Images
**Location:** `/static/services/`

- `trademark-og.jpg` (1200×630) - For trademark service page
- `patent-og.jpg` (1200×630) - For patent service page
- `arbitration-og.jpg` (1200×630) - For arbitration service page
- `legal-tech-og.jpg` (1200×630) - For legal tech service page

### 4. Blog Featured Images
**Location:** `/static/blog/`
**Dimensions:** 1200 × 630 pixels
**Format:** WebP with JPEG fallback

Examples needed:
- `trademark-guide-featured.webp`
- `patent-mistakes-featured.webp`
- `lpo-benefits-featured.webp`
- `cyber-compliance-featured.webp`

## Image Optimization Guidelines

### Compression
- Use tools like TinyPNG, ImageOptim, or Squoosh
- Target: < 200KB for featured images
- Target: < 100KB for thumbnails

### Format Selection
- **Photos:** WebP with JPEG fallback
- **Logos/Icons:** SVG or PNG with transparency
- **Social Cards:** JPEG (better compatibility)

### Responsive Images
Provide multiple sizes for responsive loading:

```html
<img 
  srcset="image-400.webp 400w,
          image-800.webp 800w,
          image-1200.webp 1200w"
  sizes="(max-width: 600px) 400px,
         (max-width: 1200px) 800px,
         1200px"
  src="image-800.jpg"
  alt="Descriptive alt text — Hastradar Consultancy"
  loading="lazy"
>
```

### Alt Text Pattern
Follow this pattern for all images:

```
{Subject/Content description} — Hastradar Consultancy
```

Examples:
- "Trademark registration process flowchart — Hastradar Consultancy"
- "Patent filing steps in India — Hastradar Consultancy"
- "Legal consultation for startups — Hastradar Consultancy"

## Placeholder Images

Until actual images are created, use placeholder services or solid color backgrounds with icons:

### For Development
Use Font Awesome icons on colored backgrounds:
```html
<div class="bg-blue-800 h-48 flex items-center justify-center">
    <i class="fas fa-copyright text-white text-6xl"></i>
</div>
```

### For Social Cards (temporary)
Use Canva or similar tools to create simple cards with:
- Company name
- Service/page title
- Icon or simple graphic
- Brand colors

## Image File Naming Convention

Use descriptive, SEO-friendly filenames:

✅ Good:
- `trademark-registration-process.jpg`
- `patent-filing-workflow-india.webp`
- `arbitration-services-delhi.jpg`

❌ Bad:
- `IMG_1234.jpg`
- `DSC_5678.png`
- `image1.jpg`

## Image Credits

If using stock photos, maintain credits in this file:

| Image | Source | License | Credit |
|-------|--------|---------|--------|
| og-default.jpg | [Source] | [License] | [Artist] |
| ... | ... | ... | ... |

## To-Do

- [ ] Create og-default.jpg (1200×630)
- [ ] Create logo.png (500×500)
- [ ] Create favicon.ico (32×32, 16×16)
- [ ] Create 4 service page OG images
- [ ] Create 4 blog featured images
- [ ] Optimize all images (< 200KB each)
- [ ] Generate WebP versions
- [ ] Add alt text to all images in HTML
- [ ] Test image loading on mobile devices

## Image Hosting

For production:
- Host images on same domain (https://www.hastradar.com/static/)
- Use CDN if traffic grows (e.g., Cloudflare, AWS CloudFront)
- Implement lazy loading for below-the-fold images
- Serve responsive images via srcset

---

**Last Updated:** November 2024
**Maintained By:** Marketing/Design Team
