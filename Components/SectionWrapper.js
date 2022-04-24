const SectionWrapper = ({ id, title, subtitle, text, children }) => {
  return (
    <section
      id={id}
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-2">
        {/*<div className="hidden sm:block max-w-[1000px] w-full ">
          <div className="sm:text-center pb-4">
            <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100">
              {title}
            </p>
          </div>
        </div>*/}

        <div className="max-w-[1000px] w-full">
          <div className="pl-8 border-l-4 border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0">
            <div className="text-4xl text-cyan-100 font-bold sm:hidden border-orange-600 border-b-4 inline">
              {title}
            </div>

            <div className="sm:text-right md:text-center font-bold font-dance text-2xl sm:text-3xl text-orange-300 ">
              <div>
                <span>{subtitle}</span>
                <br className="hidden sm:block" />
              </div>
            </div>
          </div>
        </div>
        {text && (
          <div>
          <p className="text-xl lg:text-2xl  leading-relaxed p-4 text-slate-100">
            {text}
          </p>
        </div>
        )}
        
      </div>

      <div>{children}</div>
    </section>
  );
};

export default SectionWrapper;
