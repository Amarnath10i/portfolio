import type { Metadata } from 'next';
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from 'next/font/google';
import './globals.css';

const sans = IBM_Plex_Sans({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-plex-sans', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin'], weight: ['400', '500'], variable: '--font-plex-mono', display: 'swap' });
const serif = Source_Serif_4({ subsets: ['latin'], weight: ['600'], variable: '--font-source-serif', display: 'swap' });

const description = 'Madaka Amarnath — machine learning engineer building and evaluating fraud detection, recommender systems, knowledge tracing, multilingual retrieval and flood forecasting, with research in hyperspectral imaging and medical image segmentation.';

export const metadata: Metadata = {
  metadataBase: new URL('https://amarnath10i-portfolio.vercel.app'),
  title: 'Madaka Amarnath — Machine Learning Engineer',
  description,
  keywords: ['Madaka Amarnath', 'machine learning engineer', 'data scientist', 'recommender systems', 'fraud detection', 'knowledge tracing', 'retrieval', 'flood forecasting', 'hyperspectral image fusion', 'NIT Andhra Pradesh'],
  authors: [{ name: 'Madaka Amarnath', url: 'https://github.com/Amarnath10i' }],
  openGraph: {
    title: 'Madaka Amarnath — Machine Learning Engineer',
    description,
    url: '/',
    siteName: 'Madaka Amarnath',
    type: 'website',
  },
  twitter: { card: 'summary', title: 'Madaka Amarnath — Machine Learning Engineer', description },
};

// Applies a saved theme before first paint, so the page never flashes the wrong one.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.setAttribute('data-theme',t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
