import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import portfolio1 from "../../public/assets/portofolio1.png";

export const getStaticProps = async ()=>{
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

      return {
          props: {portfolios}
      }
}

const AllPortfolio = ({portfolios}) => {
    
    return (
        <div id="portfolio" className="w-full">
      <div className="max-w-screen-xl mx-auto pt-24 p-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl tracking-wider uppercase text-blue-500 font-bold pb-16">
          portfolio
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {portfolios.map(({ id, title, imageSrc, url }) => (
            <Link key={id} href={`/portfolio/${url}`}>
              <div className="cursor-pointer group shadow-md shadow-gray-600 overflow-hidden rounded-md">
                <Image
                  src={imageSrc}
                  alt={title}
                  className="rounded-md duration-200 
              hover:scale-110"
                />
                <h2 className="text-center text-base capitalize my-4 font-light duration-200 group-hover:underline underline-offset-4">
                  {title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    )
}

export default AllPortfolio
