/* eslint-disable react/react-in-jsx-scope */
import SectionWrapper from "../Components/SectionWrapper";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Certificates from "../Components/Certificates";

import Head from "next/head";
import Script from "next/script";


const index = () => {
  return (
    <>
      <div className="text-red-500 pt-32 md:pt-64 lg:pt-0">
        <Head>
          <title>Dmitriy Malayev's Portfolio</title>
          <meta name="title" content="Dmitriy Malayev's Portfolio" />
          <meta name="description" content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and Computer Science." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://dmitriymalayev.com" />
          <meta property="og:title" content="Dmitriy Malayev's Portfolio" />
          <meta property="og:description" content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and Computer Science." />
          <meta property="og:image" content="https://www.dmitriymalayev.com/metaImage.jpeg" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://dmitriymalayev.com" />
          <meta property="twitter:title" content="Dmitriy Malayev's Portfolio" />
          <meta property="twitter:description" content="Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Comm. and Computer Science." />
          <meta property="twitter:image" content="https://www.dmitriymalayev.com/metaImage.jpeg" />

          <link
            href="https://assets.calendly.com/assets/external/widget.css"
            rel="stylesheet"
          />
          <script
            src="https://assets.calendly.com/assets/external/widget.js"
            type="text/javascript"
            async
          ></script>

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.onload = function() { Calendly.initBadgeWidget({ url: 'https://calendly.com/dmalayev/30min', text: 'Shall We Speak?', color: '#0069ff', textColor: '#ffffff', branding: true  }); }`,
            }}
          />
        </Head>
        <SectionWrapper
          id="about"
          title="About"
          subtitle="Educated, Personable, Experienced & Certified"
          text="My name is Dmitriy Malayev. I am a Full-Stack Software Engineer with over three years of experience, a Bachelor of Science degree in Data Communications and Computer Science."
          text2="I desire to learn constantly, whether taking online courses, reading blogs, debugging code, or tutoring others."
          text3="Aside from my technical skills, my most significant strength is my communication skills, personable personality, and solid skills in team-building, project management, web development, and UI Design."
          about
        ></SectionWrapper>

        <SectionWrapper
          id="skills"
          title="Skills"
          subtitle="Languages & Frameworks"
        >
          <Skills />
        </SectionWrapper>

        <SectionWrapper
          id="certificates"
          title="Certificates"
          subtitle="List of My Certificates"
        >
          <Certificates />
        </SectionWrapper>

        {/* <SectionWrapper
          id="projects"
          title="Projects"
          subtitle="YouTube Playlist Of Apps"
        >
          <Projects />
        </SectionWrapper> */}
        <SectionWrapper
          id="contact"
          title="Contact"
          subtitle="Communication is Essential"
        >
          <Contact />
        </SectionWrapper>
        <Script />
      </div>
    </>
  );
};

export default index;