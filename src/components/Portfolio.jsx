import React from "react";
import { images } from "../../constants";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: images.realEstate,
      href: "https://dan-real-estate.vercel.app/",
      gitHubUrl: "https://github.com/Ndu93/dan-real-estate",
    },
    {
      id: 2,
      src: images.willCheck,
      href: "https://will-check-construction.netlify.app/",
      gitHubUrl: "https://github.com/Ndu93/will_check_site",
    },
    {
      id: 3,
      src: images.adviceGenerator,
      href: "https://advice-generator-app-api.netlify.app/",
      gitHubUrl: "https://github.com/Ndu93/Advice-generator",
    },
    {
      id: 4,
      src: images.navbar,
      href: "https://responsive-navbar-dan.netlify.app/",
      gitHubUrl: "https://github.com/Ndu93/Responsive-navbar",
    },
    {
      id: 5,
      src: images.foodMenu,
      href: "https://food-menu-dan.netlify.app/",
      gitHubUrl: "https://github.com/Ndu93/food-menu",
    },
    {
      id: 6,
      src: images.simpleCalculator,
      href: "https://simple-calculator-dan.netlify.app/",
      gitHubUrl: "https://github.com/Ndu93/Simple-calculator",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white p-6 pb-12 pt-40 md:pt-20 h-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-2xl">Here are some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, gitHubUrl }) => (
            <div key={id} className="shadow-md shadow-gray-700 rounded-lg">
              <img
                className="rounded-md duration-200 hover:scale-105"
                src={src}
                alt=""
              />
              <div className="flex items-center justify-center">
                <a target="_blank" href={href}>
                  <button className="w-/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </button>
                </a>
                <a target="_blank" href={gitHubUrl}>
                  <button className="w-/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Github
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
