/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Photo from "../public/photo.webp";

const SectionWrapper = ({ id, title, subtitle, text, text2, text3, about, children }) => {
  return (
    <section id={id} className="w-full lg:h-screen text-slate-300 py-12 mb-32">
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto">
        <div
          className={`max-w-[1000px] w-full grid ${
            text && "sm:grid-cols-2"
          } gap-2 place-content-start sm:place-content-center`}
        >
          <div
            className={`pl-4 mb-4 ml-4 items-start border-l-4 flex flex-col ${
              text ? "sm:items-end sm:text-right" : "sm:items-center"
            } border-orange-300 space-y-4 sm:pl-0 sm:ml-0 sm:border-l-0 sm:space-y-0 sm:translate-y-[-60px]`}
          >
            <div
              className={`text-3xl md:text-5xl font-bold inline border-b-4 border-orange-600 text-cyan-100 sm:px-2 pb-2 sm:mb-2 ${
                text && "sm:translate-x-1/2 lg:translate-x-0"
              }`}
            >
              {title}
            </div>
            <div
              className={`${
                text ? "justify-end" : "text-center"
              } flex flex-col font-bold font-dance text-lg md:text-2xl text-orange-300`}
            >
              <p className={`${text && "sm:max-w-[250px]"} sm:self-end sm:p-2 `}>{subtitle}</p>
              {about && (
                <div className="sm:w-[50%] md:w-[30%] lg:w-[40%]  sm:self-end px-2  mt-4 mr-4 sm:mr-0">
                  <Image src={Photo} alt="" />
                </div>
              )}
            </div>
          </div>

          {text && (
            <div className="sm:text-md lg:text-2xl leading-2 text-slate-50 px-2 md:pt-2">
              <p className="pb-2 pt-2">{text}</p>
              <p className="pb-2 pt-2">{text2}</p>
              <p className="pb-2 pt-2">{text3}</p>
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
