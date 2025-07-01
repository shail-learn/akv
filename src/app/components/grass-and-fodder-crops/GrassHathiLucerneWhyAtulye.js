import React from "react";
import { Wave } from "../Wave";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/grass/banner.webp";
import { Gridbox } from "../Gridbox";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import info from "../../../assets/images/grass/Hathi.webp";
import Image from "next/image";
import key1 from "../../../assets/images/grass/HighBiomassYield.webp";
import key2 from "../../../assets/images/grass/MultiCutCapability.webp";
import key3 from "../../../assets/images/grass/Soil.webp";
import key4 from "../../../assets/images/grass/delimitationland-plots.webp";
import image1 from "../../../assets/images/grass/Agro-climaticSuitability.webp";
import circle2 from "../../../assets/images/grass/AgroSustaibility.webp";
import key5 from "../../../assets/images/grass/Nutrient-Rich.webp";
import key6 from "../../../assets/images/grass/SoilFertilityBooste.webp";
import key7 from "../../../assets/images/grass/Perennial.webp";
import key8 from "../../../assets/images/grass/MyltiCut.webp";
import { Productlist } from "../Productlist";
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/grass/whyGrow1.webp";
import choose3 from "../../../assets/images/grass/whyGrow2.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import choose5 from "../../../assets/images/grass/whyGrow3.webp";
import { FaqSlider } from "../FaqSlider";

export const Grass = () => {
  const text = {
    banner: banner,
    heading: `Sustaining Livestock, Enriching Soils, and Greening the Land`,

    title:
      "Grasses and leguminous fodder crops are the lifelines of rural ecosystems. They serve not only as vital feed for livestock but also as tools for soil health improvement, erosion control, and agroecological resilience. ",
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

export const Hathi = () => {
  const basketData = {
    note: "Under the Atulye Krishi Vana initiative, we promote the cultivation of high-yielding and soil-enhancing fodder crops such as Hathi Ghas (Pennisetum purpureum) and Lucerne / Alfalfa (Medicago sativa). These species are chosen for their adaptability, multi-season productivity, and dual value in feeding livestock and improving soil fertility.",
    image: info,
  };

  const main_heading = "Hathi Ghas (Pennisetum purpureum)";
  const shortinfo =
    "<b>The Giant Grass for Giant Needs</b> <br/> Popularly known as Elephant Grass, Hathi Ghas is a perennial, tall-growing grass valued for its enormous green fodder yield. It is ideal for cattle, buffaloes, and even goats when chopped and mixed.";
  const gridBox = "xl:!grid-cols-4 custom_height1";
  const whyChooseData = [
    {
      image: key1,
      title: "High Biomass Yield",
      description:
        "Produces up to 300–400 tonnes per hectare annually under optimal conditions.",
    },
    {
      image: key2,
      title: "Multi-Cut Capability",
      description: "Allows 5–7 harvests a year after establishment.",
    },
    {
      image: key3,
      title: "Soil Stabilization",
      description: "Dense root system prevents erosion on slopes and bunds",
    },
    {
      image: key4,
      title: "Drought Tolerant",
      description: "Can withstand dry spells once established.",
    },
  ];

  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {
      image: image1,
      desc: `Grows well in tropical to subtropical climates with 800–1500 mm annual rainfall. Prefers well-drained loamy or clay soils. Can be cultivated across most parts of India, including Maharashtra, Madhya Pradesh, Andhra Pradesh, Uttar Pradesh, and Bihar.

        `,
    },
  ];

  return (
    <>
      <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
            <div className="w-full md:w-1/2">
              <p
                className="mt-0 md:mt-4 text-white"
                dangerouslySetInnerHTML={{ __html: basketData.note }}
              ></p>
            </div>
            <div className="w-full md:w-[40%]">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={basketData.image}
                  alt="Basket of fruits and vegetables"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p
            className="mt-0 md:mt-4 text-white"
            dangerouslySetInnerHTML={{ __html: shortinfo }}
          ></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        applicationsData={[
          "Daily green fodder for livestock",
          "Live fencing or border grass strips",
          "Soil-binding agent on field edges",
          "Shade crop in silvipasture systems",
        ]}
      />
    </>
  );
};

export const Lucerne = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1";
  const custom_class = "white_grid grid_padding";
  const main_heading = "Lucerne / Alfalfa (Medicago sativa)";
  const shortinfo = `<b>The Green Gold of Fodder Legumes</b> <br/> Lucerne, also known as Alfalfa, is a deep-rooted, nitrogen-fixing legume used as high-protein forage. It is a preferred choice for milch animals due to its digestibility and nutritive value.`;
  const whyChooseData = [
    {
      image: key5,
      title: "Nutrient-Rich Fodder",
      description: "High in protein (15–20%), calcium, and vitamins.",
    },
    {
      image: key6,
      title: "Soil Fertility Booster",
      description:
        "Fixes atmospheric nitrogen, improving soil health for subsequent crops.",
    },
    {
      image: key7,
      title: "Perennial",
      description: "Productive for 3–4 years with proper management.",
    },
    {
      image: key8,
      title: "Multi-Cut",
      description: "Offers 6–9 harvests per year depending on climate.",
    },
  ];

  const custom_class1 = "growth_white";
  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {
      image: circle2,
      desc: `Best grown in temperate to semi-arid climates with good irrigation facilities. Prefers sandy loam to loamy soils with pH 6.5–7.5. Commonly cultivated in Punjab, Haryana, Rajasthan, Tamil Nadu, and Maharashtra.`,
    },
  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p
            className="mt-0 md:mt-4 text-black"
            dangerouslySetInnerHTML={{ __html: shortinfo }}
          ></p>
        </div>
      </section>
      <Gridbox
        heading="Key Benefits"
        data={whyChooseData}
        className={custom_class}
        gridBox={gridBox}
      />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
        applicationsData={[
          "High-protein feed for dairy cattle, goats, and poultry",
          "Soil enrichment before cereal crops",
          "Green manure in organic systems",
          "Cut-and-carry fodder models in peri-urban dairies",
        ]}
      />
    </>
  );
};

