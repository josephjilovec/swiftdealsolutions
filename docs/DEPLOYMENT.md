# Deployment Checklist

1. Push this repository to GitHub.
2. Import the repository in Vercel.
3. Confirm Framework Preset is Next.js.
4. Leave Build Command, Install Command, and Output Directory on Default.
5. Add environment variables from `.env.example`.
6. Deploy.
7. Test the generated `.vercel.app` URL before assigning the custom domain.
8. Test `/api/health`.
9. Test one seller inquiry and one buyer inquiry.
10. Enable Web Analytics and Speed Insights in Vercel.
11. Add `swiftdealsolutions.com` and `www.swiftdealsolutions.com` to the verified production project.
12. Confirm the production branch is `main`.

## Domain migration rule

Do not attach the production domain to a new Vercel project until its temporary Vercel URL has successfully built and loaded.
