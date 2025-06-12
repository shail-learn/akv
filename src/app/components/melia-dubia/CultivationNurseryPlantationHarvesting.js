import React from 'react'
import { FaqSlider } from '../FaqSlider';
import img01 from "../../../assets/images/teak/small.webp";
import { MarketLayout } from '../utilities/UsesStanadarLayout';
import PlantationSection from '../PlantationSection';
import market1 from "../../../assets/images/melia/right.webp";
import market2 from "../../../assets/images/melia/left.webp";
import Image from 'next/image';

export const Cultivation = () => {
  const heading = "Cultivation & Growth Characteristics";
  const className = "slider_height";
  const title1 = "Silvicultural Characteristics";

  const card = [
    {
      title: "Pest & Disease Resistance –",
      description: "Naturally resistant to major pests and diseases."
    },
    {
      title: "Rapid Growth Rate",
      description: "Attains a height of 15-20 feet within the first year."
    },
    {
      title: "Moderate Water Requirement ",
      description: "Needs minimal irrigation once established."
    },
    {
      title: "Drought Tolerance",
      description: "Thrives in semi-arid conditions with proper management."

    },
    {
      title: "Minimal Pruning Needs",
      description: "Requires occasional pruning for better timber quality."

    },


  ];
  return (
    <>
      <FaqSlider
        classname={className}
        title1={title1}
        className="shailendra"
        card={card}
        heading={heading}
      />


    </>
  );
}


export const Nursery = () => {
  const marketData = {
    imageSrc: img01,
    title: "Nursery Practices",
    description: "Efficient nursery management ensures high-quality Melia Dubia saplings.",

    steps: [
      "Seed Collection: Best harvested between March – May.",
      "Seed Characteristics: Small brownish seeds with good viability. ",
      "Germination Process: Seeds are sown in polybags with nutrient-rich soil mix. ",
      "Shading & Watering: Requires moderate shade in the initial growth phase. ",
      "Transplantation: Ready for field planting once seedlings reach 30-40 cm height.",
    ],

  };
  return (
    <>
      <MarketLayout marketData={marketData} />

    </>
  );
}


export const Plantation = () => {
  const plantationData = {
    heading: "Plantation & Spacing",
    sections: [
      {
        heading: "Pit Size: ",
        items: ["45 cm x 45 cm x 45 cm to allow strong root establishment."],
      },
      {
        heading: "Ideal Spacing: ",
        items: [
          "10 feet x 10 feet for optimal timber yield.",

        ],
      },
      {
        heading: "Intercropping Compatibility: ",
        items: [
          "Can be grown alongside crops like pulses, turmeric, and ginger in early growth stages.",
        ],
      },
    ],
  };
  return (
    <>
      <PlantationSection data={plantationData} />

    </>
  )
}


export const Harvesting = () => {
  const heading = "Harvesting & Yield of Melia Dubia Trees"
  const fertilizerData = {

    "content": [
      {
        "title": "Harvesting Age: 6-8 years for optimal timber yield. ",

      },
      {
        "title": "Growth Rate: Can reach up to 40-50 feet in height within 5 years. ",
      }
    ]
  }

  const fertilizerData2 = {

    "content": [
      {
        "title": "Annual Yield: Approximately 200-300 cubic feet of timber per tree. ",

      },
      {
        "title": "Multiple Harvesting Cycles: Regenerates from stumps after cutting, reducing replantation costs.",

      },

    ]
  }
  return (
    <>
      <section className="py-14 lg:py-16 pt-10 lg:pt-16 relative overflow-hidden">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="lg:leading-snug  text-[#1B453C] redhat mb-6 lg:mb-12 text-center text-3xl md:text-4xl font-semibold  w-full">
            {heading}
          </h2>
          <div className='flex flex-wrap'>
            <div className='md:w-10/12 w-full justify-center mx-auto'>
              <div className="flex flex-col-reverse md:grid grid-cols-1 items-center md:grid-cols-2 gap-6 relative">
                <div className='md:pr-12'>
                  <h2 className="text-xl  text-[#1B453C] mb-6">
                    {fertilizerData.heading}
                  </h2>
                  <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                    {fertilizerData.content.map((section, index) => (
                      <li key={index}>
                        <span className="font-medium">{section.title}</span>
                        {section.items && <ul className="list-disc pl-5 mt-1 space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>}
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
                  <div className="absolute -top-4 -z-10 -right-0 w-20 h-20 bg-[#fff] rounded-full"></div>

                </div>
              </div>

              <div className="grid grid-cols-1 items-center order-2  md:grid-cols-2 gap-6 relative mt-6 md:-mt-4">
                <div className="relative">
                  <Image
                    src={market2}
                    alt="Bamboo Products"
                    className="w-full h-full rounded-bl-[100px]"

                  />

                </div>
                <div>
                  <h2 className="text-xl  text-[#1B453C] mb-6">
                    {fertilizerData2.heading}
                  </h2>
                  <ul className="list-disc pl-5 text-sm md:text-[15px] text-black font-light space-y-4">
                    {fertilizerData2.content.map((section, index) => (
                      <li key={index}>
                        <span className="font-medium">{section.title}</span>
                        {section.items && <ul className="list-disc pl-5 mt-1 space-y-1">
                          {section.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="absolute -z-10  -left-16 -bottom-12 w-60 h-60 md:w-96 md:h-96 bg-[#fff] rounded-full"></div>
      </section>

    </>
  )
}
