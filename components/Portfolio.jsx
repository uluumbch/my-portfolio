import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MdExpandMore } from "react-icons/md";
import { EffectCoverflow } from "swiper";
// import portfolios from "../portfolios.json";

function Portfolio() {
  // const myportfolios = portfolios.portfolios;
  return (
    <div id="portofolio" className="w-full scroll-mt-12">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl tracking-wider uppercase text-color-accent font-extrabold">
          Portfolio
        </h2>
        <p className="pb-5">
          Here is some project that i have build for past 2 years.
        </p>

        <div className="flex items-center md:flex-row flex-col-reverse md:justify-between">
          <div className="text-lg text-justify md:pl-0 p-4 md:w-1/2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="max-w-screen-xl transition-colors ease-linear shadow-md w-2/3 md:w-1/2">
            <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
              <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent " />
              <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent" />
              <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent" />
            </div>
            <div className="bg-gray-100 dark:bg-gray-700 border-t-0 rounded-b-lg">
              <Swiper
                effect="coverflow"
                grabCursor
                centeredSlides
                slidesPerView={1.1}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 70,
                  depth: 480,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination
                modules={[EffectCoverflow]}
                className=""
              >
                <SwiperSlide>
                  <Image
                    src="/assets/portofolio1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/portofolio1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/portofolio1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/portofolio1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/portofolio1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        {/* <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          
          {myportfolios.map(({ id, title, imageSrc, url }) => (
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
        </div> */}

        <div className="flex items-center justify-center">
          <Link href="/portfolio">
            <div className="group flex items-center justify-center my-8 bg-color-accent text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
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
}

export default Portfolio;
