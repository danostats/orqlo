import { Nav } from '@/components/nav';

const leads = ['Alpine Dental Basel','Rhein Fitness Studio','Limmat Real Estate','Zurich Skin Clinic'];
export default function LeadsPage() {
  return <div className="flex"><Nav/><main className="flex-1 p-6 md:p-10"><h1 className="text-4xl font-black">Lead Finder</h1><p className="mt-2 text-slate-400">MVP lead search interface. Real data connection comes after Supabase setup.</p><div className="mt-8 card p-5"><div className="grid gap-3 md:grid-cols-3"><input className="input" placeholder="Industry e.g. dentists"/><input className="input" placeholder="City e.g. Basel"/><button className="btn-primary">Search leads</button></div></div><div className="mt-6 space-y-3">{leads.map((lead)=><div className="card flex items-center justify-between p-5" key={lead}><div><p className="font-bold">{lead}</p><p className="text-sm text-slate-400">Opportunity score: 84%</p></div><button className="btn-secondary">Add to CRM</button></div>)}</div></main></div>;
}
