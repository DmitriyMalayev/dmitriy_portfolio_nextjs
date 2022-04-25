import SectionWrapper from "../Components/SectionWrapper";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

const index = () => {
  return (
    <div className="text-red-500">
      <SectionWrapper
        id="home"
        title="Home"
        subtitle="Personable Software Engineer From Queens, NY"
        text="My name is Dmitriy Malayev. I am a Full-Stack Software Engineer that's based in Queens, NY. Please feel free to explore all the webpages of this website via the navigation links above. Also feel free to connect with me via the social icons on the left side of the screen."
      ></SectionWrapper>
      <SectionWrapper
        id="about"
        title="About"
        subtitle="Educated, Experienced & Certified"
        text="I am a Full-Stack Software Engineer with a background in Data Communications, Computer Science, and Account Management. I have a personable personality and solid skills in team-building, project management, web development, and UI Design. I have over three years of experience, a Bachelor of Science degree in Data Communications and Computer Science, and several certifications available in the next section. Additionally, I desire to learn constantly, whether taking online courses, reading blogs, debugging code, or tutoring others."
      ></SectionWrapper>
      <SectionWrapper
        id="certificates"
        title="Certificates"
        subtitle="My Certificates"
      ></SectionWrapper>
      <SectionWrapper
        id="skills"
        title="Skills"
        subtitle="Languages & Frameworks"
      >
        <Skills />
      </SectionWrapper>
      <SectionWrapper
        id="projects"
        title="Projects"
        subtitle="YouTube Playlist Of Apps"
      >
        <Projects />
      </SectionWrapper>
      <Contact />
    </div>
  );
};

export default index;
