import { Nav } from '@/components/nav';

export default function SettingsPage() {
  return <div className="flex"><Nav/><main className="flex-1 p-6 md:p-10"><h1 className="text-4xl font-black">Settings</h1><p className="mt-2 text-slate-400">Supabase, OpenAI, Stripe, and team settings will connect here.</p><div className="mt-8 card p-5"><p className="font-bold">Environment status</p><p className="mt-3 text-slate-400">Next step: create Supabase project and add environment variables.</p></div></main></div>;
}
