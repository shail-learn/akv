import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/fruits-vegetables/banner.webp";
import image1 from "../../../assets/images/fruits-vegetables/image1.webp";
import image2 from "../../../assets/images/fruits-vegetables/image2.webp";
import image3 from "../../../assets/images/fruits-vegetables/image3.webp";
import image4 from "../../../assets/images/fruits-vegetables/image4.webp";
import basket from "../../../assets/images/fruits-vegetables/basket.webp";

import Image from 'next/image';


export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Where Nature Grows <br/> And Goodness Glows`,
        title: "Atulye Krishi Vana isn’t just a marketplace — it’s a journey back to the roots. A place where every fruit and vegetable is a story of care, cultivation, and commitment. Grown with love by local farmers and harvested with utmost freshness, our produce brings nature’s finest straight to your home.",
        opacity: "opacity-0"
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



export const Atulye = () => {
    const heading = " From Farm to Fork – The Atulye Way"
    const description = "  Our fruits and vegetables come from sustainable farms that follow natural and ethical farming practices. We believe in preserving purity, retaining nutrition, and offering only the best to our consumers."
    const atulyeFeatures = [
        {
            title: "Naturally Grown",
            image: image1, // Replace with your local/public image path
        },
        {
            title: "Chemical free & fresh",
            image: image2,
        },
        {
            title: "Sourced directly from farmers",
            image: image3,
        },
        {
            title: "Packed With Nutrition Delivered With Love",
            image: image4,
        },
    ];

    return (
        <>
            <section className=" pt-14 pb-8 lg:pt-16 lg:pb-10 bg-white">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#1B453C] mb-10">
                        {heading}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {atulyeFeatures.map((item, index) => (
                            <div key={index} className="bg-[#1B4B3E] p-4 md:p-5 rounded-xl overflow-hidden text-white text-center shadow-md">
                                <div className="w-full h-[180px] relative">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-[20px]"
                                    />
                                </div>
                                <div className="p-4">
                                    <p className="text-base font-medium">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-base md:text-[18px] text-black mt-10 max-w-4xl mx-auto leading-relaxed">
                        {description}
                    </p>
                </div >
            </section>
        </>
    )
}



export const What = () => {
    const basketData = {
        heading: "What’s In Your Basket?",
        description : "Explore a colorful and nutritious variety of:",
        items: [
          {
            title: "Fresh Fruits",
            description: "Juicy mangoes, crisp apples, ripe bananas & more",
          },
          {
            title: "Seasonal Vegetables",
            description: "Leafy greens, root veggies, gourds & more",
          },
          {
            title: "Herbs & Exotics",
            description: "Handpicked herbs and unique finds from local farms",
          },
        ],
        note: "Each product is carefully curated, keeping taste, health, and sustainability in mind.",
        image: basket, // Place this image in your /public/images directory
      };
    return (
        <>

        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
  <div className="flex flex-col-reverse justify-between lg:flex-row items-center gap-8">
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-8">
        {basketData.heading}
      </h2>
      <p className="mt-4 text-black font-semibold mb-4">{basketData.description}</p>

      <ul className="list-disc list-inside space-y-1 text-base text-gray-800">
        {basketData.items.map((item, idx) => (
          <li key={idx}>
            <strong>{item.title}</strong> – {item.description}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-black">{basketData.note}</p>
    </div>

    {/* Image */}
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
