# Swift Deal Solutions

Public website for asset placement and transaction coordination across real estate, collector automobiles, and marine assets.

## Development

```bash
npm install
npm run dev
```

Run npm run lint and npm run build before deploying. Use Vercel's default Next.js build settings with the repository root as the project root.

## Public routes

- / — asset categories and transaction process
- /opportunities — illustrative asset profiles
- /process — stages and responsibilities
- /privacy — privacy-coordination services
- /submit — inquiry form
- /api/health — deployment health response
- /api/inquiry — server-side inquiry delivery

## Inquiry configuration

Use .env.example for the required environment-variable names. Configure a verified sender, recipient, and Resend API key in server-side environment variables. Never put live keys in source control or browser code.

## Public content

Representative profiles are illustrative examples. Transaction roles and professional requirements vary by jurisdiction; preserve the relevant qualifications and disclosures in public copy.

Deployment instructions are in docs/DEPLOYMENT.md. Internal creative direction, implementation history, and commercial working notes are maintained separately.
