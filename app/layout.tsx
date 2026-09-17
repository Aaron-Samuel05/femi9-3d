import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Femi9 — Premium Period Care',
  description: 'Discover Femi9 period care designed for real life.',
  openGraph: { title: 'Femi9 — Premium Period Care', description: 'Protection that matches your flow.', type: 'website' },
};

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body>{children}</body></html>;
}
