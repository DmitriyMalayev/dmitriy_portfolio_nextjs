/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Photo from "../public/photo.webp";

const SectionWrapper = ({
  id,
  title,
  subtitle,
  text,
  text2,
  text3,
  about,
  children,
}) => {
  return (
    <section
      id={id}
      className="w-full pt-24 lg:h-screen lg:pt-20 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto">
        <div
          className={`max-w-[1000px] w-full grid ${
            text && "sm:grid-cols-2"
          } gap-2 sm:place-content-center `}
        >
          <div
            className={`pl-8 border-l-4 flex flex-col ${
              text
                ? "items-start sm:items-end sm:text-right"
                : "sm:items-center"
            } border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0 sm:translate-y-[-60px]`}
          >
            <div className="sm:text-3xl md:text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 sm:px-2 pb-2 sm:mb-2">
              {title}
            </div>
            <div
              className={`${
                text ? "justify-end" : "text-center"
              } flex flex-col font-bold font-dance sm:text-lg md:text-xl text-orange-300`}
            >
              <p className="sm:max-w-[300px] md:max-w-[250px] sm:self-end p-2 ">
                {subtitle}
              </p>
              {about && (
                <div className="sm:w-[50%] md:w-[35%] lg:w-[30%]  sm:self-end px-2    ">
                  <Image src={Photo} alt="" />
                </div>
              )}
            </div>
          </div>

          {text && (
            <div className="sm:text-md lg:text-xl leading-2 text-slate-100 px-2">
              <p className="pb-1 pt-1">{text}</p>
              <p className="pb-1 pt-1">{text2}</p>
              <p className="pb-1 pt-1">{text3}</p>
              <p></p>
            </div>
          )}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
