import { useTheme } from "next-themes";
import Image from "next/image";
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
import IconMobileNavbar from "./IconMobileNavbar";

function Navbar() {
  const [navigation, setNavigation] = useState(false);
  const [pageScroll, setPageScroll] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setIsDarkMode(theme === "dark" ? true : false);
  }, []);

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
      className={`w-full h-20 z-10 fixed dark:bg-gray-700 dark:text-gray-100 bg-gray-100 text-black duration-300 ease-in ${
        pageScroll && "shadow-lg shadow-gray-300/60 dark:shadow-gray-600/60"
      }`}
    >
      <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
        <div className="flex justify-evenly">
          <div className="min-h-max my-auto min-w-max">
            <Image
              src="/assets/MYLOGO.png"
              alt="Bachrul Uluum"
              width={35}
              height={35}
            />
          </div>

          <Link href="/#home">
            <h1 className="text-2xl my-auto lg:text-4xl font-bold cursor-pointer">
              Bachrul Uluum
            </h1>
          </Link>
        </div>

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

            {/* button for dark mode */}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsDarkMode((current) => !current);
              }}
              id="theme-toggle"
              type="button"
              className="ml-10"
            >
              {/* icon for dark */}
              <svg
                id="theme-toggle-dark-icon "
                className={isDarkMode ? `h-5 w-5` : `w-5 h-5 hidden`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              {/* icon for light */}
              <svg
                id="theme-toggle-light-icon"
                className={isDarkMode ? `h-5 w-5 hidden` : `w-5 h-5 `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </ul>

          {/* mobile menu */}
          <div className="flex items-center">
            {/* button for dark mode */}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                setIsDarkMode((current) => !current);
              }}
              id="theme-toggle"
              type="button"
              className="md:hidden pr-5"
            >
              {/* icon for dark */}
              <svg
                id="theme-toggle-dark-icon "
                className={isDarkMode ? `h-8 w-8` : `w-8 h-8 hidden`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              {/* icon for light */}
              <svg
                id="theme-toggle-light-icon"
                className={isDarkMode ? `h-8 w-8 hidden` : `w-8 h-8 `}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
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
              ? "fixed left-0 top-0 w-4/5 h-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 ease-in-out duration-500"
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
}

export default Navbar;
