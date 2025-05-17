import React from 'react'
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
  import Silvicultural1 from "../../../assets/images/mahagony/Silvicultural1.webp";
  import Silvicultural2 from "../../../assets/images/mahagony/Silvicultural2.webp";
  import Silvicultural3 from "../../../assets/images/mahagony/Silvicultural3.webp";
  import Silvicultural4 from "../../../assets/images/mahagony/Silvicultural4.webp";
  import Silvicultural5 from "../../../assets/images/mahagony/Silvicultural5.webp";
  import Nursery1 from "../../../assets/images/mahagony/Nursery1.webp";
  import Nursery2 from "../../../assets/images/mahagony/Nursery2.webp";
  import Nursery3 from "../../../assets/images/mahagony/Nursery3.webp";
  import Nursery4 from "../../../assets/images/mahagony/Nursery4.webp";
  import img01 from "../../../assets/images/kulu/street-market.webp";
import { MarketLayout } from '../utilities/UsesStanadarLayout';


export const Characteristics = () => {
    const GrowthHeading = "Cultivation & Growth Characteristics";
    const GrowthDescription = ""
    const slides = [
      {
        group: "Climate & Soil Conditions",
        image: Silvicultural1,
        title: "Climate",
        desc: "Thrives in warm, dry climates with annual rainfall between 500-1000 mm.",

      },
      {
        group: "Climate & Soil Conditions",
        image: Silvicultural4,
        title: "Temperature",
        desc: " Prefers temperatures between 20°C - 40°C.",
      },
      {
        group: "Climate & Soil Conditions",
        image: Silvicultural3,
        title: "Soil",
        desc: "Adaptable to rocky, loamy, and well-drained soils with a pH range of 6.0 - 7.5.",
      },
      {
        group: "Plantation & Spacing",
        image: Silvicultural2,
        title: "Spacing",
        desc: "5m x 5m for optimal growth and gum extraction.",
      },
      {
        group: "Plantation & Spacing",
        image: Silvicultural5,
        title: "Planting Season",
        desc: "Monsoon season (June - September) is ideal for sapling establishment.",
      },
      {
        group: "Plantation & Spacing",
        image: Nursery1,
        title: "Propagation",
        desc: "Done via seeds or root suckers for rapid plantation growth.",
      },
      {
        group: "Maintenance & Irrigation",
        image: Nursery2,
        title: "Watering",
        desc: "Minimal irrigation required; thrives in rainfed conditions.",
      },
      {
        group: "Maintenance & Irrigation",
        image: Nursery4,
        title: "Pruning",
        desc: "Regular pruning enhances gum yield and tree health.",
      },
      {
        group: "Maintenance & Irrigation",
        image: Nursery3,
        title: "Weeding",
        desc: "Necessary in the initial growth stages to prevent competition for nutrients.",
      },

    ];
    return (
      <>
      <GrowthSlider

          GrowthHeading={GrowthHeading}
          GrowthDescription={GrowthDescription}
          slides={slides}
        />

      </>
    );
}



export const Sustainable = () => {
  const heading = "Sustainable Gum Harvesting Practices"
  const info1heading = "Tapping Process"
  const info1 = [
      { item: "Small incisions are made in the bark to allow gum exudation." },
      { item: "Harvesting should be done in rotation to prevent over-extraction and tree stress." },
      { item: "Collected gum is sun-dried, cleaned, and processed for industrial use." },

  ];

  const info2heading = "Ethical & Eco-Friendly Methods"
  const info2 = [
      { item: "Avoid excessive tapping to maintain tree longevity." },
      { item: "Use biodegradable tools to minimize environmental impact." },
      { item: "Support local communities by training them in sustainable harvesting techniques." },


  ]

  return (
      <>
          <section className=" py-14 lg:py-16 bg-[#6D8C54] bg-opacity-30 relative">

              <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
                  <h2 className="text-3xl md:leading-[1.3] text-center md:text-4xl font-medium redhat text-[#1B453C] mb-8">{heading}</h2>
                  <div className=" flex-wrap flex  justify-center gap-16 relative z-10">
                      <div className="md:w-1/2 lg:w-1/3 p-4 pl-10 pr-10 pb-8 w-full border border-black rounded-tl-2xl w-12/12">
                          <h3 className="font-semibold text-base md:text-lg">{info1heading}</h3>
                          <ul className="list-disc ps-6">
                              {info1.map((item, index) => (
                                  <li className="text-sm mt-2 font-normal" key={index}>{item.item}</li>
                              ))}
                          </ul>

                      </div>
                      <div className="md:w-1/2 lg:w-1/3 p-4 pl-10 pr-10 border-black rounded-tr-2xl  pb-8 w-full border w-12/12">
                      <h3 className="font-semibold text-base md:text-lg">{info2heading}</h3>
                          <ul className="list-disc ps-6">
                              {info2.map((item, index) => (
                                  <li className="text-sm mt-2 font-normal" key={index}>{item.item}</li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </section>

      </>
  )
}



export const Marketdemand = () => {
  const marketData = {
    imageSrc: img01,
    title: "Market Demand & Pricing",
    description: "",
    steptitle: "Global Demand for Karaya Gum",
    steps: [
      "Used in over 50+ industries including pharmaceuticals, food, cosmetics, and adhesives.",
      "Increasing preference for natural thickeners over synthetic chemicals.",
      "Growing demand in organic and herbal markets worldwide.",

    ],
    shortdesciption: `<strong>Profitability for Farmers & Investors</strong><ul class='list-disc pl-5 mt-2'>
            <li>High market value with stable demand in domestic and export markets.</li>
            <li>Minimal maintenance costs with long-term income potential.</li>
            <li>Supports carbon credit earnings for environmentally responsible plantations.</li>
          </ul>`,
  };
  return (
    <>
      <MarketLayout marketData={marketData} />

    </>
  );
}

