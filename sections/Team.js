import React, { useEffect, useRef } from "react";
import image from "../public/images/teamBg.png";
import dpHanish from "../public/images/TeamMembers/Image 9.png";
import dpDeepti from "../public/images/TeamMembers/Image 10.png";
import dpSiraj from "../public/images/TeamMembers/Image 11.png";
import dpUbaid from "../public/images/TeamMembers/Image 12.png";
import CustomHeader from "../components/CustomHeader";
import Image from "next/image";
import linkedIn from "../public/Icons/linkedin.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Team = () => {
  const data = [
    {
      name: "Hanish Keloth",
      detail: "CEO",
      dp: dpHanish,
    },
    {
      name: "Siraj Shaukat Ali",
      detail: "Co-founder/Marketing Head",
      dp: dpSiraj,
    },
    {
      name: "Ubaid Shaik",
      detail: "Business Head",
      dp: dpUbaid,
    },

    {
      name: "Deepti Mayilat",
      detail: "Business Head",
      dp: dpDeepti,
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
        end: "top 50%",
        markers: true,
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
      className=" lg:bg-cover -mb-[300px] lg:bg-no-repeat lg:bg-center lg:h-[110vh]"
    >
      <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 font-cambria ">
        <CustomHeader sub="TEAM" main="Our Team" />

        <div
          ref={(ref) => (sectionRefs.current[0] = ref)}
          id="team-wrapper"
          className="mt-8 grid grid-cols-2 gap-8 md:mt-10 md:grid-cols-3 md:gap-4 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4 "
        >
          {data.map((i, index) => {
            return (
              <div
                ref={(ref) => (sectionRefs.current[1] = ref)}
                id="member"
                className="flex flex-col items-center gap-4 w-max bg-none lg:bg-white "
              >
                <div
                  className={`${
                    index % 2 !== 0 ? "bg-sec-blue" : " bg-main-orange "
                  }  relative w-[185px] h-[155px] lg:w-[270px] lg:h-52`}
                >
                  <div
                    // className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
                    className="bg-green absolute z-10 h-40 w-42  lg:h-52 lg:w-52 top-4 left-3 lg:top-4 lg:left-4"
                  >
                    <Image className="w-full h-full object-cover " src={i.dp} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col h-full items-center py-6 gap-2 rounded-xl ">
                    <h2 className=" text-[16px] lg:text-card text-center text-wp-gray font-bold">
                      {i.name}
                    </h2>
                    <h2 className=" text-[14px] lg:text-[20px]  text-wp-gray font-medium">
                      {i.detail}
                    </h2>
                    <span className="shrink-0 mt-2 sm:block lg:block rounded-full w-16 items-center h-16 bg-blue p-0">
                      <Image className="w-full" src={linkedIn} />
                    </span>
                  </div>
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
