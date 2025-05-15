"use client";
import React, { useState } from "react";
import market1 from "../../../assets/images/gamhar/midsection.webp";
import market2 from "../../../assets/images/bamboo/Market2.webp";
import grow from "../../../assets/images/fruits-vegetables/grow.png";
import Image from "next/image";
import { HiChevronUp, HiChevronDown } from "react-icons/hi2";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";

export const Invest = () => {
  const heading = "Why Invest in Gamhar Cultivation?";
  const demandDetails = [
    "Fast-Growing Timber Crop – Short-rotation species with high returns.",
    "Sustainable & Eco-Friendly – Contributes to afforestation and land restoration.PK) ",
  ];

  const industryDetails = [
    "Multiple Revenue Streams – Profits from timber, medicinal extracts, and agroforestry benefits.",
    " Low Maintenance, High Returns – Requires minimal inputs with significant profit potential.",
    " Expanding Market Demand – Rising need for sustainable wood in various industries.",
  ];
  return (
    <>
      <section className="py-14 lg:py-16 pt-0 lg:pt-2 relative overflow-hidden">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-4 lg:mb-7 text-center text-3xl md:text-4xl font-medium  w-full">
            {heading}
          </h2>
          <div className="flex flex-wrap">
            <div className="md:w-10/12 w-full justify-center mx-auto">
              <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-2 gap-6 relative">
                <div className="md:pr-12">
                  <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black font-light">
                    {demandDetails.map((detail, index) => (
                      <li className="mb-2" key={index}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative w-full mt-10 md:mt-0">
                  <Image
                    src={market1}
                    alt="Hand planting seeds"
                    className="w-full h-full rounded-tr-[100px] md:-ml-12 z-10 relative"
                  />
                  <div className="absolute -top-4 -z-10 -right-0 w-20 h-20 bg-[#6D8C54] rounded-full"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 items-center order-2  md:grid-cols-2 gap-6 relative mt-6 md:-mt-8">
                <div className="relative">
                  <Image
                    src={market2}
                    alt="Bamboo Products"
                    className="w-full h-full rounded-bl-[100px]"
                  />
                </div>
                <div>
                  <ul className="list-disc pl-5 mt-2 text-sm md:text-[15px] text-black font-light">
                    {industryDetails.map((detail, index) => (
                      <li className="mb-2" key={index}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -z-10  -left-16 -bottom-12 w-60 h-60 md:w-96 md:h-96 bg-[#6D8C54] rounded-full"></div>
      </section>
    </>
  );
};

export const Looking = () => {
  const growData = {
    heading: "Looking to Grow or Source Gamhar?",
    cta: "Contact Athulye Krishi Vana for:",
    paragraphs: [
      "Premium-quality Gamhar saplings",
      "Expert guidance on sustainable forestry",
      "Ethical and responsible sourcing of Gamhar timber.",
    ],
    image: grow,
  };
  return (
    <>
      <section className="bg-[#f1f1f1] py-10 px-4">
        <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 flex flex-col-reverse md:flex-row items-center gap-8">
          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center md:text-left text-[#1B453C]  mb-8 md:mb-20">
              {growData.heading}
            </h2>
            <p className="text-lg md:text-2xl text-[#1B453C] my-6 md:my-10 font-semibold">
              {growData.cta}
            </p>
            <ul className="text-black list-disc ps-4 space-y-2 mb-2">
              {growData.paragraphs.map((p, index) => (
                <li key={index}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <div className="overflow-hidden  w-[250px] h-[350px] relative mx-auto md:mx-0 md:ml-auto">
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
  );
};

export const Faqs = () => {
  const Faqheading = "How can I improve the shelf life of my harvested crops?";
  const Faqdescription = `To extend shelf life, start with proper post-harvest handling. Store crops in well-ventilated, cool areas and sort out damaged produce immediately. Use proper packaging materials like perforated plastic crates or jute bags to prevent moisture buildup. Cold storage is ideal for perishable items like fruits and vegetables. For grains, ensure they are dried to the correct moisture level (around 12-14%) before storage. Vacuum sealing, dehydration, and chemical-free preservation techniques like neem leaves for grains help reduce spoilage.`;
  const FaqsData = [
    {
      question: "What are the best natural fertilizers for my farm?",
      answer:
        "Natural fertilizers improve soil health and crop yield without harming the environment. Common options include compost, vermicompost, and farmyard manure (FYM), which add organic matter and essential nutrients. Green manure crops like sun hemp and cowpea fix nitrogen in the soil.",
    },
    {
      question: "What are the best natural fertilizers for my farm?",
      answer:
        "Natural fertilizers improve soil health and crop yield without harming the environment. Common options include compost, vermicompost, and farmyard manure (FYM), which add organic matter and essential nutrients. Green manure crops like sun hemp and cowpea fix nitrogen in the soil. Biofertilizers such as Azospirillum, Rhizobium, and phosphate-solubilizing bacteria enhance nutrient absorption. Liquid fertilizers like jeevamrut, panchagavya, and fish amino acid provide micronutrients and beneficial microbes. Neem cake and mustard cake act as both fertilizers and natural pesticides. Regularly incorporating these organic fertilizers reduces dependence on chemical inputs and promotes long-term soil fertility.",
    },
    {
      question: "How can I control weeds without using chemical herbicides?",
      answer:
        "Weed control without chemicals involves multiple strategies. Mulching with dry leaves, straw, or black plastic prevents weed growth by blocking sunlight. Intercropping and cover crops suppress weeds by competing for resources. Regular manual weeding and shallow hoeing minimize weed spread. Crop rotation disrupts weed cycles, reducing infestation. Using bio-herbicides like diluted vinegar spray and saltwater solutions can be effective against certain weeds. Livestock grazing on weeds in fallow fields also helps. Maintaining proper plant spacing and using drip irrigation reduce weed competition for water and nutrients. Combining these techniques ensures effective weed management without harming soil health.",
    },
    {
      question:
        "What is the role of crop rotation, and how should I implement it?",
      answer:
        "Crop rotation prevents soil depletion, reduces pests and diseases, and improves yield. The key is to avoid planting the same crop or related species in the same field consecutively. A four-year rotation plan is ideal—legumes (e.g., pulses) add nitrogen, root crops (e.g., carrots) break up compacted soil, cereals (e.g., wheat) use excess nutrients, and leafy vegetables (e.g., spinach) balance organic matter. Choose crops with different nutrient needs and root structures. For best results, incorporate green manure crops in the cycle. Proper rotation minimizes the need for fertilizers and pesticides while keeping soil productive and healthy.",
    },
    {
      question: "How can I prevent soil erosion on my farm?",
      answer:
        "Soil erosion reduces fertility and affects crop yield. To prevent it, use contour plowing and terrace farming on slopes to slow water runoff. Planting cover crops like legumes or grasses stabilizes the soil and adds organic matter. Agroforestry, where trees and crops grow together, provides a natural barrier against wind and water erosion. Mulching with crop residues or biodegradable materials protects topsoil. Installing bunds, trenches, and check dams in fields reduces water flow speed. Practicing conservation tillage—minimum disturbance of soil—also helps. Combining these strategies maintains soil structure, improves moisture retention, and enhances long-term farm productivity.",
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
};
