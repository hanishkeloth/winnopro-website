import React from "react";
import logo from "../../public/images/HeaderImages/winnopro_horizontal.png";
import Image from "next/image";
import twitter from "../../public/Icons/twitter.svg";
import facebook from "../../public/Icons/facebook (1).svg";
import lilnkedin from "../../public/Icons/linkedin.svg";
import phone from "../../public/Icons/phone.svg";
import mail from "../../public/Icons/mail.svg";

const Footer = () => {
  const data = [
    {
      location: "India",
      address:
        "22nd Floor, 26/1,WTC, BRIGADE GATEWAY, Dr Rajkumar Rd, Malleshwaram, Bengaluru, Karnataka 560055",
    },
    // {
    //   location: "UK",
    //   address: "43 George Street SOUTHAMPTON SO17 1EU",
    // },
    // {
    //   location: "Dubai",
    //   address: " Rashed Boulevard, Downtown Dubai, Dubai, 123234",
    // },
  ];
  const navigation = [
    {
      label: "Home",
      url: "#",
    },
    {
      label: "About Us",
      url: "#about",
    },
    {
      label: "Services",
      url: "#services",
    },
    {
      label: "Systematics ",
      url: "#systematics ",
    },
    {
      label: "Technologies ",
      url: "#technologies ",
    },
    {
      label: "Team ",
      url: "#team ",
    },

    {
      label: "Contact ",
      url: "#contact ",
    },
  ];
  const social = [
    {
      icon: facebook,
      link: "https://www.facebook.com/Winnopro/",
    },
    {
      icon: twitter,
      link: "https://twitter.com/winnoprotech",
    },
    {
      icon: lilnkedin,
      link: "https://www.linkedin.com/company/winnopro/",
    },
  ];
  return (
    <>
      <div className="w-screen-xl text-description text-white font-cambria bg-sec-blue px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-14 ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="">
            <Image
              src={logo}
              className=" object-cover w-[225px]  lg:w-[251px] lg:h-[44px] "
            />
          </div>
          <div className="">
            <div className="grid text-[16px] font-medium grid-cols-2">
              {navigation.map((data) => {
                return <a href={data.url}>{data.label}</a>;
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 ">
            {data.map(({ location, address }) => {
              return (
                <div className="">
                  <p className=" text-[20px] font-semibold mb-4 ">{location}</p>
                  <p className="text-[16px] font-medium ">{address}</p>
                </div>
              );
            })}

            <div>
              <p className="text-[20px] mb-5 font-semibold">Contact</p>
              <div className="flex space-x-2 ">
                <Image src={phone} className=" " />
                <a
                  href="tel:+91 990049908"
                  className="text-[16px] hover:underline font-medium"
                >
                  +1 321-499-9007
                </a>
              </div>
              <div className="flex space-x-2 ">
                <Image src={mail} className=" " />
                <a
                  href="/tech@winnopro.tech"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:tech@winnopro.tech";
                  }}
                  className="text-[16px] hover:underline font-medium"
                >
                  tech@winnopro.tech
                </a>
              </div>
              <ul className="flex gap-6 mt-8">
                {social.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        href={item.link}
                        rel="noreferrer"
                        target="_blank"
                        className="text-gray-700 transition hover:opacity-75"
                      >
                        <Image src={item.icon} />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen-xl text-description text-white font-cambria bg-white px-4 py-8 sm:px-6 sm:py-12 lg:px-24 lg:py-5 ">
        <p className="text-xs bg-white text-wp-gray">
          &copy;Winnopro. All Rights Reserved Terms & Conditions - Privacy
          Policy
        </p>
      </div>
    </>
  );
};

export default Footer;
