import React from 'react'
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import { Gridbox } from '../Gridbox';
import Image from 'next/image';
import key9 from "../../../assets/images/digestive/key9.webp";
import key10 from "../../../assets/images/digestive/key10.webp";
import key11 from "../../../assets/images/digestive/key11.webp";
import key12 from "../../../assets/images/digestive/key12.webp";
import circle3 from "../../../assets/images/digestive/circle3.webp";

import key13 from "../../../assets/images/digestive/key13.webp";
import key14 from "../../../assets/images/digestive/key14.webp";
import key15 from "../../../assets/images/digestive/key15.webp";
import key16 from "../../../assets/images/digestive/key16.webp";
import circle4 from "../../../assets/images/digestive/circle4.webp";

import key17 from "../../../assets/images/digestive/key17.webp";
import key18 from "../../../assets/images/digestive/key18.webp";
import key19 from "../../../assets/images/digestive/key19.webp";
import key20 from "../../../assets/images/digestive/key20.webp";
import circle5 from "../../../assets/images/digestive/circle5.webp";

import key21 from "../../../assets/images/digestive/key21.webp";
import key22 from "../../../assets/images/digestive/key22.webp";
import key23 from "../../../assets/images/digestive/key23.webp";
import key24 from "../../../assets/images/digestive/key24.webp";
import circle6 from "../../../assets/images/digestive/circle6.webp";

export const Chitrak = () => {
  const main_heading = "Chitrak (Plumbago zeylanica) "
  const shortinfo = "The Digestive Fire Starter <br/> Chitrak, also known as Ceylon Leadwort, is a potent digestive stimulant known for enhancing metabolism and reducing sluggishness in the digestive system. It is a woody perennial shrub with deep roots that contain bioactive compounds like plumbagin, which have strong digestive and anti-inflammatory effects."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key9,
      title: 'Stimulates antibody production and cellular immunity',

    },
    {
      image: key10,
      title: 'Reduces fever and inflammation effectively',
    },
    {
      image: key11,
      title: 'Supports liver function and detoxification',
    },
    {
      image: key12,
      title: 'Provides relief from upper respiratory infections',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle3,
      desc: `Chitrak grows well in tropical and subtropical climates, thriving in well-drained, slightly acidic soils. It is tolerant of dry conditions and is often used in agroforestry systems due to its resilience. <br/><br/> The root extract of Chitrak is widely used in digestive formulations, weight loss supplements, and detox products. It is also utilized in traditional medicine for treating skin disorders and joint pain.`,

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


export const Nagarmotha = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Nagarmotha (Cyperus rotundus)"
  const shortinfo = `<b>The Metabolic Regulator</b> <br/> Nagarmotha, or Nutgrass, is a widely distributed perennial herb known for its strong aromatic roots. It is highly regarded in traditional medicine for its digestive, carminative, and diuretic properties. Nagarmotha helps regulate metabolism, reduce bloating, and support weight management.`
  const whyChooseData = [
    {
      image: key13,
      title: 'Relieves bloating, gas, and indigestion',
    },
    {
      image: key14,
      title: 'Supports healthy metabolism and fat breakdown',
    },
    {
      image: key15,
      title: 'Acts as a natural diuretic and detoxifier',
    },
    {
      image: key16,
      title: 'Reduces inflammation and oxidative stress',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle4,
      desc: `Nagarmotha thrives in a wide range of soils, including sandy and loamy soils, making it suitable for cultivation in various agro-climatic zones. It is drought-tolerant and can grow in neglected or underutilized lands. <br> <br> The essential oil extracted from Nagarmotha is used in perfumes, incense, and Ayurvedic medicines. It also has applications in weight management and digestive health supplements.`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
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



export const Jimikand = () => {
  const main_heading = "Jimikand (Amorphophallus paeoniifolius)"
  const shortinfo = "The Giant Yam for Gut Health <br/> Jimikand, also known as Elephant Foot Yam, is a tropical tuber known for its high fiber content and prebiotic benefits. It supports digestion, reduces constipation, and promotes gut health. The tuber is a rich source of essential minerals and vitamins, making it a valuable food and medicinal crop."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key17,
      title: 'Supports gut health and regular bowel movements',

    },
    {
      image: key18,
      title: 'Reduces inflammation and detoxifies the digestive system',
    },
    {
      image: key19,
      title: 'Aids in weight management and metabolic health',
    },
    {
      image: key20,
      title: 'Provides a rich source of dietary fiber and essential nutrients',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle5,
      desc: `Jimikand thrives in hot, humid climates with well-drained, nutrient-rich soils. It is a high-yield crop that can be cultivated as a cash crop in tropical and subtropical regions. <br/><br/> Jimikand is used in traditional medicine, processed foods, and as a raw ingredient in dietary supplements. It is also gaining popularity in the health food market as a gluten-free, low-calorie substitute for regular potatoes.`,

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


export const Punarnava = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Punarnava (Boerhavia diffusa)"
  const shortinfo = `<b>The Detoxifying Super Herb</b> <br/> Punarnava is a trailing perennial herb known for its powerful detoxifying, diuretic, and anti-inflammatory properties. It supports liver function, reduces water retention, and promotes overall vitality`
  const whyChooseData = [
    {
      image: key21,
      title: 'Supports liver health and detoxification',
    },
    {
      image: key22,
      title: 'Reduces inflammation and water retention',
    },
    {
      image: key23,
      title: 'Enhances kidney function and urinary health',
    },
    {
      image: key24,
      title: 'Improves overall vitality and physical endurance',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle6,
      desc: `Punarnava grows well in tropical and subtropical regions, thriving in nutrient-poor, sandy, or loamy soils. It is a hardy plant that requires minimal maintenance. <br> <br> Punarnava is widely used in herbal supplements, liver tonics, and detox formulas. Its leaves and roots are also used in traditional herbal remedies for respiratory and joint health.`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
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
