"use client"
import React, { useState } from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/timber/banner.webp";
import basket from "../../../assets/images/timber/tree.webp";
import backgroundImage from "../../../assets/images/timber/category-bg.webp";
import fruit1 from "../../../assets/images/timber/category1.webp";
import fruit2 from "../../../assets/images/timber/category2.webp";
import fruit3 from "../../../assets/images/timber/category3.webp";
import fruit4 from "../../../assets/images/timber/category4.webp";
import fruit5 from "../../../assets/images/timber/Teak.webp";
import fruit6 from "../../../assets/images/timber/Melia-dubia.webp";
import fruit7 from "../../../assets/images/timber/Rosewood.webp";
import fruit8 from "../../../assets/images/timber/Red-Sandalwood.webp";
import fruit9 from "../../../assets/images/timber/Sandalwood.webp";

import Image from 'next/image';

import Link from 'next/link';

export const Banner = () => {
  const text = {
    banner: banner,
    heading: `From Strong Roots to Sustainable Returns`,
    title: "Explore our carefully cultivated timber species, selected for their strength, commercial value, and ecological importance.",
    opacity: "opacity-50"
  };
  return (
    <>

      <BannerPage
        heading={text.heading}
        title={text.title}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}

      />
    </>
  )
}



export const Why = () => {
  const basketData = {
    heading: "Why Timber?",

    note: "At Atulye Krishi Vana, timber is more than just wood — it is a symbol of strength, regeneration, and prosperity. Our agroforestry plantations are home to a variety of timber species grown with the intent to balance long-term economic value with environmental sustainability. These trees not only provide high-quality wood for construction, furniture, and industry but also enrich the soil, support biodiversity, and help sequester carbon. Through our sustainable plantation model, we create long-term green wealth for future generations while uplifting rural communities through employment and value-chain development. ",
    image: basket,
  };
  return (
    <>

      <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C] mb-10  md:mb-0">
              {basketData.heading}
            </h2>

          </div>
          <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">

              <p className="mt-0 md:mt-4 text-black">{basketData.note}</p>
            </div>

            <div className="w-full md:w-[40%]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={basketData.image}
                  alt="Basket of fruits and vegetables"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




export const Explore = () => {
  const heading = "Explore Our Timber Categories"
  const fruitData = [
    {
      title: "Hardwood Trees",
      image: fruit1,
      link: "#"
    },
    {
      title: "Fast-Growing Timber Trees",
      image: fruit2,
      link: "#"

    },
    {
      title: "Softwood & Light Timber Trees",
      image: fruit3,
      link: "timber/softwood-light-timber-trees"

    },
    {
      title: "Kulu",
      image: fruit4,
      link: "timber/kulu"

    },
    {
      title: "Teak",
      image: fruit5,
      link: "timber/teak"

    },
    {
      title: "Melia Dubia",
      image: fruit6,
      link: "timber/melia-dubia"

    },
    {
      title: "Rosewood",
      image: fruit7,
      link: "#"

    },
    {
      title: "Red Sandalwood",
      image: fruit8,
      link: "timber/red-sandalwood"

    },
    {
      title: "Sandalwood",
      image: fruit9,
      link: "#"

    },


  ];

  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll ? fruitData : fruitData.slice(0, 6);
  return (
    <>
      <section
        className="py-12 px-4 md:px-10 bg-cover bg-center bg-no-repeat"
        style={{ background: `url(${backgroundImage.src})center center / cover no-repeat` }}
      >
        <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 '>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center  text-[#1B453C]  mb-14">
            {heading}
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => (
              <Link href={item.link} key={index} className="overflow-hidden">
                <div className="w-full h-[270px] relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="w-full object-cover h-full"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
                </div>
                <div className="p-4 -mt-14 relative z-10 text-base font-semibold text-white">
                  {item.title}
                </div>
              </Link>
            ))}
          </div>

          {/* Show More / Show Less Button */}
          {fruitData.length > 6 && (
            <div className="text-center mt-14 pb-10">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-16 py-3 text-white bg-[#1B453C] hover:bg-[#13312b] rounded-md transition"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          )}

        </div>
      </section>
    </>
  )
}
