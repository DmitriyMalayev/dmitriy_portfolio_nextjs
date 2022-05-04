/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Photo from "../public/photo.jpg";

const SectionWrapper = ({ id, title, subtitle, text,text2,text3, about, children }) => {
  return (
    <section
      id={id}
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
        <div
          className={`max-w-[1000px] w-full grid ${
            text && "sm:grid-cols-2"
          } gap-4 sm:place-content-center`}
        >
          <div
            className={`pl-8 border-l-4 flex flex-col ${
              text
                ? "items-start sm:items-end sm:text-right"
                : "sm:items-center"
            } border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0 sm:translate-y-[-60px]`}
          >
            <div className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 sm:px-2 pb-2 sm:mb-6">
              {title}
            </div>
            <div
              className={`${
                text ? "justify-end" : "text-center"
              } flex flex-col font-bold font-dance text-2xl sm:text-3xl text-orange-300`}
            >
              <p className="sm:max-w-[350px] md:max-w-[450px] sm:self-end">
                {subtitle}
              </p>
              {about && (
                <div className="mt-8 max-w-[250px] sm:self-end">
                  <Image
                    src={Photo}
                    alt=""
                    width={936}
                    height={1233}
                    objectFit="cover"
                  />
                </div>
              )}
            </div>
          </div>

          {text && (
            <div className="sm:text-2xl lg:text-3xl leading-2 p-4 text-slate-100">
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
