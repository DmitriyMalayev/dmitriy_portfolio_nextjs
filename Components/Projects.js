import { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const Projects = () => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div
      className="w-full sm:max-w-6xl aspect-video mx-auto"
      ref={containerRef}
    >
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/videoseries?list=PLANPLv1uddy2yxI4XkFZkzTf4g3Z7fD1C"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Projects;
