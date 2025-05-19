"use client";
import React from "react";
import { FaqsLayout } from "../utilities/Cultivationgrowthwhychoose";
import { FaqSlider } from "../FaqSlider";
import PartnerBg from "../../../assets/images/kulu/contact.webp";
import Image from "next/image";

export const Whykulu = () => {
  const heading = "Why Choose Atulye Krishi Vana  for Kulu Plantations?";
  const className = "slider_height";
  const title1 = "At Atulye Krishi Vana, we specialize in:";
  const title2 = "";

  const card = [
    {
      title: "High-yield Kulu plantations using scientific farming techniques.",
    },
    {
      title:
        "Sustainable and ethical gum extraction ensuring long-term tree health.",
    },
    {
      title:
        "Comprehensive training for farmers on best agroforestry practices.",
    },
    {
      title:
        "Market linkage support for selling Karaya gum to high-value industries.",
    },
    {
      title:
        "Eco-friendly reforestation programs contributing to environmental conservation.",
    },
  ];
  return (
    <>
      <FaqSlider
        classname={className}
        title1={title1}
        title2={title2}
        className="shailendra"
        card={card}
        heading={heading}
      />
    </>
  );
};

export const Started = () => {
  const heading = "Get Started with Kulu Plantations Today!";
  const description =
    "Are you looking to invest in sustainable agroforestry with high commercial returns? Partner with us at Atulye Krishi Vana to start your Kulu plantation project today! <br/><br/> Join the revolution in sustainable forestry and Karaya gum extraction with Atulye Krishi Vana! ";

  const subdes =
    "Contact us for consultations, plantation setup, and market support.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex  px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-left pl-3 md:pl-[4rem] mt-5">
          <h2 className="md:w-1/2 w-full text-3xl md:text-4xl leading-snug font-bold mb-4 redhat">
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

export const Faqkulu = () => {
  const Faqheading =
    "What makes Kulu (Sterculia urens) ideal for gum extraction?";
  const Faqdescription = `Kulu is a drought-resistant deciduous tree known for producing high-quality natural gum, commonly called Karaya gum. This tree thrives in arid and semi-arid regions, making it a sustainable choice for gum extraction. The gum is harvested from the bark by making controlled incisions, ensuring the tree remains healthy. Unlike synthetic alternatives, Kulu gum is natural, biodegradable, and widely used in pharmaceuticals, food, and cosmetics`;
  const FaqsData = [
    {
      question: "What makes Kulu (Sterculia urens) ideal for gum extraction?",
      answer:
        "Kulu is a drought-resistant deciduous tree known for producing high-quality natural gum, commonly called Karaya gum. This tree thrives in arid and semi-arid regions, making it a sustainable choice for gum extraction. The gum is harvested from the bark by making controlled incisions, ensuring the tree remains healthy. Unlike synthetic alternatives, Kulu gum is natural, biodegradable, and widely used in pharmaceuticals, food, and cosmetics. Its ability to regenerate after extraction makes it an eco-friendly and renewable resource, supporting both commercial farming and local economies through sustainable agroforestry practices.",
    },
    {
      question:
        "How does Kulu gum compare to other natural gums in terms of quality?",
      answer:
        "Kulu gum, or Karaya gum, is valued for its superior water-absorbing properties, making it highly sought after in industries like food, medicine, and cosmetics. Unlike other natural gums, Karaya gum forms a thick, gel-like substance when mixed with water, making it ideal as a stabilizer, thickener, and emulsifier. It is also non-toxic and hypoallergenic, making it safer for pharmaceutical and medical applications. Compared to gum arabic or guar gum, Karaya gum has a unique fiber content and viscosity, offering distinct advantages in different industrial applications.",
    },
    {
      question: "What are the main industrial applications of Kulu gum?",
      answer:
        "Kulu gum has a wide range of applications across multiple industries. In the food industry, it acts as a thickener and stabilizer in dairy products, beverages, and confectionery. In pharmaceuticals, it is used as a binder in tablets, a laxative, and in dental adhesives. The cosmetic industry utilizes Kulu gum in skincare and hair care products for its moisture-retaining properties. Additionally, it is used in paper, textiles, and adhesives, making it one of the most versatile natural gums available. Its biodegradability also makes it an eco-friendly alternative to synthetic binders.",
    },
    {
      question: "What are the ideal growing conditions for Kulu trees?",
      answer:
        "Kulu trees thrive in warm, dry climates with well-drained, rocky, or sandy soils. They are highly drought-resistant and can grow in regions with low annual rainfall (500–800 mm). The tree prefers elevations between 200–1,000 meters and can tolerate poor soil conditions, including degraded lands. While it grows well in direct sunlight, it can also adapt to partial shade. Kulu is typically found in deciduous forests and dry scrublands, making it an excellent choice for afforestation and land restoration projects. ",
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
