import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,#123451,transparent_40%),#050816]">
      <section className="mx-auto max-w-7xl px-6 py-8">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-black tracking-tight">Orqlo</div>
          <div className="flex gap-3">
            <Link className="btn-secondary" href="/dashboard">Open app</Link>
            <Link className="btn-primary" href="/leads">Find leads</Link>
          </div>
        </nav>
        <div className="grid gap-12 py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">AI Growth Operating System</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Find leads. Write outreach. Close clients.</h1>
            <p className="mt-6 max-w-xl text-xl leading-8 text-slate-300">Orqlo helps agencies and small businesses discover prospects, manage a pipeline, generate personalized outreach, and build repeatable revenue systems.</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link className="btn-primary" href="/dashboard">Launch dashboard</Link>
              <Link className="btn-secondary" href="/crm">View CRM</Link>
            </div>
          </div>
          <div className="card p-6">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['New Leads', '52'], ['Replies', '5'], ['Meetings', '2'], ['Pipeline', '€12.4k'],
              ].map(([k, v]) => <div key={k} className="rounded-2xl bg-white/5 p-5"><p className="text-sm text-slate-400">{k}</p><p className="mt-2 text-3xl font-black">{v}</p></div>)}
            </div>
            <div className="mt-6 rounded-2xl bg-white/5 p-5">
              <p className="font-bold">AI Suggestions</p>
              <ul className="mt-3 space-y-3 text-slate-300">
                <li>✓ Contact 12 Basel dentists this week</li>
                <li>✓ Follow up with 4 warm leads today</li>
                <li>✓ Generate website audit for Alpine Dental</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
