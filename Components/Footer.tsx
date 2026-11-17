import { barClass, contentColumnClass } from '@/Components/contentColumn';

const linkClass =
  'rounded font-semibold text-orange-700 transition hover:text-red-600 focus-visible:outline focus-visible:ring-2 focus-visible:ring-orange-400';

const Footer = () => {
  return (
    <footer className={`mt-20 ${barClass}`}>
      <div
        className={`${contentColumnClass} flex min-h-[80px] flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 text-sm md:text-base`}
      >
        <span className="font-semibold">Created by Dmitriy Malayev</span>

        <ul className="flex flex-wrap items-center gap-6 md:justify-end md:gap-8">
          <li>
            <a
              className={linkClass}
              href="https://github.com/DmitriyMalayev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              className={linkClass}
              href="https://www.linkedin.com/in/dmitriymalayev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a className={linkClass} href="mailto:dmitriy.malayev@gmail.com">
              Email me
            </a>
          </li>
          <li>
            <a className={linkClass} href="tel:+13477614403">
              Call me
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
