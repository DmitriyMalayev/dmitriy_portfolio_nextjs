import SectionWrapper from "../Components/SectionWrapper";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Certificates from "../Components/Certificates";

import Head from "next/head";

const index = () => {
  return (
    <div className="text-red-500 sm:pt-24 ">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#C2410C" />

        <title>Meta Tags — Preview, Edit and Generate</title>
        <meta name="title" content="Meta Tags — Preview, Edit and Generate" />
        <meta
          name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Meta Tags — Preview, Edit and Generate"
        />
        <meta
          property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        ></meta>
      </Head>
      <SectionWrapper
        id="about"
        title="About"
        about
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
      <Contact />
    </div>
  );
};

export default index;
