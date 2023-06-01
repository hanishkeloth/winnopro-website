import React from "react";
import CustomHeader from "../components/CustomHeader";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClientSlide from "./ClientSlide";

const Testimonials = () => {
  const slider = React.useRef(null);

  const data = [
    [
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
      },
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
      },
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
      },
    ],
    [
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
      },
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
      },
      {
        info:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit," +
          " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." +
          "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut" +
          " aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in" +
          " voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        name: " John Smith ",
        location: "Manager, Hewlett Packard",
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
      id="testimonials"
      className="w-screen-xl bg-white -mb-[300px]  px-4 py-8 min-h-screen sm:px-6 sm:py-12 lg:px-24 lg:py-14 font-cambria "
    >
      <CustomHeader sub="TESTIMONIALS" main="What Clients Say" />
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
            <div className="mt-8 mb-10 grid grid-cols-2 gap-2 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {data[item].map(({ name, info, location }) => {
                return (
                  <div className="flex flex-col items-start justify-center text-left col-span-1 bg-wp-lGray border p-3 lg:p-10">
                    <p className=" text-[13px] lg:text-description sm:mt-1 sm:block text-wp-gray">
                      {info}
                    </p>
                    <h1 className="text-[18px] text-main-orange mt-5 lg:mt-10 font-bold lg:text-card ">
                      {name}
                    </h1>
                    <h1 className="text-wp-gray text-[13px] lg:text-description">
                      {location}
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Slider>
      <ClientSlide />
    </div>
  );
};

export default Testimonials;
