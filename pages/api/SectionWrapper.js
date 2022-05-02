const SectionWrapper = ({ id, title, subtitle, text, children }) => {
  return (
    <section
      id={id}
      className="w-full pt-24 lg:h-screen lg:pt-0 text-slate-300 "
    >
      <div className="flex flex-col justify-center items-center w-full h-full mx-auto p-4">
        <div className={`max-w-[1000px] w-full grid ${text && 'sm:grid-cols-2'} gap-6 sm:place-content-center`}>
          <div className={`pl-8 border-l-4 flex flex-col ${text && 'items-start sm:items-end sm:text-right'} items-start border-orange-300 space-y-4 sm:pl-0 sm:border-l-0 sm:space-y-0 sm:translate-y-[-60px]`}>

            <div className="text-4xl font-bold inline border-b-4 border-orange-600 text-cyan-100 sm:pl-4 pb-2 sm:mb-6">
              {title}
            </div>

            <div className={`${text ? 'justify-end' : 'text-center'} font-bold font-dance text-2xl sm:text-3xl text-orange-300 flex`}>
              <p className={`${text && 'sm:w-[250px]'}`}>
                {subtitle}
              </p>
            </div>
          </div>

          {text && (
            <div>
              <p className="text-xl lg:text-2xl leading-relaxed p-4 text-slate-100">
                {text}
              </p>
            </div>
          )}
        </div>
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
