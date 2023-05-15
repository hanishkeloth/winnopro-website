import React from "react";
import image from "../public/images/methodology.png";
import CustomHeader from "../components/CustomHeader";
import { useInView, motion } from "framer-motion";

const Systematics = () => {
  const data = [
    "Agile Methodology",
    "Requirement Analysis",
    "Design & Planning",
    "Development & Implimentation",
    "Testing & Quality Assurance",
    "Deployment & Maintenance",
  ];
  return (
    <section
      id="systematics"
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image.src})`,
      }}
      className=" lg:h-screen"
    >
      <div className="w-screen-xl px-4 py-8 font-cambria sm:px-6 sm:py-12 lg:px-24 lg:py-14 ">
        <CustomHeader
          sub="SYSTEMATICS"
          main="Methodology & Project Lifecycle"
        />

        <div className="mt-8 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {data.map((i) => {
            return (
              <div className="flex items-center p-4 gap-4 bg-wp-lGray rounded-full ">
                <span className="shrink-0 rounded-full bg-white p-4">
                  <svg
                    className="h-16 w-15"
                    fill="none"
                    stroke="orange"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    ></path>
                  </svg>
                </span>
                <h2 className="text-subHeader font-cambria text-wp-gray max-w-[14ch] font-bold">
                  {i}
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Systematics;
