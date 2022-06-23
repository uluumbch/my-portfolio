import { useRouter } from "next/router";
import React from "react";
import portfolio1 from "../../public/assets/portofolio1.png";
import { FaGithub } from "react-icons/fa";
import { AiOutlineCaretRight } from "react-icons/ai";
import { BiChevronLeft } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

const portfolios = [
  {
    id: 1,
    title: "project 1",
    imageSrc: portfolio1,
    url: "portoflio1",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa voluptatibus qui magnam quae distinctio fugiat nihil consequuntur nulla nesciunt accusamus nemo, vitae doloribus rerum asperiores ad illo iusto dignissimos quo eos, id fuga vero. Commodi deleniti praesentium itaque exercitationem ea voluptates, et quasi asperiores dolore maxime repellat culpa? Blanditiis, suscipit? Ad sit quis corporis deleniti optio autem quibusdam quaerat alias ex veritatis molestiae nisi architecto, suscipit quidem soluta tempore dolorum eos amet obcaecati eum rerum? Doloribus atque eaque quibusdam quidem quae autem aut, sunt nobis, tempore dicta quos minus. Animi maxime quia libero incidunt, aspernatur ipsam amet, at inventore ipsum velit, ab voluptatum non omnis cumque doloremque labore. Saepe corporis veniam modi adipisci rerum exercitationem. Quas facilis, quasi molestias vitae, obcaecati accusantium et consectetur nostrum veritatis perspiciatis soluta consequuntur iusto eius repellendus adipisci id quidem aperiam, temporibus voluptate quam dolorum debitis at cumque voluptatibus! Pariatur cum vero, molestiae laudantium iste omnis cupiditate quos consequatur, quod, incidunt nesciunt corrupti vitae natus fuga maxime obcaecati! Soluta accusamus ut eligendi earum optio repellendus inventore deleniti tempora, accusantium quod, sunt totam vel iure odio iusto officiis nulla, quaerat reprehenderit modi iste. Quisquam fugiat iure dolore repellendus totam ad assumenda molestiae quas id eaque.'
  },
  {
    id: 2,
    title: "project 2",
    imageSrc: portfolio1,
    url: "portoflio2",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet culpa voluptatibus qui magnam quae distinctio fugiat nihil consequuntur nulla nesciunt accusamus nemo, vitae doloribus rerum asperiores ad illo iusto dignissimos quo eos, id fuga vero. Commodi deleniti praesentium itaque exercitationem ea voluptates, et quasi asperiores dolore maxime repellat culpa? Blanditiis, suscipit? Ad sit quis corporis deleniti optio autem quibusdam quaerat alias ex veritatis molestiae nisi architecto, suscipit quidem soluta tempore dolorum eos amet obcaecati eum rerum? Doloribus atque eaque quibusdam quidem quae autem aut, sunt nobis, tempore dicta quos minus. Animi maxime quia libero incidunt, aspernatur ipsam amet, at inventore ipsum velit, ab voluptatum non omnis cumque doloremque labore. Saepe corporis veniam modi adipisci rerum exercitationem. Quas facilis, quasi molestias vitae, obcaecati accusantium et consectetur nostrum veritatis perspiciatis soluta consequuntur iusto eius repellendus adipisci id quidem aperiam, temporibus voluptate quam dolorum debitis at cumque voluptatibus! Pariatur cum vero, molestiae laudantium iste omnis cupiditate quos consequatur, quod, incidunt nesciunt corrupti vitae natus fuga maxime obcaecati! Soluta accusamus ut eligendi earum optio repellendus inventore deleniti tempora, accusantium quod, sunt totam vel iure odio iusto officiis nulla, quaerat reprehenderit modi iste. Quisquam fugiat iure dolore repellendus totam ad assumenda molestiae quas id eaque.'
  },
];

const getPortfolioFrom = (url)=> portfolios.filter(p => p.url === url)[0]

export async function getStaticPaths() {
    const paths = portfolios.map((p) => ({
      params: { id: p.url },
    }));
  
    return {
      paths,
      fallback: false,
    };
  }

  export async function getStaticProps({ params }) {
    const portfolio = getPortfolioFrom(params.id);
  
    return {
      props: { portfolio },
    };
  }

const OnePortfolio = ({ portfolio: { title, imageSrc,description } }) => {
  return (
    <div className="h-fir w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-8 flex flex-col">
        <div className="flex">
          <Link href="/portfolio">
            <div className="flex items-center justify-center my-8 text-indigo-500 font-bold capitalize cursor-pointer">
              <BiChevronLeft size={25} /> Back
            </div>
          </Link>
        </div>

        <h1 className="capitalize text-4xl mt-2 mb-8 text-center md:text-left font-bold text-blue-500 tracking-wider">
            {title}
        </h1>

        <div className="relative w-96 h-56 mx-auto overflow-hidden my-8">
            <Image src={imageSrc} alt="" layout="fill"/>
        </div>

        <h2 className="text-center md:text-left my-4 text-2xl font-bold">
            Description
        </h2>
        <p>
            {description}
        </p>
        <div className="flex items-center justify-center gap-10">
          <Link href="/">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              demo
              <span className="duration-200 ease-in">
                <AiOutlineCaretRight size={18} className="ml-2" />
              </span>
            </div>
          </Link>

          <Link href="https://github.com/theyashpatel">
            <div className="group flex items-center justify-center my-8 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              my portfolio
              <span className="duration-200 ease-in">
                <FaGithub size={18} className="ml-2" />
              </span>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default OnePortfolio;
