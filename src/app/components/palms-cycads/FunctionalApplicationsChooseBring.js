
import React from 'react'
import Image from 'next/image'
import Plant from "../../../assets/images/palm/future.webp";
import { MdCheckCircle } from "react-icons/md";
import grow from "../../../assets/images/palm/majesty.webp";
import Link from 'next/link';
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/palm/module1.webp";
import impact2 from "../../../assets/images/palm/module2.webp";
import impact3 from "../../../assets/images/palm/module3.webp";
import impact4 from "../../../assets/images/palm/module4.webp";
import impact5 from "../../../assets/images/palm/module5.webp";


import bgstay from "../../../assets/images/stress/bg.webp";
import { FaqSlider } from '../FaqSlider';

export const Functional = () => {
    const heading = "Functional & Native Palms"
    const class2 = "blurheight1"
    const dsecription = "Beyond beauty, palms play an important ecological and economic role. Native species support biodiversity, resist drought, and are often valued for their fruits, leaves, or fiber. Functional palms thrive in agroforestry systems, farm boundaries, and land reclamation zones."

    const boxslider = [
      {
        image: impact1,
        heading: "Date Palm (Phoenix dactylifera)",
        description: 'Fruit-bearing, highly drought-tolerant',
      },
      {
        image: impact2,
        heading: "Coconut Palm (Cocos nucifera)",
        description: 'Coastal utility palm for food, fiber, and fuel',
      },
      {
        image: impact3,
        heading: "Bajarbattu (Corypha umbraculifera)",
        description: 'Native fan palm with thatching and weaving uses',
      },
      {
        image: impact4,
        heading: "Wild Date (Phoenix sylvestris)",
        description: "Hardy and adaptable, used in indigenous landscaping"
      },
      {
        image: impact5,
        heading: "Palmyra (Borassus flabellifer)",
        description: "Traditional multipurpose tree across rural India"
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
                  <p className='text-white text-base'>{dsecription}</p>
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



export const Applications = () => {
    const heading = "Applications";
    const className = "slider_height";

    const card = [
      {
        title: "Agroforestry and dryland farming",
      },
      {
        title: "Village plantation drives",
      },
      {
        title: "Windbreaks and soil conservation",
      },
      {
        title: "Fruit, leaf, and fiber use in sustainable living",

      },



    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
        />

      </>
    );
}



export const Choose = () => {
    const heading = `Why Choose Atulye Krishi Vana?`

    const futurePlans = [
        `<b> Climate-suited, high-survival nursery stock</b>`,
        `<b>Landscaping + agroforestry plant support</b>`,
        `<b>Available in bulk or customized orders</b>`,
        `<b>Field-tested varieties for Indian conditions</b>`,
        `<b>Guidance on spacing, placement & care</b>`,

    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-6 lg:pb-20 lg:pt-4">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10">

                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
                            dangerouslySetInnerHTML={{ __html: heading }}
                        />
                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex  text-left space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p
                                        className="text-[#141414] redhat"
                                        dangerouslySetInnerHTML={{ __html: plan }}
                                    />
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className=" w-full md:w-1/2">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={600}
                            height={600}
                            className="w-full h-full mx-auto"
                            quality={90}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}


export const Bring = () => {
    const growData = {
        "heading": "Bring Home the Majesty of Palms",
        "paragraphs": [
            "Whether you’re crafting a luxury landscape or restoring an ecosystem, palms and cycads are timeless choices. Let us help you pick the right species for your space, region, and purpose.",

        ],

        "image": grow
    }
    return (
        <>
            <section className="bg-[#f1f1f1] py-10 px-4">
                <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
                    {/* Content */}
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-4">
                            {growData.heading}
                        </h2>

                        {growData.paragraphs.map((p, index) => (
                            <p key={index} className="text-black mb-2 py-6">
                                {p}
                            </p>
                        ))}
                        <div className='mt-12'>
                            <Link href="https://atulye-foundation.org/" target='_blank'
                                className="text-lg text-[#1B453C] font-normal px-4 py-2 border border-[#1B453C]">
                            Join us
                            </Link>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="overflow-hidden  w-[350px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
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
    )
}
