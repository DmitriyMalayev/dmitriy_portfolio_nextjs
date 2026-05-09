'use client';

import { useCallback, useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  const onScroll = useCallback(() => {
    setVisible(window.scrollY > 400);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={scrollUp}
      className="fixed bottom-28 right-4 z-[60] rounded-full bg-orange-600/90 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur hover:bg-orange-500 focus-visible:outline focus-visible:ring-4 focus-visible:ring-orange-300 md:bottom-24 md:right-8"
      aria-label="Scroll to top"
    >
      Top
    </button>
  );
}
