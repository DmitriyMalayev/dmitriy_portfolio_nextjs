import { experience } from '@/data/experience';

export default function Experience() {
  return (
    <div className="relative mx-auto max-w-[900px] px-4">
      {/* timeline rail */}
      <div
        className="absolute left-[11px] top-6 bottom-6 w-px bg-gradient-to-b from-orange-600/50 via-orange-600/25 to-transparent sm:left-[15px]"
        aria-hidden
      />

      <ol className="relative space-y-12">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-10 sm:pl-14">
            <span
              className="absolute left-0 top-2 grid h-[22px] w-[22px] place-items-center rounded-full border-2 border-orange-500 bg-stone-900 shadow-[0_0_12px_rgba(249,115,22,0.35)] sm:left-1"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-orange-400" />
            </span>

            <article className="rounded-xl border border-stone-700/80 bg-stone-900/60 p-5 shadow-inner shadow-orange-950/25 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-1 border-b border-stone-700/60 pb-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-orange-300">
                    {job.company}
                  </h3>
                  <p className="text-base text-stone-300">{job.role}</p>
                </div>
                <time className="shrink-0 text-sm tabular-nums text-stone-500 sm:text-right">
                  {job.period}
                </time>
              </div>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-slate-200 marker:text-orange-500">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-orange-100/10 px-2.5 py-1 text-xs font-medium text-orange-100 ring-1 ring-orange-900/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </li>
        ))}
      </ol>
    </div>
  );
}
