"use client"
import React, { useEffect, useState } from 'react';
import bgstay from "../../../assets/images/stress/bg.webp";
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import impact2 from "../../../assets/images/stress/Benefit2.jpg";
import impact3 from "../../../assets/images/stress/Benefit3.webp";
import impact4 from "../../../assets/images/stress/Benefit4.webp";
import PartnerBg from "../../../assets/images/fast/bgimg.webp";
import { SliderBlur } from '../SliderBlur';
import Titleslider from '../Titleslider';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';


export const Sliderblur = () => {
  const heading = "Benefits for Farmers"


  const boxslider = [
    {
      image: impact1,
      heading: "Diversification of crops",
      description: 'Offers farmers a break from low-margin staples',
    },
    {
      image: impact2,
      heading: "Risk reduction",
      description: 'Drought-resistant herbs reduce dependence on monsoon patterns',
    },
    {
      image: impact3,
      heading: "Steady revenue",
      description: 'High-value crops ensure regular income with export potential',
    },
    {
      image: impact4,
      heading: "Women-inclusive",
      description: "Many herbs are suitable for small-scale kitchen gardens and home-based drying units, supporting women' participation in agribusiness"
    },

  ]
  return (
    <>

      <section
        className="relative  pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
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
              <SliderBlur boxslider={boxslider} />


            </div>
          </div>

        </div>

      </section>

    </>
  )
}


export const Post = () => {
  const heading = "Post-Harvest Support and Value Addition"

  const boxslider = [
    {

      heading: "Shade-drying techniques for retaining active compounds",
    },
    {

      heading: "Pulverizing and packaging methods for herbal powders",
    },
    {

      heading: "Simple value-added products like herbal teas, wellness mixes, and dried herb kits",
    },
    {

      heading: "Organic certification support for premium market access",
    },


  ]
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  )
}


export const Herbal = () => {
  const heading = "Join the Herbal Wellness Farming Revolution";
  const description =
    "By cultivating stress-relief and cognitive-enhancing herbs under the Athulye Krishi Vana umbrella, farmers can become pioneers in India's herbal wellness ecosystem. These crops provide an eco-friendly, sustainable income source that supports public health, respects nature, and aligns with India’s rich heritage of plant-based healing. <br/> Whether you are a first-time grower or an established farmer seeking to diversify, this vertical offers the perfect blend of profitability, purpose, and sustainability.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-10 md:mb-20 redhat">
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



export const FAQs = () => {
  const Faqheading =
    "What makes herbal plants more suitable than synthetic supplements for mental wellness?";
  const Faqdescription = `Herbal plants offer a gentler, holistic approach to mental health without harsh chemicals or synthetic additives. Unlike pharmaceutical solutions, they typically have fewer side effects and work synergistically with the body’s natural systems. These herbs provide cumulative, long-term benefits by supporting the endocrine and nervous systems naturally. Additionally, they contain multiple active compounds that address not just one symptom but overall wellbeing. Their versatility allows for various preparations—teas, oils, powders, or capsules—offering flexibility in daily use. Cultivating these herbs also supports biodiversity and local economies, making them a sustainable wellness solution from both health and environmental perspectives.`;
  const FaqsData = [
    {
      question: "Can these herbs be grown without synthetic pesticides or fertilizers?",
      answer:
        "Yes, most of the medicinal herbs listed—Ashwagandha, Brahmi, Mandukparni, Shatavari, and Tulsi—are naturally hardy and pest-resistant, making them ideal candidates for organic cultivation. They thrive in diverse soil conditions and require minimal chemical intervention. Using compost, neem-based sprays, and crop rotation helps maintain soil fertility and pest control. Their resilience to disease further reduces dependency on synthetic inputs. Athulye Krishi Vana encourages natural farming practices by offering guidance on organic methods, natural pest management, and soil regeneration. Growing these herbs organically not only ensures healthier end products but also qualifies them for premium certification markets.",
    },
    {
      question:
        "What kind of farmers can benefit from cultivating these herbs?",
      answer:
        "Small, marginal, and tribal farmers stand to gain significantly from cultivating these herbs. Since the plants require minimal land, water, and maintenance, they are ideal for those with limited resources. These herbs also grow well in degraded or fallow lands, making them suitable for areas with low fertility. For women-led and community farms, they offer a manageable yet high-value crop option. The steady demand from herbal medicine companies and wellness brands means consistent income potential. Athulye Krishi Vana provides end-to-end support, making it accessible even for first-time growers or those looking to transition from chemical-based farming.",
    },
    {
      question: "Are these herbs safe for children and the elderly?",
      answer:
        "When used appropriately and in recommended doses, these herbs are generally considered safe for people of all age groups. For children, herbs like Brahmi and Tulsi are often used in low doses to enhance concentration or immunity. Elderly individuals benefit from Shatavari and Mandukparni, which support memory, circulation, and hormonal balance. However, it’s crucial to use standardized preparations and consult with a healthcare provider, especially for those on medication or with pre-existing conditions. Cultivating these herbs at home or in community gardens also allows better quality control, ensuring the use of pure, chemical-free raw ingredients.",
    },
    {
      question: "How do these herbs impact hormonal health in addition to mental wellness?",
      answer:
        " Many stress-related disorders stem from hormonal imbalances, particularly involving cortisol, adrenaline, and reproductive hormones. Adaptogens like Ashwagandha and Shatavari help regulate endocrine functions by supporting the adrenal and pituitary glands. This balance indirectly improves emotional stability and mental clarity. Shatavari, in particular, is known for its effect on estrogen regulation, supporting reproductive health in women while also calming the nervous system. These herbs contribute to mood stability, energy levels, and restful sleep—all closely tied to hormonal cycles. Integrating them into daily wellness routines offers a natural way to restore both emotional and physical equilibrium.",
    },
    {
      question: "What forms can these herbs be processed into post-harvest?",
      answer:
        "After harvest, these herbs can be processed into a wide variety of forms to suit consumer needs. Roots like Ashwagandha and Shatavari are typically cleaned, dried, and ground into powder or extracted into tinctures. Leafy herbs like Tulsi and Brahmi are dried for teas, made into syrups, or infused into oils. Mandukparni leaves are popular in both capsules and external applications like skin balms. Processing options include drying, grinding, oil distillation, and water-based extraction. Athulye Krishi Vana guides farmers and cooperatives in adopting cost-effective post-harvest practices that ensure hygiene, potency, and compliance with quality standards.",
    },
  ];

  return (
    <>
      <FaqsLayout
        heading={Faqheading}
        description={Faqdescription}
        faqs={FaqsData}
      />
    </>
  );
}
