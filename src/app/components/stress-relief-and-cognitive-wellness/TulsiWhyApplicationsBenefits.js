import React from 'react'
import { Gridbox } from '../Gridbox'
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose'

import key17 from "../../../assets/images/stress/key17.webp";
import key18 from "../../../assets/images/stress/key18.webp";
import key19 from "../../../assets/images/stress/key19.webp";
import key20 from "../../../assets/images/stress/key20.webp";
import circle5 from "../../../assets/images/stress/circle5.webp";
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/stress/choose1.webp";
import choose2 from "../../../assets/images/stress/choose2.webp";
import choose3 from "../../../assets/images/stress/choose3.webp";
import choose4 from "../../../assets/images/stress/choose4.webp";
import bg1 from "../../../assets/images/stress/bg1.webp";
import bg2 from "../../../assets/images/stress/bg2.webp";
import Applicationcircle from '../Applicationcircle';

export const Tulsi = () => {
  const main_heading = "Tulsi (Ocimum tenuiflorum)"
  const shortinfo = "Sacred Basil for Mind and Spirit <br/> Tulsi is both a sacred and medicinal herb in Indian households. Known for its calming and adaptogenic properties, it is an easy-to-grow perennial suited for home gardens, farms, and commercial herbal plots."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key17,
      title: 'Reduces anxiety and mental exhaustion',

    },
    {
      image: key18,
      title: 'Promotes clarity, peace, and focus',
    },
    {
      image: key19,
      title: 'Enhances respiratory function and immunity',
    },
    {
      image: key20,
      title: 'Rich in antioxidants and anti-inflammatory compounds',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle5,
      desc: `Tulsi grows best in tropical and subtropical regions. It requires moderate rainfall, plenty of sunlight, and well-drained soil. It is a low-maintenance plant and highly pest-resistant. There is significant demand for Tulsi in the herbal tea, extract, essential oil, and dietary supplement markets. It is also used in aromatherapy and traditional medicine preparations. <br> <br>`,

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



export const Why = () => {
  const heading = "Why Choose Atulye Krishi Vana for Medicinal Herbs?"
  const fruitData = [
    {
      title: "Agroecological Integration",
      image: choose1,
      flip: "Our approach promotes the use of sustainable, region-appropriate cultivation practices. All five herbs under this vertical can be integrated into existing agroforestry or intercropping systems, reducing the need for chemical inputs and enhancing biodiversity on farms."
    },
    {
      title: "Low Input, High Value",
      image: choose2,
      flip: "These plants thrive with minimal inputs and provide high returns due to strong market demand, both domestically and internationally. Their long-standing therapeutic value ensures consistent year-round demand from wellness brands and pharmaceutical buyers."
    },
    {
      title: "Capacity Building & Training",
      image: choose3,
      flip: "We provide complete support for farmers—right from sapling distribution and organic farming guidance to post-harvest handling and value addition techniques. Training sessions include topics like pest management, irrigation scheduling, intercropping, and product processing."
    },
    {
      title: "Direct Market Linkage",
      image: choose4,
      flip: "Atulye Krishi Vana has strategic partnerships with herbal product manufacturers, Ayurvedic companies, and online wellness platforms. We help farmers access premium buyers who are seeking clean-label, naturally grown medicinal plant ingredients."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}


export const Applications = () => {
  const applicationItems = [
    {
      title: "Nutraceuticals",
      text: "Extracts from these herbs are used in capsules, tablets, and powders designed for brain health, stress reduction, and hormonal support.",
      image: bg1,
    },
    {
      title: "Wellness Teas & Beverages",
      text: "Brahmi, Tulsi, and Mandukparni are often used in calming and detoxifying herbal teas sold under premium wellness brands.",
      image: bg2,
    },
    {
      title: "Natural Cosmetics",
      text: "Mandukparni and Shatavari extracts are popular in skin and hair care products, thanks to their anti-aging and rejuvenating effects.",
      image: bg1,
    },
    {
      title: "Ayurveda & Traditional Medicine",
      text: "Each plant plays a significant role in classical Ayurvedic formulations, rasayanas, and tonics aimed at balancing mental health and improving memory.",
      image: bg2,
    },
    {
      title: "Aromatherapy & Essential Oils",
      text: "Tulsi essential oil is widely used for its calming aroma and respiratory support, used in diffusers, balms, and massage oils.",
      image: bg1,
    },
  ];
  return (
    <>
      <Applicationcircle
        title="Applications Across Industries"
        data={applicationItems}
      />
    </>
  )
}
