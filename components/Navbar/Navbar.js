import { useEffect, useState } from "react";
import logo from "../../public/images/HeaderImages/wplogo.png";
import Image from "next/image";
import { useWindowWidth } from "../../app/WindowWidth";
import Link from "next/link";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("#/home");

  const links = [
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

  const handleClickScroll = (url) => {
    const element = document.getElementById(url);
    //  console.log(element, url, "elem");
    setActiveLink(url);
    // if (element) {
    //   // 👇 Will scroll smoothly to the top of the next section
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  };

  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (windowWidth < 1020) {
      setNavbar(false);
    }
  }, [windowWidth]);

  return (
    <div className="w-full bg-white sticky shadow-md z-20 top-0 text-description font-cambria text-wp-gray ">
      <div className="justify-between px-4 mx-auto lg:max-w-screen lg:py-4 lg:items-center lg:flex md:px-8 lg:px-14">
        <div>
          <div className="flex items-center justify-between lg:block">
            <Image
              src={logo}
              alt="/"
              //  width="155"
              height="70"
              className="cursor-pointer object-contain "
            />
            <div className="lg:hidden">
              <button
                className="p-2 text-wpGray rounded-md outline-none "
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 top-5 right-5 z-50 absolute "
                    viewBox="0 0 20 20"
                    fill="white"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
              navbar
                ? "block w-[280px] h-screen bg-sec-blue absolute right-0 -top-8 "
                : "hidden"
            }`}
          >
            <ul className="items-center mt-20 md:mt-0 justify-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
              {links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    onClick={() => handleClickScroll(item.url)}
                    // onClick={() => setActiveLink(url)}
                    className={` cursor-pointer ${
                      activeLink === item.url
                        ? "text-orange"
                        : navbar
                        ? "ml-10 mt-10 text-white"
                        : " text-gray-600 "
                    } hover:text-orange`}
                    href={item.url}
                  >
                    <h1>{item.label}</h1>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
