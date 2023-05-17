import React, { useState } from "react";
import image from "../public/images/Image6.png";
// import Slide from "../../Components/Slide/Index";
import technology1 from "../public/Icons/winnopro_icon_Technolgies - 1.svg";
import technology2 from "../public/Icons/winnopro_icon_Technolgies - 2.svg";
import technology3 from "../public/Icons/winnopro_icon_Technolgies - 3.svg";
import technology4 from "../public/Icons/winnopro_icon_Technolgies - 4.svg";

import "./styles/Home.css";
import CustomHeader from "../components/CustomHeader";
import Image from "next/image";
const Technologies = () => {
  const [current, setCurrent] = useState(0);
  const data = [
    [
      {
        icon: technology1,
        topic: "Programming languages:",
        items: ["Python", "Nodejs", "GO", "Spring Boot", "Java"],
      },
      {
        icon: technology2,
        topic: "Frontend Technologies:",
        items: ["Reactjs", "Flutter", "Nextjs", "Angular"],
      },
      {
        icon: technology3,
        topic: "Database:",
        items: ["MongoDB", "Firebase", "Firestore", "MySQL"],
      },
      {
        icon: technology4,
        topic: "ML Tools:",
        items: ["TensorFlow", "scikit-learn,", "PyTorch", "Keras", "Pandas"],
      },
    ],
    // [
    //   {
    //     topic: "Cloud:",
    //     items: ["AWS", "Azure", "PyTorch", "Gcloud"],
    //   },
    //   {
    //     topic: "Generative AI:",
    //     items: ["(GPT 4)"],
    //   },
    //   {
    //     topic: "Conversational AI:",
    //     items: [""],
    //   },
    //   {
    //     topic: "AR, VR & MR:",
    //     items: [""],
    //   },
    // ],
  ];

  return (
    <section
      id="technologies"
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image.src})`,
      }}
      className="lg:h-[110vh] "
    >
      <div className="w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 ">
        <CustomHeader
          classes=" text-white "
          sub="TECHNOLOGIES"
          main="Technologies We Work with"
        />
        {/* <Slide currentValue={(value) => setCurrent(value)} data={data}> */}
        {/* {Object.keys(data).map((key, index) => {
          return ( */}
        {/* <div
          className={
           // index == current
              ? " opacity-[1] scale-100 pointer-events-auto "
              : "flex flex-1 w-auto h-auto absolute overflow-hidden opacity-0 pointer-events-none "
          }
          key={key}
        > */}
        <div
          //  key={key}
          className="mt-8 h-max grid grid-cols-2 gap-4 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-4"
        >
          {data[0].map(({ topic, items, icon }) => {
            return (
              <div className="flex flex-col font-cambria h-full items-center p-6 gap-4 bg-wp-lGray rounded-xl ">
                <span className="shrink-0 hidden sm:block lg:block rounded-full bg-white p-4">
                  <Image src={icon} className="w-[110px] h-[110px] " />
                </span>
                <h2 className="text-xl lg:text-card text-center text-wp-gray font-bold">
                  {topic}
                </h2>
                {items.map((i) => {
                  return (
                    <h2 className="text-lg lg:text-subHeader text-wp-gray max-w-[20ch] font-medium">
                      {i}
                    </h2>
                  );
                })}
              </div>
            );
          })}
        </div>
        {/* </div> */}
        {/* );
        })} */}
        {/* </Slide> */}
      </div>
    </section>
  );
};

export default Technologies;
