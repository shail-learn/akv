import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/stress/banner.webp";
import farmer from "../../../assets/images/stress/farmer.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/stress/key1.webp";
import key2 from "../../../assets/images/stress/key2.webp";
import key3 from "../../../assets/images/stress/key3.webp";
import key4 from "../../../assets/images/stress/key4.webp";

import image1 from "../../../assets/images/stress/circle1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';


export const Stress = () => {
  const text = {
    banner: banner,
    heading: `Stress Relief & Cognitive Wellness`,
    title: 'The Athulye Krishi Vana initiative champions the cultivation of herbal and medicinal plants that provide profound benefits for mental clarity, emotional balance, and cognitive enhancement. In today’s world, stress and mental fatigue are common concerns.',
    opacity: 'opacity-30'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      <Wave />
    </>
  )
}



export const Ashwagandha = () => {
  const basketData = {
    note: "To counteract these issues naturally, our project encourages the propagation of traditional herbs renowned in Ayurveda and ethnomedicine for their calming, neuroprotective, and adaptogenic effects. <br/> This vertical focuses on five time-tested herbs: Ashwagandha, Brahmi, Mandukparni, Shatavari, and Tulsi. These plants are not only easy to cultivate in Indian agro-climatic conditions but also hold immense therapeutic value and commercial potential in the wellness and nutraceutical industries.",
    image: farmer,
  };
  return (
    <>

      <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
            <div className="w-full md:w-1/2">
              <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
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



export const Benefits = () => {
  const main_heading = "Ashwagandha (Withania somnifera)"
  const shortinfo = "Ancient Adaptogen with Modern Relevance <br/> Ashwagandha is one of the most powerful adaptogenic herbs known for enhancing the body’s resilience to physical and mental stress. Cultivated primarily in drier regions, it grows well in well-drained, sandy loam soils under full sun."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key1,
      title: 'Reduces cortisol levels and anxiety',

    },
    {
      image: key2,
      title: 'Improves energy, mood, and endurance',
    },
    {
      image: key3,
      title: 'Enhances memory and cognitive performance',
    },
    {
      image: key4,
      title: 'Supports immune function and sleep regulation',
    },

  ];

  return (
    <>
      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} gridBox={gridBox} />

    </>
  )
}




export const Climatic = () => {
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: image1,
      desc: `There is growing demand in the global herbal supplement market for Ashwagandha root extracts, powders, and capsules, especially in formulations for stress relief and hormone balance. Organic and naturally grown variants fetch premium rates. <br> <br> Ashwagandha requires minimal irrigation and grows well in hot, semi-arid climates, making it ideal for low-input, sustainable farming models.`,

    },

  ];

  return (
    <>

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      />

    </>
  )
}
