# ZENTROX DEVELOPER PRIVATE LIMITED – Corporate Website

A modern, responsive, SEO-friendly corporate website for **ZENTROX DEVELOPER PRIVATE LIMITED**, a technology company based in Lucknow, India, specializing in Information Technology design, software development, software licensing, database solutions, and software distribution services.

## Key Technologies

- **Framework:** [TanStack Start](https://tanstack.com/start) (React-based SSR/SSG framework)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons/Graphics:** Inline SVGs + emoji icons
- **Forms:** [Netlify Forms](https://docs.netlify.com/forms/setup/) (serverless form handling)
- **Routing:** TanStack Router (file-based routing)
- **Build Tool:** Vite
- **Deployment:** Netlify

## Pages

| Route | Description |
|---|---|
| `/` | Home – Hero, services overview, stats, industry solutions, inquiry form |
| `/about` | About Us – Mission, vision, core values, tech stack, customer commitment |
| `/services` | Services – Detailed breakdown of all 8 service categories |
| `/solutions` | Solutions – Industry-specific offerings (8 verticals) |
| `/licensing` | Software Licensing – License types, benefits, FAQ |
| `/blog` | Blog – IT insights and technology articles |
| `/careers` | Careers – Job openings, internship, apply online form |
| `/contact` | Contact – Contact form, address, hours, Google Maps |
| `/privacy` | Privacy Policy |
| `/terms` | Terms & Conditions |
| `/disclaimer` | Disclaimer |
| `/cookies` | Cookie Policy |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

For full Netlify feature emulation (forms, etc.):

```bash
netlify dev --port 8889
```

## Forms

Three Netlify Forms are configured:
- `inquiry` – Home page quick inquiry form
- `contact` – Full contact page form
- `careers` – Job application form

The static skeleton is at `public/__forms.html` for build-time detection.
