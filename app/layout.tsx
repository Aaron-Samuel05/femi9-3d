import type { Metadata } from 'next';
import './globals.css';
import './visual-fixes.css';
import { Header } from '@/components/experience';

export const metadata: Metadata = {
  title:'Femi9 — Period Care, Reimagined',
  description:'Femi9 period care designed around comfort, confidence and real everyday flow.',
  metadataBase:new URL('https://femi9-3d.vercel.app'),
  openGraph:{title:'Femi9 — Period Care, Reimagined',description:'Premium Femi9 period care experience.',type:'website'},
};

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main></body></html>}
