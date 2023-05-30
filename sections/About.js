import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AboutUsData } from "@/data/StaticData";
import { useWindowWidth } from "@/components/WindowWidth";

import image from "../public/images/aboutus.png";
import imageMob from "../public/images/aboutus_mobile.jpg";
import CustomHeader from "../components/CustomHeader";

function AboutUs() {
  const windowWidth = useWindowWidth();
  console.log(windowWidth);

  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((section) => {
      const elems = section.querySelectorAll("#card");

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "bottom 60%",
        //  markers: true,
        onEnter: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
          }),
        onLeave: () =>
          gsap.to(elems, {
            y: -50,
            opacity: 0,
            stagger: 0.2,
          }),
        onEnterBack: () =>
          gsap.to(elems, {
            y: 0,
            opacity: 1,
            stagger: -0.2,
          }),
        onLeaveBack: () =>
          gsap.to(elems, {
            y: 50,
            opacity: 0,
            stagger: -0.2,
          }),
      });
    });
  }, []);

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
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:items-start lg:gap-10 mt-5 sl:mt-8  ">
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
            ref={(ref) => (sectionRefs.current[0] = ref)}
            id="aboutC"
            className="grid -mt-[100px] sl:mt-0 grid-cols-3 lg:col-span-4 gap-1 lg:gap-4 lg:w-full sm:grid-cols-3 text-[15px] sm:text-card md:text-card lg:text-card font-cambria "
          >
            {AboutUsData.map((i, index) => {
              return (
                <div
                  ref={(ref) => (sectionRefs.current[1] = ref)}
                  id="card"
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
