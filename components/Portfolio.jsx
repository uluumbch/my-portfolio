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
            <h3 className="text-color-accent text-2xl">Toko Komputer</h3>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              PHP
            </span>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              Laravel
            </span>
            <p>
            Built using Laravel and Tailwind CSS this is an online inventory for a computer store. The purpose of the project was to create a platform where administrator can see how many items sold and dashboard for inventory like how many items left in warehouse. The project was developed as part of a college project and was designed to showcase my skills in web development using Laravel and Tailwind CSS.
            </p>
          </div>
          <div className="max-w-screen-xl transition-colors ease-linear shadow-md w-full md:w-1/2">
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

        <div className="flex items-center md:flex-row flex-col-reverse md:justify-between pt-8">
          <div className="text-lg text-justify md:pl-0 p-4 md:w-1/2">
            <h3 className="text-color-accent text-2xl">Infinite Scroll App</h3>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              Node JS
            </span>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              React JS
            </span>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              MySQL
            </span>
            <p>
              This simple project is created for demonstration about fetching 1
              milion data super fast with query limit. the goal of this project
              is to create a REST API that can fetch data quickly even if it has
              a lot of data. This project use Express js for Backend and React
              for Frontend and the data stored in database using MySQL. I also
              use Tailwind CSS for styling.
            </p>
          </div>
          <div className="max-w-screen-xl transition-colors ease-linear shadow-md w-full md:w-1/2">
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
                    src="/assets/infinitescroll1.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/infinitescroll2.png"
                    width={1200}
                    height={700}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <div className="flex items-center md:flex-row flex-col-reverse md:justify-between pt-8">
          <div className="text-lg text-justify md:pl-0 p-4 md:w-1/2">
            <h3 className="text-color-accent text-2xl">Bot Pengingat Sholat</h3>
            <span className="rounded-3xl shadow-md dark:shadow-slate-600 px-3">
              Node JS
            </span>
            <p>
              A simple bot that can send messages automatically to telegram
              groups. The bot will send a message (in the form of an image)
              based on the prayer times that day. Why use Bots?
              <br />
              Bots can send messages automatically according to the time we
              specify.
              <br />
              It doesn't take huge resources to be able to run Bot on local
              server
              <br />
              Bots don't have phone numbers like regular accounts. So it is
              impossible to get spam.
            </p>
          </div>
          <div className="max-w-screen-xl transition-colors ease-linear shadow-md w-full md:w-1/2">
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
                    src="/assets/bot1.png"
                    width={1200}
                    height={700}
                    objectFit="contain"
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <Image
                    src="/assets/bot2.png"
                    width={1200}
                    height={700}
                    objectFit="contain"
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
