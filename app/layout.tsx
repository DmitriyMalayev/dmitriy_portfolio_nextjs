import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import Script from 'next/script';

import AppProviders from '@/Components/AppProviders';
import Navbar from '@/Components/Navbar';
import SocialMedia from '@/Components/SocialMedia';
import Footer from '@/Components/Footer';
import ScrollToTop from '@/Components/ScrollToTop';
import ClientCalendly from '@/Components/ClientCalendly';

import '../styles/globals.css';

const siteUrl = 'https://dmitriymalayev.com';

export const viewport: Viewport = {
  themeColor: '#292524',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Dmitriy Malayev | Full-Stack Engineer',
    template: '%s | Dmitriy Malayev',
  },
  description:
    'Full-stack engineer with 5+ years of experience — React, Next.js, Kotlin, and cloud data pipelines. Portfolio, skills, certifications, projects, and contact.',
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dmitriy Malayev | Full-Stack Engineer',
    description:
      'Full-stack engineer with 5+ years of experience — React, Next.js, Kotlin, and cloud data pipelines.',
    locale: 'en_US',
    siteName: 'Dmitriy Malayev',
    images: [
      {
        url: `${siteUrl}/metaImage.jpeg`,
        width: 1200,
        height: 630,
        alt: 'Dmitriy Malayev portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dmitriy Malayev | Full-Stack Engineer',
    description:
      'Full-stack engineer with 5+ years of experience — React, Next.js, Kotlin, and cloud data pipelines.',
    images: [`${siteUrl}/metaImage.jpeg`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const siteJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dmitriy Malayev',
    url: siteUrl,
    jobTitle: 'Full Stack Software Engineer',
    worksFor: { '@type': 'Organization', name: 'TorahAnytime' },
    sameAs: [
      'https://github.com/DmitriyMalayev',
      'https://www.linkedin.com/in/dmitriymalayev/',
    ],
  });

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body className="relative overflow-x-hidden bg-stone-900" id="top">
        <Script
          id="site-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: siteJsonLd }}
        />
        <AppProviders>
          <a
            href="#about"
            className="fixed left-2 top-[88px] z-[100] -translate-x-[150%] rounded bg-orange-700 px-3 py-2 text-xs font-semibold text-white outline-none ring-offset-stone-900 transition focus-visible:translate-x-0 focus-visible:ring-4 focus-visible:ring-orange-300 md:left-4 md:top-24"
          >
            Skip to content
          </a>
          <Navbar />
          <SocialMedia />
          {children}
          <Footer />
          <ScrollToTop />
          <ClientCalendly />
        </AppProviders>
      </body>
    </html>
  );
}
