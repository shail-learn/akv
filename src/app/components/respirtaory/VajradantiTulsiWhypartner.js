import React from 'react'
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import { Gridbox } from '../Gridbox';
import Image from 'next/image';
import key9 from "../../../assets/images/respirtaory/key9.webp";
import key10 from "../../../assets/images/respirtaory/key10.webp";
import key11 from "../../../assets/images/respirtaory/key11.webp";
import key12 from "../../../assets/images/respirtaory/key12.webp";
import circle3 from "../../../assets/images/respirtaory/circle3.webp";

import key13 from "../../../assets/images/respirtaory/key13.webp";
import key14 from "../../../assets/images/respirtaory/key14.webp";
import key15 from "../../../assets/images/respirtaory/key15.webp";
import key16 from "../../../assets/images/respirtaory/key16.webp";
import circle4 from "../../../assets/images/respirtaory/circle4.webp";

import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/respirtaory/why1.webp";
import choose2 from "../../../assets/images/respirtaory/why2.webp";
import choose3 from "../../../assets/images/respirtaory/why3.webp";
import choose4 from "../../../assets/images/respirtaory/why4.webp";
import choose5 from "../../../assets/images/respirtaory/why5.webp";


export const Vajradanti = () => {
  const main_heading = "Vajradanti (Barleria prionitis)"
  const shortinfo = "<b>The Anti-inflammatory Warrior</b> <br/> Vajradanti, also known as the “Strong Tooth Herb,” is a powerful anti-inflammatory and antimicrobial herb used in both respiratory and dental care. It is known for reducing inflammation in the respiratory tract, soothing sore throats, and relieving sinus congestion."
  const gridBox = "xl:!grid-cols-4 custom_height"
  const whyChooseData = [

    {
      image: key9,
      title: 'Reduces inflammation and respiratory tract irritation',

    },
    {
      image: key10,
      title: 'Clears mucus and eases breathing',
    },
    {
      image: key11,
      title: 'Supports oral health and gum strength',
    },
    {
      image: key12,
      title: 'Acts as a natural immune booster with antioxidant properties',
    },

  ];

  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle3,
      desc: `Vajradanti grows well in a wide range of soils, including dry, rocky, and nutrient-poor areas. It is drought-resistant and can thrive in semi-arid climates, making it a valuable crop for regions with limited water resources. <br/><br/> Vajradanti is a key ingredient in herbal respiratory formulations, dental care products, and Ayurvedic remedies for sore throat and gum infections. Its robust nature and high market demand make it an excellent choice for small-scale farmers and community herbal gardens.`,

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


export const Tulsi = () => {
  const gridBox = "xl:!grid-cols-4 custom_height"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Tulsi (Ocimum tenuiflorum)"
  const shortinfo = `<b>The Sacred Herb for Respiratory Wellness</b> <br/> Tulsi, also known as Holy Basil, is revered in Ayurveda for its powerful adaptogenic, antimicrobial, and respiratory benefits. It helps clear the respiratory tract, reduces inflammation, and supports overall immune function. Tulsi is a fast-growing, aromatic herb that requires minimal care and can thrive in a variety of climatic conditions, making it a staple in Indian households and herbal gardens.`
  const whyChooseData = [
    {
      image: key13,
      title: 'Clears respiratory congestion and reduces inflammation',
    },
    {
      image: key14,
      title: 'Supports immune function and respiratory health',
    },
    {
      image: key15,
      title: 'Acts as a natural antioxidant and stress reducer',
    },
    {
      image: key16,
      title: 'Enhances respiratory endurance and lung capacity',
    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
  const slides = [
    {

      image: circle4,
      desc: `Tulsi grows well in tropical and subtropical climates with well-drained, loamy soils. It prefers full sun but can tolerate partial shade. Tulsi is highly pest-resistant and drought-tolerant, making it an excellent choice for organic cultivation. <br> <br> Tulsi is widely used in herbal teas, respiratory syrups, essential oils, and dietary supplements. Its global demand is driven by the wellness industry’s focus on natural, plant-based respiratory support products.`,
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


export const Whypartner = () => {
  const heading = "Why Partner with Atulye Krishi Vana for Digestive & Metabolic Herbs?"
  const fruitData = [
    {
      title: "Sustainable Cultivation Practices",
      image: choose1,
      flip: "We promote chemical-free, eco-friendly farming methods that reduce soil degradation, support biodiversity, and enhance the quality of herbal produce."
    },
    {
      title: "Comprehensive Farmer Support",
      image: choose2,
      flip: "From sapling supply and field preparation to pest management and post-harvest processing, our experts provide end-to-end support to ensure successful crop cycles."
    },
    {
      title: "Market Linkages",
      image: choose3,
      flip: "We connect farmers directly to herbal processors, Ayurvedic companies, and international buyers, ensuring fair pricing and profitable sales."
    },
    {
      title: "Value Addition Opportunities",
      image: choose4,
      flip: "We guide farmers on drying, powdering, and oil extraction, adding value to raw herbs and creating higher profit margins."
    },
    {
      title: "Capacity Building and Training",
      image: choose5,
      flip: "Our workshops cover best practices in cultivation, organic pest control, and sustainable harvesting, empowering farmers to maximize yields and income."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}
