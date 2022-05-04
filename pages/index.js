import SectionWrapper from "../Components/SectionWrapper";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Certificates from "../Components/Certificates";

import Head from "next/head";

let title = "Dmitriy Malayev's Portfolio";
const index = () => {
  return (
    <div className="text-red-500 sm:pt-24 ">
      <Head>
        <title>{title}</title>
        <meta name="title" content="Dmitriy Malayev's Portfolio" />
        <meta
          name="description"
          content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and CS. "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dmitriymalayev.com/" />
        <meta property="og:title" content="Dmitriy Malayev's Portfolio" />
        <meta
          property="og:description"
          content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and CS. "
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://www.dmitriymalayev.com/"
        />
        <meta property="twitter:title" content="Dmitriy Malayev's Portfolio" />
        <meta
          property="twitter:description"
          content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and CS. "
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />
      </Head>
      <SectionWrapper
        id="about"
        title="About"
        subtitle="Educated, Personable, Experienced & Certified"
        text="My name is Dmitriy Malayev. I am a Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Communications and Computer Science. I desire to learn constantly, whether taking online courses, reading blogs, debugging code, or tutoring others. Aside from my technical skills, my most significant strength is my communication skills, personable personality, and solid skills in team-building, project management, web development, and UI Design. "
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
      <SectionWrapper
        id="certificates"
        title="Certificates"
        subtitle="List of My Certificates"
      >
        <Certificates />
      </SectionWrapper>
      <SectionWrapper
        id="contact"
        title="Contact"
        subtitle="Communication is Essential"
      >
        <Contact />
      </SectionWrapper>
    </div>
  );
};

export default index;
