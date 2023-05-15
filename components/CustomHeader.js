import React from "react";

const CustomHeader = ({ main, sub, classes }) => {
  return (
    <div className="text-start space-y-0 font-cambria ">
      <p
        className={`text-subHeader leading-none  text-main-orange font-bold sm:text-xl ${classes}`}
      >
        {sub}
      </p>
      <h2
        className={` text-header leading-none font-bold sm:text-4xl ${
          classes || "text-wp-gray"
        }`}
      >
        {main}
      </h2>
    </div>
  );
};

export default CustomHeader;
