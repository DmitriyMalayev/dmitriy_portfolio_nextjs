const Footer = () => {
  return (
    <footer className="mt-20 flex flex-wrap items-center justify-between gap-10 rounded-lg bg-orange-100/5 p-4 text-orange-700 shadow backdrop-blur-xl sm:p-2 md:p-6 text-xs md:text-sm lg:text-base">
      <span>Created by Dmitriy Malayev</span>

      <ul className="flex flex-wrap items-center gap-6 text-sm md:text-base md:justify-end md:gap-8">
        <li>
          <a
            className="hover:underline hover:underline-offset-4"
            href="mailto:dmitriy.malayev@gmail.com"
          >
            Email me
          </a>
        </li>
        <li>
          <a
            href="tel:+13477614403"
            className="hover:underline hover:underline-offset-4"
          >
            Call me
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
