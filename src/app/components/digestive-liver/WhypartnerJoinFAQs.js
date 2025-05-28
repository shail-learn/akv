import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import PartnerBg from "../../../assets/images/digestive/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Whypartner = () => {
  const heading = "Why Partner with Atulye Krishi Vana for Digestive & Metabolic Herbs?"
  const fruitData = [
    {
      title: "Low Maintenance Crops",
      image: choose1,
      flip: "Suitable for marginal lands with minimal inputs"
    },
    {
      title: "High Market Demand",
      image: choose2,
      flip: "Essential ingredients in nutraceuticals, herbal teas, and functional foods"
    },
    {
      title: "Comprehensive Support",
      image: choose3,
      flip: "From sapling supply to post-harvest processing and market linkages"
    },
    {
      title: "Sustainable Farming Practices",
      image: choose4,
      flip: "Reduce soil erosion, support biodiversity, and enhance soil health"
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Join = () => {
  const heading = "Join Atulye Krishi Vana today to grow high-value, medicinal plants that support digestive health and overall wellness.  ";



  return (
    <section
      className="relative bg-no-repeat py-20 lg:py-40 bg-cover w-full my-8 md:my-12"
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex mx-auto px-4 md:px-20 max-w-5xl">
        <div className="max-w-7xl text-white text-center pl-3 md:pl-[4rem] mt-5">
          <h2 className="  w-full text-3xl md:text-4xl leading-snug font-medium  redhat">
            {heading}
          </h2>



        </div>
      </div>
    </section>
  );
}



export const FAQs = () => {
  const Faqheading =
    "Are these herbs suitable for small-scale and home gardens?";
  const Faqdescription = `Yes, many of these herbs are well-suited for small-scale cultivation and home gardens. Aloe Vera, for example, thrives in pots and small plots, while herbs like Mulethi and Chitrak can be grown in backyard gardens with well-drained soil. Jimikand requires more space due to its large tubers but can still be grown in small plots with proper soil preparation. These herbs are resilient and require minimal inputs, making them ideal for small farmers, kitchen gardens, and urban growers seeking high-value crops with health benefits.`;
  const FaqsData = [
    {
      question: "How can these herbs be used in daily diets for digestive support?",
      answer:
        "Several of these herbs are easy to incorporate into daily diets. Aloe Vera gel can be consumed as a juice or added to smoothies for digestive health. Mulethi can be boiled to make a soothing tea for sore throats and stomach ulcers. Jimikand can be cooked as a vegetable, providing fiber for gut health. Nagarmotha can be added to herbal formulations or powdered for use in traditional dishes. Regular consumption of these herbs supports digestion, reduces bloating, and helps maintain a healthy gut microbiome.",
    },
    {
      question:
        "Are these herbs safe for long-term use?",
      answer:
        "Most of these herbs are considered safe for long-term use when taken in appropriate doses. However, moderation is key. For instance, Mulethi should be used with caution by those with high blood pressure, as it can cause water retention. Aloe Vera should be consumed in its pure form, free from latex, to avoid digestive discomfort. Jimikand should always be cooked thoroughly to eliminate natural toxins. Consulting with an Ayurvedic practitioner or healthcare provider can help determine the right dosage and form for long-term use without side effects.",
    },
    {
      question: "Can these herbs be grown organically?",
      answer:
        "Yes, these herbs are highly suitable for organic cultivation. They generally require fewer pesticides and synthetic fertilizers, as many have natural pest-repellent properties. For example, Chitrak is naturally pest-resistant, and Aloe Vera has a robust immune system that keeps diseases at bay. Using compost, organic manure, and natural pest repellents like neem oil can further enhance yield without compromising soil health. Athulye Krishi Vana supports farmers with organic farming techniques, including vermicomposting, crop rotation, and intercropping, ensuring the production of high-quality, chemical-free herbal produce.",
    },
    {
      question: "How do these herbs support metabolic health?",
      answer:
        "These herbs are known to enhance metabolic function by supporting digestive enzymes, improving nutrient absorption, and reducing inflammation. For example, Chitrak is known for stimulating digestive fire (Agni), which enhances metabolic rate. Nagarmotha helps regulate fat metabolism, while Punarnava aids in detoxification and reduces water retention, supporting overall weight management. Aloe Vera’s enzymes help break down fats and sugars efficiently. Regular use of these herbs can reduce metabolic stress, support energy production, and maintain a healthy body weight, making them essential for holistic health.",
    },
    {
      question: "What are the post-harvest processing options for these herbs?",
      answer:
        "Post-harvest, these herbs can be processed into a variety of forms for added value. Aloe Vera can be extracted into gel or juice, dried into powder, or processed into cosmetic products. Mulethi roots are typically dried and powdered or cut into small pieces for tea and syrup production. Chitrak roots can be dried and ground into fine powder for use in digestive supplements. Jimikand tubers are boiled, dried, and sliced for use in snacks or dried powder. Proper drying and storage techniques are essential for maintaining potency and quality.",
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
