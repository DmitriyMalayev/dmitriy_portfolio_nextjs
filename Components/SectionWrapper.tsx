import Image from 'next/image';
import type { ReactNode } from 'react';
import Photo from '@/public/photo.webp';

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle: string;
  text?: string;
  text2?: string;
  text3?: string;
  about?: boolean;
  children?: ReactNode;
};

export default function SectionWrapper({
  id,
  title,
  subtitle,
  text,
  text2,
  text3,
  about,
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className="mb-32 w-full py-12 text-slate-300 lg:min-h-screen">
      <div className="mx-auto flex h-full w-full flex-col items-center justify-center">
        <div
          className={`grid w-full max-w-[1000px] gap-2 ${
            text ? 'place-content-start sm:place-content-center sm:grid-cols-2' : ''
          }`}
        >
          <div
            className={`mb-4 ml-4 flex flex-col items-start border-l-4 border-orange-300 pl-4 sm:ml-0 sm:border-l-0 sm:pl-0 sm:space-y-0 sm:translate-y-[-60px] ${
              text ? 'sm:items-end sm:text-right' : 'sm:items-center'
            } space-y-4`}
          >
            <h2
              className={`inline border-b-4 border-orange-600 pb-2 text-3xl font-bold text-cyan-100 sm:mb-2 sm:px-2 md:text-5xl ${
                text ? 'sm:translate-x-1/2 lg:translate-x-0' : ''
              }`}
            >
              {title}
            </h2>
            <div
              className={`flex flex-col font-dance text-lg font-bold text-orange-300 md:text-2xl ${
                text ? 'justify-end' : 'text-center'
              }`}
            >
              <p className={`${text ? 'sm:max-w-[250px]' : ''} sm:self-end sm:p-2`}>
                {subtitle}
              </p>
              {about ? (
                <div className="mr-4 mt-4 px-2 sm:mr-0 sm:w-[50%] md:w-[30%] lg:w-[40%] sm:self-end">
                  <Image
                    src={Photo}
                    priority
                    width={520}
                    height={640}
                    sizes="(max-width: 768px) 180px, 260px"
                    className="h-auto w-full rounded-md object-cover"
                    alt="Portrait photograph of Dmitriy Malayev smiling at the camera."
                    placeholder="blur"
                  />
                </div>
              ) : null}
            </div>
          </div>

          {text ? (
            <div className="px-2 leading-relaxed text-slate-50 sm:text-md md:pt-2 lg:text-2xl">
              <p className="pb-2 pt-2">{text}</p>
              <p className="pb-2 pt-2">{text2}</p>
              <p className="pb-2 pt-2">{text3}</p>
            </div>
          ) : null}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
