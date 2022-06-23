import React from "react";
import Image from "next/image";
import { SiJavascript, SiPhp, SiMysql, SiNodedotjs } from "react-icons/si";

const Experience = () => {
const experiences = [
    {
        id:1,
        title: 'Flask',
        src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    },
    {
        id:2,
        title: 'PHP',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
        id:3,
        title: 'MySQL',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
    },
    {
        id:4,
        title: 'JavaScript',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
        id:5,
        title: 'Node JS',
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
    },
]

  return (
    <div id="experience">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-4xl md:text-7xl tracking-wider uppercase text-blue-700 font-bold">
          Experience
        </h2>
        <p className="pb-5">
          Here is some project that i have build for past 2 years.
        </p>

        <div className="grid lg:grid-cols-4 gap-8">
        {experiences.map(({id, title, src})=>(
            <div key={id} className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-evenly p-6 shadow-lg  rounded-xl ease-in duration-300">
            {/* <span className="text-4xl text-cyan-500">{src}</span> */}
            <Image src={src} width="64px" height="64px"  alt={title}/>
            <h3 className="font-light">{title}</h3>
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
