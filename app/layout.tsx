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
    default: 'Dmitriy Malayev | Senior Full Stack Software Engineer',
    template: '%s | Dmitriy Malayev',
  },
  description:
    'Senior full-stack engineer with 5+ years of experience — Django, Angular, React, Next.js, AI/RAG, and cloud data pipelines. Portfolio, skills, certifications, projects, and contact.',
  keywords: [
    'Dmitriy Malayev',
    'Senior Full Stack Software Engineer',
    'Full-Stack Engineer',
    'Software Engineer',
    'Django',
    'Angular',
    'React',
    'Next.js',
    'TypeScript',
    'AI Engineer',
    'RAG',
    'LLM',
    'Kotlin',
    'Cloud Data Pipelines',
    'Portfolio',
    'Web Developer',
  ],
  authors: [{ name: 'Dmitriy Malayev', url: siteUrl }],
  creator: 'Dmitriy Malayev',
  alternates: { canonical: '/' },
  manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Dmitriy Malayev | Senior Full Stack Software Engineer',
    description:
      'Senior full-stack engineer with 5+ years of experience — Django, Angular, React, Next.js, AI/RAG, and cloud data pipelines.',
    locale: 'en_US',
    siteName: 'Dmitriy Malayev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dmitriy Malayev | Senior Full Stack Software Engineer',
    description:
      'Senior full-stack engineer with 5+ years of experience — Django, Angular, React, Next.js, AI/RAG, and cloud data pipelines.',
    creator: '@dmitriymalayev',
    images: ['/opengraph-image'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const siteJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Dmitriy Malayev',
    url: siteUrl,
    image: `${siteUrl}/photo.webp`,
    description:
      'Senior Full Stack Software Engineer with 5+ years of experience building scalable web applications and AI-powered systems.',
    jobTitle: 'Senior Full Stack Software Engineer',
    worksFor: { '@type': 'Organization', name: 'SCYFOR Consulting, LLC' },
    sameAs: [
      'https://github.com/DmitriyMalayev',
      'https://www.linkedin.com/in/dmitriymalayev/',
      'https://dmitriy-malayev.medium.com/',
      'https://trailblazer.me/id/dmalayev',
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
