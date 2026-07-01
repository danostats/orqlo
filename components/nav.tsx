import Link from 'next/link'
const links=[['Dashboard','/dashboard'],['Leads','/leads'],['CRM','/crm'],['Outreach','/outreach'],['Settings','/settings']]
export function AppNav(){return <aside className="hidden md:flex w-64 min-h-screen p-6 border-r border-white/10 flex-col gap-8 fixed"><Link href="/" className="text-2xl font-black tracking-tight">Orqlo</Link><nav className="flex flex-col gap-2">{links.map(([label,href])=><Link key={href} className="px-4 py-3 rounded-xl hover:bg-white/10 text-white/80" href={href}>{label}</Link>)}</nav><div className="mt-auto text-sm text-white/45">v1 foundation</div></aside>}
export function Shell({children}:{children:React.ReactNode}){return <><AppNav/><main className="md:pl-64 min-h-screen"><div className="p-6 md:p-10">{children}</div></main></>}
