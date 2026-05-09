import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="flex h-full flex-col rounded-xl border border-stone-700/80 bg-stone-900/60 p-5 shadow-inner shadow-orange-950/30 backdrop-blur"
        >
          {project.imageSrc ? (
            <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-lg">
              <Image
                src={project.imageSrc}
                alt={`${project.title} preview`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ) : (
            <div
              aria-hidden
              className="mb-4 flex aspect-video items-center justify-center rounded-lg bg-stone-800/70 text-xs uppercase tracking-[0.2em] text-stone-400"
            >
              Project preview
            </div>
          )}
          <header>
            <h3 className="text-xl font-semibold text-orange-300">{project.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-orange-900/60 px-2 py-0.5 text-xs text-orange-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </header>
          <p className="mt-4 flex-grow text-sm leading-relaxed text-slate-200">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                className="rounded border border-orange-500 px-4 py-2 font-semibold text-orange-300 transition hover:bg-orange-900/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub ↗
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                className="rounded border border-transparent px-4 py-2 font-semibold text-sky-200 underline-offset-8 hover:border-sky-500/70 hover:bg-sky-950/70"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </Link>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}
