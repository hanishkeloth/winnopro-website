"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import successImg from "../../public/success.png";
import errorImg from "../../public/error.png";
import Image from "next/image";
import twitter from "../../public/Icons/twitter.svg";
import facebook from "../../public/Icons/facebook (1).svg";
import lilnkedin from "../../public/Icons/linkedin.svg";
import phone from "../../public/Icons/phone.svg";
import mail from "../../public/Icons/mail.svg";
export const StatusModal = ({ handleClose, isSuccess }) => {
  const [projectInfo, setProjectInfo] = useState({ name: "", desc: "" });
  const router = useRouter();

  const handleClick = () => {
    router.push("/create");
  };
  const social = [
    {
      icon: twitter,
      link: "https://twitter.com/winnoprotech",
    },
    {
      icon: facebook,
      link: "https://www.facebook.com/Winnopro/",
    },
    {
      icon: lilnkedin,
      link: "https://www.linkedin.com/company/winnopro/",
    },
  ];
  console.log(projectInfo, "name");

  return (
    <div className="flex justify-start items-center font-cambria  overflow-x-hidden overflow-y-auto fixed bg-black bg-opacity-50  inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-11/12 lg:w-5/12 xl:w-5/12 md:w-7/12 sm:w-8/12 mx-auto max-w-6xl">
        {/*content*/}
        <div className="border-0  sm:px-10  rounded-lg pt-10 shadow-lg relative flex flex-col justify-center items-center w-full bg-white opacity-100 outline-none focus:outline-none">
          <Image
            src={isSuccess ? successImg : errorImg}
            className={`object-cover w-[120px] rounded-full shadow-[0px_22px_160px_64px] ${
              isSuccess ? "shadow-green bg-green " : "shadow-red bg-red "
            }`}
          />
          <div className=" flex flex-col space-y-4 bg-white/50 p-10 rounded-2xl backdrop-blur-md -mt-9 items-center ">
            <h3 className="text-[27px] text-center text-[#3F434C] font-semibold">
              {isSuccess
                ? "Thank you for contacting us !"
                : "Sorry, something went wrong !"}
            </h3>
            <h3 className="text-[16px] font-normal font-cambria text-gray-500 ">
              We have Recived your message ,<br />
              we will reach you out immidietly
            </h3>
            <div className="flex items-center justify-center space-x-3 ">
              <a
                className=" font-medium text-[16px] text-wp-gray px-4 py-1.5 rounded-full border border-main-orange hover:bg-main-orange hover:text-white ease-linear transition-all duration-150"
                href="#"
                onClick={handleClose}
              >
                Back to home
              </a>
              <button
                onClick={handleClose}
                className=" font-medium text-[16px] text-wp-gray px-4 py-1.5 rounded-full border border-main-orange hover:bg-main-orange hover:text-white ease-linear transition-all duration-150"
                type="button"
              >
                Close
              </button>
            </div>
            <h1 className="text-[16px] font-normal font-cambria text-gray-500 ">
              Let's Connect!
            </h1>
            <ul className="flex gap-6 mt-8">
              {social.map(({ link, icon }, i) => {
                return (
                  <li
                    key={i}
                    className="bg-gray-400 border border-main-orange rounded-full  hover:bg-main-orange ease-linear transition-all duration-150 "
                  >
                    <a
                      href={link}
                      rel="noreferrer"
                      target="_blank"
                      className=""
                    >
                      <Image src={icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
