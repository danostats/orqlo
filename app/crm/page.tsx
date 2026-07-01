import { Nav } from '@/components/nav';

const stages = ['New','Contacted','Interested','Meeting','Won'];
export default function CRMPage() {
  return <div className="flex"><Nav/><main className="flex-1 p-6 md:p-10"><h1 className="text-4xl font-black">CRM Pipeline</h1><p className="mt-2 text-slate-400">Track leads from first contact to paying client.</p><div className="mt-8 grid gap-4 lg:grid-cols-5">{stages.map((stage,i)=><div className="card min-h-80 p-4" key={stage}><p className="font-bold">{stage}</p><div className="mt-4 rounded-xl bg-white/5 p-4"><p className="font-semibold">{i===0?'Alpine Dental':'Lead sample'}</p><p className="mt-1 text-sm text-slate-400">AI content package</p></div></div>)}</div></main></div>;
}
