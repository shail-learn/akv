"use client";

import Titleslider from "../Titleslider";
import Market1 from "../../../assets/images/dry-fruits/Market1.webp";
import Market2 from "../../../assets/images/dry-fruits/Market2.webp";
import Market3 from "../../../assets/images/dry-fruits/Market3.webp";
import Market4 from "../../../assets/images/dry-fruits/Market4.webp";
import Uses1 from "../../../assets/images/dry-fruits/Uses1.webp";
import Uses2 from "../../../assets/images/dry-fruits/Uses2.webp";
import Uses3 from "../../../assets/images/dry-fruits/Uses3.webp";
import Uses4 from "../../../assets/images/dry-fruits/Uses4.webp";
import Uses5 from "../../../assets/images/dry-fruits/Uses5.webp";
import circle1 from "../../../assets/images/training-development/circle1.png";
import circle2 from "../../../assets/images/training-development/circle2.png";
import value1 from "../../../assets/images/contract-farming/work1.svg";
import value2 from "../../../assets/images/contract-farming/work2.svg";
import value3 from "../../../assets/images/contract-farming/work3.svg";
import value4 from "../../../assets/images/contract-farming/work4.svg";
import value5 from "../../../assets/images/contract-farming/work5.svg";
import PartnerBg from "../../../assets/images/hardwood/bgimg.webp";

