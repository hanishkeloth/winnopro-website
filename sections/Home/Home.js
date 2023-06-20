import React, { useState } from "react";
import Slide from "../../components/Slide/Slide";
import "./styles/Home.css";
import Image from "next/image";
import { useWindowWidth } from "@/app/WindowWidth";

import image1 from "../../public/images/SlideImages/spotlight_1.png";
import image2 from "../../public/images/SlideImages/spotlight-2.jpeg";
import image3 from "../../public/images/SlideImages/spotlight_3.png";
import mobImage from "../../public/images/MobileImages/spotlight_1_mobile.jpg";
import mobImage2 from "../../public/images/MobileImages/spotlight_2_mobile.jpg";
import mobImage3 from "../../public/images/MobileImages/spotlight_3_mobile.jpg";

const data = [
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

function HomeSection() {
  const [current, setCurrent] = useState(0);

  const windowWidth = useWindowWidth();

  return (
    <div className="  " id="home">
      <Slide currentValue={(value) => setCurrent(value)} data={data}>
        <div
          className={
            current == 0
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image
            id="homeImg"
            className="w-full object-cover "
            src={windowWidth < 600 ? mobImage : image1}
            alt=""
          />
          <div className="flex mt-32 lg:mt-0 lg:items-center justify-center lg:justify-start lg:ml-52 w-full h-full text-center font-cambria absolute ">
            <p
              id="homeText"
              className="text-white font-bold text-[50px] lg:text-[75px] leading-[40px] lg:leading-[57px] "
            >
              Winning <br />{" "}
              <span class="  lg:text-[45px] text-[30px]">through</span>
              <br />
              Innovations
            </p>
          </div>
        </div>
        <div
          className={
            current == 1
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image
            id="homeImg"
            className="w-full object-cover "
            src={windowWidth < 600 ? mobImage2 : image2}
            alt=""
          />
          <div className="flex mt-10 lg:items-center justify-center lg:justify-start lg:ml-60 w-full h-full text-center font-cambria absolute ">
            <p
              id="homeText"
              className="text-white font-bold text-[40px] lg:text-[75px] leading-[40px] lg:leading-[57px] "
            >
              We Care <br />
              <span class=" text-[25px] lg:text-[45px] ">and</span>
              <br />
              VALUE lives
            </p>
          </div>
        </div>
        <div
          className={
            current == 2
              ? "carousel_card carousel_card-active"
              : "carousel_card"
          }
        >
          <Image
            id="homeImg"
            className="w-full object-cover "
            src={windowWidth < 600 ? mobImage3 : image3}
            alt=""
          />
          <div className="flex items-top mt-10 lg:mt-40 justify-center text-sec-blue w-full h-full text-center font-cambria absolute ">
            <p
              id="homeText"
              className=" hidden lg:block font-bold text-[40px] lg:text-[75px] leading-none "
            >
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
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default HomeSection;
