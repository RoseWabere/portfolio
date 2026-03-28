# Rose Wabere - Personal Portfolio

**Production-ready portfolio website with clean light theme, professional styling, and automatic blog integration.**

## 🎯 Design Philosophy

- **Light & Clean:** Off-white backgrounds with high contrast text
- **Semantic Colors:** Easy theme customization via CSS variables
- **Professional:** No dark themes, no noise, no unnecessary effects
- **Accessible:** High contrast, readable typography, clear hierarchy
- **Image-First:** Project screenshots and blog thumbnails for visual impact

## 🎨 Styling System

### Semantic Color Variables

All colors defined in `app/globals.css`:

```css
--background: #FAFAFA;    /* Main background */
--surface: #FFFFFF;       /* Cards/sections */
--text: #1A1A1A;          /* Primary text */
--text-muted: #6B7280;    /* Secondary text */
--primary: #0D9488;       /* Teal accent */
```

**Change entire theme** by editing these variables!

### Section Shading

Visual separation through subtle background variations:

- Hero → White (`section-white`)
- Systems → Gray (`section-gray`)
- Blog → White (`section-white`)
- Contact → Gray (`section-gray`)

### Typography

- **Headings:** Sora (bold, modern)
- **Body:** Inter (clean, readable)
- **Code:** JetBrains Mono (monospace)

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
personal-portfolio/
├── app/
│   ├── globals.css              # Semantic colors & styles
│   ├── layout.tsx                # Fonts & metadata
│   └── page.tsx                  # Homepage
├── components/
│   ├── sections/
│   │   ├── Hero.tsx             # Hero with image
│   │   ├── SystemsShowcase.tsx  # Projects grid
│   │   ├── BlogSection.tsx      # Blog articles
│   │   └── Contact.tsx          # Contact form (no WhatsApp)
│   ├── SystemCard.tsx           # Project card with image
│   ├── Navigation.tsx
│   └── Footer.tsx
├── lib/
│   ├── github.ts                # GitHub API (optional)
│   └── rss.ts                   # Blog RSS feeds
├── public/
│   └── images/
│       ├── projects/            # Project screenshots
│       ├── blog/                # Blog thumbnails
│       └── hero-illustration.png
├── tailwind.config.js           # Design system
└── CUSTOMIZATION_GUIDE.md       # Full customization docs
```

## 🖼️ Image Management

### Project Screenshots

**Location:** `/public/images/projects/`

**Naming:** Match project ID:
- Project ID: `safari-scout`
- Image: `safari-scout.png`

**Size:** 1200x800px recommended

**Supported formats:** PNG, JPG, WebP

### Blog Thumbnails

**Auto-fetched** from Medium/Dev.to RSS feeds (if available).

**Manual override:** `/public/images/blog/article-name.png`

### Hero Image

**Location:** `/public/images/hero-illustration.png`

**Replace placeholder with:**
- Professional headshot
- Abstract data visualization
- Minimalist tech illustration
- Workspace photo

**Size:** 800x800px square

## 🚀 Adding Projects

### Quick Method

Edit `components/sections/SystemsShowcase.tsx`:

```tsx
{
  id: 'project-name',
  badge: 'CATEGORY · TYPE',
  title: 'Project Title',
  role: 'Your Role',
  description: 'Brief description',
  stack: ['Tech1', 'Tech2'],
  liveUrl: 'https://...',
  githubUrl: 'https://github...',
  impact: 'Key metric',
  image: '/images/projects/project-name.png',
}
```

Add screenshot to `/public/images/projects/project-name.png`

**Project appears automatically!**

## 📝 Blog Integration

### Automatic RSS Feeds

Blogs auto-update from Medium & Dev.to:

**Setup:** Create `.env.local`:

```env
MEDIUM_RSS_URL=https://medium.com/feed/@yourusername
DEVTO_USERNAME=yourusername
```

**Posts update every hour automatically.**

### How It Works

1. RSS parser fetches latest posts
2. Extracts title, excerpt, date, category
3. Pulls thumbnail from article cover
4. Displays in grid layout

**No manual entry needed!**

## 🔧 Customization

See **[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)** for:

- Changing colors & fonts
- Adding/removing sections
- Managing images
- Updating contact info
- Advanced styling

## 📧 Contact Form

### Setup Formspree

1. Create account: https://formspree.io
2. Create new form
3. Copy form ID
4. Update `components/sections/Contact.tsx`:

```tsx
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

Or add to `.env.local`:

```env
NEXT_PUBLIC_FORMSPREE_ID=your_form_id
```

## 🌐 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Add Custom Domain

Vercel Dashboard → Settings → Domains → Add `yourdomain.com`

### Environment Variables

Add in Vercel dashboard:

- `GITHUB_TOKEN` (optional)
- `NEXT_PUBLIC_FORMSPREE_ID` (required)
- `MEDIUM_RSS_URL` (optional)
- `DEVTO_USERNAME` (optional)

## 🔒 Privacy & Security

- ✅ No WhatsApp (removed for privacy)
- ✅ Email via Formspree (server-side)
- ✅ No exposed API keys
- ✅ Environment variables only

## 📊 SEO Optimized

- Semantic HTML
- Meta tags configured
- OpenGraph for social sharing
- Descriptive alt text
- Structured data ready

## ♿ Accessibility

- High contrast text
- Semantic HTML elements
- ARIA labels on icons
- Keyboard navigation
- Screen reader friendly

## 🎯 What's Different from v1.0

### Removed
- ❌ Dark theme
- ❌ Noise textures
- ❌ Gradient overlays
- ❌ WhatsApp integration
- ❌ Emojis

### Added
- ✅ Clean light theme
- ✅ Semantic color system
- ✅ Project screenshots
- ✅ Blog thumbnails
- ✅ Section shading
- ✅ Comprehensive customization guide

## 📚 Documentation

- **README.md** (this file) - Overview & quick start
- **CUSTOMIZATION_GUIDE.md** - Detailed customization
- **Component comments** - Inline documentation

## 🆘 Troubleshooting

### Images not showing

1. Check file path starts with `/images/` (not `/public/images/`)
2. Verify file exists in `/public/images/`
3. Restart dev server

### Styles not updating

```bash
rm -rf .next
npm run dev
```

### Blog posts not loading

1. Check `.env.local` has correct RSS URLs
2. Verify Medium/Dev.to usernames
3. Check browser console for errors

## 📞 Support

**Documentation:**
- CUSTOMIZATION_GUIDE.md (comprehensive)
- Component code comments
- Next.js docs: https://nextjs.org/docs

**Issues:**
- Check console errors (F12)
- Review component source
- Verify environment variables

---

**Version:** 2.0 (Light Theme)  
**Last Updated:** March 26, 2026  
**Built For:** Rose Wabere
