import React, { useEffect, useRef, useState } from "react";
import image from "../public/images/aboutus.png";
import imageMob from "../public/images/aboutus_mobile.jpg";
import CustomHeader from "../components/CustomHeader";
import { useInView, motion } from "framer-motion";

import { AboutUsData } from "@/data/StaticData";

function AboutUs() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  const mediaMatch = window.matchMedia("(min-width: 768px)");
  const [matches, setMatches] = useState(mediaMatch.matches);
  console.log(matches, "mm");
  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  return (
    <section
      id="about"
      style={{
        position: "relative",
        backgroundImage: `url(${matches ? image.src : imageMob.src})`,
      }}
      className=" lg:bg-cover bg-contain bg-no-repeat bg-bottom  lg:bg-center h-[150vh]"
    >
      <div className="w-screen-xl mx-5  px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-24 ">
        <CustomHeader sub="ABOUT US" main="Who We Are" />
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-7 lg:items-start lg:gap-10 mt-8  ">
          <div className="mx-auto font-cambria text-center lg:col-span-3 lg:mx-0">
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.9 }}
              variants={{
                visible: { opacity: 1, y: -50 },
                hidden: { opacity: 0, y: 0 },
              }}
              className=" text-mobDescription mt-10 lg:text-description md:text-description text-left text-wp-gray"
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
            </motion.p>
          </div>

          <div className="grid grid-cols-3 -mt-10 lg:col-span-4 gap-4 lg:w-full sm:grid-cols-3 text-mobCard lg:text-card font-cambria ">
            {AboutUsData.map((i, index) => {
              return (
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  transition={{ duration: 0.9 }}
                  variants={{
                    visible: { opacity: 1, y: 50 },
                    hidden: { opacity: 0, y: 0 },
                  }}
                  key={index}
                  className={` ${
                    index === 1 ? "bg-sec-blue" : "bg-main-orange"
                  } flex items-center justify-center text-center col-span-1 h-[204px] lg:h-[304px] md:h-[304px] sm:h-[304px]  border p-4 shadow-sm `}
                >
                  <h1 className=" sm:mt-1 sm:block text-white">{i}</h1>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
