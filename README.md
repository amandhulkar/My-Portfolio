# Aman Dhulkar Portfolio

Modern personal portfolio built with React, Vite, Tailwind CSS, Framer Motion, and EmailJS.

## Features

- Responsive MERN developer portfolio layout
- Animated hero section and smooth section navigation
- Project cards with modal details
- Screenshot-ready project cards with gradient fallback
- Contact form connected through EmailJS
- Resume download button path ready at `/resume.pdf`
- SEO, Open Graph, and Twitter card metadata
- Render deployment-ready build setup

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- EmailJS
- Lucide React

## Local Setup

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

EmailJS template variables used by the contact form:

```txt
from_name
from_email
message
to_email
```

## Required Assets Before Final Deploy

Add these files when available:

- `public/resume.pdf` — final resume file for the Download Resume button
- `public/og-image.png` — social preview image for WhatsApp/LinkedIn/Twitter previews
- Optional project screenshots:
  - `public/projects/food-delivery.png`
  - `public/projects/ai-image-optimizer.png`
  - `public/projects/ecommerce.png`
  - `public/projects/chat-app.png`
  - `public/projects/auth-system.png`
  - `public/projects/weather-app.png`

If screenshots are missing, the portfolio automatically keeps the gradient fallback design.

## Links To Update Later

Current social links are set to:

- GitHub: `https://github.com/amandhulkar`
- LinkedIn: `https://www.linkedin.com/in/amandhulkar23`

Project links are currently marked as coming soon. Replace each project's `github` and `live` values in `src/components/Projects/Projects.jsx` when real links are ready.

## Deploy on Render

Use Render Static Site deployment.

Render settings:

- **Build Command:** `npm run build`
- **Publish Directory:** `dist`
- **Environment Variables:** add the same `VITE_EMAILJS_*` values from `.env`

After Render gives the final URL, update these placeholders in `index.html`:

```txt
https://your-render-url.onrender.com/
https://your-render-url.onrender.com/og-image.png
```

## Final Checklist

- [ ] Add `public/resume.pdf`
- [ ] Add `public/og-image.png`
- [ ] Add real project GitHub/live links
- [ ] Add project screenshots if available
- [ ] Replace Render placeholder URL in `index.html`
- [ ] Run `npm run build`
- [ ] Test contact form after deployment
