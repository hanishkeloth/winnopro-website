import React, { useRef } from "react";
import servicesicon from "../public/Icons/services.png";
import CustomHeader from "../components/CustomHeader";
import image from "../public/images/image10.png";
import Image from "next/image";
import { useInView, motion } from "framer-motion";

function OurServices() {
  return (
    <div
      id="services"
      className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 bg-main-orange "
    >
      {/* <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0">
        {" "}
        <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
        <button className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"></button>
      </div> */}
      <CustomHeader classes=" text-white " sub="SERVICES" main="Our Services" />
      <div className="max-w-[850px] font-cambria relative bg-white my-5 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8">
        <div
          // className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
          className="bg-green lg:block absolute hidden sm:hidden md:hidden z-10 h-full w-full lg:h-5/6 my-4 lg:w-4/6 lg:left-[790px]"
        >
          <Image className="w-full h-full object-cover " src={image} />
        </div>
        <a href="#" className="relative block overflow-hidden mb-5 ">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex space-x-5 items-center ">
            <div className="hidden sm:block sm:shrink-0">
              <Image
                alt=""
                src={servicesicon}
                className="h-14 w-14 rounded-lg object-cover shadow-sm"
              />
            </div>
            <div>
              <h3 className="text-xl lg:text-cardtitle font-bold text-wp-gray sm:text-2xl">
                GPT 4-based AI Applications
              </h3>
            </div>
          </div>

          <div className="mt-4 lg:text-cardDesc lg:ml-20 sm:ml-20 ml-5 flex ">
            <p className="max-w-[65ch] text-md  text-wp-gray ">
              Leverage the power of GPT-4, the latest natural language
              processing technology, to create advanced AI applications like
              chatbots, content generation, and more for a wide range of
              industries.
            </p>
          </div>
        </a>
        <a href="#" className="relative block overflow-hidden mb-5 ">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex space-x-5 items-center ">
            <div className="hidden sm:block sm:shrink-0">
              <Image
                alt=""
                src={servicesicon}
                className="h-14 w-14 rounded-lg object-cover shadow-sm"
              />
            </div>
            <div>
              <h3 className="text-xl lg:text-cardtitle font-bold text-wp-gray sm:text-2xl">
                GPT 4-based AI Applications
              </h3>
            </div>
          </div>

          <div className="mt-4 lg:text-cardDesc lg:ml-20 sm:ml-20 ml-5 flex ">
            <p className="max-w-[65ch] text-md  text-wp-gray ">
              Leverage the power of GPT-4, the latest natural language
              processing technology, to create advanced AI applications like
              chatbots, content generation, and more for a wide range of
              industries.
            </p>
          </div>
        </a>
        <a href="#" className="relative block overflow-hidden">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

          <div className="sm:flex space-x-5 items-center ">
            <div className="hidden sm:block sm:shrink-0">
              <Image
                alt=""
                src={servicesicon}
                className="h-14 w-14 rounded-lg object-cover shadow-sm"
              />
            </div>
            <div>
              <h3 className="text-xl lg:text-cardtitle font-bold text-wp-gray sm:text-2xl">
                GPT 4-based AI Applications
              </h3>
            </div>
          </div>

          <div className="mt-4 lg:text-cardDesc lg:ml-20 sm:ml-20 ml-5 flex ">
            <p className="max-w-[65ch] text-md  text-wp-gray ">
              Leverage the power of GPT-4, the latest natural language
              processing technology, to create advanced AI applications like
              chatbots, content generation, and more for a wide range of
              industries.
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default OurServices;