import { Productlist } from "../Productlist";
import { SliderThree } from "../SliderThree";
import Image from "next/image";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
export const HarvestAndYeild = () => {
  const heading = "Harvesting & Yield";

  const boxslider = [
    {
      heading: "Bearing Age",
      description: " 3–7 years depending on the dry fruit variety",
    },
    {
      heading: " Post-Harvest",
      description: "Drying, shelling, grading, and packaging for market",
    },
    {
      heading: "Yield",
      description: `Almond: 2–3 tons/ha<br/>
Cashew: 1–2 tons/ha<br/>
Walnut: 2–4 tons/ha<br/>
Pistachio: 1.5–2 tons/ha`,
    },
    {
      heading: " Peak Harvest:",
      description: `Almond: March–April</br/>
Cashew: February–May<br/>
Walnut: September–October<br/>
Pistachio: August–October`,
    },
  ];
  return (
    <>
      <Titleslider heading={heading} boxslider={boxslider} />
    </>
  );
};
export const MarketDemandExportSec = () => {
  const heading = "Market Demand & Export Opportunities";
  const fruitData = [
    {
      title: " High Demand",
      image: Market1,
    },
    {
      title: " Export Markets",
      image: Market2,
    },
    {
      title: "  Government Support",
      image: Market3,
    },
    {
      title: "  Value Addition",
      image: Market4,
    },
  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />
    </>
  );
};
export const UsesApplicationsDryFruits = () => {
  const heading = "Uses & Applications of Dry Fruits";
  const UsesData = [
    {
      image: Uses1,
      title: "Direct Consumption",
      description: "Popular as snacks and healthy energy sources",
    },
    {
      image: Uses2,
      title: "Food Industry",
      description: "Used in sweets, bakery, dairy products, and cereal mixes",
    },
    {
      image: Uses3,
      title: "Cosmetics & Oils",

      description:
        "Walnut oil, almond oil used in skincare and hair care products",
    },
    {
      image: Uses4,
      title: "Nutraceuticals & Health Supplements",

      description:
        " Key ingredient in energy bars, protein powders, and supplements",
    },
    {
      image: Uses5,
      title: "Agroforestry",

      description:
        "  Long-term tree crops that improve soil health and farm biodiversity",
    },
  ];
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2">
        <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#1B453C] mb-14">
          {heading}
        </h2>
        <div className="mt-10 md:mt-16">
          <SliderThree stories={UsesData} />
        </div>
      </div>
    </>
  );
};
export const SustainableCultivation = () => {
  const heading = "Sustainable Cultivation with AKV";
  const circles = [
    {
      title: " Post-Harvest Linkage",
      description:
        "Participants receive government & industry-recognized certificates.",
      bg: circle1,
    },
    {
      title: " Premium Grafted Saplings",
      description: "High-yield and disease-resistant varieties",
      bg: circle1,
    },
    {
      title: " Agri-Expertise",
      description: "Customized guidance on soil, climate, and pest control",
      bg: circle2,
    },
    {
      title: "Organic Inputs",
      description: "Promoting chemical-free and sustainable farming",
      bg: circle2,
    },
  ];
  return (
    <>
      <section className="pt-14 pb-14 lg:pt-20 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#1B453C] mb-14">
            {heading}
          </h2>

          <div className="flex md:flex-col flex-col lg:flex-row justify-between gap-6 md:gap-6">
            {circles.map((item, index) => (
              <div className="md:w-4/12 w-full" key={index}>
                <div
                  className="text-center relative aspect-square rounded-full overflow-hidden border-4 border-[#6D8C54] bg-black bg-opacity-70 flex flex-col p-4 items-center justify-center"
                  style={{
                    background: `url(${item.bg.src}) center center / cover no-repeat`,
                  }}
                >
                  <div className="absolute inset-0 bg-black opacity-75 rounded-full"></div>
                  <h4 className="text-normal text-white relative z-10 text-sm lg:text-[16px] py-4 font-light italic">
                    {item.title}
                  </h4>
                  <p className="text-normal text-white relative z-10 text-sm lg:text-[13px] pt-4 font-light italic">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const InvestCultivation = () => {
  const heading = "Why Invest in Dry Fruits Cultivation?";
  const InvestCultivationData = [
    {
      title: " Lucrative Long-Term Crop",
      description: " Steady returns for 20–30 years",
      icon: value1,
    },
    {
      title: "Export Friendly",
      description: " High global demand and rising domestic use",
      icon: value2,
    },
    {
      title: " Low Maintenance",
      description: "Once established, trees need minimal care",
      icon: value3,
    },
    {
      title: "Climate Resilience",
      description: " Adaptable to changing weather patterns",
      icon: value4,
    },
    {
      title: "Agroforestry Integration",
      description:
        " Combine with vegetables or medicinal herbs for dual income",
      icon: value5,
    },
  ];
  return (
    <>
      <section className="relative text-center bg-[#F5F5F5] md:text-left pt-12 pb-10 lg:pb-20 lg:pt-10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative">
          <h2 className="text-3xl text-center md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-16">
            {heading}
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {InvestCultivationData.map((value, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 flex items-center justify-center rounded-full outline-dashed outline-[#c4a87c] outline-2 border-4 border-solid border-[#F5F5F5] bg-[#1B453C]">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={50}
                    height={50}
                    className="w-16 h-16"
                  />
                </div>

                <div className="w-4/5 ">
                  <h3 className="text-lg lg:text-xl redhat font-semibold text-gray-900 mt-6">
                    {value.title}
                  </h3>
                  <p className="text-[#141414] opacity-75  redhat mt-2 max-w-xs">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export const CultivateSource = () => {
  const heading = "Looking to Cultivate or Source Dry Fruits?";
  const subheading = "Contact Atulye Krishi Vana for:";

  const pointor = [
    "Grafted Saplings & Scientific GuidanceOrganic Farming SolutionsEthical Sourcing of Dry Fruits & Value-Added Products",
    "Dry fruit cultivation is a smart, sustainable, and rewarding venture. Make the switch today and grow your green wealth with nutrient-rich dry fruits!",
  ];

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full  "
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] ">
          <h2 className="md:w-10/12 w-full text-3xl md:text-5xl leading-snug font-medium mb-10 md:mb-20 redhat">
            {heading}
          </h2>
          <h5 className="mb-4 text-sm md:text-base md:w-2/3 w-full font-extrabold">
            {subheading}
          </h5>

          <ul className="text-sm md:text-base md:w-2/3 w-full list-disc pl-5 ">
            {pointor.map((point, indx) => (
              <li className="py-2" key={indx}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
export const DryFruitsFaqs = () => {
  const Faqheading =
    "Which regions in India are best suited for dry fruit cultivation?";
  const Faqdescription = `Dry fruit cultivation is region-specific due to varying climate requirements. Jammu & Kashmir and Himachal Pradesh are ideal for almonds and walnuts because of their temperate climate and chilling hours<br/>
Maharashtra, Kerala, Goa, and Andhra Pradesh support cashew cultivation due to their coastal, tropical conditions. Pistachios are relatively new in India, but trials in parts of Rajasthan, Gujarat, and Ladakh show promise due to their arid climate and high-altitude conditions`;
  const FaqsData = [
    {
      question:
        "  How long does it take for dry fruit trees to become profitable?",
      answer:
        " Dry fruit trees are long-term investments and typically take between 4 to 7 years to bear marketable yields, depending on the variety and cultivation practices. Almond and cashew trees may start producing small quantities in 3–4 years, reaching commercial yields by the 5th or 6th year. Walnut and pistachio trees usually take longer—5 to 7 years for steady yields. Once matured, these trees produce consistently for 20–30 years, offering reliable returns. Farmers often intercrop with short-duration crops like pulses or herbs in the early years to ensure income until the main trees become financially sustainable.",
    },
    {
      question: " What are the challenges faced in dry fruit farming?",
      answer:
        "Dry fruit farming poses specific challenges including long gestation periods, susceptibility to pests like stem borers or aphids, and climatic dependencies like chilling requirements or drought tolerance. High-quality planting material may be expensive or difficult to access locally. Post-harvest handling also requires care—improper drying, storage, or shelling can lead to spoilage or loss of quality. Market access can be limited for small-scale farmers unless tied to cooperatives or processors. Additionally, fluctuating prices and export dependencies may affect revenue. However, these challenges can be managed with proper planning, expert advice, and leveraging government schemes for horticulture support.",
    },
    {
      question: "Can organic dry fruit farming be done in India?",
      answer:
        " Absolutely. Organic dry fruit cultivation is feasible and increasingly popular in India due to rising demand for chemical-free produce. It involves avoiding synthetic pesticides and fertilizers, using compost, neem-based bio-pesticides, and maintaining biodiversity. Almonds, cashews, and walnuts are particularly suited to organic methods because they are perennials and less disease-prone than many annual crops. Certification is key—farmers must follow a 2-3 year conversion period and meet standards under NPOP (National Programme for Organic Production). The organic market fetches 20–30% higher prices, especially for export. Integrated pest management (IPM) and natural soil amendments are vital to maintaining tree health organically.",
    },
    {
      question: "How are dry fruits processed after harvesting?",
      answer:
        " Post-harvest processing varies by dry fruit type but generally involves drying, shelling, grading, and packaging. Cashews are steamed to remove toxic shells and then sun-dried before kernel separation. Walnuts and almonds are hulled, washed, and shade-dried to preserve nutrients. Pistachios undergo brine soaking and mechanical shell splitting for uniform appearance. Sorting by size and color ensures premium quality, while moisture content must be reduced to below 5% for longer shelf life. Clean, hygienic environments are necessary to prevent aflatoxin contamination. Modern units may use automated machinery for shelling and vacuum packaging to retain freshness and extend export viability.",
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
