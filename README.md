# Orqlo v1
Production-ready Next.js foundation for Orqlo.

## Netlify settings
Build command: `npm run build`
Publish directory: `.next`

Netlify plugin: `@netlify/plugin-nextjs` is configured in `netlify.toml`.

## Local setup
npm install
npm run dev

## Supabase
Run `supabase/schema.sql` in Supabase SQL Editor.

## Environment variables
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
RESEND_API_KEY
STRIPE_SECRET_KEY
