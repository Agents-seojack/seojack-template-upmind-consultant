import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Elevate Consulting — Strategy, Operations & Growth',
  description: 'A premium consulting website template inspired by Upmind Temlis for strategy, operations, transformation, and growth advisory firms.',
  metadataBase: new URL('https://template-upmind-consultant.seojack.website'),
  openGraph: {
    title: 'Elevate Consulting — Strategy, Operations & Growth',
    description: 'Clear insights, practical strategy, and sustainable growth for modern companies.',
    url: 'https://template-upmind-consultant.seojack.website',
    siteName: 'Elevate Consulting',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Consulting — Strategy, Operations & Growth',
    description: 'A conversion-focused consulting template for strategy-led service businesses.'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
