import React from "react";

const CustomWrapper = ({ Children }) => {
  return (
    <div className="w-screen-xl bg-green h-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-24 ">
      {Children}
    </div>
  );
};

export default CustomWrapper;
