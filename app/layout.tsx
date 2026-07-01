import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Orqlo — AI Growth Operating System', description: 'Find leads, manage pipeline, and generate outreach with AI.' }
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
