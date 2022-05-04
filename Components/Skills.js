import HTML from "../public/assets/html.png";
import CSS from "../public/assets/css.png";
import JS from "../public/assets/javascript.png";
import ReactImg from "../public/assets/react.png";
import Node from "../public/assets/node.png";
import FireBase from "../public/assets/firebase.png";
import GitHub from "../public/assets/github.png";
import Tailwind from "../public/assets/tailwind.png";
import Mongo from "../public/assets/mongo.png";
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
      <div className="w-auto grid grid-cols-3 sm:grid-cols-3 gap-6 text-center py-8 p-4 sm:px-40">
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
