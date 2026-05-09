'use client';

import { useEffect } from 'react';

export const CALENDLY_URL = 'https://calendly.com/dmalayev/30min';

declare global {
  interface Window {
    Calendly?: {
      initBadgeWidget: (opts: {
        url: string;
        text: string;
        color: string;
        textColor: string;
        branding: boolean;
      }) => void;
      initPopupWidget: (opts: { url: string }) => void;
      showPopupWidget: (url: string) => void;
    };
  }
}

/**
 * Loads the Calendly widget script and CSS once on the client.
 * Does NOT mount a badge — use openCalendlyPopup() from this module
 * to trigger the popup from any button in the app.
 */
export function openCalendlyPopup() {
  if (typeof window === 'undefined') return;
  if (window.Calendly) {
    window.Calendly.initPopupWidget({ url: CALENDLY_URL });
  } else {
    // Script still loading — open the booking page directly as a fallback
    window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
  }
}

export default function ClientCalendly() {
  useEffect(() => {
    if (!document.querySelector('link[data-calendly-widget]')) {
      const linkEl = document.createElement('link');
      linkEl.setAttribute('data-calendly-widget', '');
      linkEl.href = 'https://assets.calendly.com/assets/external/widget.css';
      linkEl.rel = 'stylesheet';
      document.head.appendChild(linkEl);
    }

    if (!document.querySelector('script[data-calendly-widget]')) {
      const scriptEl = document.createElement('script');
      scriptEl.setAttribute('data-calendly-widget', '');
      scriptEl.src = 'https://assets.calendly.com/assets/external/widget.js';
      scriptEl.async = true;
      document.body.appendChild(scriptEl);
    }
  }, []);

  return null;
}
