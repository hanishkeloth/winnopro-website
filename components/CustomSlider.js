import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const CustomSlider = ({ children, handleScroll }) => {
  const slider = React.useRef(null);
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
    <Slider ref={slider} {...settings}>
      {children}
    </Slider>
  );
};

export default CustomSlider;
