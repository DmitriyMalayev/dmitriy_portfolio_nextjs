'use client';

import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  type Variants,
} from 'framer-motion';

const ROLES = [
  'Senior Full Stack Software Engineer',
  'Django & Angular Developer',
  'AI & RAG Architect',
  'React & Next.js Developer',
];

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const timer = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [prefersReducedMotion]);

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
      aria-label="Introduction"
    >
      <motion.div
        variants={containerVariants}
        initial={prefersReducedMotion ? 'visible' : 'hidden'}
        animate="visible"
        className="w-full max-w-4xl"
      >
        <p className="mb-3 font-dance text-xl font-bold text-orange-300 md:text-2xl">
          Hi, I&apos;m
        </p>

        <h1 className="text-5xl font-bold leading-tight text-cyan-100 md:text-7xl lg:text-8xl">
          Dmitriy Malayev
        </h1>

        <div
          className="mt-4 h-10 overflow-hidden md:h-12"
          aria-live="polite"
          aria-atomic="true"
        >
          {prefersReducedMotion ? (
            <p className="font-dance text-2xl font-bold text-orange-400 md:text-3xl">
              {ROLES[0]}
            </p>
          ) : (
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="font-dance text-2xl font-bold text-orange-400 md:text-3xl"
              >
                {ROLES[roleIndex]}
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg lg:text-xl">
          I work across the full stack — from the interface down to the infrastructure —
          and I care about every layer. Five years in production, currently building
          BrightArchive at SCYFOR Consulting.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-lg bg-orange-600 px-8 py-3 font-semibold text-white shadow-lg shadow-orange-900/40 transition hover:bg-orange-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-orange-600 px-8 py-3 font-semibold text-orange-300 transition hover:bg-orange-900/40 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange-400"
          >
            Contact Me
          </a>
          <a
            href="/new_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-stone-600 px-8 py-3 font-semibold text-stone-300 transition hover:border-stone-400 hover:text-stone-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-stone-400"
          >
            Résumé ↗
          </a>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-hidden="true"
      >
        <span className="text-xs tracking-widest text-stone-500">SCROLL</span>
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="h-1.5 w-1.5 rounded-full bg-orange-500"
        />
      </motion.div>
    </section>
  );
}
