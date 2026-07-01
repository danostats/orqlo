import { Nav } from '@/components/nav';

export default function OutreachPage() {
  return <div className="flex"><Nav/><main className="flex-1 p-6 md:p-10"><h1 className="text-4xl font-black">Outreach Writer</h1><p className="mt-2 text-slate-400">Generate personalized emails and DMs.</p><div className="mt-8 grid gap-5 lg:grid-cols-2"><div className="card space-y-4 p-5"><input className="input" placeholder="Business name"/><input className="input" placeholder="Website or niche"/><textarea className="input min-h-40" placeholder="What do you want to offer?"/><button className="btn-primary">Generate outreach</button></div><div className="card p-5"><p className="font-bold">Generated draft</p><p className="mt-4 leading-7 text-slate-300">Hi, I noticed your business has strong reviews but very little short-form content. We help local businesses create professional AI-powered videos that build trust and generate more inquiries...</p></div></div></main></div>;
}
