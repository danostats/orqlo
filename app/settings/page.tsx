import {Shell} from '@/components/nav'
export default function Settings(){return <Shell><h1 className="text-4xl font-black">Settings</h1><p className="text-white/60 mt-2">Connect Supabase, OpenAI, Resend, and Stripe here as we build.</p><div className="card p-6 mt-8 space-y-4"><div><p className="font-bold">Environment variables needed later:</p><pre className="mt-4 p-4 rounded-xl bg-black/30 text-sm overflow-auto">NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
RESEND_API_KEY
STRIPE_SECRET_KEY</pre></div></div></Shell>}
