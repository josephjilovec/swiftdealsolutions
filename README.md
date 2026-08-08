# Swift Deal Solutions — Next.js / Vercel

A production-oriented redesign of Swift Deal Solutions as a full-stack Next.js application for Vercel.

## What changed

The original single-file HTML identity is preserved—deep navy, gold, ivory, editorial serif typography, discreet transaction positioning—but the site is now a modular application with:

- Next.js App Router
- Interactive asset universe
- Interactive private mandate builder
- Representative profile explorer
- Interactive four-stage process rail
- Dedicated Opportunities, Process, and Private Inquiry routes
- Server-side inquiry delivery through Resend REST API
- Vercel Web Analytics and Speed Insights hooks
- Dynamic metadata, sitemap, robots, canonical URLs, JSON-LD
- Responsive layouts and reduced-motion support
- Security headers through `next.config.ts`
- Honeypot spam field and server-side form validation

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production build

```bash
npm run build
npm start
```

## Vercel deployment

Import the GitHub repository into Vercel.

Use the defaults:

- Framework Preset: **Next.js**
- Root Directory: `./`
- Build Command: **Default**
- Output Directory: **Default**
- Install Command: **Default**

Do not set the Output Directory to `dist` or `.next`.

## Required environment variables

Copy `.env.example` to `.env.local` for local development.

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx
CONTACT_TO_EMAIL=realjjemail@gmail.com
CONTACT_FROM_EMAIL=Swift Deal Solutions <inquiries@your-verified-domain.com>
NEXT_PUBLIC_SITE_URL=https://swiftdealsolutions.com
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified by your email provider.

## Vercel features

The app includes the packages for Vercel Web Analytics and Speed Insights. Enable those products for the project in the Vercel dashboard after deployment.

## Inquiry architecture

```text
Browser form
   ↓
POST /api/inquiry
   ↓
Next.js Node.js route handler
   ↓
Resend REST API
   ↓
CONTACT_TO_EMAIL
```

The Resend API key never reaches browser JavaScript.

## Important positioning note

Representative profiles are intentionally labeled as illustrative presentation examples. Do not remove those qualifiers unless the displayed transactions can be substantiated as actual completed Swift Deal Solutions transactions.

Transaction roles and licensing requirements vary by jurisdiction. The site does not replace local legal advice or licensed professionals when required.
