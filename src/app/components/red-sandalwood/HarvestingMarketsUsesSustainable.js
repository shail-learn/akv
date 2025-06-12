import React from 'react'
import img1 from "../../../assets/images/red/yield1.webp";
import img2 from "../../../assets/images/red/yield2.webp";
import img3 from "../../../assets/images/red/yield3.webp";
import img4 from "../../../assets/images/red/yield4.webp";
import img5 from "../../../assets/images/red/Yield5.webp";
import { HarvestingLayout, MarketLayout, UseSecLayout } from '../utilities/UsesStanadarLayout';
import img01 from "../../../assets/images/red/market.webp";
import Image from 'next/image';
import { FaqSlider } from '../FaqSlider';

export const Harvesting = () => {
    const Harvestingheading = "Harvesting & Yield of Red Sandalwood Trees";
    const Harvestingtext =
        "Red Sandalwood is a long-rotation timber species offering significant economic value.";

    const objectives = [
        {
            id: "01",
            title: "Harvesting Age:",
            description:
                "Begins at 20-25 years; optimal timber harvest at 30 years.",
            image: img1,
        },
        {
            id: "02",
            title: "Annual Yield",
            description: "2-3 cm in diameter per year.",
            image: img2,
        },
        {
            id: "03",
            title: "Harvesting Method",
            description: "Sustainable clear felling with replanting.",
            image: img3,
        },
        {
            id: "04",
            title: "Timber Yield",
            description: "1.5-2 cubic meters per tree after 30 years.",
            image: img4,
        },
        {
            id: "05",
            title: "Post-Harvest Processing",
            description: "Seasoned and treated for preservation and durability.",
            image: img5,
        },
    ];
    return (
        <>
            <HarvestingLayout
                Harvestingheading={Harvestingheading}
                Harvestingtext={Harvestingtext}
                objectives={objectives}
            />

        </>
    );
}



export const Markets = () => {
    const marketData = {
        imageSrc: img01,
        title: "Market Demand & Pricing",
        steptitle: "Global Demand for Karaya Gum",
        steps: [
          {
            title: "Luxury Furniture & Woodcraft",
            description: "Used for intricate carvings and antique furniture."
          },
          {
            title: "Traditional Medicine",
            description: "Used in Ayurvedic and Chinese medicine formulations."
          },
          {
            title: "Cosmetics & Skincare",
            description: "Essential in herbal beauty products and oils."
          },
          {
            title: "Religious & Cultural Uses",
            description: "Sacred wood for rituals and temple artifacts."
          },
          {
            title: "Export Market",
            description: "Sought after in China, Japan, and the Middle East."
          },
          {
            title: "Legalized Trade",
            description: "Requires government permissions for cultivation and sale."
          },
          {
            title: "Agroforestry Expansion",
            description: "More farmers adopting Red Sandalwood plantations."
          },
          {
            title: "Value Addition",
            description: "Processed and polished wood fetches premium rates."
          }
        ]
      };
    return (
        <>
            <section className="py-16 lg:py-20">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
                        <div className="md:w-1/2 w-full">
                            <div className="relative">
                                <Image
                                    src={marketData.imageSrc}
                                    alt="Market Demand"
                                    width={600}
                                    height={400}
                                    className="rounded-[20px]"
                                    style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                                />

                                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
                            </div>
                        </div>

                        <div className={`md:w-6/12 w-12/12`}>
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C]">
                                {marketData.title}
                            </h2>


                            <div className="list-none mt-8 text-black mb-4">
                                {marketData.steps.map((item, index) => (
                                     <div key={index} className="mb-4">
                                     <h3 className="text-[15px] md:text-[16px] font-semibold text-black">
                                       {item.title}
                                     </h3>
                                     <p className="text-[14px] md:text-[15px] font-normal text-black">
                                       {item.description}
                                     </p>
                                   </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}



export const Uses = () => {
    const usesApplicationsData = {
        heading: "Uses & Applications",
        columns: [
          {
            subheading: "Luxury Furniture & Woodcraft",
            points: [
              "Used in high-end furniture, temple doors, and ornamental carvings.",
              "Prized for its rich color and natural luster.",
            ],
          },
          {
            subheading: "Medicinal & Ayurvedic Uses",
            points: [
              "Red Sandalwood extracts have anti-inflammatory and antioxidant properties.",
              "Used in treating skin disorders, digestive issues, and blood purification.",
            ],
          },
          {
            subheading: "Cosmetics & Skincare",
            points: [
              "Red Sandalwood powder is a natural remedy for skin brightening and anti-aging.",
              "Incorporated in herbal face packs, creams, and soaps.",
            ],
          },
          {
            subheading: "Religious & Cultural Applications",
            points: [
              "Used in sacred rituals, incense making, and temple constructions.",
              "Considered auspicious in Hindu and Buddhist traditions.",
            ],
          },
          {
            subheading: "Agroforestry & Land Restoration",
            points: [
              "Improves soil quality and prevents desertification.",
              "Supports biodiversity and sustainable land use.",
            ],
          },

        ],
      };
      return (
        <>
          <UseSecLayout usesApplicationsData={usesApplicationsData} />

        </>
      );
}


export const Sustainable = () => {
    const heading = "Sustainable Red Sandalwood Cultivation with Atulye Krishi Vana"
    const title1 =
    "Atulye Krishi Vana promotes eco-friendly Red Sandalwood farming through:";
    const className="center_faq slider_height"
    const card = [
        {
            title: 'Advanced Plantation Techniques',
            description: 'High-yield saplings and scientific cultivation.',

        },
        {
            title: 'Sustainable Growth Practices',
            description: 'Organic farming and regulated harvesting.',

        },
        {
            title: 'Farmer Support Programs',
            description: 'Training, guidance, and market assistance.',
        },
        {
            title: 'Advanced Plantation Techniques',
            description: 'High-yield saplings and scientific cultivation.',

        },
    ]

    return (
        <>

       <FaqSlider card={card} heading={heading} title1={title1} classname={className} />

        </>
    )
}
