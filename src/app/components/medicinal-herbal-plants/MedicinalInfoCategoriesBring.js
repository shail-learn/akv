import React from 'react'
import banner from "../../../assets/images/agroforestry/banner.webp";
import Link from 'next/link';
import BannerPage from '../BannerPage';
import rightimg from "../../../assets/images/agroforestry/fresh-herbs.webp";
import Image from 'next/image';
import { Productlist } from '../Productlist';
import product1 from "../../../assets/images/agroforestry/product1.webp";
import product2 from "../../../assets/images/agroforestry/product2.webp";
import product3 from "../../../assets/images/agroforestry/product3.webp";
import product4 from "../../../assets/images/agroforestry/product4.webp";
import backgroundImage from "../../../assets/images/timber/category-bg.webp";
import grow from "../../../assets/images/agroforestry/grow.webp";


export const Medicinal = () => {
    const text = {
        banner: banner,
        heading: `Nature’s Healing Wisdom,<br/> Rooted in Tradition`,
        title: "Discover potent herbs and medicinal plants that support holistic well-being—from stress relief to immune strength.",

        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} title={text.title} banner={text.banner} button={text.buttonText} link={text.buttonLink} opacity={text.opacity} />

        </>

    )
}


export const Info = () => {
    const basketData = {
        heading: "Why Choose Medicinal & Herbal Plants?",

        note: "At the heart of every leaf, root, and flower lies the wisdom of centuries. Our curated selection of medicinal and herbal plants is rooted in the rich heritage of Ayurvedic and natural healing. Whether you seek daily wellness or targeted relief, explore nature’s most trusted remedies—grown sustainably and sourced with care.",
        image: rightimg,
    };
    return (
        <>

            <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C] mb-5  md:mb-6">
                                {basketData.heading}
                            </h2>
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



export const Categories = () => {
    const heading = "Explore Our Categories"
    const bgimg = backgroundImage
    const fruitData = [
        {
            title: "Encourage responsible teak cultivation",
            image: product1,
            link: "agroForestry/medicinal-herbal-plants/stress-relief-and-cognitive-wellness",
        },
        {
            title: "Improve farmer income",
            image: product2,
            link: "agroForestry/medicinal-herbal-plants/immunity-and-infection-control",
        },
        {
            title: "Enhance forest cover",
            image: product3,
            link: "agroForestry/medicinal-herbal-plants/digestive-liver-and-metabolism",
        },
        {
            title: "Reduce illegal logging",
            image: product4,
            link: "agroForestry/medicinal-herbal-plants/exotic-and-imported-fruits",
        },



    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} bgimg={bgimg} />
        </>
    )
}


export const Bring = () => {
    const growData = {
        heading: "Join the Movement, Grow with Us",
        paragraphs: [
          "Whether you’re a wellness seeker, farmer, or herbal entrepreneur — our plant database and nursery support systems are here to guide your journey.",

        ],
        cta: "🌱 Join Us — Let’s Grow, Naturally",
        image: grow,
      };
      return (
        <>
          <section className="bg-[#f1f1f1] py-10 px-4">
            <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
              {/* Content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-8 md:mb-20">
                  {growData.heading}
                </h2>
                {growData.paragraphs.map((p, index) => (
                  <p key={index} className="text-black mb-2">
                    {p}
                  </p>
                ))}
                <p className="text-lg md:text-2xl text-[#1B453C] mt-12 font-semibold">
                  {growData.cta}
                </p>
              </div>

              <div className="w-full md:w-1/2 flex justify-center">
                <div className="overflow-hidden  w-[250px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
                  <Image
                    src={growData.image}
                    alt="Grow with us"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-[50%] shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </>
      );
}
