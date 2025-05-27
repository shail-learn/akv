"use client";

import BannerPage from "../BannerPage";
import React from "react";
import Link from "next/link";
import banner from "../../../assets/images/tropical/TropicalBanner.webp";
import { Wave } from "../Wave";
import { Iconslider } from "../Iconslider";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Cultivation1 from "../../../assets/images/tropical/cultivation1.webp";
import Cultivation2 from "../../../assets/images/tropical/cultivation2.webp";
import Cultivation3 from "../../../assets/images/tropical/cultivation3.webp";
import Cultivation4 from "../../../assets/images/tropical/cultivation4.webp";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
export const BannerTropical = () => {
  const text = {
    banner: banner,
    heading: `Tropical Fruits`,
    subtitle: "High-Yield and Nutrient-Rich Crops",
    title:
      "At Atulye Krishi Vana, we cultivate a diverse range of tropical fruit trees, leveraging sustainable agroforestry techniques to enhance yield and quality. Our plantations are spread across 500 acres in Madhya Pradesh, where we integrate modern technology with traditional farming wisdom. Tropical fruits are essential for commercial farming due to their high demand, nutritional benefits, and adaptability to warm climates. These trees offer excellent returns on investment while contributing to environmental sustainability.",
    opacity: "opacity-50",
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        subtitle={text.subtitle}
        title={text.title}
        banner={text.banner}
        opacity={text.opacity}
      />
      <Wave />
    </>
  );
};
export const WhyChooseTropical = () => {
  const heading = "Why Choose Tropical Fruits for Commercial Farming?";
  const custom_class = "original_img padding_argust desktop-p-0";
  const cardData = [
    {
      title: "Fast Growth & High Yield",
      description:
        "Most tropical fruit trees mature quickly, ensuring regular harvests and steady income streams.",
    },
    {
      title: "High Market Demand",

      description:
        " Tropical fruits such as mango, banana, and pineapple are staple foods with strong domestic and export markets.",
    },
    {
      title: "Diverse Uses",

      description:
        " These fruits are used in fresh consumption, food processing, beverages, cosmetics, and medicinal applications.",
    },
    {
      title: "Climate Adaptability ",
      description:
        "Thrives in warm, humid conditions with minimal cold susceptibility.",
    },
    {
      title: "Sustainability Benefits",
      description:
        "These trees improve soil fertility, support biodiversity, and prevent soil erosion.",
    },
  ];

  return (
    <>
      <Iconslider
        card={cardData}
        heading={heading}
        custom_class={custom_class}
      />
      <div className="bg-[#1B453C] py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-white text-base">
          <p>
            The demand for teak has surged, particularly in India, China,
            Europe, and the Middle East, where premium <br />{" "}
            <b> wood products are in high demand.</b>
          </p>
        </div>
      </div>
    </>
  );
};
export const OurTropicalOffering = () => {
  const OurTropicalOfferingHeading = "Our Tropical Fruit Offerings";

  const OurTropicalOfferingData = [
    {
      heading: "Mango (Mangifera indica)",
      intro:
        "Mango, known as the 'King of Fruits', is one of the most popular tropical fruits worldwide. It is a highly profitable crop due to its demand in both fresh and processed markets.",
      sections: [
        {
          title: "Growing Conditions",
          points: [
            "Grows well-drained loamy soil with good organic matter.",
            "Prefers tropical and subtropical climates with temperatures between 24–30°C.",
            "Requires deep watering during flowering and fruit development stages.",
            "Spacing: 10m x 10m for traditional varieties; 5m x 5m for high-density planting.",
          ],
        },
        {
          title: "Commercial Benefits",
          points: [
            "Used in juices, jams, pickles, and dried fruit industries.",
            "High export potential, especially in premium varieties like Alphonso and Kesar.",
            "A mature tree can yield 100–200 kg of fruit annually.",
          ],
        },
      ],
    },
    {
      heading: "Coconut (Cocos nucifera)",
      intro:
        "Coconut is a multipurpose tree that provides fruit, oil, fiber, and wood, making it one of the most valuable crops in tropical regions.",
      sections: [
        {
          title: "Growing Conditions",
          points: [
            "Grows well in sandy and alluvial soils with good drainage.",
            "Requires full sunlight and an annual rainfall of at least 1000mm.",
            "Tolerates saline and coastal environments.",
            "Spacing: 7.5m x 7.5m for optimum growth.",
          ],
        },
        {
          title: "Commercial Benefits",
          points: [
            "Produces coconut water, oil, desiccated coconut, and coir product",
            "A single tree can produce up to 150 coconuts per year.",
            "Long lifespan (60+ years) ensures continuous production.",
          ],
        },
      ],
    },
    {
      heading: "Banana (Musa paradisiaca)",
      intro:
        "Banana is one of the most widely grown and consumed tropical fruits, known for its fast growth and high profitability.",
      sections: [
        {
          title: "Growing Conditions",
          points: [
            "Requires deep, well-drained soil rich in organic matter.",
            "Prefers warm temperatures (25-35°C) with regular watering.",
            "High-density planting of 1.5m x 1.5m increases yield per hectare.",
          ],
        },
        {
          title: "Commercial Benefits",
          points: [
            "Short harvest cycle (9-12 months) ensures quick returns.",
            "Used in fresh markets, flour, chips, baby food, and beverages.",
            "High export potential, especially Cavendish bananas.",
          ],
        },
      ],
    },
    {
      heading: "Papaya (Carica papaya)",
      intro:
        "Papaya is a fast-growing fruit tree that produces nutrient-rich fruit within a year of planting.",
      sections: [
        {
          title: "Growing Conditions",
          points: [
            "Prefers well-drained, sandy loam soil with pH 6-6.5.",
            "Requires warm temperatures (22-33°C) and regular irrigation.",
            "Spacing: 2m x 2m to allow airflow and prevent disease.",
          ],
        },
        {
          title: "Commercial Benefits",
          points: [
            "Highly profitable due to its fast maturity (8-10 months to first harvest).",
            "Used in fresh consumption, juices, cosmetics, and pharmaceuticals.",
            "Rich in papain, an enzyme used in meat tenderizers and medicines.",
          ],
        },
      ],
    },
    {
      heading: " Pineapple (Ananas comosus)",
      intro:
        "Pineapple is a tropical fruit known for its sweet taste and high commercial value.",
      sections: [
        {
          title: "Growing Conditions",
          points: [
            "Grows best in well-drained, sandy soils with moderate fertility.",
            "Requires a warm climate with 1000-1500mm rainfall annually.",
            "Spacing: 30cm x 60cm in high-density planting.",
          ],
        },
        {
          title: "Commercial Benefits",
          points: [
            "Used in fresh markets, juices, canned products, and confectionery.",
            "High export demand in processed and dried fruit forms.",
            "Can yield up to 50-60 tons per hectare annually.",
          ],
        },
      ],
    },
  ];

  return (
    <div
      className={`relative z-20 bg-[#1b453c] text-white pb-20 -mt-20 GrowthNavigation`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="redhat text-3xl md:text-[42px] font-medium text-center pt-14 pb-10">
          {OurTropicalOfferingHeading}
        </h2>

        <div className="flex justify-center items-center">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            loop
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="flex items-center justify-center"
          >
            {OurTropicalOfferingData.map((item, index) => (
              <SwiperSlide
                key={index}
                className="!flex items-center justify-center h-full"
              >
                <div className="bg-white text-[#1B453C] rounded-xl shadow-lg px-[2rem] md:px-[4rem] py-5 w-[60%]">
                  {/* Removed w-full here */}
                  <h3 className="text-base text-[#1B453C] md:text-lg font-bold mb-2">
                    {item.heading}
                  </h3>
                  <p className="text-sm md:text-base mb-4">{item.intro}</p>

                  {item.sections.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="font-semibold text-sm md:text-base mb-1">
                        {section.title}:
                      </h4>
                      <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
                        {section.points.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export const CultivationTropical = () => {
  const CultivationTropicalHeading =
    " How Atulye Krishi Vana Ensures High-Quality Cultivation";
  //   const GrowthDescription =
  //     "Mahogany has excellent growth traits that make it ideal for commercial plantations.";
  const slides = [
    {
      group: "Scientific Plantation Management",
      image: Cultivation1,
      desc: "We use advanced irrigation systems, organic fertilizers, and precision farming methods to maximize yield.",
    },
    {
      group: "Pest & Disease Control",
      image: Cultivation2,

      desc: "Integrated pest management (IPM) ensures healthy crops with minimal chemical use. ",
    },
    {
      group: "Sustainable Farming Practices",
      image: Cultivation3,
      desc: "Agroforestry techniques improve biodiversity and soil conservation.",
    },
    {
      group: "Market Support & Consultancy",
      image: Cultivation4,
      //   title: "Drought Tolerance",
      desc: "We provide end-to-end assistance, from plantation setup to post-harvest processing and market access.",
    },
  ];
  return (
    <>
      <GrowthSlider
        GrowthHeading={CultivationTropicalHeading}
        // GrowthDescription={GrowthDescription}
        slides={slides}
      />
    </>
  );
};
