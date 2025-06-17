import React from 'react'
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import circle1 from "../../../assets/images/hedge/circle1.webp";
import circle2 from "../../../assets/images/hedge/circle2.webp";
import circle3 from "../../../assets/images/hedge/circle3.webp";
import circle4 from "../../../assets/images/hedge/circle4.webp";
import circle5 from "../../../assets/images/hedge/circle5.webp";

import { FaqsLayout, GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

export const Sustainability = () => {

    const custom_class1 = "growth_white"
    const GrowthHeading = "Sustainability Impact";
    const slides = [
      {
        image: circle1,
        title:"Carbon Sequestration",
        desc: `As a perennial shrub, it captures and stores carbon over time.`,
      },
      {
        image: circle2,
        title:"Dust & Pollution Control",
        desc: `Acts as a green filter in dusty or traffic-heavy zones.`,
      },
      {
        image: circle3,
        title:"Soil Conservation",
        desc: ` Prevents erosion when planted on slopes or embankments. `,
      },
      {
        image: circle4,
        title:"Water Efficiency",
        desc: `Once established, it requires minimal water—ideal for climate-resilient farming.`,
      },
      {
        image: circle5,
        title:"Biodiversity Booster",
        desc: `Offers forage and shelter to beneficial insects and small birds.`,
      },

    ];

    return (
      <>

        <GrowthSlider
          GrowthHeading={GrowthHeading}
          slides={slides}
          className={custom_class1}
        />

      </>
    )
}


export const Secure = () => {
  const heading = "Secure, Sustain, and Beautify with Duranta";
  const description =
    "Duranta is not just a hedge—it’s a climate-smart, multifunctional solution that aligns with India’s goals for sustainable agriculture, green infrastructure, and eco-conscious development. Whether you are a farmer looking for low-cost fencing, an urban planner designing a civic space, or a panchayat seeking a reliable nursery plant—Duranta delivers. <br/><br/> <b>At Atulye Krishi Vana, we’re committed to helping you create living boundaries that protect, perform, and prosper. </b>";

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


export const FAQs = () => {
  const Faqheading =
  "How fast does Duranta grow?";
const Faqdescription = ` Duranta is known for its rapid growth, especially in warm climates. Under optimal conditions, it can grow 1 to 1.5 feet per month in its early stages.`;
const FaqsData = [
  {
    question: "Can Duranta be grown in pots or containers?",
    answer:
      "Yes, compact Duranta varieties do well in containers, especially for ornamental use on terraces, balconies, or patios. ",
  },
  {
    question:
      "Is Duranta safe around children or pets?",
    answer:
      "Duranta berries can be mildly toxic if ingested in large quantities. While the plant is generally safe, caution should be taken in spaces frequented by small children or pets.",
  },
  {
    question: "Does Duranta require frequent pruning?",
    answer:
      "No, only 2–3 prunings a year are needed to maintain shape. In formal settings, monthly trimming may be preferred for a manicured look.",
  },
  {
    question: "What makes Duranta better than artificial fencing?",
    answer:
      "Duranta provides eco-friendly, cost-effective, and visually appealing fencing. It adds long-term value through biodiversity support and climate benefits.",
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
