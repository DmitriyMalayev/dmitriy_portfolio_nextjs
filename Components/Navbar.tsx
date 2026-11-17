'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { barClass, contentColumnClass } from '@/Components/contentColumn';
import Logo from '@/public/logo.svg';

const SECTION_IDS = [
  'about',
  'experience',
  'education',
  'skills',
  'certificates',
  'projects',
  'testimonials',
  'writing',
  'contact',
] as const;
type SectionId = (typeof SECTION_IDS)[number];

/** Link row fits here. Narrower viewports use the menu instead of scrolling the bar. */
const DESKTOP_NAV_QUERY = '(min-width: 1120px)';

const SECTION_LABELS: Record<SectionId, string> = {
  about: 'About',
  experience: 'Experience',
  education: 'Education',
  skills: 'Skills',
  certificates: 'Certs',
  projects: 'Projects',
  testimonials: 'Testimonials',
  writing: 'Writing',
  contact: 'Contact',
};

function navLinkClass(active: boolean): string {
  const base =
    'rounded px-1 transition duration-300 ease-in md:hover:scale-110 focus-visible:outline focus-visible:ring-2 focus-visible:ring-orange-400';
  return active
    ? `${base} text-red-500 underline decoration-2 underline-offset-8`
    : `${base} text-orange-700 hover:text-red-600`;
}

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>('about');

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_NAV_QUERY);
    const closeWhenDesktop = () => {
      if (media.matches) setNavOpen(false);
    };
    media.addEventListener('change', closeWhenDesktop);
    return () => media.removeEventListener('change', closeWhenDesktop);
  }, []);

  useEffect(() => {
    if (!navOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setNavOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [navOpen]);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    if (elements.length === 0) return undefined;

    /** Derive active section from scroll position when no section hits the observer band. */
    const getActiveSectionFromScroll = (): SectionId => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let best = elements[0];
      for (const el of elements) {
        if (el.offsetTop <= mid) best = el;
      }
      return (best.id as SectionId) ?? 'about';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) {
          setActiveSection(top.target.id as SectionId);
        } else {
          setActiveSection(getActiveSectionFromScroll());
        }
      },
      {
        root: null,
        rootMargin: '-30% 0px -60% 0px',
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setNavOpen((open) => !open);
  const closeMenu = () => setNavOpen(false);

  const links = SECTION_IDS.map((id) => ({ id, label: SECTION_LABELS[id] }));

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 h-[80px] ${barClass}`}>
        <div
          className={`${contentColumnClass} flex h-full items-center justify-between gap-3`}
        >
          <div>
            <Link href="#about" aria-label="Jump to About section">
              <Image src={Logo} alt="" width={50} height={40} priority />
            </Link>
          </div>

          <nav
            aria-label="Primary"
            className="hidden min-w-0 flex-1 py-1 min-[1120px]:block"
          >
            <ul className="flex items-center justify-around gap-1 text-base font-semibold">
              {links.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={activeSection === id ? 'location' : undefined}
                    className={navLinkClass(activeSection === id)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/dmitriy_malayev_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex shrink-0 items-center rounded border border-orange-600 px-2 py-0.5 font-semibold text-orange-400 transition hover:bg-orange-900/40 hover:text-orange-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                  aria-label="Download résumé PDF"
                >
                  Résumé ↗
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            className="z-[80] rounded p-2 min-[1120px]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            onClick={toggleMenu}
            aria-expanded={navOpen}
            aria-controls="mobile-menu"
            aria-label={navOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {!navOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      <nav aria-label="Mobile">
        <ul
          id="mobile-menu"
          aria-hidden={!navOpen}
          className={
            !navOpen
              ? 'hidden'
              : 'fixed inset-0 z-[70] flex h-[100dvh] w-full flex-col items-center justify-center gap-1 overflow-y-auto overscroll-contain bg-stone-900 px-6 py-24 min-[1120px]:hidden'
          }
        >
          {links.map(({ id, label }) => (
            <li key={`m-${id}`} className="py-2 text-2xl">
              <a
                onClick={closeMenu}
                href={`#${id}`}
                className={navLinkClass(activeSection === id)}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
          <li className="py-2 text-2xl">
            <a
              onClick={closeMenu}
              href="/dmitriy_malayev_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass(false)}
            >
              Résumé PDF
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