export const Why = () => {
  const heading = "Why Grow Grass & Fodder Crops with Atulye Krishi Vana?";
  const fruitData = [
    {
      title: "Sustainable Livestock Support",
      image: choose1,
      flip: "Regular access to nutritious, home-grown fodder reduces dependency on market feed and enhances animal health.        ",
    },
    {
      title: "Soil Regeneration",
      image: choose2,
      flip: "Legume fodders like Lucerne add organic matter and fix nitrogen, while grasses like Hathi Ghas prevent erosion.",
    },
    {
      title: "Climate Resilience",
      image: choose3,
      flip: "Perennial species adapt well to variable rainfall, making them reliable during climate stress.",
    },
    {
      title: "Multi-Cut Productivity",
      image: choose4,
      flip: "These crops offer year-round yield through repeat harvests, optimizing land use.",
    },
    {
      title: "Agroforestry Integration",
      image: choose5,
      flip: "Work well in intercropping models with trees, helping farmers diversify income and stabilize ecosystems.",
    },
  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />
    </>
  );
};

export const Atulye = () => {
  const heading = "Atulye Krishi Vana’s Support Ecosystem";
  const title =
    "We help farmers, dairy cooperatives, fodder banks, and community institutions adopt best practices in fodder cultivation. ";
  const subtitle = "Our Services Include: ";
  const className = "slider_height height_300";

  const card = [
    {
      title: "Quality Planting Material",
      description:
        "Supply of rooted slips (Hathi Ghas) and certified Lucerne seeds.",
    },
    {
      title: "Farm Layout Design",
      description: "Recommendations for plot division, spacing, and rotation.",
    },
    {
      title: "Cultivation Training",
      description: "On seeding, irrigation, harvesting, and pest control.",
    },
    {
      title: "Integration Advice",
      description:
        "Guidance for fodder-tree interplanting and boundary cropping.",
    },
    {
      title: "Nursery Setup",
      description: "Help for SHGs and FPOs to produce fodder slips or seeds.",
    },
    {
      title: "Linkages",
      description:
        "Connect to veterinary extension services, milk federations, and local composting initiatives.",
    },
  ];
  return (
    <>
      <FaqSlider
        classname={className}
        className="shailendra"
        card={card}
        heading={heading}
        title1={title}
        subtitle={subtitle}
      />
    </>
  );
};
