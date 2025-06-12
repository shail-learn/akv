import React from 'react'
import Titleslider from '../Titleslider'
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import { FaqSlider } from '../FaqSlider';
import { UseSecLayout } from '../utilities/UsesStanadarLayout';


export const Benefits = () => {
    const heading = "Benefits for Farmers";
    const className = "slider_height height_300";

    const card = [
      {
        title: " Sustainable Land Use",
        description: "These medicinal plants can rehabilitate degraded soils and thrive in challenging agro-climatic conditions. Tree species like Amla and Chitvan sequester carbon and improve microclimates, contributing to farm sustainability."
      },
      {
        title: "Diversified Income Streams",
        description: "Cultivating these immunity-enhancing herbs provides farmers with alternatives to conventional crops, reducing dependency on single commodities and their price fluctuations."
      },
      {
        title: "Reduced Input Costs",
        description: "Most of these plants require minimal chemical fertilizers or pesticides, lowering production costs while maintaining high output value. Their natural pest resistance further reduces crop protection expenses."
      },
      {
        title: "Short-to-Long Term Returns",
        description: "The portfolio offers a mix of annual herbs (Kalmegh), perennial vines (Giloy, Patha), and long-term tree crops (Amla, Chitvan), allowing farmers to plan for both immediate income and future security."

      },



    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
        />

      </>
    );
}


export const Post = () => {
    const heading = "Post-Harvest Support and Value Addition"

    const boxslider = [
      {
        heading: "Proper drying techniques to preserve bioactive compounds",
      },
      {
        heading: "Storage methods that maintain medicinal efficacy",
      },
      {
        heading: "Primary processing for different market channels",
      },
      {
        heading: "Quality testing to ensure marketability",
      },
      {
        heading: "Organic certification support for premium pricing",
      },


    ]
    return (
      <>
        <Titleslider heading={heading} boxslider={boxslider} />

      </>
    )
}



export const Cultivation = () => {
    const usesApplicationsData = {
        heading: "Cultivation Systems and Integration",
        columns: [
          {
            subheading: "Agroforestry Models",
            points: [
              "Amla and Chitvan as canopy trees with Giloy and Patha as understory climbers",
            ],
          },
          {
            subheading: "Mixed Cropping",
            points: [
              "Kalmegh intercropped with staple cereals or pulses",
            ],
          },
          {
            subheading: "Boundary Plantations",
            points: [
              "Chitvan and Amla as border trees providing additional income",
            ],
          },
          {
            subheading: "Homestead Gardens",
            points: [
              "Small-scale cultivation of all five herbs for household use and local markets",
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


export const Joins = () => {
    const heading = "Join the Natural Immunity Revolution";
  const description =
    "By partnering with Atulye Krishi Vana to cultivate these time-tested immunity enhancers, farmers become key contributors to India's healthcare sovereignty and natural wellness ecosystem. These crops not only provide sustainable livelihoods but also support public health, preserve traditional knowledge, and create resilient agricultural systems. <br/> Whether you're a progressive farmer looking to diversify, a forest-dwelling community seeking sustainable income opportunities, or an agricultural entrepreneur targeting the wellness market, our immunity herb vertical offers a perfect blend of ecological wisdom, economic viability, and societal benefit.";

  return (
    <section
      className="relative bg-no-repeat py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-sm  md:text-base   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>


        </div>
      </div>
    </section>
  );
}



export const Faqs = () => {
    const Faqheading =
    "How do these herbs compare to synthetic immunity supplements?";
  const Faqdescription = `These plants offer comprehensive immune support through multiple bioactive compounds working synergistically, unlike synthetic supplements that often isolate single nutrients. Their complex phytochemical profiles provide broad-spectrum activity against pathogens while modulating rather than simply stimulating immune function. This holistic approach reduces side effects and supports sustainable wellness. Additionally, these herbs address root causes of immune dysfunction through anti-inflammatory, adaptogenic, and antioxidant properties. Their traditional use over centuries provides valuable safety data unavailable for newer synthetic alternatives, making them trusted options for long-term immune support.`;
  const FaqsData = [
    {
      question: "What makes these particular herbs suitable for commercial cultivation?",
      answer:
        "These five herbs were specifically selected for their combination of therapeutic potency and agricultural viability. They demonstrate adaptability to diverse growing conditions, require minimal specialized equipment, and offer multiple harvest cycles or long productive lifespans. Their established demand in pharmaceutical markets ensures stable pricing, while their increasing popularity in consumer wellness products creates expanding market opportunities. Unlike many medicinal plants requiring specialized microclimates, these herbs thrive across India's varied agricultural regions. Their recognized status in pharmacopeias and traditional medical systems simplifies regulatory compliance and certification, further enhancing their commercial appeal.",
    },
    {
      question:
        "Can small-scale and marginal farmers benefit from growing these immunity herbs?",
      answer:
        "Absolutely. These herbs are particularly well-suited for small-scale cultivation due to their high value-to-volume ratio and minimal land requirements. Kalmegh and Patha can be productively grown on plots as small as 0.1 hectare, while climbing species like Giloy maximize vertical space utilization. Many of these plants thrive in partial shade or marginal soils unsuitable for conventional crops. Cooperative models supported by Atulye Krishi Vana allow small farmers to aggregate production, access processing facilities, and negotiate better market prices collectively. The minimal chemical input requirements make these herbs ideal for resource-limited farmers seeking sustainable high-value alternatives.",
    },
    {
      question: "What specific market opportunities exist for these immunity-enhancing plants?",
      answer:
        "The market landscape for these herbs spans multiple sectors with varied price points. Pharmaceutical companies purchase raw materials for standardized extracts used in immunity formulations, while Ayurvedic manufacturers require these herbs for traditional preparations. The nutraceutical industry incorporates them into dietary supplements, protein powders, and wellness shots. Direct-to-consumer channels include dried herbs for teas, powders for home remedies, and ready-to-consume products. Export markets, particularly in Europe and North America, seek certified organic sources of these herbs as consumer demand for natural immunity solutions continues to grow globally.",
    },
    {
      question: "How does Atulye Krishi Vana ensure quality standards for these medicinal plants?",
      answer:
        "Our quality assurance begins with authenticated planting material and extends through cultivation, harvest, and post-processing stages. We provide farmers with detailed protocols for optimal harvest timing based on bioactive compound accumulation cycles. Our post-harvest handling guidelines emphasize temperature control, minimal sun exposure, and proper drying techniques to preserve medicinal efficacy. We facilitate testing services for key parameters like moisture content, microbial load, and active ingredient concentration. Additionally, we help farmer groups implement Good Agricultural and Collection Practices (GACP) aligned with World Health Organization guidelines, ensuring their herbs meet international quality standards.",
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
}
