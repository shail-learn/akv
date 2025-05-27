"use client";
import React from "react";
import BannerPage from "../BannerPage";
import banner from "../../../assets/images/teak/banner.webp";
import { Wave } from "../Wave";
import { Iconslider } from "../Iconslider";
import { GrowthSlider } from "../utilities/Cultivationgrowthwhychoose";
import image1 from "../../../assets/images/teak/img1.webp";
import image2 from "../../../assets/images/teak/img2.webp";
import image3 from "../../../assets/images/teak/img3.webp";
import image4 from "../../../assets/images/teak/img4.webp";

export const Teak = () => {
  const text = {
    banner: banner,
    heading: `Teak-The King of Timber`,
    title:
      "Teak (Tectona grandis) is a high-value hardwood known for its strength, durability, and natural resistance to pests and decay. Indigenous to India, teak has been used for centuries in furniture, boatbuilding, and construction. ",
    opacity: "opacity-50",
  };
  return (
    <>
      <BannerPage
        heading={text.heading}
        title={text.title}
        banner={text.banner}
        opacity={text.opacity}
      />
      <Wave />
    </>
  );
};

export const Marketd = () => {
  const heading = "Market Dynamics";
  const custom_class = "original_img padding_argust desktop-p-0";
  const cardData = [
    {
      title: "Outdoor applications",
      description:
        "Preferred for garden furniture and decking as it withstands harsh weather.",
    },
    {
      title: "Luxury furniture",

      description:
        "Teak’s aesthetic appeal and durability make it a premium choice.",
    },
    {
      title: "Marine industry",

      description:
        "Used in yacht decks and boat construction due to its water-resistant properties.",
    },
    {
      title: "Construction & infrastructure",
      description: "Ideal for doors, window frames, and flooring.",
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

export const Markets = () => {
  const heading = "Market Supply";
  const items = {
    points: [
      {
        title: "Natural forests – ",
        description: "Found in India, Myanmar, Thailand, and Laos.",
      },
      {
        title: "Commercial plantations",
        description:
          "Established in countries like Indonesia, Brazil, Ghana, and the Philippines.",
      },
      {
        title: "Indian plantations",
        description:
          "Tamil Nadu, Kerala, Maharashtra, and Madhya Pradesh lead in domestic teak production.",
      },
    ],
  };

  return (
    <section className="relative z-20 bg-[#1b453c] text-white pb-4 md:pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center pt-12 pb-4 md:pt-14 md:pb-10">
          {heading}
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-12 text-center md:text-left mt-10">
          {items.points.map((point, idx) => (
            <div
              key={idx}
              className={`flex-1 text-center relative px-4 md:px-6 ${
                idx !== 0
                  ? "border-t pt-6 md:pt-0 md:border-t-0  md:border-l md:border-gray-400"
                  : ""
              }`}
            >
              <h3 className="text-lg font-medium mb-2">{point.title}</h3>
              <p className="text-sm leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#1B453C] pt-8 md:pt-14">
        <div className="max-w-5xl mx-auto px-4 text-center text-white text-base">
          <p>
            However, due to deforestation regulations and sustainability
            concerns, natural teak supplies have declined, increasing reliance
            on plantations.
          </p>
        </div>
      </div>
    </section>
  );
};

export const Pricing = () => {
  const GrowthHeading = "Pricing Trends";
  const slides = [
    {
      image: image1,
      title: "Age & Size:",
      desc: "Older teak with a higher girth commands a premium price.",
    },
    {
      image: image2,
      title: "Origin:",
      desc: "Indian teak is costlier than imported teak due to its superior density.",
    },
    {
      image: image3,
      title: "Grade:",
      desc: "Heartwood-rich teak with minimal knots and defects is more expensive.",
    },
    {
      image: image4,
      title: "Processing & Treatment:",
      desc: "Kiln-dried and seasoned teak costs more due to increased durability.",
    },
  ];

  return (
    <>
      <GrowthSlider GrowthHeading={GrowthHeading} slides={slides} />
    </>
  );
};
