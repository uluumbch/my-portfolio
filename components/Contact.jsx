/* eslint-disable jsx-a11y/label-has-associated-control */
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiSendPlane2Fill } from "react-icons/ri";

function Contact() {
  return (
    <div id="contact" className="w-full scroll-mt-14">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-color-accent font-bold">
          contact
        </h2>
        <p className="pt-2 pb-8">
          I am open to talk regarding freelancing or full-time opportunities.
          Fell free to contact me using your preferred medium.
        </p>
        <div className="max-w-screen-md transition-colors ease-linear shadow-md mx-auto">
          <div className="w-full h-12 rounded-t-lg bg-gray-200 dark:bg-gray-900 flex justify-start items-center space-x-1.5 px-4">
            <span className="w-3 h-3 border-2 border-transparent dark:border-red-400 rounded-full bg-red-400 dark:bg-transparent " />
            <span className="w-3 h-3 border-2 border-transparent dark:border-yellow-400 rounded-full bg-yellow-400 dark:bg-transparent" />
            <span className="w-3 h-3 border-2 border-transparent dark:border-green-400 rounded-full bg-green-400 dark:bg-transparent" />
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 border-t-0 w-full rounded-b-lg h-full mx-auto">
            <div className="w-full rounded-xl p-10 grid md:grid-cols-1 mx-auto">
              <div className="flex m-auto gap-10 w-5/6 lg:hidden">
                <a
                  href="https://twitter.com/bchuluum"
                  target="_blank"
                  className="mx-auto"
                >
                  <FaTwitter
                    className="text-slate-700 dark:text-slate-200"
                    size={50}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/bachrul-uluum/"
                  target="_blank"
                  className="mx-auto"
                >
                  <FaLinkedin
                    className="text-slate-700 dark:text-slate-200"
                    size={50}
                  />
                </a>
                {/* <FaFacebook
                  className="text-slate-700 dark:text-slate-200"
                  size={50}
                /> */}
                <a
                  href="https://github.com/uluumbch"
                  target="_blank"
                  className="mx-auto"
                >
                  <FaGithub
                    className="text-slate-700 dark:text-slate-200"
                    size={50}
                  />
                </a>
              </div>
              <div className="pt-10 lg:pt-2 w-5/6 lg:w-full mx-auto">
                <form className="mx-auto">
                  <div className="form-group mb-6 max-w-md mx-auto">
                    <input
                      type="text"
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700 dark:text-body-primary
        bg-white dark:bg-gray-dark-mode bg-clip-padding
        border border-solid border-gray-300 dark:border-gray-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-color-accent focus:outline-none"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mb-6 max-w-md mx-auto">
                    <input
                      type="email"
                      className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700 dark:text-body-primary
        bg-white dark:bg-gray-dark-mode bg-clip-padding
        border border-solid border-gray-300 dark:border-gray-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-color-accent focus:outline-none"
                      placeholder="Email address"
                    />
                  </div>
                  <div className="form-group mb-6 max-w-md mx-auto">
                    <textarea
                      className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700 dark:text-body-primary
        bg-white dark:bg-gray-dark-mode bg-clip-padding
        border border-solid border-gray-300 dark:border-gray-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-color-accent focus:outline-none
      "
                      rows="5"
                      placeholder="Message"
                    />
                  </div>
                  <button
                    type="submit"
                    className="
      flex
      mx-auto
      px-6
      py-2.5
      bg-color-accent
      text-white
      font-medium
      text-md
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:border-color-accent focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-color-accent active:shadow-lg
      transition
      duration-150
      ease-in-out"
                  >
                    Send <RiSendPlane2Fill className="ml-2 m-auto" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
