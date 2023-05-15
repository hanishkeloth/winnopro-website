import React from "react";
import image from "../public/images/teamBg.png";
import dpHanish from "../public/images/TeamMembers/Image 9.png";
import dpDeepti from "../public/images/TeamMembers/Image 10.png";
import dpSiraj from "../public/images/TeamMembers/Image 11.png";
import dpUbaid from "../public/images/TeamMembers/Image 12.png";
import CustomHeader from "../components/CustomHeader";
import Image from "next/image";

const Team = () => {
  const data = [
    {
      name: "Hanish Keloth",
      detail: "CEO",
      dp: dpHanish,
    },
    {
      name: "Deepti Mayilat",
      detail: "Co-founder/Business Head",
      dp: dpDeepti,
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
  ];

  return (
    <section
      id="team"
      style={{
        position: "relative",
        backgroundImage: `url(${image.src})`,
      }}
      className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
    >
      <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 font-cambria ">
        <CustomHeader sub="TEAM" main="Our Team" />

        <div className="mt-8 grid grid-cols-2 gap-8 md:mt-10 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {data.map(({ dp, name, detail }) => {
            return (
              <div className="flex flex-col items-center gap-4 bg-white ">
                <div className="bg-main-orange relative w-full h-52 ">
                  <div
                    // className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
                    className="bg-green absolute z-10 h-full w-full lg:h-52 lg:w-52 lg:top-6 lg:left-6"
                  >
                    <Image className="w-full h-full object-cover " src={dp} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col h-full items-center p-6 gap-2 rounded-xl ">
                    <h2 className="text-card text-center text-wp-gray font-bold">
                      {name}
                    </h2>
                    <h2 className="text-subHeader  text-wp-gray font-medium">
                      {detail}
                    </h2>
                    <span className="shrink-0 mt-2 sm:block lg:block rounded-full bg-blue p-4">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        stroke="white"
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
