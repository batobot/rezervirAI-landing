# RezervirAI Landing Page

Production-ready landing page for RezervirAI - an AI-powered WhatsApp VIP table reservation system for clubs and event venues.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Run development server
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build
# or
yarn build
# or
pnpm build

# Start production server
npm run start
# or
yarn start
# or
pnpm start
```

## 🎨 Customization

### Brand Tokens

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --brand-primary: #7C3AED;    /* Main purple */
  --brand-secondary: #A78BFA;  /* Soft lavender */
  --brand-accent: #C084FC;     /* Light purple */
}
```

### Company Information

Update these files with your information:
- `app/layout.tsx` - Meta tags and SEO
- `components/Hero.tsx` - Main headline and tagline
- `components/Footer.tsx` - Company details

### Images

Replace placeholder images in `/public/img/`:
- `product-hero.png` - Main product screenshot
- `app-mock.png` - Application mockup
- `og.png` - Open Graph preview image (1200x630px)
- `favicon.ico` - Browser favicon

## 📧 Contact Form Integration

The contact form currently logs submissions to console. To integrate with an email service:

1. Install email provider SDK (e.g., Resend):
```bash
npm install resend
```

2. Update `app/api/contact/route.ts` with your email service configuration (example code included in comments)

3. Add environment variables:
```bash
RESEND_API_KEY=your-api-key
```

## 🔧 Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icon library

## 📱 Features

- ✅ Fully responsive (320px to 1440px+)
- ✅ Mobile-friendly navigation
- ✅ Smooth scroll animations
- ✅ WCAG 2.1 AA+ compliant
- ✅ SEO optimized
- ✅ Performance optimized
- ✅ No third-party tracking
- ✅ Privacy-first design

## 🎯 Performance

Target Lighthouse scores:
- Performance: 95+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 📄 License

© 2025 RezervirAI. All rights reserved.

## 🤝 Support

For questions or support, contact: contact@rezervirai.com
