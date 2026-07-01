# Orqlo — AI Growth Operating System

Production SaaS starter for Orqlo. Phase 1 includes a polished marketing site, dashboard UI, lead table, pipeline, outreach writer, CSV export, Netlify deployment config, Supabase schema, and a Netlify AI function placeholder.

## Local setup

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push this folder to GitHub.
2. In Netlify: Add new site → Import from Git.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add environment variables from `.env.example`.

## Supabase

1. Create a Supabase project.
2. Open SQL Editor.
3. Paste and run `supabase/schema.sql`.
4. Copy Project URL and anon key into Netlify env vars.

## Roadmap

Phase 1: CRM, auth, persistent database.
Phase 2: AI outreach function connected to UI.
Phase 3: lead discovery integrations.
Phase 4: email sending and campaign tracking.
Phase 5: Stripe billing and team accounts.
