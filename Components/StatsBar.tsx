import { stats } from '@/data/stats';
import CountUpStat from './CountUpStat';

export default function StatsBar() {
  return (
    <div
      className="mx-auto grid max-w-[1000px] grid-cols-2 gap-3 px-4 sm:gap-4 lg:grid-cols-4"
      aria-label="Selected impact highlights"
    >
      {stats.map((item) => (
        <article
          key={item.label}
          title={`${item.label} — achieved at ${item.context}`}
          className="group rounded-lg border border-stone-700/60 bg-orange-100/5 p-4 text-center shadow backdrop-blur-xl transition hover:border-orange-700/40 sm:p-6"
        >
          <p className="font-dance text-2xl font-bold text-orange-400 sm:text-3xl md:text-4xl">
            <CountUpStat value={item.value} />
          </p>
          <p className="mt-2 text-sm font-medium leading-snug text-stone-200">
            {item.label}
          </p>
          <p
            className="mt-2 text-xs text-stone-500 transition group-hover:text-orange-400/70"
            aria-label={`Context: ${item.context}`}
          >
            @ {item.context}
          </p>
        </article>
      ))}
    </div>
  );
}
