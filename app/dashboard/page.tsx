import { Nav } from '@/components/nav';

export default function DashboardPage() {
  return <div className="flex"><Nav/><main className="flex-1 p-6 md:p-10"><h1 className="text-4xl font-black">Dashboard</h1><p className="mt-2 text-slate-400">Your growth command center.</p><div className="mt-8 grid gap-4 md:grid-cols-4">{[['New leads','52'],['Emails sent','18'],['Replies','5'],['Meetings','2']].map(([a,b])=><div className="card p-5" key={a}><p className="text-slate-400">{a}</p><p className="mt-2 text-3xl font-black">{b}</p></div>)}</div></main></div>;
}
