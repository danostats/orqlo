import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Building2, Sparkles, Mail, KanbanSquare, BarChart3, Search, Plus, Download, Wand2, ShieldCheck, Rocket, Users } from 'lucide-react';
import './styles.css';

type LeadStage = 'New' | 'Contacted' | 'Interested' | 'Meeting' | 'Proposal' | 'Won';
type Lead = { id: number; company: string; niche: string; city: string; website: string; email: string; score: number; stage: LeadStage; issue: string };

const initialLeads: Lead[] = [
  { id: 1, company: 'Basel Smile Studio', niche: 'Dentist', city: 'Basel', website: 'baselsmile.example', email: 'hello@baselsmile.example', score: 92, stage: 'New', issue: 'No short-form video presence' },
  { id: 2, company: 'Nord Fitness', niche: 'Gym', city: 'Zurich', website: 'nordfit.example', email: 'team@nordfit.example', score: 85, stage: 'Contacted', issue: 'Weak CTA and outdated content' },
  { id: 3, company: 'Inkhaus Tattoo', niche: 'Tattoo', city: 'Vancouver', website: 'inkhaus.example', email: 'bookings@inkhaus.example', score: 88, stage: 'Interested', issue: 'Strong reviews, poor Instagram consistency' },
  { id: 4, company: 'Bella Cucina', niche: 'Restaurant', city: 'Basel', website: 'bellacucina.example', email: 'info@bellacucina.example', score: 76, stage: 'Meeting', issue: 'No booking funnel from social media' },
];

const stages: LeadStage[] = ['New', 'Contacted', 'Interested', 'Meeting', 'Proposal', 'Won'];

