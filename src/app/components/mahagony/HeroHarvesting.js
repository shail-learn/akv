"use client";
import React from "react";
import banner from "../../../assets/images/mahagony/MahagonyBanner.webp";
import BannerPage from "../BannerPage";
import { FaqSlider } from "../FaqSlider";
import {
  HarvestingLayout,
  MarketLayout,
  UseSecLayout,
} from "../utilities/UsesStanadarLayout";
import { InvestLayout, LookingLayout } from "../utilities/LookingInvestLayout";
import img01 from "../../../assets/images/amla/market.webp";
import img1 from "../../../assets/images/eco/img1.png";
import img2 from "../../../assets/images/eco/img2.png";
import img3 from "../../../assets/images/eco/img3.png";
import img4 from "../../../assets/images/eco/img4.png";
import img5 from "../../../assets/images/eco/img5.png";
import image1 from "../../../assets/images/mahagony/InvestImg.webp";

export const Banner = () => {
  const text = {
    banner: banner,
    heading: `Mahogany `,
    subtitle: `The Premier Timber Tree for Indian Agroforestry`,
    title:
      "Mahogany is a preferred species in agroforestry systems, thriving in diverse climatic conditions with minimal maintenance. Its deep-rooted nature improves soil stability, while its canopy provides excellent shade, making it suitable for intercropping.",
    opacity: "opacity-20",
  };

  return (
    <>
      <section className="relative">
        <BannerPage
          heading={text.heading}
          title={text.title}
          subtitle={text.subtitle}
          opacity={text.opacity}
          banner={text.banner}
          classname={text.className}
        />
        {/* SVG Divider */}
      </section>
    </>
  );
};

export const Sustainable = () => {
  const heading = "Sustainable  Mahogany Cultivation with Atulye Krishi Vana";
  const className = "slider_height";
  const title1 =
    "Atulye Krishi Vana promotes sustainable Mahogany farming through: ";
  const title2 =
    "These initiatives help balance economic viability with environmental sustainability.";

  const card = [
    {
      title:
        "Scientific Plantation Techniques – High-yield saplings and advanced forestry methods",
    },
    {
      title:
        "Eco-Friendly Farming – Encouraging organic growth and sustainable harvesting",
    },
    {
      title:
        "Farmer Training & Support  Assistance with best cultivation techniques and market strategies",
    },
    {
      title:
        "Scientific Plantation Techniques – High-yield saplings and organic farming methods.",
    },
    {
      title:
        "Eco-Friendly Farming – Reducing chemical usage and promoting natural pest control.",
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

export const Uses = () => {
  // Uses
  const usesApplicationsData = {
    heading: "Uses & Applications",
    columns: [
      {
        subheading: "Timber & Veneer Industry",
        points: [
          "Highly durable, termite-resistant wood for high-end furniture and panels",
          " Ideal for doors, window frames, and modular woodwork",
        ],
      },
      {
        subheading: "Construction & Joinery",
        points: [
          "Used in premium interior designs, flooring, and cabinetry",
          "Preferred for staircases, wall paneling, and frameworks",
        ],
      },
      {
        subheading: "Musical Instruments",
        points: [
          "A primary choice for crafting guitars, violins, and pianos",
          "Offers excellent acoustic properties and longevity",
        ],
      },
      {
        subheading: "Boat & Shipbuilding",
        points: [
          " Naturally resistant to rot, making it ideal for marine use",
          "Used in high-end yacht and boat construction",
        ],
      },
      {
        subheading: "Traditional Medicine",
        points: [
          "Bark extracts have anti-inflammatory and antimicrobial properties",
          " Leaves and roots used in herbal remedies",
        ],
      },
      {
        subheading: "Agroforestry & Land Restoration",
        points: [
          "Enhances soil fertility and prevents erosion",
          "Supports biodiversity by providing habitat and shade",
        ],
      },
    ],
  };
  return (
    <>
      <UseSecLayout usesApplicationsData={usesApplicationsData} />
    </>
  );
};
export const Looking = () => {
  // looking
  const LookingHeading = `Looking to <span class="text-[#2D6B5E]"> Grow</span> or <span class="text-[#2D6B5E]">Source Mahagony</span>?`;
  const LookingSubheading = "Contact Atulye Krishi Vana for:";
  const lookingBox = [
    {
      text: "  Expert guidance on sustainable agroforestry",
    },
    {
      text: " Premium-quality  Mahogany saplings",
    },
    {
      text: "Ethical and responsible sourcing of  Mahogany  products",
    },
  ];
  return (
    <>
      <LookingLayout
        heading={LookingHeading}
        subheading={LookingSubheading}
        box={lookingBox}
      />
    </>
  );
};
export const Invest = () => {
  // Invest
  const InvestHeading = "Why Invest in Mahogany Cultivation?";
  const InvestplantSearon = [
    {
      img: image1,
      details: [
        " High-Value Timber Crop – Long-term investment with substantial returns",
        "Sustainable & Eco-Friendly – Contributes to afforestation and carbon sequestration",
        "Multiple Revenue Streams – Profits from timber, medicinal extracts, and agroforestry benefits",
        "Low Maintenance, High Returns – Requires minimal inputs with significant profitability",
        "Rising Market Demand – Increasing global need for sustainable, high-quality wood",
      ],
    },
  ];
  return (
    <>
      <InvestLayout
        InvestHeading={InvestHeading}
        plantSearon={InvestplantSearon}
      />
    </>
  );
};
export const Market = () => {
  // Market
  const marketData = {
    imageSrc: img01,
    title: "Market Demand & Pricing",
    description: "",
    steptitle: "Market Demand",
    steps: [
      "Mahogany timber is highly sought after due to its durability, strength, and aesthetic appeal.",
      "Furniture & Veneer Industry – Used for premium furniture, panels, and decorative veneers",
      "Construction & Joinery – Preferred for doors, flooring, andstructural components",
      "Musical Instruments – Valued for crafting guitars and pianos",
      "Boat Building – Utilized for marine-grade applications",
      "Export Market – High demand in Europe, the US, and Southeast Asia",
    ],
    shortdesciption: `<strong>Market Supply</strong><ul class='list-disc pl-5 mt-2'>
            <li>Rncreasing Market Prices – Due to sustainable timber demand</li>
            <li> Agroforestry Expansion – More farmers shifting to Mahogany plantations</li>
            <li>Value Addition Possibilities – Polished and treated Mahogany fetches higher prices</li>
          </ul>`,
  };
  return (
    <>
      <MarketLayout marketData={marketData} />
    </>
  );
};
export const Harvest = () => {
  // Harvesting//
  const Harvestingheading = "Harvesting & Yield of Amla Trees";
  const Harvestingtext =
    "Amla starts bearing fruit within 4-5 years of planting, providing consistent yields for decades.";

  const objectives = [
    {
      id: "01",
      title: "Harvesting Age:",
      description:
        "Begins at 12-15 years; optimal timber harvest at 20-25 years",
      image: img1,
    },
    {
      id: "02",
      title: "Annual Yield",
      description: "2.5-3.5 cm in diameter per year",
      image: img2,
    },
    {
      id: "03",
      title: "Harvesting Season",
      description: "Clear felling with sustainable replanting",
      image: img3,
    },
    {
      id: "04",
      title: "Multiple Harvesting Cycles",
      description: "2-3 cubic meters per tree after 20 years",
      image: img4,
    },
    {
      id: "05",
      title: "Post-Harvest Processing",
      description: " Timber is seasoned and treated for durability",
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
};
