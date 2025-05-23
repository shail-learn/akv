"use client";
import React from "react";
import choose1 from "../../../assets/images/softwood/choose4.webp";
import choose2 from "../../../assets/images/exotic/why2.webp";
import choose3 from "../../../assets/images/exotic/approach2.webp";
import choose4 from "../../../assets/images/exotic/why4.webp";
import MovementImg from "../../../assets/images/exotic/Movement.webp";
import { Productlist } from "../Productlist";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
export const WhyChoose = () => {
  const heading = "Why Choose Atulye Krishi Vana for Exotic Fruit Cultivation?";
  const fruitData = [
    {
      title: "End-to-End Support",
      image: choose1,
    },
    {
      title: "Market assurance",
      image: choose2,
    },
    {
      title: "Climate-Compatible Selections",
      image: choose3,
    },
    {
      title: "Eco-Conscious Model",
      image: choose4,
    },
  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />
    </>
  );
};
export const GlobalFruitMovement = () => {
  const heading = "Be a Part of the Global Fruit Movement";
  const description =
    "Invest in exotic fruit farming with Atulye Krishi Vana and tap into a high-demand, high-margin agricultural opportunity. Whether you're a progressive farmer, agri-entrepreneur, or institution looking for sustainable land use models, our team provides everything you need to succeed.";

  const subdes =
    "  Get in Touch Today to explore our exotic fruit plantation programs, sapling availability, and farm consultation services. Let’s grow something extraordinary together.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12"
      style={{ backgroundImage: `url(${MovementImg.src})` }}
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

export const ExoticFaqs = () => {
  const Faqheading = "Why are exotic fruits gaining popularity in India?";
  const Faqdescription = ` Exotic fruits are increasingly in demand due to rising health awareness, global culinary influences, and evolving taste preferences. With social media and travel introducing people to new cuisines, Indian consumers are becoming more adventurous with food. These fruits are often associated with higher nutritional value and unique flavors. As India’s middle class expands, there's greater willingness to try premium produce. Additionally, urban supermarkets and organic stores now stock more exotic fruits, making them accessible. Farmers and agri-entrepreneurs see the trend as an opportunity for diversification and higher profits due to their premium market pricing.`;
  const FaqsData = [
    {
      question:
        " What are the main challenges of cultivating imported fruits in Indian conditions?",
      answer:
        " Cultivating imported fruits in India can be challenging due to differences in climate, soil type, pest resistance, and pollination needs. Some fruits may require specific temperature ranges, humidity levels, or altitude, which aren’t naturally available in all parts of India. For example, apples and pears may not thrive in tropical zones without advanced interventions. Farmers also face issues related to availability of certified planting material, lack of local expertise, and difficulties in managing post-harvest quality. However, with climate-adaptive farming techniques, polyhouse structures, and support from agri-tech startups, many growers are overcoming these hurdles effectively.",
    },
    {
      question:
        " Is it profitable to cultivate exotic fruits on a small landholding?",
      answer:
        " Yes, exotic fruit cultivation can be profitable even on small landholdings, provided the crop is chosen wisely based on local agro-climatic conditions. Fruits like dragon fruit, passionfruit, or date palm can be highly rewarding due to their premium market rates and relatively low input costs. Proper spacing, drip irrigation, and integrated nutrient management improve yield and quality. Additionally, niche marketing to gourmet stores, organic outlets, or direct-to-consumer channels enhances profitability. Farmers can also earn through agritourism or value-added processing (like jams or dried fruits). Proper planning and expert guidance are key to maximizing returns on small plots.",
    },
    {
      question: "Can exotic fruit plants be grown organically in India?",
      answer:
        " Absolutely. Many exotic fruits can be grown organically in India by adopting sustainable practices such as using bio-fertilizers, compost, neem-based pesticides, and maintaining proper soil health. For example, dragon fruit thrives well under organic regimes due to its resistance to major pests. Passionfruit and litchi can also benefit from organic farming, provided water and nutrient management is closely monitored. Farmers opting for organic methods may require certification from recognized bodies to access premium export markets. Organic farming of exotic fruits not only ensures healthier produce but also fetches better prices, especially in metro cities and health-conscious consumer segments.",
    },
    {
      question:
        "What is the shelf life of exotic fruits, and how should they be stored?",
      answer:
        " Shelf life varies widely among exotic fruits. Dragon fruit and passionfruit typically last 5–10 days post-harvest under cool conditions, while date palms and apples have longer shelf lives, often up to several weeks. Proper post-harvest handling is critical—fruits must be cleaned, sorted, and packed immediately. Cold chain logistics, refrigerated transport, and modified atmosphere packaging help extend freshness. For home storage, most should be kept in cool, dry environments or refrigerated depending on the fruit type. Educating end-consumers on ideal storage methods can minimize spoilage and maintain taste, especially for highly perishable fruits like litchi or pear.",
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
