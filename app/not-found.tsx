import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-6 pt-32 text-center text-slate-100">
      <p className="text-sm uppercase tracking-[0.3em] text-orange-300">404</p>
      <h1 className="text-3xl font-bold text-cyan-100 md:text-5xl">Page not found</h1>
      <p className="max-w-lg text-lg text-slate-300">
        The page you are looking for does not exist or may have moved. Head back home to
        explore the portfolio.
      </p>
      <Link
        href="/"
        className="rounded-full bg-orange-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-orange-500 focus-visible:outline focus-visible:ring-4 focus-visible:ring-orange-300"
      >
        Go home
      </Link>
    </div>
  );
}
