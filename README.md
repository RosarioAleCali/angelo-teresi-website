# Dr. Angelo Teresi — Website

Official website for Dr. Angelo Teresi's medical practice in Palermo, Italy, covering aesthetic medicine treatments, nutrition, and personal training services. Built with Next.js and deployed on Vercel.

**Live site:** [www.drangeloteresi.com](https://www.drangeloteresi.com/)

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS 4](https://tailwindcss.com)
- [Framer Motion](https://motion.dev) for animations
- [Leaflet](https://leafletjs.com) / react-leaflet for the location map
- [react-hook-form](https://react-hook-form.com) + Google reCAPTCHA + [Nodemailer](https://nodemailer.com) for the contact form
- Vercel Analytics & Speed Insights

## Getting Started

Requires Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the project root. Without it the site runs, but the contact form and reviews won't be functional.

| Variable | Purpose |
| --- | --- |
| `RECAPTCHA_SITE_KEY` | Google reCAPTCHA site key (contact form widget) |
| `RECAPTCHA_SECRET_KEY` | Google reCAPTCHA secret key (server-side verification) |
| `EMAIL_USER` | SMTP account used to send contact form emails |
| `EMAIL_PASSWORD` | SMTP account password |
| `CONTACT_EMAIL` | Recipient address for contact form submissions |
| `GOOGLE_PLACES_API_KEY` | Google Places API key (Google reviews) |
| `PLACE_ID` | Google Places ID of the practice (Google reviews) |

> **Note:** the Google Reviews section (`sections/Reviews/`) is currently disabled — it's commented out on every page — so the two Google Places variables are only needed if you re-enable it.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/         Routes (App Router) and API endpoints
components/  Reusable UI components
sections/    Page-level sections (hero, treatments, reviews, ...)
constants.ts Site content: menu items, links, treatment details
context/     React context providers
hooks/       Custom React hooks
utils/       Helpers (debounce, Meta Pixel tracking, ...)
public/      Static assets
```

## License

The source code is available for reference. All photos, logos, branding, and medical content are © Dr. Angelo Teresi — all rights reserved; they may not be reused without permission.
