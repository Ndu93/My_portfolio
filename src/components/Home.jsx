import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { images } from "../../constants";
import { Link } from "react-scroll";

const home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b from-black via-black to-gray-800 pt-[50px] md:pt-8 p-6 pb-[22rem] sm:pb-0">
      <div className="max-w-screen-lg w-full mx-auto flex flex-col gap-12 items-center justify-center pb-12 px-4 md:flex-row pt-[110px]">
        <div className="flex flex-col justify-center h-full max-w">
          <h2 className="text-2xl sm:text-7xl font-bold text-white">
            I am a <span className="text-yellow-200">Frontend Developer.</span>
          </h2>
          <p className="text-sm sm:text-xl w-full text-start text-white py-4 max-w-md leading-7">
            I am a passionate and results-driven Frontend Developer with a deep
            appreciation for crafting exceptional user experiences through web
            technologies. I thrive on the intersection of design and technology,
            where creativity meets precision. <br />
            <br />
            My journey in frontend development has been a continuous quest for
            excellence, with a focus on mastering the fundamental trio of HTML,
            CSS, and JavaScript. Beyond the basics, I have knowledge of modern
            frontend libraries and frameworks, such as React, Tailwind,
            Bootstrap and some database structures like Sanity and Firebase,
            enabling me to bring dynamic and responsive web solutions to life.
          </p>

          <div className="flex">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white sm:font-bold w-fit px-3 sm:px-6 mr-10 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-yellow-800 hover:scale-110 duration-300 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight className="ml-1" />
              </span>
            </Link>

            <a
              href="/public/NdubuezedanielResume.pdf"
              download="NdubuezedanielResume">
              <button
                type="button"
                className="text-white sm:font-bold w-fit px-3 sm:px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-500 to-yellow-800 cursor-pointer hover:scale-110 duration-300">
                Hire Me
              </button>
            </a>
          </div>
        </div>

        <div>
          <img
            src={images.heroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default home;
