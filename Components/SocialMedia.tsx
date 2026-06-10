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
            <svg
              aria-hidden="true"
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
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
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
