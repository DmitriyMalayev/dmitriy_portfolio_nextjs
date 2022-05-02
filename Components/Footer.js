const Footer = () => {
  return (
    <div className="sm:text-md md:text-lg lg:text-xl p-4 rounded-lg shadow flex items-center justify-between md:p-6 text-orange-700 gap-10 bg-orange-300/15 backdrop-blur-xl mt-20 ">
      <span className="">Created By Dmitriy Malayev</span>

      <ul className="flex flex-wrap items-center sm:mt-0">
        <li>
          <a
            className="mr-4  hover:underline md:mr-6 "
            href="mailto: dmitriy.malayev@gmail.com"
          >
            Email Me
          </a>
        </li>
        <li>
          <a href="tel:5554280940" className="mr-4  hover:underline md:mr-6 ">
            Call Me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
