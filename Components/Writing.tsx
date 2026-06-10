import type { ReactElement } from 'react';
import { writingItems } from '@/data/writing';
import type { WritingItem } from '@/data/types';
import { GitHubIcon } from '@/Components/Icons';

function TypeBadge({ type }: { type: WritingItem['type'] }) {
  const map: Record<WritingItem['type'], { label: string; classes: string }> = {
    article: { label: 'Article', classes: 'bg-sky-900/60 text-sky-200' },
    repo: { label: 'Open Source', classes: 'bg-orange-900/60 text-orange-200' },
  };
  const { label, classes } = map[type];
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${classes}`}>
      {label}
    </span>
  );
}

const TYPE_ICONS: Record<WritingItem['type'], ReactElement> = {
  repo: <GitHubIcon />,
  article: (
    <svg
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
};

export default function Writing() {
  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="grid gap-5 md:grid-cols-2">
        {writingItems.map((item) => (
          <a
            key={item.title}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-xl border border-stone-700/60 bg-stone-800/40 p-6 shadow-inner shadow-orange-950/20 transition hover:border-orange-700/60 hover:bg-stone-800/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <div className="mb-3 flex items-center justify-between">
              <TypeBadge type={item.type} />
              <span className="text-stone-500 transition group-hover:text-orange-400">
                {TYPE_ICONS[item.type]}
              </span>
            </div>
            <h3 className="mb-2 font-semibold text-cyan-100 group-hover:text-orange-300">
              {item.title}
            </h3>
            <p className="grow text-sm leading-relaxed text-slate-400">
              {item.description}
            </p>
            <span className="mt-4 text-xs font-medium text-orange-500 transition group-hover:text-orange-300">
              Visit ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
