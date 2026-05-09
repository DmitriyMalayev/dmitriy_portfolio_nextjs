import { education } from '@/data/education';

export default function Education() {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
      {education.map((entry) => (
        <article
          key={entry.school}
          className="flex h-full flex-col rounded-xl border border-stone-700/80 bg-stone-900/60 p-5 shadow-inner shadow-orange-950/30 backdrop-blur sm:p-6"
        >
          <header className="border-b border-stone-700/60 pb-4">
            <h3 className="text-xl font-semibold text-orange-300">{entry.school}</h3>
            <p className="mt-1 text-base font-medium text-stone-200">
              {entry.credential}
            </p>
            <time className="mt-2 block text-sm tabular-nums text-stone-500">
              {entry.period}
            </time>
          </header>
          <p className="mt-4 grow text-sm leading-relaxed text-slate-200">
            {entry.notes}
          </p>
        </article>
      ))}
    </div>
  );
}
