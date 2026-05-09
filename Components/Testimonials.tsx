import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  return (
    <div className="mx-auto max-w-5xl px-4">
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <figure
            key={item.author}
            className="flex flex-col rounded-xl border border-stone-700/60 bg-stone-800/40 p-6 shadow-inner shadow-orange-950/20"
          >
            <svg
              className="mb-4 h-6 w-6 text-orange-500/70"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="grow text-sm leading-relaxed text-slate-300">
              {item.quote}
            </blockquote>
            <figcaption className="mt-5 border-t border-stone-700/50 pt-4">
              <p className="font-semibold text-cyan-100">{item.author}</p>
              <p className="mt-0.5 text-xs text-orange-400">
                {item.role}
                {item.company ? ` · ${item.company}` : ''}
              </p>
              {item.linkedInUrl && (
                <a
                  href={item.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-xs text-stone-500 underline underline-offset-2 hover:text-stone-300"
                >
                  View on LinkedIn ↗
                </a>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
      <p className="mt-10 text-center text-sm text-stone-500">
        See all recommendations on{' '}
        <a
          href="https://www.linkedin.com/in/dmitriymalayev/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 underline underline-offset-4 hover:text-orange-300"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  );
}
