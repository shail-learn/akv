import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import image1 from "../../../assets/images/digestive/image1.webp";
import circle2 from "../../../assets/images/digestive/circle2.webp";

import bgstay from "../../../assets/images/stress/bg.webp";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Vermi = () => {
    const text = {
        banner: banner,
        heading: `Shri. Rasayanshala – Vermicompost Production Unit`,
        subtitle:"Turning Organic Waste into Living Soil",
        title: 'The Vermicompost Production Unit at Shri. Rasayanshala, located in Kh-112, is a thriving center for sustainable farming. Spanning 530 square meters and just 310 meters from the Admin Block, this unit plays a key role in recycling organic farm waste and producing high-quality vermicompost. The unit produces 300 tons of compost annually and also develops a wide range of organic soil enhancers and insect-control products.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const What = () => {
    const basketData = {
        note: `
        Theme Index: Vermicompost Production Unit <br/>
        Location Name: Shri. Rasayanshala <br/>
        Coordinates: 22°59'36.4"N 77°11'01.9"E<br/>
        Area: 530 sq m<br/>
        Distance from Admin Block: 310 meters <br/>
        Annual Production: 300 tons of vermicompost <br/>
        Other Products: 20–25 types of organic manure and insect control products <br/>

        `,
        image: info,
    };

    const main_heading = "What is Vermicomposting?"
    const shortinfo = `Vermicomposting is the process of turning organic waste into rich, black compost using earthworms, especially the species Eisenia fetida (commonly known as red wigglers). These worms break down materials like vegetable scraps, crop residue, and other biodegradable matter into nutrient-rich compost in 45–60 days. <br/> The resulting vermicompost is full of natural nutrients, improves soil structure, and boosts plant health. At Rasayanshala, this compost is used internally across the farm to maintain soil health and organic integrity.
    `




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

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section>



        </>
    )
}


export const Historical = () => {
    const GrowthHeading = "Historical Background";
    const GrowthDescription = "Though vermicomposting has ancient roots, its modern form has gained popularity in the 21st century due to rising awareness of:"

    const slides = [
        {
            image: image1,
            title: `Environmental sustainability`,

        },
        {
            image: image1,
            title: `Waste management`,
        },
        {
            image: image1,
            title: `Chemical-free agriculture`,
        },


    ];
  const  GrowthDescription1="Today, it’s a respected farming practice used in both home gardens and large agricultural systems worldwide. Shri. Rasayanshala combines traditional wisdom with modern best practices to create a zero-waste loop within the Atulye Krishi Vana ecosystem. "
  return (
    <>
      <GrowthSlider
                GrowthHeading={GrowthHeading}
                GrowthDescription={GrowthDescription}
                GrowthDescription1={GrowthDescription1}
                slides={slides}
            />
    </>
  )
}



export const Core = () => {
    const heading = "Core Benefits & Uses"
    const class2 = "blurheight"

    const boxslider = [
      {
        image: impact1,
        heading: "Organic Waste Conversion",
        description: 'Recycles kitchen scraps, dry leaves, crop residues, and other organic materials <br/> Converts waste into valuable compost instead of sending it to landfills',
      },
      {
        image: impact1,
        heading: "Soil Fertility Improvement",
        description: 'Vermicompost enhances soil structure, aeration, and water retention <br/>Encourages microbial activity, making nutrients more available to plants',
      },
      {
        image: impact1,
        heading: "Plant Health Booster",
        description: 'The natural compost helps plants grow stronger and healthier <br/> Builds resistance to pests and diseases due to improved soil biology',
      },
      {
        image: impact1,
        heading: "Eco-Friendly Waste Management",
        description: 'Reduces carbon footprint and avoids the use of chemical fertilizers <br/> Promotes a closed-loop, zero-waste model on the farm',
      },
      {
        image: impact1,
        heading: "Low Maintenance, High Return",
        description: 'Easy to operate with minimal upkeep <br/> Earthworms multiply naturally, reducing input costs',
      },
      {
        image: impact1,
        heading: "Economic Opportunities",
        description: 'Vermicompost and worm cultures can be sold to nurseries, gardeners, and farmers <br/> Additional organic products developed at the unit can generate income',
      },
      {
        image: impact1,
        heading: "Educational & Demonstrative Value",
        description: 'Offers a live demonstration model for eco-conscious farming <br/> Educates visiting farmers, students, and agri-entrepreneurs about organic waste reuse',
      },



    ]
    return (
      <>

        <section
          className="relative mt-0 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
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


export const Additional = () => {
    const heading = "Additional Organic Products"
    const shortdescription = "In addition to vermicompost, Shri. Rasayanshala develops:"

    const boxslider = [
      {
        heading: "20–25 varieties of organic manure",
      },
      {
        heading: "Natural pest repellents and plant growth boosters",
      },
      {
        heading: "100% chemical-free products, all made from materials sourced within the farm",
      },
      {
        heading: "Natural pest repellents and plant growth boosters",
      },

    ]
    return (
        <>

    <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />

        </>
    )
}



export const Conclusion = () => {
    const heading = "Conclusion";
    const description =
      "The Vermicompost Production Unit at Shri. Rasayanshala is an essential part of the Atulye Krishi Vana model, showing how we can grow naturally, waste nothing, and care for the Earth. With its strong focus on internal sustainability, organic output, and education, this unit is a shining example of how farming can be both productive and planet-friendly. ";

    return (
      <section
        className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
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
