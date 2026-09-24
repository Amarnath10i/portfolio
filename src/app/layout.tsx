import type { Metadata } from 'next';
import './globals.css';

const description = 'Madaka Amarnath — AI researcher and software engineer working on scientific machine learning, hyperspectral imaging, medical image segmentation, embodied AI and model calibration.';

export const metadata: Metadata = {
  metadataBase: new URL('https://amarnath10i-portfolio.vercel.app'),
  title: 'Madaka Amarnath — AI Researcher & Software Engineer',
  description,
  keywords: ['Madaka Amarnath', 'AI research', 'scientific machine learning', 'neural operators', 'hyperspectral image fusion', 'polyp segmentation', 'embodied AI', 'model calibration', 'NIT Andhra Pradesh'],
  authors: [{ name: 'Madaka Amarnath', url: 'https://github.com/Amarnath10i' }],
  openGraph: {
    title: 'Madaka Amarnath — AI Researcher & Software Engineer',
    description,
    url: '/',
    siteName: 'Madaka Amarnath',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Madaka Amarnath — AI Researcher & Software Engineer',
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script src="https://unpkg.com/@phosphor-icons/web" async></script>
      </head>
      <body>
        {/* Ambient Glow Background */}
        <div className="ambient-glow">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
