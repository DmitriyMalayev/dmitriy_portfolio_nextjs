/* eslint-disable @next/next/no-img-element */
import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JS from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Node from "../public/assets/node.png";
import FireBase from "../public/assets/firebase.png";
import GitHub from "../public/assets/github.png";
import Tailwind from "../public/assets/tailwind.png";
import Mongo from "../public/assets/mongo.png";
// import Image from "next/image";

const Skills = () => {
  const skills = [
    { title: "HTML", image: '/assets/html.png'},
    { title: "CSS", image: '/assets/css.png'},
    { title: "JS", image: '/assets/javascript.png'},
    { title: "ReactImg", image: '/assets/react.png' },
    { title: "Node", image: '/assets/node.png'},
    { title: "Firebase", image: '/assets/firebase.png'},
    { title: "Github", image: '/assets/github.png' },
    { title: "TailwindCSS", image: '/assets/tailwind.png' },
    { title: "Mongo", image: '/assets/mongo.png'},
  ];
  return (
    <div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-8 p-4 sm:px-20">
        {skills.map((skill) => (
          <div
            className="shadow-md shadow-slate-500 hover:scale-110 border-2 border-transparent hover:border-slate-500 duration-700 pt-6"
            key={skill.title}
          >
            <div className="w-20 mx-auto shadow-blue-600/50 drop-shadow-lg">
              <img
                src={skill.image}
                alt="CSS Icon"
                width="600"
                height="600"
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