function csv(leads: Lead[]) {
  const rows = [['Company','Niche','City','Website','Email','Score','Stage','Issue'], ...leads.map(l => [l.company,l.niche,l.city,l.website,l.email,String(l.score),l.stage,l.issue])];
  const body = rows.map(r => r.map(v => `"${v.replaceAll('"','""')}"`).join(',')).join('\n');
  const blob = new Blob([body], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'orqlo-leads.csv'; a.click(); URL.revokeObjectURL(url);
}

function App() {
  const [screen, setScreen] = useState<'home'|'app'>('home');
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [query, setQuery] = useState('dentists');
  const [city, setCity] = useState('Basel');
  const [selected, setSelected] = useState<Lead>(initialLeads[0]);
  const [outreach, setOutreach] = useState('');
  const pipelineValue = useMemo(() => leads.reduce((sum, l) => sum + (l.score * 120), 0), [leads]);

  function addDemoLeads() {
    const next: Lead[] = [1,2,3].map((n) => ({
      id: Date.now()+n,
      company: `${city} ${query.replace(/s$/,'')} ${n}`,
      niche: query,
      city,
      website: `${query}${n}.example`,
      email: `hello@${query}${n}.example`,
      score: 72 + Math.floor(Math.random()*24),
      stage: 'New',
      issue: 'Needs stronger online conversion system'
    }));
    setLeads([...next, ...leads]); setSelected(next[0]);
  }

  function generateOutreach(lead = selected) {
    setOutreach(`Subject: Quick idea for ${lead.company}\n\nHi ${lead.company} team,\n\nI noticed ${lead.issue.toLowerCase()}. Orqlo flagged this as a strong growth opportunity because your business already has a solid base, but your online content could convert more visitors into booked calls.\n\nI run an AI-powered content and growth system that can create consistent short-form videos, improve your calls to action, and build a simple follow-up pipeline without expensive filming days.\n\nWorth a quick 15-minute chat this week?\n\nBest,\nDaniel`);
  }

  if (screen === 'home') return <Landing onEnter={() => setScreen('app')} />;

  return <div className="min-h-screen bg-ink text-white">
    <aside className="fixed left-0 top-0 h-full w-72 border-r border-line bg-panel/80 p-6 hidden lg:block">
      <div className="flex items-center gap-3"><div className="logo">O</div><div><div className="text-xl font-bold">Orqlo</div><div className="text-xs text-slate-400">AI Growth OS</div></div></div>
      <nav className="mt-10 space-y-2 text-sm">
        {[[BarChart3,'Dashboard'],[Search,'Lead Finder'],[KanbanSquare,'Pipeline'],[Mail,'Outreach'],[Sparkles,'AI Audit'],[Users,'Clients']] .map(([Icon,label]: any) => <button key={label} className="nav"><Icon size={18}/>{label}</button>)}
      </nav>
      <button onClick={() => setScreen('home')} className="mt-10 text-sm text-slate-400 hover:text-white">← Marketing site</button>
    </aside>
    <main className="lg:pl-72">
      <header className="sticky top-0 z-10 border-b border-line bg-ink/80 backdrop-blur p-5 flex justify-between items-center">
        <div><h1 className="text-2xl font-bold">Growth dashboard</h1><p className="text-slate-400 text-sm">Find prospects, score opportunities, generate outreach, and move deals forward.</p></div>
        <button className="btn" onClick={() => csv(leads)}><Download size={16}/> Export CSV</button>
      </header>
      <section className="p-5 md:p-8 grid gap-5">
        <div className="grid md:grid-cols-4 gap-4">
          <Metric title="New leads" value={String(leads.length)} />
          <Metric title="Pipeline value" value={`€${pipelineValue.toLocaleString()}`} />
          <Metric title="Avg. AI score" value={`${Math.round(leads.reduce((s,l)=>s+l.score,0)/leads.length)}%`} />
          <Metric title="Meetings" value={String(leads.filter(l=>['Meeting','Proposal','Won'].includes(l.stage)).length)} />
        </div>
        <div className="grid xl:grid-cols-3 gap-5">
          <div className="card xl:col-span-2">
            <div className="flex flex-col md:flex-row gap-3 md:items-end justify-between">
              <div><h2 className="section-title">AI Lead Finder</h2><p className="muted">MVP mode: add/import leads now. Live Google/Maps/email enrichment comes in Phase 2.</p></div>
              <div className="flex gap-2"><input value={query} onChange={e=>setQuery(e.target.value)} className="input"/><input value={city} onChange={e=>setCity(e.target.value)} className="input w-28"/><button className="btn" onClick={addDemoLeads}><Plus size={16}/> Add</button></div>
            </div>
            <div className="mt-5 overflow-auto"><table className="w-full text-sm"><thead><tr className="text-slate-400 text-left"><th>Company</th><th>City</th><th>Score</th><th>Stage</th><th></th></tr></thead><tbody>{leads.map(l => <tr key={l.id} className="border-t border-line"><td className="py-3"><button onClick={()=>setSelected(l)} className="font-semibold hover:text-violet-300">{l.company}</button><div className="text-slate-500">{l.issue}</div></td><td>{l.city}</td><td><span className="score">{l.score}%</span></td><td><select className="select" value={l.stage} onChange={e=>setLeads(leads.map(x=>x.id===l.id?{...x,stage:e.target.value as LeadStage}:x))}>{stages.map(s=><option key={s}>{s}</option>)}</select></td><td><button className="ghost" onClick={()=>generateOutreach(l)}>Write</button></td></tr>)}</tbody></table></div>
          </div>
          <div className="card"><h2 className="section-title">AI Opportunity Audit</h2><p className="muted">Selected: {selected.company}</p><div className="mt-5 rounded-2xl bg-violet-500/10 border border-violet-400/20 p-5"><div className="text-5xl font-black">{selected.score}%</div><div className="text-violet-200 mt-1">Growth opportunity</div></div><ul className="mt-5 space-y-3 text-sm text-slate-300"><li>• {selected.issue}</li><li>• Add a clearer booking CTA</li><li>• Build a 7-day follow-up sequence</li><li>• Publish 3–5 short videos weekly</li></ul><button className="btn w-full mt-5" onClick={()=>generateOutreach()}><Wand2 size={16}/> Generate outreach</button></div>
        </div>
        <div className="grid xl:grid-cols-2 gap-5">
          <div className="card"><h2 className="section-title">Pipeline</h2><div className="mt-5 grid md:grid-cols-3 xl:grid-cols-6 gap-3">{stages.map(stage => <div className="rounded-2xl border border-line bg-white/5 p-3 min-h-36" key={stage}><div className="text-xs font-bold text-slate-400 mb-3">{stage}</div>{leads.filter(l=>l.stage===stage).map(l=><div key={l.id} className="rounded-xl bg-ink border border-line p-3 mb-2 text-xs"><b>{l.company}</b><div className="text-slate-500">{l.score}% score</div></div>)}</div>)}</div></div>
          <div className="card"><h2 className="section-title">Outreach Writer</h2><textarea className="textarea mt-5" value={outreach} onChange={e=>setOutreach(e.target.value)} placeholder="Click Generate outreach…"/><button className="btn mt-4" onClick={()=>navigator.clipboard.writeText(outreach)}>Copy message</button></div>
        </div>
      </section>
    </main>
  </div>
}

function Metric({title,value}:{title:string;value:string}) { return <div className="card"><div className="text-slate-400 text-sm">{title}</div><div className="text-3xl font-black mt-2">{value}</div></div> }
function Landing({onEnter}:{onEnter:()=>void}) { return <div className="min-h-screen bg-ink text-white overflow-hidden"><header className="p-6 md:px-12 flex justify-between items-center"><div className="flex items-center gap-3"><div className="logo">O</div><b className="text-xl">Orqlo</b></div><button className="btn" onClick={onEnter}>Open app</button></header><main><section className="px-6 md:px-12 pt-16 pb-24 text-center max-w-6xl mx-auto"><div className="pill mx-auto"><Sparkles size={16}/> AI Growth Operating System</div><h1 className="hero">Find leads. Reach prospects. Close clients.</h1><p className="subhero">Orqlo helps agencies and local businesses discover opportunities, generate personalized outreach, manage their pipeline, and turn attention into booked calls.</p><div className="flex gap-3 justify-center flex-wrap mt-8"><button className="btn big" onClick={onEnter}>Launch dashboard</button><button className="btn secondary big">View roadmap</button></div></section><section className="px-6 md:px-12 grid md:grid-cols-3 gap-5 max-w-6xl mx-auto pb-24">{[[Search,'Lead discovery','Build focused lists by niche, city, and growth opportunity.'],[Wand2,'AI outreach','Generate tailored emails, DMs, follow-ups, and phone scripts.'],[KanbanSquare,'Built-in CRM','Move prospects from lead to client without spreadsheets.'],[ShieldCheck,'Website audit','Spot weak CTAs, missing content, and poor conversion signals.'],[Rocket,'Proposal builder','Create polished proposals from one lead profile.'],[BarChart3,'Analytics','Track pipeline, meetings, replies, and revenue.']].map(([Icon,t,d]: any)=><div className="card" key={t}><Icon className="text-violet-300"/><h3 className="text-xl font-bold mt-4">{t}</h3><p className="muted mt-2">{d}</p></div>)}</section><section className="px-6 md:px-12 pb-24 max-w-6xl mx-auto"><div className="card text-center"><h2 className="text-4xl font-black">Built first for your agency. Later for the world.</h2><p className="subhero">Start using Orqlo internally to win Canvas Content Media clients. Once it works, add billing, teams, and public SaaS accounts.</p><button className="btn big mt-6" onClick={onEnter}>Start with the MVP</button></div></section></main></div> }

createRoot(document.getElementById('root')!).render(<App />);
