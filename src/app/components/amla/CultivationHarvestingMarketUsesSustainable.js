"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import growth1 from "../../../assets/images/amla/growth1.webp";
import objectbg from "../../../assets/images/eco/WhyChoose.webp";

import img1 from "../../../assets/images/eco/img1.png";
import img2 from "../../../assets/images/eco/img2.png";
import img3 from "../../../assets/images/eco/img3.png";
import img4 from "../../../assets/images/eco/img4.png";
import img5 from "../../../assets/images/eco/img5.png";

import img01 from "../../../assets/images/amla/market.webp";
import { FaqSlider } from '../FaqSlider';


export const Cultivation = () => {
    const heading = "Cultivation & Growth Characteristics"
    const shortdescription = "Amla trees exhibit strong growth traits that make them ideal for commercial farming."
    const boxslider = [
        {
            iamge: growth1,
            heading: "Medium Growth Rate ",
            description: 'Reaches a height of 10-12 feet in 3-4 years.',
        },
        {
            iamge: growth1,
            heading: "Moderate Water Requirements",
            description: 'Requires irrigation during initial years but tolerates dry conditions once established.',
        },
        {
            iamge: growth1,

            heading: "Pest & Diseases",
            description: 'Requires irrigation during initial years but tolerates dry conditions once established.',
        },
        {
            iamge: growth1,

            heading: "Medium Growth Rate ",
            description: 'Reaches a height of 10-12 feet in 3-4 years.',
        },
        {
            iamge: growth1,

            heading: "Moderate Water Requirements",
            description: 'Requires irrigation during initial years but tolerates dry conditions once established.',
        },

    ]
    return (
        <>
            <section
                className=" bg-[#D9D9D9A6] pt-12 pb-12 lg:pt-20 lg:pb-20 outer-arrow left-outer green_icon_slider outer_hide_slider gray_arrow_fade hide_img_slider" >
                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-4 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-4/12 '>
                            <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-semibold  w-full">
                                {heading}
                            </h2>
                            <p className='text-sm text-justify'>{shortdescription}</p>
                        </div>

                        <div className='w-full md:w-8/12'>

                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                slidesPerView={1}
                                spaceBetween={10}
                                navigation={true}
                                loop={true}
                                modules={[Autoplay, Navigation]}
                                autoplay={{
                                    delay: 6000,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    320: {
                                        slidesPerView: 1,
                                        spaceBetween: 30,
                                    },
                                    640: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 30,
                                    },
                                }}

                                className="mySwiper2"
                            >

                                {boxslider.map((item, index) => (
                                    <SwiperSlide key={index}>
                                        <div className='w-full  flex text-white bg-[#1A3232] rounded-3xl mb-5 item_slider'>
                                            <div className='lg:w-12/12 mx-auto'>
                                                <Image src={item.iamge} alt={item.heading} className='rounded-3xl h-40 object-cover' />
                                                <div className='p-6'>
                                                <h2 className='text-[18px] font-light pb-2' dangerouslySetInnerHTML={{ __html: item.heading }}></h2>
                                                <p className='text-sm lg:text-[15]  font-extralight' dangerouslySetInnerHTML={{ __html: item.description }}>
                                                </p>
                                                </div>
                                            </div>
                                        </div>

                                    </SwiperSlide>
                                ))}


                            </Swiper>


                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}



