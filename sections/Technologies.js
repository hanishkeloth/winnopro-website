import React, { useState } from "react";
import image from "../public/images/Image6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CustomHeader from "../components/CustomHeader";
import Image from "next/image";
import Slider from "react-slick";

import technology1 from "../public/Icons/winnopro_icon_Technolgies - 1.svg";
import technology2 from "../public/Icons/winnopro_icon_Technolgies - 2.svg";
import technology3 from "../public/Icons/winnopro_icon_Technolgies - 3.svg";
import technology4 from "../public/Icons/winnopro_icon_Technolgies - 4.svg";
import technology5 from "../public/Icons/winnopro_icon_Technolgies - 5.svg";
import technology6 from "../public/Icons/winnopro_icon_Technolgies - 6.svg";
import technology7 from "../public/Icons/winnopro_icon_Technolgies - 7.svg";
import technology8 from "../public/Icons/winnopro_icon_Technolgies - 8.svg";

const Technologies = () => {
  const slider = React.useRef(null);

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
    [
      {
        icon: technology5,
        topic: "Cloud:",
        items: ["AWS", "Azure", "PyTorch", "Gcloud"],
      },
      {
        icon: technology6,
        topic: "Generative AI:",
        items: ["(GPT 4)"],
      },
      {
        icon: technology7,
        topic: "Conversational AI:",
        items: [""],
      },
      {
        icon: technology8,
        topic: "AR, VR & MR:",
        items: [""],
      },
    ],
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    customPaging: function (i) {
      return (
        <div key={i} className="dot">
          {i}
        </div>
      );
    },
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <section
      id="technologies"
      style={{
        position: "relative",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${image.src})`,
        // marginBottom: "-800px",
      }}
      className="lg:h-[110vh] -mb-[300px] "
    >
      <div
        id="technologiesContent"
        className="w-screen-xl mt-[100px] px-0 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 "
      >
        <div className="px-4 sl:px-0 ">
          <CustomHeader
            classes=" text-white "
            sub="TECHNOLOGIES"
            main="Technologies We Work with"
          />
        </div>
        <Slider ref={slider} {...settings}>
          {Object.keys(data).map((item, i) => (
            <div
              onWheel={(event) => {
                if (event.nativeEvent.wheelDelta > 0) {
                  slider?.current?.slickNext();
                } else {
                  slider?.current?.slickPrev();
                }
              }}
            >
              <div
                key={i}
                className="mt-8 mb-10 mx-1  h-max grid grid-cols-2 gap-2 lg:gap-2 md:mt-10 md:grid-cols-2 md:gap-4 lg:grid-cols-4"
              >
                {data[item].map((card, key) => (
                  <div
                    key={key}
                    className="flex flex-col font-cambria lg:h-[485px] h-[310px] items-center p-2 lg:px-2 lg:py-6 gap-1 lg:gap-4 bg-wp-lGray rounded-xl "
                  >
                    <span className="shrink-0  sm:block lg:block rounded-full ">
                      <Image src={card.icon} className="w-[120px] h-[120px]" />
                    </span>
                    <h2 className="text-[14px] lg:text-[24px] text-center text-wp-gray font-bold">
                      {card.topic}
                    </h2>
                    {card.items.map((i) => {
                      return (
                        <h2 className="text-[12px] lg:text-[20px] text-wp-gray max-w-[20ch] font-medium">
                          {i}
                        </h2>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Technologies;
