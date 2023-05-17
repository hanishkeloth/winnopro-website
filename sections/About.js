import React, { useEffect, useRef } from "react";
import image from "../public/images/aboutus.png";
import CustomHeader from "../components/CustomHeader";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section
      id="about"
      style={{
        position: "relative",
        backgroundImage: `url(${image.src})`,
      }}
      className="mx-5  lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[150vh]"
    >
      <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-24 ">
        <CustomHeader sub="ABOUT US" main="Who We Are" />
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:items-start lg:gap-10 mt-8  ">
          <div className="mx-auto font-cambria text-center lg:col-span-3 lg:mx-0">
            <p className=" text-mobDescription lg:text-description md:text-description text-left text-wp-gray">
              We provide marketing services to startups and small businesses to
              looking for a partner of their digital media, design & <br />
              development, lead generation and communications requirements.
              <br /> <br />
              We , work with you, not for you. Although we have a great
              resources.
              <br /> <br />
              We are an experienced and talented team of passionate consultants
              who live and breathe search engine marketing.
            </p>
          </div>

          <div className="grid grid-cols-3 lg:col-span-4 gap-4 lg:w-full sm:grid-cols-3 text-mobCard lg:text-card font-cambria ">
            <div className="flex items-center justify-center text-center col-span-1 h-[304px]  bg-main-orange border p-4 shadow-sm ">
              <h1 className=" sm:mt-1 sm:block text-white">
                We Build World Class Products
              </h1>
            </div>
            <div className="flex items-center justify-center col-span-1 text-center h-[304px]  bg-sec-blue border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <h1 className=" sm:mt-1 sm:block text-white">
                We Improve Quality of Lives through Innovation
              </h1>
            </div>
            <div className="flex items-center justify-center col-span-1 sm:col-span-1 lg:col-span-1 text-center h-[304px]  bg-main-orange border p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring">
              <h1 className=" sm:mt-1 sm:block text-white">
                We Enhance Digital Customer Experience
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