export const Harvesting = () => {
    const heading = "Harvesting & Yield of Amla Trees"
    const text = "Amla starts bearing fruit within 4-5 years of planting, providing consistent yields for decades."

    const objectives = [
        {
            id: "01",
            title: "Harvesting Age:",
            description: "Begins at 4-5 years; peak yield from 10 years onwards.",
            image: img1,
        },
        {
            id: "02",
            title: "Annual Yield",
            description: "50-100 kg per tree, depending on variety and farm practices.",
            image: img2,
        },
        {
            id: "03",
            title: "Harvesting Season",
            description: "October to January in most Indian regions.",
            image: img3,
        },
        {
            id: "04",
            title: "Multiple Harvesting Cycles",
            description: "Fruits mature in multiple rounds, extending harvesting periods.",
            image: img4,
        },
        {
            id: "05",
            title: "Post-Harvest Processing",
            description: " Sun-drying or processing into powder, juice, or candy to enhance shelf life.",
            image: img5,
        },
    ];
    return (
        <>

            <section className='relative text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20' style={{ background: `url(${objectbg.src})center center / cover no-repeat` }} >

                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='lg:w-12/12  w-full  w-12/12'>
                        <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-center text-white mb-4'>{heading}</h2>

                        <p className='text-base md:leading-[1.3] font-normal redhat text-center text-white mb-12 mb:20 lg:mb-24'>{text}</p>
                    </div>

                    <div className="mt-10 relative">
                        <div className='grid col-span-8 justify-center '>
                            <div className="border_number relative">
                                {objectives.map((obj, index) => (
                                    <div key={index} className="flex  gap-4 md:gap-6 items-center mb-10 relative">


                                        <div className="md:w-28 md:h-28 w-28 rounded-lg overflow-hidden">
                                            <Image src={obj.image} alt={obj.title} width={100} height={100} className="object-cover" />
                                        </div>
                                        <div className=' '>
                                            {/* <div className="absolute lg:left-5 top-0 h-full border-l-2 border-dashed border-white"></div> */}
                                            <div
                                                className={`left-4 z-10 md:w-10 md:h-10 w-8 h-8 text-sm md:text-base relative flex items-center justify-center text-black font-bold rounded-full bg-white`}
                                            >
                                                {obj.id}

                                            </div>
                                        </div>

                                        <div className="ml-6 w-3/4 text-left">
                                            <h3 className="text-xl lg:text-2xl text-white redhat mt-6 mb-3 font-semibold">{obj.title}:</h3>
                                            <p className="text-gray-300 redhat text-sm">{obj.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}



export const Market = () => {
    const marketData = {
        imageSrc: img01,
        title: "Market Demand & Pricing",
        description: "Amla is in high demand across multiple industries, driven by its nutritional and medicinal properties.",
        steptitle: "Market Demand",
        steps: [
          "Ayurveda & Herbal Medicine – Used in immunity-boosting formulations like chyawanprash.",
          "Food & Beverage Industry – Processed into juices, candies, and pickles.",
          "Cosmetic & Skincare – Extracted for shampoos, oils, and skincare products.",
          "Nutraceuticals & Supplements – Used in dietary supplements for its antioxidant properties.",
          "Export Market – Increasing global demand, especially in the USA, Europe, and the Middle East."
        ],
        shortdesciption: `<strong>Market Supply</strong><ul class='list-disc pl-5 mt-2'>
          <li>Rising Market Prices – Due to increasing demand for organic and Ayurvedic products.</li>
          <li>Agroforestry Adoption – More farmers are shifting towards Amla plantations.</li>
          <li>Value Addition Possibilities – Processing extends shelf life and increases profit margins.</li>
        </ul>`
      };
    return (
        <>
        <section className='py-12 lg:py-16'>
      <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16'>

          <div className="md:w-1/2 w-full">
            <div className='relative'>
              <Image
                src={marketData.imageSrc}
                alt="Market Demand"
                width={600}
                height={400}
                className="rounded-[20px]"
                style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
              />
              <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
            </div>
          </div>

          <div className='md:w-6/12 w-12/12'>
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C]">
              {marketData.title}
            </h2>
            <p className="my-6 text-[15px]  font-normal md:text-base text-black">
              {marketData.description}
            </p>
            <p className='text-[15px] mb-2  font-semibold md:text-base text-black'>
              {marketData.steptitle}
            </p>
            <ul className="list-disc pl-5 text-black mb-4">
              {marketData.steps.map((step, index) => (
                <li key={index} className="text-[14px] md:text-[15px] font-normal text-black">
                  {step}
                </li>
              ))}
            </ul>
            <div
              className="text-[14px] md:text-[15px]  font-normal  text-black mb-10 md:mb-14"
              dangerouslySetInnerHTML={{ __html: marketData.shortdesciption }}
            ></div>
          </div>

        </div>
      </div>
    </section>

        </>
    )
}


export const Uses = () => {
    const usesApplicationsData = {
        heading: "Uses & Applications",
        columns: [
          {
            subheading: "Ayurveda & Traditional Medicine",
            points: [
              "Key ingredient in Ayurvedic formulations like chyawanprash and triphala.",
              "Known for enhancing immunity and overall health."
            ]
          },
          {
            subheading: "Food & Beverage Industry",
            points: [
              "Used in making juices, candies, pickles, and jams.",
              "A popular ingredient in herbal teas and natural supplements."
            ]
          },
          {
            subheading: "Cosmetics & Haircare",
            points: [
              "Extracts are used in hair oils, shampoos, and skin care products.",
              "Strengthens hair roots and promotes skin health."
            ]
          },
          {
            subheading: "Cosmetics & Haircare",
            points: [
              "Extracts are used in hair oils, shampoos, and skin care products.",
              "Strengthens hair roots and promotes skin health."
            ]
          }
        ]
      };
    return (
        <>
         <section className="py-14 lg:py-16 bg-[#6D8C544D] relative outer-arrow green_icon_slider ">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
        <h2 className="text-3xl md:text-4xl font-medium text-center text-[#1B453C] mb-8 md:mb-12">
          {usesApplicationsData.heading}
        </h2>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween:50
            },
            1024: {
              slidesPerView: 3,
              spaceBetween:50
            }
          }}
          className='outer-arrow1'
        >
          {usesApplicationsData.columns.map((column, index) => (
            <SwiperSlide key={index}>
              <div className="border border-black rounded-tl-[50px] p-6 md:p-10 shadow-lg h-full md:h-56">
                <h3 className="text-base font-semibold mb-4">{column.subheading}</h3>
                <ul className="list-disc pl-5 text-sm text-black">
                  {column.points.map((point, i) => (
                    <li key={i} className="mb-2">{point}</li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
        </>
    )
}



export const Sustainable = () => {
    const heading = "Sustainable Amla Cultivation with Atulye Krishi Vana"
   const className="slider_height"
   const title1="Atulye Krishi Vana promotes sustainable Amla farming through:"
   const title2="These initiatives ensure sustainable cultivation while increasing farmer profitability."

    const card = [
        {
            title: 'Scientific Plantation Techniques – High-yield saplings and organic farming methods.',

        },
        {
            title: 'Eco-Friendly Farming – Reducing chemical usage and promoting natural pest control.',


        },
        {
            title: 'Farmer Training & Support – Providing guidance on best cultivation practices and market strategies.',

        },
        {
            title: 'Scientific Plantation Techniques – High-yield saplings and organic farming methods.',

        },
        {
            title: 'Eco-Friendly Farming – Reducing chemical usage and promoting natural pest control.',


        },
    ]
  return (
    <>
       <FaqSlider classname={className} title1={title1} title2={title2} className="shailendra" card={card} heading={heading} />

    </>
  )
}
