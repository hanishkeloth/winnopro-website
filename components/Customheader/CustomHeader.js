import React from "react";

const CustomHeader = ({ main, sub, classes }) => {
  return (
    <div className="text-start space-y-1 font-cambria ">
      <p
        className={`lg:text-subHeader text-mobSubHeader leading-none  text-main-orange font-bold sm:text-xl ${classes}`}
      >
        {sub}
      </p>
      <h2
        className={` lg:text-header text-mobHeader leading-none font-extrabold sm:text-4xl ${
          classes || "text-wp-gray"
        }`}
      >
        {main}
      </h2>
    </div>
  );
};

export default CustomHeader;
