import React from 'react'
import { Gridbox } from '../Gridbox'
import key5 from "../../../assets/images/stress/key5.webp";
import key6 from "../../../assets/images/stress/key6.webp";
import key7 from "../../../assets/images/stress/key7.webp";
import key8 from "../../../assets/images/stress/key8.webp";
import key9 from "../../../assets/images/stress/key9.webp";
import key10 from "../../../assets/images/stress/key10.webp";
import key11 from "../../../assets/images/stress/key11.webp";
import key12 from "../../../assets/images/stress/key12.webp";
import key13 from "../../../assets/images/stress/key13.webp";
import key14 from "../../../assets/images/stress/key14.webp";
import key15 from "../../../assets/images/stress/key15.webp";
import key16 from "../../../assets/images/stress/key16.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import circle2 from "../../../assets/images/stress/circle2.webp";
import circle3 from "../../../assets/images/stress/circle3.webp";
import circle4 from "../../../assets/images/stress/circle4.webp";


export const Brahmi = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Brahmi (Bacopa monnieri)"
  const shortinfo = `<b>The Brain Tonic of Ayurveda</b> <br/> Brahmi, often called the “herb of grace,” is prized for its ability to support cognitive clarity and nervous system health. It is a water-loving plant that thrives in moist, marshy soils, often used in pond bunds or intercropped with paddy.`
  const whyChooseData = [
    {
      image: key5,
      title: 'Improves memory retention and learning ability',
    },
    {
      image: key6,
      title: 'Reduces anxiety and mental fatigue',
    },
    {
      image: key7,
      title: 'Enhances focus and intellectual capacity',
    },
    {
      image: key8,
      title: 'Acts as a nervine tonic and antioxidant',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Plantation & Growing Requirements";
  const slides = [
    {

      image: circle2,
      desc: `Brahmi is widely used in Ayurvedic, Unani, and modern herbal formulations aimed at improving brain health. It is in high demand for inclusion in syrups, oils, and capsules targeting students and professionals alike. <br> <br> It flourishes in warm, humid climates with access to waterlogged or moisture-retentive soil. Suitable for cultivation in Eastern and Southern India.`,
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



export const Mandukparni = () => {
  const main_heading = "Mandukparni (Centella asiatica)"
  const shortinfo = "Natural Nootropic and Skin Rejuvenator <br/> Mandukparni, also known as Gotu Kola, is an acclaimed herbal remedy for anxiety, cognitive decline, and poor circulation. It is a low-creeping plant that grows well in semi-shaded, moist areas, making it perfect for agroforestry or shaded farming systems."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key9,
      title: 'Enhances memory, concentration, and cognitive functions',

    },
    {
      image: key10,
      title: 'Reduces symptoms of anxiety and depression',
    },
    {
      image: key11,
      title: 'Promotes restful sleep and mental clarity',
    },
    {
      image: key12,
      title: 'Aids in wound healing and skin rejuvenation',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle3,
      desc: `Popular in the nutraceutical and cosmetic industries, it is used in capsules, teas, skin ointments, and tonics. The global demand for Gotu Kola extract continues to grow with trends favoring natural nootropics and skincare products. <br> <br> Mandukparni prefers tropical to subtropical climates with adequate moisture. It can be cultivated in partially shaded areas with organic-rich soil.`,

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
      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
      />
    </>
  )
}


export const Shatavari = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Shatavari (Asparagus racemosus)"
  const shortinfo = `<b>Herbal Rejuvenator for Mental and Hormonal Balance</b> <br/>Shatavari is revered in Ayurvedic traditions as a rasayana (rejuvenative) herb. While best known for supporting women’s reproductive health, it also plays a significant role in calming the nervous system and balancing stress hormones.`
  const whyChooseData = [
    {
      image: key13,
      title: 'Supports adrenal and hormonal balance',
    },
    {
      image: key14,
      title: 'Enhances emotional stability and stress resilience',
    },
    {
      image: key15,
      title: 'Boosts mental clarity and cognition',
    },
    {
      image: key16,
      title: 'Acts as an immune booster and energy restorer',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle4,
      desc: `Highly valued in herbal supplements and health tonics, Shatavari roots are used in tablets, granules, and syrup forms. Its multi-functional use across gender health and stress management makes it a valuable crop for cultivation. <br> <br> Shatavari thrives in subtropical regions with well-drained, sandy soils. It is drought-tolerant and well-suited for dryland farming practices.`,
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
