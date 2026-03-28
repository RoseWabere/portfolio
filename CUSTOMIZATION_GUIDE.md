# 🎨 Site Customization Guide
## How to Update Your Portfolio Without Breaking Anything

This guide explains how to customize your portfolio, add new projects, manage blog posts, and understand the styling system — all without needing an admin panel.

---

## 📁 Project Structure Overview

```
personal-portfolio/
├── app/
│   ├── globals.css          ← Global styles & semantic colors
│   ├── layout.tsx            ← Fonts & meta tags
│   └── page.tsx              ← Homepage (combines sections)
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         ← Homepage hero
│   │   ├── SystemsShowcase.tsx  ← Projects grid
│   │   ├── BlogSection.tsx  ← Blog articles
│   │   └── Contact.tsx      ← Contact form
│   ├── SystemCard.tsx       ← Reusable project card
│   ├── Navigation.tsx       ← Top nav bar
│   └── Footer.tsx           ← Bottom footer
├── public/
│   └── images/
│       ├── projects/        ← Put project screenshots here
│       └── blog/            ← Put blog thumbnails here (optional)
├── tailwind.config.js       ← Design system colors & fonts
└── content/
    └── systems/             ← MDX files for detailed case studies
```

---

## 🎨 Styling System Explained

### Semantic Color System

The site uses **semantic color variables** so you can change the entire theme by editing just a few values.

**Location:** `app/globals.css` (lines 3-13)

```css
:root {
  --background: #FAFAFA;      /* Main page background (off-white) */
  --surface: #FFFFFF;         /* Card/section background (pure white) */
  --text: #1A1A1A;            /* Primary text color (almost black) */
  --text-muted: #6B7280;      /* Secondary text (gray) */
  --text-light: #9CA3AF;      /* Tertiary text (light gray) */
  --border: #E5E7EB;          /* Default border color */
  --border-light: #F3F4F6;    /* Light border */
  --primary: #0D9488;         /* Accent color (teal) */
  --primary-hover: #0A7770;   /* Hover state for teal */
}
```

**How to customize:**

1. Open `app/globals.css`
2. Change the hex color values in `:root {}`
3. Save file
4. Refresh browser — entire site updates!

**Example:** To change from teal to blue:
```css
--primary: #3B82F6;         /* Blue instead of teal */
--primary-hover: #2563EB;   /* Darker blue for hover */
```

### Section Background Shading

Sections alternate between three shades for visual separation:

- `.section-white` - Pure white (`#FFFFFF`)
- `.section-gray` - Off-white (`#FAFAFA`) 
- `.section-light` - Very light gray (`#F9FAFB`)

**Current pattern:**
1. Hero → White
2. Systems → Gray
3. Blog → White
4. Contact → Gray

**To change:** Edit the className in each section file:
```tsx
<section className="section-white">  ← Change to section-gray
```

### Typography

**Fonts are defined in:** `app/layout.tsx`

```tsx
const inter = Inter({ ... })      // Body text
const sora = Sora({ ... })        // Headings
```

**To change fonts:**

1. Open `app/layout.tsx`
2. Import new Google Font:
   ```tsx
   import { YourFont } from 'next/font/google'
   ```
3. Replace Inter or Sora
4. Update `tailwind.config.js`:
   ```js
   fontFamily: {
     sans: ['YourFont', 'system-ui'],
   }
   ```

### Spacing & Shadows

**Spacing scale:** Default Tailwind (4px increments)
- `p-4` = 16px padding
- `mb-6` = 24px margin-bottom
- `gap-8` = 32px gap

**Shadows:** Defined in `tailwind.config.js`
```js
boxShadow: {
  'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
  'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
  'strong': '0 8px 24px rgba(0, 0, 0, 0.12)',
}
```

Use with `shadow-soft`, `shadow-medium`, `shadow-strong`.

---

## 🚀 Adding New Projects

### Method 1: Quick Add (Showcase Section)

**Location:** `components/sections/SystemsShowcase.tsx`

**Steps:**

1. Open `SystemsShowcase.tsx`
2. Find the `flagshipSystems` array (starts around line 7)
3. Add new project object:

