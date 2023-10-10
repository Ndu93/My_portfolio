import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  let today = new Date();
  today = today.getFullYear();

  const socials = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "http://www.linkedin.com",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "http://www.github.com",
    },
    {
      id: 3,
      child: (
        <>
          <AiFillFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/Ndubueze93",
    },
    {
      id: 4,
      child: (
        <>
          <RiTwitterXFill size={30} />
        </>
      ),
      href: "https://twitter.com/NdubuezeDaniel3",
    },
  ];

  return (
    <footer className="bg-black flex flex-col  lg:flex-row  text-white text-xl w-full h-full py-6 justify-center items-center mx-auto ">
      <div className="flex gap-6">
        {socials.map(({ id, child, href }) => (
          <a target="_blank" key={id} href={href}>
            {child}
          </a>
        ))}
      </div>
      <div className="px-16">
        <h1 className="text-4xl py-8 font-vibes">Ndubueze Daniel</h1>
      </div>
      <div>
        <p className="ml-6">
          &copy; Copyright{" "}
          <span className="text-yellow-200 font-bold">
            Osuagwu Daniel Ndubueze {""}
          </span>
          <span className="year">{today}</span> All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
