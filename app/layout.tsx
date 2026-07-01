import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Orqlo — AI Growth Operating System',
  description: 'Find leads, write outreach, manage pipeline, and automate growth.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