```tsx
{
  id: 'my-new-project',           // Unique slug (lowercase, no spaces)
  badge: 'CATEGORY · TYPE',       // e.g., 'ML · ANALYTICS'
  title: 'Project Title',
  role: 'Your Role',
  description: 'Brief description (2-3 sentences)',
  stack: ['Tech1', 'Tech2', 'Tech3'],
  liveUrl: 'https://...',         // Optional
  githubUrl: 'https://github...', // Optional
  impact: 'Key metric or outcome',
  image: '/images/projects/my-new-project.png',  // See image section below
}
```

4. Save file
5. Project appears automatically on homepage!

### Adding Project Screenshots

**Required for professional appearance:**

1. **Take screenshot** of your live project:
   - Full page screenshot (1200x800px recommended)
   - Or dashboard view
   - Or architecture diagram

2. **Optimize image:**
   - Use PNG or JPG
   - Keep under 500KB
   - Recommended: 1200x800px

3. **Add to project:**
   ```
   public/images/projects/your-project-name.png
   ```

4. **Reference in code:**
   ```tsx
   image: '/images/projects/your-project-name.png'
   ```

**If no image:** Placeholder shows automatically with instructions.

### Method 2: Detailed Case Study (MDX)

For in-depth technical write-ups:

1. Create file: `content/systems/project-name.mdx`

2. Use this template:
```mdx
---
title: "Full Project Title"
badge: "CATEGORY · TYPE"
role: "Your Role"
description: "Brief description"
stack: ["Tech1", "Tech2"]
liveUrl: "https://..."
githubUrl: "https://github..."
featured: true
impact: "Key outcome"
---

## Problem Context
What problem did you solve?

## System Architecture
How did you design the system?

## Pipeline Breakdown
Technical details...

## Tech Decisions
Why did you choose X over Y?

## Challenges & Solutions
What went wrong? How did you fix it?

## Output & Impact
Results, metrics, business outcomes
```

3. Save file
4. Project appears in `/systems` page
5. If `featured: true`, also appears on homepage

---

## 📝 Managing Blog Posts

### How Blog Posts Work

**Blog posts are automatically pulled from:**
- Medium RSS feed
- Dev.to API

**No manual entry needed!** When you publish on Medium or Dev.to, the post automatically appears on your site (updates every hour).

### Setup Blog Integration

**Step 1: Configure RSS Feeds**

Create `.env.local` in project root:

```env
# Medium RSS Feed
MEDIUM_RSS_URL=https://medium.com/feed/@yourusername

# Dev.to Username
DEVTO_USERNAME=yourusername
```

**Step 2: Posts Auto-Update**

When site builds (or every hour in production):
1. Fetches latest posts from Medium & Dev.to
2. Extracts title, excerpt, category, date
3. Shows on `/blog` page automatically

**No admin panel needed!** Just publish on Medium/Dev.to.

### Blog Post Thumbnails

**Automatic:** Thumbnails are fetched from Medium/Dev.to article covers.

**Manual override:** If you want custom thumbnails:

1. Add image: `public/images/blog/post-slug.png`
2. Edit `lib/rss.ts` to map custom images

**Fallback:** If no image, shows placeholder with article icon.

### Temporary Blog Posts (Before RSS)

If RSS not set up yet, edit `components/sections/BlogSection.tsx`:

Replace the `blogPosts` array with your own:

```tsx
const blogPosts = [
  {
    title: 'Your Article Title',
    excerpt: 'Brief summary...',
    category: 'Data Engineering',
    date: '2024-03-20',
    readTime: '5 min read',
    image: '/images/blog/article.png',  // Optional
    link: 'https://medium.com/@you/article',
  },
  // Add more...
]
```

These show until RSS is configured.

---

## 🔧 Common Customizations

### Change Primary Color (Teal → Another Color)

**File:** `app/globals.css` + `tailwind.config.js`

1. Update CSS variable:
```css
--primary: #YOUR_COLOR;
--primary-hover: #DARKER_SHADE;
```

