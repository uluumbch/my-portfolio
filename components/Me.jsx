import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full scroll-mt-12">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold">
          about me
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
            As an active student at Lambung Mangkurat University Banjarmasin, I am passionate about web development, particularly in the field of back-end development. 
            <br />
            <br />
One of my primary areas of expertise is HTML, CSS, and JavaScript, which are essential for creating visually stunning and responsive web interfaces. With these skills, I can design and develop website layouts that are both aesthetically pleasing and functional, ensuring that users have a seamless and engaging experience when using the website.
<br />
<br />
In addition to my front-end development skills, I have also mastered several back-end programming languages, including Node JS, PHP, and Laravel. These technologies allow me to create complex website functionality, such as dynamic data processing, user authentication, and API integration. I have also gained an understanding of REST API, which is a critical aspect of modern web development.
          </p>
        </div>

        <div className="flex items-center justify-center gap-10">
          <Link href="/resume.pdf" download={true}>
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>

          <Link href="/#portofolio">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
