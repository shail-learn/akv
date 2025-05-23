"use client";
import React from "react";
import choose1 from "../../../assets/images/berryfruits/gettingStart1.webp";
import choose2 from "../../../assets/images/berryfruits/gettingStart2.webp";
import choose3 from "../../../assets/images/berryfruits/gettingStart3.webp";
import choose4 from "../../../assets/images/berryfruits/gettingStart4.webp";
import choose5 from "../../../assets/images/berryfruits/gettingStart5.webp";
import PartnerBg from "../../../assets/images/berryfruits/PartnerBg.webp";
import { Productlist } from "@/app/components/Productlist";
import { FaqsLayout } from "@/app/components/utilities/Cultivationgrowthwhychoose";

export const GettingStart = () => {
  const heading = "Getting Started with AKV";
  const fruitData = [
    {
      title: "Monitoring",
      image: choose1,
    },
    {
      title: "Design & Layout",
      image: choose2,
    },
    {
      title: "Consultation",
      image: choose3,
    },
    {
      title: "Consultation",
      image: choose4,
    },
    {
      title: "Harvesting & Marketing",
      image: choose5,
    },
  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />
    </>
  );
};
export const PartnerSec = () => {
  const heading =
    "Partner with Atulye Today Ready to explore the immense potential of berry and vine fruit cultivation?";
  const description =
    "Whether you're a seasoned farmer or a new agro-entrepreneur, Atulye has the resources, knowledge, and passion to support your journey. Reach out now and become part of a green revolution rooted in resilience, regeneration, and results.";

  const subdes = "";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-5">
          <h2 className="md:w-1/2 w-full text-3xl md:text-4xl leading-snug font-bold mb-10 md:mb-20 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm md:text-base md:w-2/3 w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>

          <p className="text-sm md:text-base md:w-2/3 w-full">{subdes}</p>
        </div>
      </div>
    </section>
  );
};

export const BerryAndVineFaqs = () => {
  const Faqheading =
    " What are the water requirements for berry and vine fruits throughout the year?";
  const Faqdescription = `Berry and vine fruits generally require consistent but moderate watering. Grapes thrive on deep, infrequent irrigation, especially during fruit development. Shahtoot prefers moist soil but suffers in waterlogging. Karonda is drought-tolerant once established but yields better with occasional watering. Passionfruit vines demand more frequent moisture during flowering and fruiting. Seasonal adjustments are crucial—more water in summer, less in monsoon. Drip irrigation is ideal for controlling moisture levels. Monitoring soil moisture helps avoid under or overwatering, both of which can affect flowering and fruit quality. Water-stress can lead to poor yields and fruit drop in most berry-producing plants.
`;
  const FaqsData = [
    {
      question:
        "How do berry and vine fruits benefit small-scale and home farmers?",
      answer:
        "Berry and vine fruits are excellent for small-scale growers due to their compact growing patterns and relatively short harvesting cycles. Grapes and Karonda can be trellised along fences, maximizing vertical space. Passionfruit vines grow rapidly and start fruiting in 1–1.5 years, offering quicker returns. Shahtoot trees are low-maintenance and produce fruits for decades. These crops provide a steady supplemental income, require minimal pesticide use, and are adaptable to kitchen gardens and mixed farming models. Moreover, their fresh and processed products like juices, jams, and dried fruits open up local business opportunities, making them ideal for small and marginal farmers.",
    },
    {
      question:
        "Are berry and vine fruits susceptible to any common pests or diseases?",
      answer:
        "Yes, several pests and diseases can affect these plants. Grapes are vulnerable to powdery mildew, downy mildew, and fruit borers. Shahtoot may face issues from scale insects and mealybugs. Passionfruit vines are prone to Fusarium wilt, aphids, and nematodes. Karonda is hardy but can sometimes suffer from fungal infections in humid conditions. Regular monitoring, pruning for air circulation, and organic fungicide use can manage most of these issues. Natural predators like ladybugs help control aphids. Using disease-free planting material and crop rotation practices also significantly reduce the risk of infestations and improve plant longevity and yield.",
    },
    {
      question:
        "What are some post-harvest handling tips for these fruits to maintain quality?",
      answer:
        "Post-harvest handling is critical to preserve freshness and prevent spoilage. Grapes should be cooled immediately and handled gently to avoid bruising. Mulberries are extremely perishable and must be consumed or processed within 1–2 days. Passionfruit is best harvested when it drops naturally and should be stored in cool, dry places. Karonda can be stored longer if harvested early and kept in ventilated baskets. Cleaning, sorting, and packing in soft containers reduce damage. Using refrigerated transport or cold storage helps maintain taste, texture, and market value. Quick processing into value-added products is also a smart way to minimize losses.",
    },
    {
      question:
        "Can these fruits be cultivated organically? What challenges are involved?",
      answer:
        "Yes, all these fruits can be cultivated organically. Organic grape and passionfruit cultivation is increasingly popular due to health-conscious consumers. The main challenges include pest control without synthetic pesticides and managing nutrient needs through compost, green manure, or organic-certified inputs. Organic mulch is used to retain moisture and suppress weeds. Regular foliar sprays of neem oil or bio-insecticides are common. Certification requires documentation and inspections. The initial transition period can be demanding, but long-term soil health improves, and premium prices are attainable. Farmer cooperatives or support from ventures like Atulye can simplify the process of organic certification and marketing.",
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
