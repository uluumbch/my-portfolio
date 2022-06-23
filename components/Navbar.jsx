import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { CgDarkMode } from "react-icons/cg";
import IconMobileNavbar from "./IconMobileNavbar";

const Navbar = () => {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const sub = window.addEventListener("scroll", () =>
      setPageScroll(window.scrollY >= 90)
    );

    return sub;
  }, []);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portofolio",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "me",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div
      className={`w-full h-20 z-10 fixed dark:bg-gray-700 dark:text-gray-100 bg-white text-black duration-300 ease-in ${
        pageScroll && "bg-black text-[#fff]"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <Link href="/#home">
          <h1 className="text-3xl lg:text-4xl font-bold uppercase cursor-pointer">
            uluumbch
          </h1>
        </Link>

        <div>
          {/* navigation bar */}
          <ul className="hidden md:flex">
            {links.map(({ id, link }) => (
              <Link key={id} href={`/#${link}`}>
                <li className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                  {link}
                </li>
              </Link>
            ))}
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="ml-10 text-sm uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <CgDarkMode size={20} />
            </button>
          </ul>

          {/* mobile menu */}
              <div className="flex items-center">

              
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="pr-5 md:hidden"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <CgDarkMode size={30} />
          </button>
          {!navigation && (
            <div className="md:hidden" onClick={() => setNavigation(true)}>
              <FaBars size={30} />
            </div>
          )}
          </div>
        </div>
      </div>

      <div
        className={
          navigation
            ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur"
            : ""
        }
      >
        <div
          className={
            navigation
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in duration-500"
              : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-2xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  uluumbch
                </h2>
              </Link>

              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={25} />
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col h-fit gap-20 ">
            <ul className="uppercase">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li
                    onClick={() => setNavigation(false)}
                    className="py-4 text-xl tracking-wider cursor-pointer"
                  >
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

            <div>
              <div className="grid grid-cols-2 mx-auto w-4/5 gap-10">
                <IconMobileNavbar icon={<FaLinkedin size={25} />} />
                <IconMobileNavbar icon={<FaTwitter size={25} />} />
                <IconMobileNavbar icon={<FaGithub size={25} />} />
                <IconMobileNavbar icon={<FaFacebook size={25} />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
