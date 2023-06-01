import React, { useEffect, useRef } from "react";

import image1 from "../public/images/Clients/1614339063621.png";
import image2 from "../public/images/Clients/Cricket_South_Africa.png";
import image3 from "../public/images/Clients/em.png";
import image4 from "../public/images/Clients/hp.png";
import image5 from "../public/images/Clients/korea.png";
import image6 from "../public/images/Clients/noshy.png";
import image7 from "../public/images/Clients/palcare.png";
import image8 from "../public/images/Clients/pipli.png";
import Image from "next/image";
const clienSlide = ({ children }) => {
  const containerRef = useRef(null);
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];
  useEffect(() => {
    const container = containerRef.current;

    const scrollContainer = () => {
      container.scrollTo({
        left: container.scrollLeft + 1,
        behavior: "smooth",
      });
    };

    let scrollInterval = setInterval(scrollContainer, 30);

    container.addEventListener("mouseover", () => {
      clearInterval(scrollInterval);
    });

    container.addEventListener("mouseout", () => {
      scrollInterval = setInterval(scrollContainer, 30);
    });

    return () => {
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center space-x-20 p-10 bg-white overflow-x-auto scrollbar-landscape"
      style={{ scrollBehavior: "smooth" }}
    >
      {images.map((image) => {
        return <Image className=" w-max h-50 object-contain  " src={image} />;
      })}
    </div>
  );
};

export default clienSlide;
