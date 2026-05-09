'use client';

import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <Carousel className="mx-auto max-w-[800px] px-2" showThumbs={false}>
      {certificates.map((item) => (
        <figure key={item.src} className="px-1 pb-10">
          <Image
            src={item.src}
            alt={item.alt}
            width={800}
            height={560}
            className="mx-auto h-auto w-full rounded-md object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
          <figcaption className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {item.name}
          </figcaption>
        </figure>
      ))}
    </Carousel>
  );
}
