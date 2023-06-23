import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomHeader from "../../components/Customheader/CustomHeader";
import Image from "next/image";

import image from "../../public/images/methodology.png";
import methodology1 from "../../public/Icons/winnopro_icon_Methodology- 1.svg";
import methodology2 from "../../public/Icons/winnopro_icon_Methodology- 2.svg";
import methodology3 from "../../public/Icons/winnopro_icon_Methodology- 3.svg";
import methodology4 from "../../public/Icons/winnopro_icon_Methodology- 4.svg";
import methodology5 from "../../public/Icons/winnopro_icon_Methodology- 5.svg";
import methodology6 from "../../public/Icons/winnopro_icon_Methodology- 6.svg";

const Systematics = () => {
  const data = [
    {
      title: "Agile Methodology",
      icon: methodology1,
    },
    {
      title: "Requirement Analysis",
      icon: methodology6,
    },
    {
      title: "Design & Planning",
      icon: methodology2,
    },
    {
      title: "Development & Implimentation",
      icon: methodology3,
    },
    {
      title: "Testing & Quality Assurance",
      icon: methodology5,
    },
    {
      title: "Deployment & Maintenance",
      icon: methodology4,
    },
  ];
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
        start: "top 85%",
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
    <div id="systematics" className="-mb-[385px]">
      <div
        style={{
          position: "relative",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${image.src})`,
        }}
        className="h-screen"
      >
        <div className="w-screen-xl px-4 py-8 font-cambria sm:px-6 sm:py-12 lg:px-24 lg:py-14 ">
          <CustomHeader
            sub="SYSTEMATICS"
            main="Methodology & Project Lifecycle"
          />

          <div
            ref={(ref) => (sectionRefs.current[0] = ref)}
            id="systematicsContent"
            className="mt-8  grid grid-cols-2 gap-1.5 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3"
          >
            {data.map((i) => {
              return (
                <div
                  id="card"
                  ref={(ref) => (sectionRefs.current[1] = ref)}
                  className="flex items-center p-1 lg:p-4 gap-1 lg:gap-4 bg-wp-lGray rounded-full "
                >
                  <span className="shrink-0 rounded-full bg-white p-0.5 lg:p-4">
                    <Image
                      className=" w-14 h-14 lg:w-[110px]  lg:h-[110px] "
                      src={i.icon}
                    />
                  </span>
                  <h2 className="text-[12px] lg:text-subHeader font-cambria text-wp-gray max-w-[14ch] font-bold">
                    {i.title}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Systematics;