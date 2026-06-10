import { GitHubIcon } from '@/Components/Icons';

const SocialMedia = () => {
  return (
    <div className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 lg:flex lg:flex-col">
      <ul className="flex flex-col space-y-6">
        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-[#181717] p-2 text-white shadow-sm"
            href="https://github.com/DmitriyMalayev"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Dmitriy Malayev GitHub profile in a new tab"
          >
            <span aria-hidden="true">GitHub</span>
            <GitHubIcon />
          </a>
        </li>
        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-[#0A66C2] p-2 text-gray-300 shadow-sm"
            href="https://www.linkedin.com/in/dmitriymalayev/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Dmitriy Malayev LinkedIn profile in a new tab"
          >
            <span aria-hidden="true">LinkedIn</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>LinkedIn</title>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </li>
        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-[#032D60] p-2 text-gray-300 shadow-sm"
            href="https://trailblazer.me/id/dmalayev"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Open Dmitriy Malayev Trailblazer profile in a new tab"
          >
            <span aria-hidden="true">Trailblazer</span>
            <svg
              aria-hidden="true"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Trailblazer</title>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        </li>

        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-orange-500 p-2 text-gray-300 shadow-sm shadow-orange-500/100"
            href="/new_resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Download Dmitriy Malayev résumé PDF"
          >
            <span aria-hidden="true">Resume</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </a>
        </li>
        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-blue-900 p-2 text-gray-300 shadow-sm shadow-blue-900/100"
            href="mailto:dmitriy.malayev@gmail.com"
            aria-label="Email Dmitriy Malayev"
          >
            <span aria-hidden="true">Email</span>
            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </li>
        <li className="w-[160px] translate-x-[-100px] duration-700 hover:translate-x-0 focus-within:translate-x-0">
          <a
            className="flex w-full items-center justify-between bg-stone-600 p-2 text-gray-300 shadow-sm"
            href="tel:+13477614403"
            aria-label="Call Dmitriy Malayev"
          >
            <span aria-hidden="true">Call me</span>

            <svg
              className="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
