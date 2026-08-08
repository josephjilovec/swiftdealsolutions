# Website Architecture

## Experience architecture

### `/`
The primary brand experience. Introduces the private-market thesis and contains four interactive systems:

1. Asset Universe
2. Mandate Builder
3. Representative Profile Explorer
4. Process Rail

### `/opportunities`
Deeper exploration of asset categories and representative presentation profiles.

### `/process`
A process-oriented view of the operating sequence and transaction-stage responsibilities.

### `/submit`
Seller/owner and buyer/acquisition intake flows.

### `/api/inquiry`
Server-side form handler. Validates required fields and sends email via Resend.

### `/api/health`
Simple JSON health endpoint for deployment verification.

## Server/client boundary

Most page copy, metadata, layout, SEO, and content are Server Components. Client Components are limited to stateful interactions:

- header mobile navigation
- viewport reveal effects
- asset-category selector
- mandate builder
- representative profile selector
- process selector
- inquiry form

This avoids turning the entire site into a large client-side bundle.

## Vercel deployment

The application intentionally relies on Vercel's standard Next.js build detection. No custom output directory is configured.
