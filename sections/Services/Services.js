import Image from "next/image";
import { useWindowWidth } from "../../app/Helpers/WindowWidth";
import Slider from "react-slick";
import React, { useRef } from "react";

import servicesicon from "../../public/Icons/services.png";
import CustomHeader from "../../components/Customheader/CustomHeader";
import image from "../../public/images/Services/image10.png";
import image1 from "../../public/images/Services/services2.png";
import image2 from "../../public/images/Services/services3.png";
import mobImage from "../../public/images/MobileImages/Services_1_mobile.jpg";
import mobImage1 from "../../public/images/MobileImages/Services_2_mobile.jpg";
import mobImage2 from "../../public/images/MobileImages/Services_3_mobile.jpg";

function OurServices() {
  const windowWidth = useWindowWidth();
  const slider = React.useRef(null);

  const data = [
    [
      {
        image: image,
        mobImage: mobImage,
        topic: "GPT 4-based AI Applications",
        description:
          "  Leverage the power of GPT-4, the latest natural language processing technology, to create advanced AI applications like chatbots, content generation, and more for a wide range of industries.",
      },
      {
        topic: "ML-Based R&D Development",
        description:
          "Our team of experts specializes in cutting-edge machine" +
          "learning research and development to deliver innovative solutions that solve" +
          "complex business problems and drive growth.",
      },
      {
        topic: "ML-Based Video Streaming Platform",
        description:
          " Our machine learning-based video streaming platform optimizes video quality," +
          "personalizes content recommendations, and provides a seamless user experience for viewers.",
      },
    ],
    [
      {
        image: image1,
        mobImage: mobImage1,
        topic: "ML-Based R&D Development",
        description:
          "Our team of experts specializes in cutting-edge machine" +
          "learning research and development to deliver innovative solutions that solve" +
          "complex business problems and drive growth.",
      },
      {
        topic: "ML-Based R&D Development",
        description:
          "Our team of experts specializes in cutting-edge machine" +
          "learning research and development to deliver innovative solutions that solve" +
          "complex business problems and drive growth.",
      },
      {
        topic: "ML-Based R&D Development",
        description:
          "ML-Based Video Streaming Platform Our machine learning-based video streaming platform optimizes video quality," +
          "personalizes content recommendations, and provides a seamless user experience for viewers.",
      },
    ],
    [
      {
        image: image2,
        mobImage: mobImage2,
        topic: "ML-Based R&D Development",
        description:
          "Our team of experts specializes in cutting-edge machine" +
          "learning research and development to deliver innovative solutions that solve" +
          "complex business problems and drive growth.",
      },
      {
        topic: "ML-Based R&D Development",
        description:
          "Our team of experts specializes in cutting-edge machine" +
          "learning research and development to deliver innovative solutions that solve" +
          "complex business problems and drive growth.",
      },
      {
        topic: "ML-Based R&D Development",
        description:
          "ML-Based Video Streaming Platform Our machine learning-based video streaming platform optimizes video quality," +
          "personalizes content recommendations, and provides a seamless user experience for viewers.",
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
    <div
      id="services"
      className="w-screen-xl -mb-[280px] pl-9 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 bg-main-orange "
    >
      <CustomHeader classes=" text-white " sub="SERVICES" main="Our Services" />
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
              key={{ i }}
              className=" lg:flex mb-10 lg:items-center xs:flex xs:flex-col xs:items-end "
            >
              <div className=" xl:w-9/12 max-w-[1000px]  w-full font-cambria bg-white my-5 px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-8 ml-[1px] ">
                {data[item].map((i, key) => (
                  <a
                    key={key}
                    href="#"
                    className="relative block  overflow-hidden xxl:mb-10 mb-5 "
                  >
                    <div className="flex space-x-5  items-center ">
                      <div className="block sm:shrink-0">
                        <Image
                          alt=""
                          src={servicesicon}
                          className="h-10 w-10 lg:w-14 lg:h-14  rounded-lg object-cover shadow-sm"
                        />
                      </div>
                      <div>
                        <h3 className=" text-mobCardTitle   lg:text-cardtitle font-bold text-wp-gray ">
                          {i.topic}
                        </h3>
                      </div>
                    </div>

                    <div className="mt-4 text-mobDescription lg:text-cardDesc lg:ml-20 ml-[58px] flex ">
                      <p className="max-w-[65ch]  text-wp-gray ">
                        {i.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div
                //  className=" lg:bg-cover lg:bg-no-repeat lg:bg-center lg:h-[120vh]"
                className=" xs:w-10/12 xxl:h-[550px] xxl:w-[550px] lg:h-[55%] "
              >
                <Image
                  className=" xs:-mt-10  lg:-ml-10 object-contain lg:object-cover "
                  src={
                    windowWidth < 1024
                      ? data[item][0].mobImage
                      : data[item][0].image
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default OurServices;
{
  /* <div className="flex items-center h-max w-max ">
<div className="bg-red w-[100px] h-[100px]"></div>
<div className="bg-green w-[90px] h-[90px] -ml-3"></div>
</div> */
}
