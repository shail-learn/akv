"use client";
import React from "react";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/IndigenosFruits/indigenousfruitsBanner.webp";
import { Iconslider } from "../Iconslider";
import whychooose from "../../../assets/images/kulu/wavy.svg";
import Image from "next/image";
import SpeciesSlider from "../utilities/ContentSlider";
import Silvicultural1 from "../../../assets/images/mahagony/Silvicultural1.webp";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import img01 from "../../../assets/images/IndigenosFruits/IndigenousTech.webp";
import { MarketLayout } from "../utilities/UsesStanadarLayout";

export const IndigenousBanner = () => {
  const text = {
    banner: banner,
    heading: `Indian & Indigenous Fruits`,
    subtitle: " A Treasure Trove of Taste and Tradition",
    title:
      "India is home to a rich variety of native and indigenous fruit species that have been cultivated for generations. These fruits are more than just sources of nutrition—they are steeped in cultural, medicinal, and ecological significance. At Atulye Krishi Vana, we celebrate and preserve this bounty through thoughtfully designed agroforestry systems. Located in the green expanses of Madhya Pradesh near Bhopal, our agroforestry initiative is spread across 500 acres of fertile land and committed to sustainable, organic, and productive farming practices.",
    opacity: "opacity-50",
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        subtitle={text.subtitle}
        opacity={text.opacity}
        banner={text.banner}
        classname={text.className}
      />
    </>
  );
};
export const WhychoooseIndigenous = () => {
  const heading = "Why Indigenous Fruits Matter?";
  const cardData = [
    {
      title:
        " Atulye integrates these species into its agroforestry model to promote environmental sustainability, community health, and long-term agricultural productivity.",
    },
    {
      title:
        " These fruits are uniquely adapted to Indian soil and climate, making them more resilient and sustainable to grow",
    },
    {
      title:
        " They require minimal inputs, are naturally pest-resistant, and hold deep roots in Ayurveda and traditional wellness practices. Indigenous fruits support biodiversity, improve soil fertility, and are loaded with nutrients.",
    },
  ];

  return (
    <>
      <div className="relative w-full md:-mt-28 z-10">
        <Image
          src={whychooose}
          alt="Divider"
          width={1920}
          height={700}
          className="w-full object-cover h-full"
        />
      </div>

      <Iconslider
        card={cardData}
        heading={heading}
        titleClass="!font-medium text-sm"
      />
    </>
  );
};
export const KeySpcies = () => {
  const speciesData = [
    {
      name: "Bel (Aegle marmelos)",
      benefits:
        "Revered in Ayurveda, Bel is known for its digestive and detoxifying properties.",
      conditions:
        "Thrives in dry regions and well-drained loamy soils. Requires full sunlight.",
      spacing: "8 x 8 meters",
      uses: "Medicinal drinks, chutneys, religious rituals.",
    },
    {
      name: "Jamun (Syzygium cumini)",
      benefits:
        "Rich in iron and antioxidants, Jamun is excellent for managing diabetes.",
      conditions:
        "Prefers tropical to subtropical climates. Grows well in alluvial soils.",
      spacing: "10 x 10 meters",
      uses: "Fresh fruit, juices, vinegar, and medicinal powders.",
    },
    {
      name: "Tamarind (Tamarindus indica)",
      benefits:
        "A culinary staple, tamarind is rich in Vitamin C, aids digestion, and has antibacterial properties.",
      conditions:
        "Grows best in red loamy and alluvial soils. Highly drought-tolerant.",
      spacing: "10 x 10 meters",
      uses: "Pulp for food and beverages, traditional medicine.",
    },
    {
      name: "Shahtoot (Morus alba)",
      benefits:
        "High in antioxidants, supports heart health, and boosts immunity.",
      conditions:
        "Prefers well-drained soils and tolerates a wide range of climatic conditions.",
      spacing: "6 x 6 meters",
      uses: "Fresh consumption, jams, wines, and sericulture (silkworm farming).",
    },
    {
      name: "Ber (Ziziphus mauritiana)",
      benefits:
        "Known as Indian jujube, it is rich in Vitamin C and helps in skin care and immunity.",
      conditions:
        "Grows well in arid and semi-arid climates; drought-resistant.",
      spacing: "6 x 6 meters",
      uses: "Fresh consumption, pickles, and medicinal use.",
    },
    {
      name: "Karonda (Carissa carandas)",
      benefits:
        "High in iron and Vitamin C. Supports digestion and heart health.",
      conditions:
        "Grows in a variety of soils, including saline and rocky terrain.",
      spacing: "4 x 4 meters",
      uses: "Pickles, jams, chutneys, and traditional medicine.",
    },
    {
      name: "Ramfal (Annona reticulata)",
      benefits:
        "Known as Bullock's Heart, it aids digestion and is a good source of Vitamin C and B6.",
      conditions: "Requires warm climate and well-drained loamy soils.",
      spacing: "6 x 6 meters",
      uses: "Fresh fruit consumption, smoothies, and desserts.",
    },
    {
      name: "Guava (Psidium guajava)",
      benefits:
        "Loaded with Vitamin C, fiber, and antioxidants. Supports weight loss and improves heart health.",
      conditions:
        "Thrives in both tropical and subtropical climates. Needs well-drained soils.",
      spacing: "6 x 6 meters",
      uses: "Juices, jams, and fresh eating.",
    },
    {
      name: "Custard Apple (Annona squamosa)",
      benefits: "Excellent for brain health, digestion, and immunity.",
      conditions:
        "Prefers light soils, well-drained, and thrives in dry and hot climates.",
      spacing: "5 x 5 meters",
      uses: "Fresh fruit, desserts, milkshakes, and traditional medicine.",
    },
    {
      name: "Tendu (Diospyros melanoxylon)",
      benefits: "Known for its medicinal leaves and high antioxidant content.",
      conditions: "Grows well in dry deciduous forests and poor rocky soils.",
      spacing: "6 x 6 meters",
      uses: "Traditional medicine, fruit, and tendu leaves for bidi rolling.",
    },
  ];

  return (
    <>
      <SpeciesSlider
        title="Key Species We Grow at Atulye Krishi Vana"
        speciesData={speciesData}
      />
    </>
  );
};

