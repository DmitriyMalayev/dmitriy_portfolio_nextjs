import React from "react";

const Projects = () => {
  return (
    <div className="sm:max-w-xl md:max-w-5xl aspect-video mx-auto sm:px-2">
      <iframe
        className="w-full h-full "
        src="https://www.youtube.com/embed/videoseries?list=PLANPLv1uddy2yxI4XkFZkzTf4g3Z7fD1C"
        title="YouTube video player"
        frameBorder="2"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Projects;
