/* eslint-disable react/prop-types */
import Link from "next/link";
import Image from "next/image";
import React from "react";
import myportfolios from "../../portfolios.json";

export const getStaticProps = async () => {
  const { portfolios } = myportfolios;

  return {
    props: { portfolios },
  };
};

function AllPortfolio({ portfolios }) {
  return (
    <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <div className="relative h-52 md:h-64 w-full">
                  <Image
                    src={imageSrc}
                    alt={title}
                    layout="fill"
                    className="absolute w-full  rounded-md duration-200 hover:scale-110"
                  />
                </div>
                <h2 className="text-center text-base capitalize  my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllPortfolio;
