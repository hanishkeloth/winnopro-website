import React from "react";
import CustomHeader from "../components/CustomHeader";

const Testimonials = () => {
  const data = [
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
  ];

  return (
    <div
      id="testimonials"
      className="w-screen-xl  px-4 py-8 min-h-screen sm:px-6 sm:py-12 lg:px-24 lg:py-14 font-cambria "
    >
      <CustomHeader sub="TESTIMONIALS" main="What Clients Say" />
      <div className="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
        {data.map(({ name, info, location }) => {
          return (
            <div className="flex flex-col items-start justify-center text-left col-span-1 bg-wp-lGray border p-10">
              <p className=" text-description sm:mt-1 sm:block text-wp-gray">
                {info}
              </p>
              <h1 className="text-main-orange mt-10 font-bold text-card ">
                {name}
              </h1>
              <h1 className="text-wp-gray text-description">{location}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
