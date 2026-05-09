import Image from 'next/image';
import Link from 'next/link';

import { skillCategoryOrder, skillsList } from '@/data/skills';

function SkillLogo({ src, alt, invert }: { src: string; alt: string; invert?: boolean }) {
  const invertClass = invert ? 'invert' : '';
  const isRemote = /^https?:\/\//i.test(src);
  if (isRemote) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- remote SVG CDN icons outside next/image domains
      <img
        src={src}
        alt={alt}
        width={96}
        height={96}
        loading="lazy"
        className={`mx-auto h-16 w-16 object-contain ${invertClass}`}
      />
    );
  }

  return (
    <Image src={src} alt={alt} width={96} height={96} className={`h-auto w-auto ${invertClass}`} />
  );
}

export default function Skills() {
  const byCategory = skillCategoryOrder.map((category) => ({
    category,
    skills: skillsList.filter((s) => s.category === category),
  }));

  return (
    <div>
      <div className="space-y-14 px-4 sm:px-8">
        {byCategory.map(
          ({ category, skills }) =>
            skills.length > 0 && (
              <div key={category}>
                <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.35em] text-orange-700/90">
                  {category}
                </h3>
                <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-4 text-center xl:max-w-5xl">
                  {skills.map((skill) => (
                    <div
                      className="w-[170px] border-2 border-transparent pt-6 shadow-md shadow-slate-500 duration-700 hover:border-slate-500 motion-safe:hover:scale-110"
                      key={`${skill.category}-${skill.title}`}
                    >
                      <div className="mx-auto flex h-[5.5rem] w-20 items-center justify-center drop-shadow-lg shadow-blue-600/50">
                        <SkillLogo src={skill.src} alt={`${skill.title} logo`} invert={skill.invert} />
                      </div>
                      <p className="my-4 text-xs text-slate-200 sm:text-sm">
                        {skill.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ),
        )}
      </div>
      <div className="mt-12 text-center text-sm text-stone-500">
        <Link
          href="https://github.com/DmitriyMalayev"
          className="rounded px-4 py-2 text-orange-300 underline underline-offset-4 hover:text-orange-100"
          target="_blank"
          rel="noreferrer noopener"
        >
          Recent work on GitHub
        </Link>
      </div>
    </div>
  );
}
