import React from "react";
import { images } from "../../constants";

const Experience = () => {
  const techSkills = [
    {
      id: 1,
      src: images.html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: images.javascript,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: images.bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-200",
    },
    {
      id: 4,
      src: images.tailwind,
      title: "TAILWIND",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: images.react,
      title: "REACT",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: images.github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: images.nextjs,
      title: "NEXTJS",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      src: images.sanity,
      title: "SANITY",
      style: "shadow-pink-500",
    },
    {
      id: 9,
      src: images.css,
      title: "CSS",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black p-6 w-full h-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="mb-16 px-6 sm:px-0">
          <p className="text-xl sm:text-4xl font-bold border-b-4 border-gray-500 p-1 inline">
            Skills & Experience
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-16 text-center py-12 px-6 sm:px-0 ">
          {techSkills.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg + ${style}`}>
              <img className="w-20 mx-auto" src={src} alt="src" />
              <p className="mt-4 text-[10px] sm:text-sm md:text-xl ">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
