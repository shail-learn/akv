"use client"
import React from 'react'
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/Immunity/key1.webp";
import key2 from "../../../assets/images/Immunity/key2.webp";
import key3 from "../../../assets/images/Immunity/key3.webp";
import key4 from "../../../assets/images/Immunity/key4.webp";
import key5 from "../../../assets/images/Immunity/key5.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import circle1 from "../../../assets/images/Immunity/circle1.webp";
import circle2 from "../../../assets/images/Immunity/circle2.webp";
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/Immunity/why1.webp";
import choose2 from "../../../assets/images/Immunity/why2.webp";
import choose3 from "../../../assets/images/Immunity/why3.webp";
import choose4 from "../../../assets/images/respirtaory/why5.webp";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";

export const Chitvan = () => {
  const gridBox = "custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Chitvan (Alstonia scholaris)"
  const shortinfo = `<b>Resilient Immunity Enhancer with Antimalarial Properties</b><br/> Chitvan, commonly known as Devil's Tree or Saptaparni, is a stately evergreen tree valued for its bark and leaves containing alkaloids with remarkable therapeutic properties. This tree has been traditionally used for treating various infections, particularly malaria and other febrile conditions.
   `
  const whyChooseData = [
    {
      image: key1,
      title: 'Possesses antimalarial and antipyretic properties',
    },
    {
      image: key2,
      title: 'Enhances white blood cell production and immune activity',
    },
    {
      image: key3,
      title: 'Demonstrates antibacterial effects against respiratory pathogens',
    },
    {
      image: key4,
      title: 'Supports bronchial health and relieves cough',
    },
    {
      image: key5,
      title: 'Acts as a bitter tonic to improve digestion and nutrient absorption',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle1,
      desc: `Chitvan adapts well to various soil types and thrives in tropical climates with moderate to high rainfall. Once established, it requires minimal care, making it suitable for agroforestry systems, boundary plantations, or as shade trees in mixed farming landscapes.<br> <br> The bark and leaves of Chitvan have steady demand in traditional medicine preparations and modern pharmaceutical formulations targeting immunity and infection control`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} className={custom_class} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
      />

    </>
  )
}



export const Patha = () => {
  const main_heading = "Patha (Cissampelos pareira)"
  const shortinfo = `Traditional Immune Support with Modern Applications
  Patha is a climbing shrub whose roots and leaves have been treasured in traditional medical systems for their immunomodulatory and anti-inflammatory properties. This versatile plant plays a significant role in managing various infectious conditions.
  `
  const gridBox = " custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Reduces inflammation and supports fever management',

    },
    {
      image: key2,
      title: 'Exhibits potent antiviral and antibacterial activities',
    },
    {
      image: key3,
      title: 'Enhances macrophage activity and immune cell function',
    },
    {
      image: key4,
      title: 'Provides relief from respiratory distress and cough',
    },
    {
      image: key5,
      title: 'Demonstrates effectiveness against gastrointestinal infections',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle1,
      desc: `Patha grows best in tropical and subtropical regions with moderate rainfall. It adapts to various soil types but prefers well-drained, loamy soils. As a climber, it can be cultivated alongside supporting crops or trees, maximizing land utilization in integrated farming systems.<br/><br/>  The roots and leaves of Patha have significant demand in traditional medicine preparations. With growing scientific validation of its immune-enhancing properties, pharmaceutical companies are increasingly incorporating Patha extracts into formulations for respiratory wellness and immune support, creating stable market opportunities for farmers.`,

    },

  ];

  return (
    <>


      <section className="py-12 pt-16 md:pt-20  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      />

    </>
  )
}



export const Why = () => {
  const heading = "Why Choose Atulye Krishi Vana for Immunity-Boosting Herbs?"
  const fruitData = [
    {
      title: "Science-Backed Cultivation Methods",
      image: choose1,
      flip: "Our approach combines traditional agricultural wisdom with modern scientific understanding of plant bioactives. We help farmers implement cultivation practices that maximize medicinal compound content while maintaining ecological balance."
    },
    {
      title: "Climate-Resilient Farming Systems",
      image: choose2,
      flip: "These five immunity-enhancing plants can be integrated into diverse farming systems, from agroforestry to intercropping models. They demonstrate remarkable adaptability to changing climate conditions and require minimal chemical inputs."
    },
    {
      title: "Technical Support and Quality Assurance",
      image: choose3,
      flip: "Atulye Krishi Vana provides comprehensive guidance on cultivation techniques, harvest timing, post-harvest handling, and primary processing to preserve bioactive compounds. We ensure farmers produce herbs that meet quality standards demanded by pharmaceutical companies."
    },
    {
      title: "Market Integration and Value Addition",
      image: choose4,
      flip: "We connect farmers directly with reputable buyers in the herbal pharmaceutical and wellness industries. Our program also supports farmer cooperatives in developing value-added products, from dried herbs and powders to extracts and teas."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Applications = () => {
  const heading = "Applications Across Industries"
  const class2 = "blurheight"

  const boxslider = [
    {
      image: impact1,
      heading: "Pharmaceutical and Nutraceutical",
      description: 'These herbs form essential ingredients in formulations targeting immune enhancement, respiratory wellness, and infection management.',
    },
    {
      image: impact1,
      heading: "Ayurveda and Traditional Medicine",
      description: 'All five plants have established roles in classical Ayurvedic formulations and continue to be vital components in traditional healthcare systems',
    },
    {
      image: impact1,
      heading: "Functional Foods and Beverages",
      description: 'Immunity-boosting food products incorporate these herbs in innovative forms—Amla in vitamin C-rich beverages, Giloy in immunity shots, and Kalmegh in bitter health tonics. The functional food sector represents a rapidly growing market opportunity.',
    },
    {
      image: impact1,
      heading: "Preventive Healthcare",
      description: "With increasing focus on disease prevention, these herbs are gaining prominence in daily wellness routines. Products like Giloy tablets, Amla supplements, and Kalmegh extracts are becoming household staples for maintaining immune health."
    },
    {
      image: impact1,
      heading: "Natural Disinfectants and Sanitizers",
      description: "Extracts from these plants, particularly Kalmegh and Chitvan, are finding applications in natural sanitizers and disinfectants due to their antimicrobial properties, creating additional market channels for cultivators."
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
