import SectionWrapper from "../Components/SectionWrapper";

const index = () => {
  return (
    <div className="text-red-500">
      <SectionWrapper title="Hello" subtitle="Subtitle" text="Lorem ipsum">
        <h1>H1</h1>
      </SectionWrapper>
      <SectionWrapper title="Hello" subtitle="Subtitle" text="Lorem ipsum">
        <h1>H1</h1>
      </SectionWrapper>
    </div>
  );
}

export default index;