import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white pt-20 sm:pt-0 p-11 pb-[17rem] sm:pb-0 ">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-screen pb-16">
        <div className="pb-2 mt-4">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-sm sm:text-xl mt-10 leading-10">
          I am always eager to explore emerging trends and techniques in
          Software Engineering. I believe that staying at the forefront of
          innovation is crucial to delivering state-of-the-art solutions that
          exceed user expectations. In addition to my technical skills, I bring
          a strong sense of teamwork, adaptability, and problem-solving to every
          project. I thrive in fast-paced environments and am known for my
          ability to meet deadlines without compromising on quality.
          <br /> <br />I am excited about the possibilities that lie ahead in
          the world of software development and am eager to be a part of shaping
          the digital future. If you're looking for a dedicated and versatile
          Frontend Developer who can turn your web visions into reality, I would
          love to connect and explore how we can collaborate. Let's build
          beautiful, functional, and user-centric web experiences together.
          <br />I am also a CCTV Engineer and a Solar energy consultant
        </p>
      </div>
    </div>
  );
};

export default About;
