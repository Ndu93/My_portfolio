import React from "react";

import { images } from "../../constants";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-6 text-white">
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 px-6 sm:px-0">
          <p className="text-2xl sm:text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Get in touch with me</p>
        </div>

        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row w-full h-full px-6 sm:px-0 gap-20">
          <div className="flex w-ful justify-center items-center flex-col md:mr-20 ">
            <div className="flex mb-6 justify-start items-center">
              <img
                className="w-1/3 h-20 mr-5 items-start"
                src={images.email}
                alt="email"
              />
              <a href="mailto:danielndu93@gmail.com" className="p-text">
                danielndu93@gmail.com
              </a>
            </div>
            <div className="flex justify-start items-center">
              <img
                className="w-50 h-20 items-start"
                src={images.mobile}
                alt="phone"
              />
              <a href="tel:+2347033126790" className="p-text text-xl">
                +2347033126790
              </a>
            </div>
          </div>

          <div className="flex w-full justify-center items-center">
            <form
              action="https://getform.io/f/76a4585a-78a6-4672-ae75-0aae24823b02"
              method="POST"
              className="flex flex-col w-full md:w-full gap-5">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              />
              <textarea
                name="message"
                rows="10"
                placeholder="Enter your message"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

              <button className="text-white sm:font-bold bg-gradient-to-b from-red-500 to-yellow-800 px-2 sm:px-6 py-2 sm:py-4 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
