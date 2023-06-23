import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import image from "../../public/images/teamBg.png";
import dpHanish from "../../public/images/TeamMembers/Image 9.png";
import dpDeepti from "../../public/images/TeamMembers/Image 10.png";
import dpSiraj from "../../public/images/TeamMembers/Image 11.png";
import dpUbaid from "../../public/images/TeamMembers/Image 12.png";
import CustomHeader from "../../components/Customheader/CustomHeader";
import Image from "next/image";
import linkedIn from "../../public/Icons/linkedin.svg";

const Team = () => {
  const data = [
    {
      name: "Hanish Keloth",
      detail: "CEO",
      dp: dpHanish,
      linkedin: "https://www.linkedin.com/in/hanishkeloth",
    },
    {
      name: "Siraj Shaukat Ali",
      detail: "Co-founder/Marketing Head",
      dp: dpSiraj,
      linkedin: "https://www.linkedin.com/in/siraj-shaukat-ali-7aa58018",
    },
    {
      name: "Ubaid Shaik",
      detail: "Business Head",
      dp: dpUbaid,
      linkedin: "https://www.linkedin.com/in/ubaidshaikh",
    },

    {
      name: "Deepthi Mayilat",
      detail: "Business Head",
      dp: dpDeepti,
      linkedin: "https://www.linkedin.com/in/deepthimayilat",
    },
  ];
  const sectionRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((section) => {
      const elems = section.querySelectorAll("#member");

      gsap.set(elems, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });

      ScrollTrigger.create({
        trigger: section,
        start: "top 90%",
        end: "top 30%",
        // markers: true,
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
      id="team"
      style={{
        position: "relative",
        backgroundImage: `url(${image.src})`,
      }}
      className=" bg-cover bg-bottom
       -mb-[300px]  lg:bg-no-repeat lg:bg-center h-max lg:min-h-[110vh]"
    >
      <div className=" px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 font-cambria ">
        <CustomHeader sub="TEAM" main="Our Team" />

        <div
          ref={(ref) => (sectionRefs.current[0] = ref)}
          id="team-wrapper"
          className="mt-8 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-3 md:gap-8 xxl:items-center  lg:grid-cols-3 xl:grid-cols-4 "
        >
          {data.map((i, index) => {
            return (
              <div className=" h-max " id="member">
                <div
                  ref={(ref) => (sectionRefs.current[1] = ref)}
                  className=" w-full h-full gap-2 "
                >
                  <div
                    className={`${
                      index % 2 !== 0 ? "bg-sec-blue" : " bg-main-orange "
                    }  w-12/12 h-full   `}
                  >
                    <div
                      // className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
                      className="bg-green h-10/12 w-10/12 sm:h-9/12 sm:w-9/12 top-2 left-2 sm:top-4 sm:left-4 relative "
                    >
                      <Image
                        className="w-full h-full object-cover "
                        src={i.dp}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full items-center py-6 gap-2 rounded-xl ">
                  <h2 className=" text-[16px] lg:text-card text-center text-wp-gray font-bold">
                    {i.name}
                  </h2>
                  <h2 className=" text-[14px] lg:text-[20px]  text-wp-gray font-medium">
                    {i.detail}
                  </h2>
                  <a
                    href={i.linkedin}
                    className="shrink-0 mt-2 sm:block lg:block rounded-full w-16 items-center h-16 bg-blue p-0"
                  >
                    <Image className="w-full" src={linkedIn} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