export const IndigenousPlantation = () => {
  const GrowthHeading = "Our Plantation Practices";
  const GrowthDescription =
    "At Atulye, our fruit-bearing trees are planted using scientific spacing and pit preparation to ensure healthy growth";
  const slides = [
    {
      group: "",
      image: Silvicultural1,
      title: "",
      desc: "We use only organic compost and biofertilizers to enrich the soil. Our water-efficient irrigation systems, such as drip irrigation, help conserve water while delivering precise nutrients. Mulching and intercropping techniques are used to prevent weed growth and maintain soil temperature.",
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
};
export const IndigenousTechMeet = () => {
  const marketData = {
    imageSrc: img01,
    title: "Technology Meets Tradition",
    description:
      "While we embrace organic and traditional methods, Atulye is also at the forefront of agricultural innovation. Our blend of ancient wisdom and modern technology ensures not just productivity but also traceability and transparency in the supply chain.",
  };
  return (
    <>
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-2">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C] text-center mb-[3rem]">
            {marketData.title}
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-16">
            <div className="md:w-1/2 w-full">
              <div className="relative">
                <div className="absolute inset-0 -z-10 h-[106%] w-[96%] md:w-full translate-x-[-2rem] -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>
                <Image
                  src={marketData.imageSrc}
                  alt="Market Demand"
                  width={800}
                  height={500}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
              </div>
            </div>

            <div className="md:w-4/12 w-12/12 ">
              <p className="my-6 text-[18px]  font-normal md:text-base text-black">
                {marketData.description}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
