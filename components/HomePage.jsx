import React from "react";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";
import heroImage from "../public/assets/uluumbch.png";

function HomePage() {
  return (
    <div id="home" className="h-full w-full">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex md:flex-row flex-col-reverse md:justify-between justify-evenly items-center">
        <div className="">
          <h1 className="uppercase font-bold text-gray-700 dark:text-gray-300 md:text-7xl text-4xl relative">
            <span className="absolute md:right-8 right-5 -top-16 md:-top-10 -z-0 ">
              <Image src="/assets/code_icon.png" height={150} width={150} />
            </span>{" "}
            junior <br /> programmer
          </h1>

          <p className="text-gray-600 text-xl dark:text-gray-200 max-w-sm">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <Link href="/#me">
            <div className="group flex items-center justify-center my-8 bg-color-accent text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              Know More
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                {" "}
                <MdExpandMore size={25} />{" "}
              </span>
            </div>
          </Link>
        </div>

        <div className="w-2/3 md:w-1/3">
          <Image src={heroImage} alt="me" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