2. Update Tailwind config:
```js
primary: {
  500: '#YOUR_COLOR',
  600: '#DARKER_SHADE',
}
```

### Change Fonts

**File:** `app/layout.tsx`

```tsx
// Replace Inter with your choice
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
```

### Update Contact Form

**File:** `components/sections/Contact.tsx`

1. Get Formspree ID: https://formspree.io
2. Replace line 18:
```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

With your actual Formspree form ID.

### Change Navigation Links

**File:** `components/Navigation.tsx`

Edit the nav links (around line 26):

```tsx
<Link href="/#systems">Systems</Link>
<Link href="/#blog">Blog</Link>
<Link href="/#contact">Contact</Link>
```

Add or remove as needed.

### Update Footer Info

**File:** `components/Footer.tsx`

Change text around line 11:

```tsx
<p className="text-text-muted text-sm">
  Data Engineer · Nairobi, Kenya · Founder, Data Scout KE
</p>
```

---

## 📸 Image Management Guide

### Project Screenshots

**Purpose:** Show what you built visually

**Location:** `public/images/projects/`

**Naming:** Use project ID from SystemsShowcase.tsx
- Project ID: `safari-scout`
- Image name: `safari-scout.png`

**Size:** 1200x800px recommended

**Types that work well:**
- Full webpage screenshot
- Dashboard view
- Architecture diagram
- Code snippets with syntax highlighting
- Before/after comparison

### Blog Thumbnails

**Purpose:** Visual preview of article

**Location:** `public/images/blog/`

**Auto-fetched:** From Medium/Dev.to if available

**Manual:** Only if you want custom override

### Hero Image

**Purpose:** Professional photo or abstract illustration

**Location:** `public/images/hero-illustration.png`

**Current:** Placeholder icon

**Replace with:**
- Abstract data visualization
- Minimalist tech illustration
- Professional headshot
- Workspace photo

**Size:** 800x800px square

---

## 🚨 Troubleshooting

### Images Not Showing

**Check:**
1. File is in `/public/images/` folder
2. Path starts with `/images/` (no `/public/`)
3. File name matches exactly (case-sensitive)
4. Restart dev server: `npm run dev`

### Styles Not Updating

**Fix:**
1. Stop dev server (Ctrl+C)
2. Delete `.next` folder
3. Run `npm run dev` again

### Form Not Sending

**Check:**
1. Formspree ID is correct
2. Internet connection active
3. Browser console for errors (F12)

---

## 📚 File Reference

### Must Edit for Your Info
- `components/sections/SystemsShowcase.tsx` - Projects
- `components/Footer.tsx` - Your details
- `.env.local` - RSS feeds, Formspree ID

### Styling
- `app/globals.css` - Colors, spacing
- `tailwind.config.js` - Design system
- `app/layout.tsx` - Fonts

### Content
- `content/systems/*.mdx` - Case studies
- `public/images/` - All images

### Optional
- `components/Navigation.tsx` - Nav links
- `components/sections/Hero.tsx` - Hero text
- `lib/rss.ts` - Blog fetch logic

---

## ✅ Deployment Checklist

Before deploying:

- [ ] Replace hero image placeholder
- [ ] Add project screenshots (all 6)
- [ ] Update footer with your info
- [ ] Configure Formspree for contact form
- [ ] Set up RSS feeds (.env.local)
- [ ] Test all external links
- [ ] Check mobile responsiveness

---

## 💡 Pro Tips

1. **Consistent sizing:** Keep all project screenshots same aspect ratio (1200x800)

2. **Optimize images:** Use tools like TinyPNG before adding

3. **Blog frequency:** Publish 1-2 articles/month for steady content

4. **Case studies:** Write detailed MDX for 2-3 flagship projects

5. **Update regularly:** Add new projects every 2-3 months

---

## 🆘 Need Help?

**Check:**
1. This guide first
2. README.md in project root
3. Component comments in code
4. Next.js docs: https://nextjs.org/docs

**Still stuck?**
- Create GitHub issue
- Check component source code
- Console errors (F12 in browser)

---

**Last Updated:** March 26, 2026  
**Version:** 2.0 (Light Theme Edition)
