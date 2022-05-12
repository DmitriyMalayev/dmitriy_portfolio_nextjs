import React from "react";

import HTML from "../public/assets/html.webp";
import CSS from "../public/assets/css.webp";
import JS from "../public/assets/javascript.webp";
import ReactImg from "../public/assets/react.webp";
import Node from "../public/assets/node.webp";
import FireBase from "../public/assets/firebase.webp";
import GitHub from "../public/assets/github.webp";
import Tailwind from "../public/assets/tailwind.webp";
import Mongo from "../public/assets/mongo.webp";
import Image from "next/image";

const Skills = () => {
  const skills = [
    { title: "HTML", image: HTML },
    { title: "CSS", image: CSS },
    { title: "JS", image: JS },
    { title: "ReactImg", image: ReactImg },
    { title: "Node", image: Node },
    { title: "Firebase", image: FireBase },
    { title: "Github", image: GitHub },
    { title: "TailwindCSS", image: Tailwind },
    { title: "Mongo", image: Mongo },
  ];
  return (
    <div>
      <div className="sm:w-auto grid grid-cols-3 sm:grid-cols-3 gap-4 text-center py-2 mx-auto sm:px-8 lg:px-64">
        {skills.map((skill) => (
          <div
            className="shadow-md shadow-slate-500 hover:scale-110 border-2 border-transparent hover:border-slate-500 duration-700 pt-6"
            key={skill.title}
          >
            <div className="w-20 mx-auto shadow-blue-600/50 drop-shadow-lg">
              <Image
                src={skill.image}
                alt="CSS Icon"
                width={800}
                height={800}
              />
            </div>
            <p className="my-4">{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
