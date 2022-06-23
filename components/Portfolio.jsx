import Link from "next/link";
import Image from "next/image";
import React from "react";
import portfolio1 from "../public/assets/portofolio1.png";
import { MdExpandMore } from "react-icons/md";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      title: "project 1",
      imageSrc: portfolio1,
      url: "portoflio1",
    },
    {
      id: 2,
      title: "project 1",
      imageSrc: portfolio1,
      url: "portoflio1",
    },
  ];
  return (
    <div id="portofolio" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl tracking-wider uppercase text-blue-700 font-bold">
          Portfolio
        </h2>
        <p className="pb-5">Here is some project that i have build for past 2 years.</p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-110"
                />
                <h2 className="text-center text-base capitalize  my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              All project
              <span className="-rotate-90 duration-100 ease-in group-hover:translate-x-3">
                {" "}
                <MdExpandMore size={25} />{" "}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
