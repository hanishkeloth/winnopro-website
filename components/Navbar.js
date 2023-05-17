import { useState } from "react";
import logo from "../public/images/HeaderImages/wplogo.png";
import name from "../public/images/HeaderImages/wpname.png";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const [activeLink, setActiveLink] = useState("#/home");

  const router = useRouter();
  console.log("cur", router);

  const links = [
    {
      label: "Home",
      url: "home",
    },
    {
      label: "About Us",
      url: "about",
    },
    {
      label: "Services",
      url: "services",
    },
    {
      label: "Systematics ",
      url: "systematics ",
    },
    {
      label: "Technologies ",
      url: "technologies ",
    },
    {
      label: "Team ",
      url: "team ",
    },

    {
      label: "Contact ",
      url: "contact ",
    },
  ];

  const handleClickScroll = (url) => {
    const element = document.getElementById(url);
    console.log(element, url, "elem");
    setActiveLink(url);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full bg-white sticky shadow-md z-20 top-0 text-description font-cambria text-wp-gray ">
      <div className="justify-between px-4 mx-auto lg:max-w-screen lg:py-4 md:items-center md:flex md:px-8 lg:px-14">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/" className="flex items-center space-x-1 ">
              <Image
                src={logo}
                alt="/"
                //  width="125"
                height="32"
                className="cursor-pointer"
              />
              <Image
                src={name}
                alt="/"
                //  width="125"
                height="32"
                className="cursor-pointer"
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
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
                    fill="none"
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
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar
                ? "block w-[280px] h-screen bg-sec-blue absolute right-0 top-0 "
                : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {links.map(({ label, url }) => {
                return (
                  <li
                    onClick={() => handleClickScroll(url)}
                    // onClick={() => setActiveLink(url)}
                    className={` cursor-pointer ${
                      activeLink === url
                        ? "text-orange"
                        : navbar
                        ? "ml-10 mt-10 text-white"
                        : " text-gray-600 "
                    } hover:text-orange`}
                  >
                    <h1>{label}</h1>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
