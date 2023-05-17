import React, { useState } from "react";
import Slide from "../components/Slide";
import image1 from "../public/images/SlideImages/spotlight_1.png";
import image2 from "../public/images/SlideImages/spotlight-2.jpeg";
import image3 from "../public/images/SlideImages/spotlight_3.png";
import "./styles/Home.css";
import Image from "next/image";

export const data = [
  {
    image: image1,
    title: "Winning through Innovations",
    class: " ",
  },
  {
    image: image2,
    title: "We CARE and VALUE lives",
  },
  {
    image: image3,
    title: "Touching every aspect of lives through Innovations",
  },
];

function Landing() {
  const [current, setCurrent] = useState(0);
  return (
    <div id="home">
      <Slide currentValue={(value) => setCurrent(value)} data={data}>
        <div
          // onTouchStart={onTouchStart}
          // onTouchMove={onTouchMove}
          // onTouchEnd={onTouchEnd}
          // key={index}
          className={
            current == 0
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image className="w-full object-cover " src={image1} alt="" />
          <div className="flex items-center lg:items-center lg:justify-start justify-center lg:ml-60 w-full h-full text-center font-cambria absolute ">
            <p className="text-white font-bold text-[50px] lg:text-[75px] leading-[40px] lg:leading-[57px] ">
              Winning <br />{" "}
              <span class="  lg:text-[45px] text-[30px]">through</span>
              <br />
              Innovations
            </p>
            {/* <h2
        onMouseEnter={() => {
          setAutoPlay(false);
          clearTimeout(timeOut);
        }}
        onMouseLeave={() => {
          setAutoPlay(true);
        }}
        className=" text-white font-bold text-[80px]  "
      >
        {image.title}
      </h2> */}
          </div>
        </div>
        <div
          // onTouchStart={onTouchStart}
          // onTouchMove={onTouchMove}
          // onTouchEnd={onTouchEnd}
          // key={index}
          className={
            current == 1
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image className="w-full object-cover " src={image2} alt="" />
          <div className="flex items-center ml-14 lg:ml-60 w-full h-full text-center font-cambria absolute ">
            <p className="text-white font-bold text-[40px] lg:text-[75px]  leading-[57px] ">
              We Care <br />
              <span class=" text-[25px] lg:text-[45px] ">and</span>
              <br />
              VALUE lives
            </p>
          </div>
        </div>
        <div
          // onTouchStart={onTouchStart}
          // onTouchMove={onTouchMove}
          // onTouchEnd={onTouchEnd}
          // key={index}
          className={
            current == 2
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image className="w-full object-cover " src={image3} alt="" />
          <div className="flex items-top mt-10 lg:mt-40 justify-center text-sec-blue w-full h-full text-center font-cambria absolute ">
            <p className=" hidden lg:block font-bold text-[40px] lg:text-[75px] leading-none ">
              Touching <br />
              every aspect of lives <br />
              <span class=" lg:text-[50px] text-[25px]">through </span>
              Innovations
            </p>
            <p className=" lg:hidden sm:hidden md:hidden xl:hidden block font-bold text-[50px] leading-[50px] ">
              Touching <br />
              every aspect
              <br />
              of lives <br />
              <span class=" text-[35px]">
                through <br />
              </span>
              Innovations
            </p>
            {/* <h2
                // onMouseEnter={() => {
                //   setAutoPlay(false);
                //   clearTimeout(timeOut);
                // }}
                // onMouseLeave={() => {
                //   setAutoPlay(true);
                // }}
                className=" text-white font-bold text-[80px]  "
              >
                {image.title}
              </h2> */}
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default Landing;
