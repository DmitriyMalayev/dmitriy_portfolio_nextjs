import dynamic from 'next/dynamic';

import AnimatedSection from '@/Components/AnimatedSection';
import Contact from '@/Components/Contact';
import Education from '@/Components/Education';
import Experience from '@/Components/Experience';
import Hero from '@/Components/Hero';
import Projects from '@/Components/Projects';
import SectionWrapper from '@/Components/SectionWrapper';
import Skills from '@/Components/Skills';
import StatsBar from '@/Components/StatsBar';
import Testimonials from '@/Components/Testimonials';
import Writing from '@/Components/Writing';
import { aboutContent } from '@/data/about';

/**
 * Certificates carousel uses react-responsive-carousel which internally accesses
 * browser APIs, so we keep ssr: false for that chunk only.
 */
const CertificatesLazy = dynamic(() => import('@/Components/Certificates'), {
  ssr: false,
  loading: () => (
    <div className="mx-auto max-w-[800px] animate-pulse px-4" aria-hidden="true">
      <div className="aspect-[10/7] w-full rounded-md bg-stone-800/70" />
      <div className="mt-4 flex justify-center gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-2 w-2 rounded-full bg-stone-700" />
        ))}
      </div>
    </div>
  ),
});

export default function HomePage() {
  return (
    <div className="text-stone-200">
      {/* Hero — full-viewport first impression */}
      <Hero />

      {/* About */}
      <AnimatedSection>
        <SectionWrapper {...aboutContent} />
      </AnimatedSection>

      {/* Impact metrics */}
      <AnimatedSection>
        <div className="-mt-24 mb-20">
          <StatsBar />
        </div>
      </AnimatedSection>

      {/* Experience */}
      <AnimatedSection>
        <SectionWrapper
          id="experience"
          title="Experience"
          subtitle="Teams, impact, ownership"
        >
          <Experience />
        </SectionWrapper>
      </AnimatedSection>

      {/* Education */}
      <AnimatedSection>
        <SectionWrapper
          id="education"
          title="Education"
          subtitle="Bootcamp focus & foundational CS degree"
        >
          <Education />
        </SectionWrapper>
      </AnimatedSection>

      {/* Skills */}
      <AnimatedSection>
        <SectionWrapper id="skills" title="Skills" subtitle="Languages & frameworks">
          <Skills />
        </SectionWrapper>
      </AnimatedSection>

      {/* Certificates */}
      <AnimatedSection>
        <SectionWrapper
          id="certificates"
          title="Certificates"
          subtitle="Selected certifications"
        >
          <CertificatesLazy />
        </SectionWrapper>
      </AnimatedSection>

      {/* Projects — SSR enabled; no browser-only APIs */}
      <AnimatedSection>
        <SectionWrapper id="projects" title="Projects" subtitle="Work & experiments">
          <Projects />
        </SectionWrapper>
      </AnimatedSection>

      {/* Testimonials */}
      <AnimatedSection>
        <SectionWrapper
          id="testimonials"
          title="Testimonials"
          subtitle="What colleagues & clients say"
        >
          <Testimonials />
        </SectionWrapper>
      </AnimatedSection>

      {/* Writing & Content */}
      <AnimatedSection>
        <SectionWrapper
          id="writing"
          title="Writing & Content"
          subtitle="Videos, articles & open source"
        >
          <Writing />
        </SectionWrapper>
      </AnimatedSection>

      {/* Contact */}
      <AnimatedSection>
        <SectionWrapper
          id="contact"
          title="Contact"
          subtitle="Communication is essential"
        >
          <Contact />
        </SectionWrapper>
      </AnimatedSection>
    </div>
  );
}
