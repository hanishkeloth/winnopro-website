import React, { useEffect, useRef, useState } from "react";
import image from "../public/images/aboutus.png";
import imageMob from "../public/images/aboutus_mobile.jpg";
import CustomHeader from "../components/CustomHeader";
import { useInView, motion } from "framer-motion";

import { AboutUsData } from "@/data/StaticData";
import { useWindowWidth } from "@/components/WindowWidth";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  const windowWidth = useWindowWidth();
  console.log(windowWidth);
  return (
    <section
      id="about"
      style={{
        position: "relative",
        backgroundImage: `url(${windowWidth > 768 ? image.src : imageMob.src})`,
      }}
      className=" lg:bg-contain bg-contain bg-no-repeat bg-bottom bg-white min-h-max h-[120vh]"
    >
      <div
        id="aboutA"
        className="w-screen-xl mx-5  px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-24 "
      >
        <CustomHeader sub="ABOUT US" main="Who We Are" />
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:items-start lg:gap-10 mt-8  ">
          <div className="mx-auto font-cambria text-center lg:col-span-3 lg:mx-0">
            <p
              id="aboutD"
              className=" mt-[100px] text-mobDescription lg:text-description md:text-description text-left text-wp-gray"
            >
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

          <div
            id="aboutC"
            className="grid lg:mt-[100px] grid-cols-3 lg:col-span-4 gap-4 lg:w-full sm:grid-cols-3 text-mobCard lg:text-card font-cambria "
          >
            {AboutUsData.map((i, index) => {
              return (
                <div
                  key={index}
                  className={` ${
                    index === 1 ? "bg-sec-blue" : "bg-main-orange"
                  } flex items-center justify-center text-center col-span-1 h-[204px] lg:h-[304px] md:h-[304px] sm:h-[304px]  border p-4 shadow-sm `}
                >
                  <h1 className=" sm:mt-1 sm:block text-white">{i}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
