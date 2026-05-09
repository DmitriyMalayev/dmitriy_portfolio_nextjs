'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

type Props = {
  value: string;
};

function parseValue(raw: string): { target: number; suffix: string; decimals: number } {
  const match = raw.match(/^([\d.]+)(.*)$/);
  if (!match) return { target: 0, suffix: raw, decimals: 0 };
  const numStr = match[1];
  const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0;
  return { target: parseFloat(numStr), suffix: match[2], decimals };
}

export default function CountUpStat({ value }: Props) {
  const { target, suffix, decimals } = parseValue(value);
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' });
  const [display, setDisplay] = useState(prefersReducedMotion ? target : 0);

  useEffect(() => {
    if (!isInView || prefersReducedMotion) return;

    const controls = animate(0, target, {
      duration: 1.6,
      ease: 'easeOut',
      onUpdate(v) {
        setDisplay(v);
      },
    });

    return () => controls.stop();
  }, [isInView, prefersReducedMotion, target]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}
