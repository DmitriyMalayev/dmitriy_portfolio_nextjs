import Image from 'next/image';
import type { ReactNode } from 'react';
import Photo from '@/public/photo.webp';

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle: string;
  text?: string;
  text2?: string;
  text3?: string;
  about?: boolean;
  children?: ReactNode;
};

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  const parts = subtitle.includes(' · ') ? subtitle.split(' · ') : null;

  return (
    <div className="mb-12 flex flex-col items-center gap-4 text-center">
      <h2 className="border-b-4 border-orange-600 pb-2 text-3xl font-bold text-cyan-100 md:text-5xl">
        {title}
      </h2>
      {parts ? (
        <div className="flex flex-wrap justify-center gap-2">
          {parts.map((part) => (
            <span
              key={part}
              className="rounded-full border border-orange-400/40 bg-orange-900/20 px-3 py-1 text-sm font-semibold text-orange-300"
            >
              {part}
            </span>
          ))}
        </div>
      ) : (
        <p className="font-dance text-lg font-bold text-orange-300 md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  text,
  text2,
  text3,
  about,
  children,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className="mb-16 w-full scroll-mt-20 py-10 text-slate-300 lg:mb-20 lg:py-14"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-8">
        <SectionHeader title={title} subtitle={subtitle} />

        {about && text && (
          <div className="flex flex-col items-center gap-10 md:flex-row md:items-start">
            <div className="shrink-0">
              <Image
                src={Photo}
                priority
                width={260}
                height={320}
                sizes="(max-width: 768px) 220px, 260px"
                className="h-auto w-[220px] rounded-xl object-cover shadow-2xl shadow-black/60 ring-1 ring-orange-600/25 md:w-[260px]"
                alt="Portrait photograph of Dmitriy Malayev smiling at the camera."
                placeholder="blur"
              />
            </div>
            <div className="space-y-5 text-base leading-relaxed text-slate-200 md:text-lg">
              <p>{text}</p>
              {text2 && <p>{text2}</p>}
              {text3 && <p>{text3}</p>}
            </div>
          </div>
        )}

        {!about && text && (
          <div className="space-y-4 text-base leading-relaxed text-slate-200 md:text-lg">
            <p>{text}</p>
            {text2 && <p>{text2}</p>}
            {text3 && <p>{text3}</p>}
          </div>
        )}
      </div>

      {children && <div className="mt-10 w-full">{children}</div>}
    </section>
  );
}
