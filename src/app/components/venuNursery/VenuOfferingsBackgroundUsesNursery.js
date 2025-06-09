import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";
import { FaqSlider } from '../FaqSlider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Venu = () => {
    const text = {
        banner: banner,
        heading: `Shri. Venu Nursery – Growing Roots for a Greener Future`,

        title: 'Located just 50 meters from the Admin Building, Shri. Venu Nursery is the dedicated nursery unit of Atulye Krishi Vana, developed to promote sustainable agriculture and plant cultivation. Spread across 1000 square meters, the nursery supports the production of fruit, timber, and ornamental plants for internal use and external distribution. Since its establishment in 2021, the nursery has produced over five lakh saplings. It continues to serve individuals, farmers, and institutions, providing high-quality plant material backed by responsible and eco-conscious practices.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Offerings = () => {
    const basketData = {
        note: `
        Theme Index: Nursery <br/>
        Location Name: Shri. Venu Nursery <br/>
        Coordinates: 22°59'41.7"N 77°11'06.5"E <br/>
        Area: 1000 square meters <br/>
        Distance from Admin Block: 50 meters
        `,
        image: info,
    };

    const GrowthHeading = "Our Offerings";

    const slides = [
        {
            group: "Plant Categories",
            image: image1,
            desc: "Fruit-bearing plants for home gardens and orchards",
        },
        {
            group: "Plant Categories",
            image: image1,
            desc: "Timber saplings for agroforestry and long-term cultivation",
        },
        {
            group: "Plant Categories",
            image: image1,
            desc: "Ornamental and flowering plants for beautification and landscaping",
        },
        {
            group: "Propagation Methods",
            image: image1,
            desc: "Seedling production using selected seeds in controlled conditions",
        },
        {
            group: "Propagation Methods",
            image: image1,
            desc: "Clonal propagation using a maintained mother block to ensure plant uniformity",
        },
        {
            group: "Propagation Methods",
            image: image1,
            desc: "Grafting and budding techniques applied to enhance quality and plant resilience",
        },

    ];


    return (
        <>

            <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className='text-white text-2xl md:text-3xl font-medium mb-6'>Key Details</h2>
                            <p className="mt-0 md:mt-4 text-white redhat" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
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
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}

            />


        </>
    )
}



export const Background = () => {
    const heading = "Background and Growth";
    const title= "Shri. Venu Nursery was founded with the vision of supporting Atulye Krishi Vana’s agroforestry goals by producing reliable planting material in-house. From a focused beginning in 2021, it has grown into a professional nursery serving a wide range of stakeholders."
    const subtitle = "It now supports:"
    const className = "slider_height";

    const card = [
      {
        title: "Agroforestry projects",
      },
      {
        title: "Horticultural developments",
      },
      {
        title: "Demonstration and training activities",
      },
      {
        title: "Regional biodiversity efforts",
      },

    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
          title1={title}
          subtitle={subtitle}
        />


      </>
    );
}



export const Uses = () => {
    const heading = "Uses and Benefits "
    const class2 = "blurheight"

    const boxslider = [
        {
          image: impact1,
          heading: "Propagation and Cultivation",
          description: [
            "Seedling Production: Reliable supply of young plants for various planting cycles",
            "Clonal Multiplication: Produces uniform, disease-resistant plants",
            "Mother Block Maintenance: Preserves elite varieties for continuous propagation",

          ]
        },
        {
          image: impact1,
          heading: "Varietal Development and Plant Health",
          description: [
            "Selective breeding and hybridization through the mother block",
            "Disease control and monitoring using nursery-level hygiene and isolation"
          ]
        },
        {
          image: impact1,
          heading: "Educational and Demonstration Role",
          description: [
            "Serves as a live training site for budding and grafting methods",
            "Supports staff training and visitor education through practical demonstrations",
            "Introduces new varieties and improved cultivation practices"
          ]
        },
        {
          image: impact1,
          heading: "Specialization and Sustainability",
          description: [
            "Preservation of rare varieties",
            "Eco-friendly methods such as organic soil mixes, minimal chemical use, and efficient irrigation systems",
            "Contributes to long-term sustainability by reducing external dependence on saplings",

          ]
        },

      ]
    return (
      <>

        <section
          className="relative mt-10 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
            <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
              <div className='w-full lg:w-3/12 md:mt-10'>
                <div className='flex justify-between   flex-wrap'>
                  <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                    {heading}
                  </h2>
                </div>
              </div>

              <div className='w-full lg:w-8/12'>
                <SliderBlur boxslider={boxslider} class2={class2} />

              </div>
            </div>

          </div>

        </section>

      </>
    )
}


export const Nursery = () => {
    const heading = "Shri. Venu Nursery";
    const description =
      "Shri. Venu Nursery is a vital part of Atulye Krishi Vana's vision. It represents a commitment to sustainability, agricultural advancement, and environmental stewardship. With consistent production, plant diversity, and educational outreach, the nursery continues to grow both plants and purpose.<br/> <br/> This is where propagation meets preservation, and learning turns into legacy.      ";

    return (
      <section
        className="relative bg-no-repeat py-14 !mb-0 mt-10 lg:py-32 bg-cover w-full my-8 md:my-12  "
        style={{ backgroundImage: `url(${PartnerBg.src})` }}
      >

        <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
          <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
            <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
              {heading}
            </h2>
            <p
              className="mb-4 text-sm  md:text-base   w-full"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          </div>
        </div>
      </section>
    );
}
