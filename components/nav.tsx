import Link from 'next/link';

const items = [
  ['Dashboard', '/dashboard'],
  ['Leads', '/leads'],
  ['CRM', '/crm'],
  ['Outreach', '/outreach'],
  ['Settings', '/settings'],
];

export function Nav() {
  return (
    <aside className="hidden min-h-screen w-64 border-r border-white/10 bg-slate-950/70 p-6 md:block">
      <Link href="/" className="text-2xl font-black tracking-tight">Orqlo</Link>
      <p className="mt-2 text-sm text-slate-400">AI Growth OS</p>
      <nav className="mt-10 space-y-2">
        {items.map(([label, href]) => (
          <Link key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 hover:bg-white/10 hover:text-white">
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
