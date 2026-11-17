import Link from 'next/link';
import { projects } from '@/data/projects';

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <article
          key={project.title}
          className="row-span-3 grid grid-rows-subgrid gap-4 rounded-xl border border-stone-700/80 bg-stone-900/60 p-5 shadow-inner shadow-orange-950/30 backdrop-blur"
        >
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
          <p className="text-base leading-relaxed text-slate-200">
            {project.description}
          </p>
          <div className="flex flex-wrap content-end gap-4 text-sm">
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
