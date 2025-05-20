import React from 'react'
import { FaqsLayout, GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';

import image1 from "../../../assets/images/softwood/img1.webp";
import image2 from "../../../assets/images/softwood/img2.webp";
import image3 from "../../../assets/images/softwood/img3.webp";
import image4 from "../../../assets/images/softwood/img4.webp";
import image5 from "../../../assets/images/softwood/img5.webp";
import image6 from "../../../assets/images/softwood/img6.webp";
import image7 from "../../../assets/images/softwood/img7.webp";
import image8 from "../../../assets/images/softwood/img8.webp";
import image9 from "../../../assets/images/softwood/img9.webp";
import image10 from "../../../assets/images/softwood/img10.webp";
import image11 from "../../../assets/images/softwood/img11.webp";
import choose1 from "../../../assets/images/softwood/choose1.webp";
import choose2 from "../../../assets/images/softwood/choose2.webp";
import choose3 from "../../../assets/images/softwood/choose3.webp";
import choose4 from "../../../assets/images/softwood/choose4.webp";
import PartnerBg from "../../../assets/images/softwood/bg.webp";


import Titleslider from '../Titleslider';
import { Productlist } from '../Productlist';


export const Commercial = () => {
  const GrowthHeading = "Cultivation & Growth Characteristics";
  const slides = [
    {
      group: "Land Preparation & Plantation Design",
      image: image1,
      desc: "Clearing unwanted vegetation and improving soil fertility with organic compost",

    },
    {
      group: "Land Preparation & Plantation Design",
      image: image2,
      desc: "Spacing: 4m x 4m for Haldu, 5m x 5m for Pakad, and 6m x 6m for Pipa",
    },
    {
      group: "Land Preparation & Plantation Design",
      image: image3,
      desc: "Mixed cropping with legumes or medicinal plants for enhanced soil health",
    },
    {
      group: "Irrigation & Water Management",
      image: image4,
      desc: "These trees are drought-tolerant but benefit from regular watering in the early years. Drip irrigation can be used in semi-arid regions for water conservation.",
    },
    {
      group: "Soil & Nutrient Requirements",
      image: image5,
      desc: "Regular mulching and fertilization boost early growth, ensuring high-quality timber.",
    },
    {
      group: "Pest & Disease Management",
      image: image6,
      desc: "Regular pruning to improve air circulation",
    },
    {
      group: "Pest & Disease Management",
      image: image7,
      desc: "Organic pesticides like neem oil",
    },
    {
      group: "Pest & Disease Management",
      image: image8,
      desc: "Soil treatment with biofertilizers",
    },
    {
      group: "Harvesting & Yield Expectations",
      image: image9,
      desc: "Haldu: Ready for harvest in 12-15 years; yields fine-textured wood for furniture & veneer",
    },
    {
      group: "Harvesting & Yield Expectations",
      image: image10,
      desc: "Pakad: Harvested in 10-12 years, widely used in plywood and tool-making",
    },
    {
      group: "Harvesting & Yield Expectations",
      image: image11,
      desc: "Pipal: Primarily harvested for religious and medicinal use, with occasional timber applications",
    },

  ];


  const heading = "Commercial & Industrial Applications"

  const boxslider = [
    {

      heading: "Furniture & Handicrafts Industry",
      description: 'Softwood is widely used for interior design, modular furniture, and lightweight decor. Haldu and Pakad’s workability makes them ideal for carving, turning, and staining.',
    },
    {

      heading: "Construction & Packaging",
      description: 'Pakad is commonly used for packing materials, crates, and scaffolding, ensuring cost-effective industrial use.',
    },
    {

      heading: "Religious & Cultural Uses",
      description: 'Pipal is revered in Hinduism and Buddhism, often planted around temples and used for making religious artifacts.',
    },
    {

      heading: "Ecological & Environmental Benefits",
      description: 'These trees contribute to reforestation, biodiversity conservation, and carbon sequestration, making them ideal for sustainable projects.',
    },


  ]


  return (
    <>
      <GrowthSlider

        GrowthHeading={GrowthHeading}
        slides={slides}
      />

      <Titleslider heading={heading} boxslider={boxslider} />

    </>
  );
}



export const Why = () => {
  const heading = "Why Choose Atulye Krishi Vana?"
  const fruitData = [
    {
      title: "High-quality saplings & plantation guidance",
      image: choose1,

    },
    {
      title: "Scientific agroforestry techniques",
      image: choose2,


    },
    {
      title: "Eco-friendly & sustainable forestry solutions",
      image: choose3,

    },
    {
      title: "Market linkages & buyer connections",
      image: choose4,


    },



  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}



export const Choose = () => {
  const heading = "Start Your Softwood Timber Plantation Today!";
  const description =
    "Looking to grow high-value softwood timber? Partner   with Atulye Krishi Vana for expert guidance, premium saplings, and sustainable forestry solutions.  ";

  const subdes =
    "  📞 Call us now for a consultation and take the first step towards a profitable agroforestry venture!";

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
}


export const Faqs = () => {
  const Faqheading =
    "What are the key advantages of softwood and light timber trees?";
  const Faqdescription = `Softwood and light timber trees grow faster than hardwood varieties, making them ideal for sustainable forestry. They are easier to work with, lightweight, and highly adaptable for multiple applications like furniture, plywood, and construction. These trees also play a significant role in ecological balance, supporting soil conservation and biodiversity.`;
  const FaqsData = [
    {
      question: "What industries commonly use softwood and light timber trees?",
      answer:
        "Industries that rely on these trees include furniture manufacturing, plywood production, paper and pulp processing, and lightweight construction. Due to their smooth grain and easy workability, Haldu and Pakad are preferred in making decorative veneers, musical instruments, and handicrafts. Pipal wood, though not used extensively for commercial timber, finds application in religious and medicinal products. Additionally, these woods are used for making agricultural tools, packaging crates, and even matchsticks due to their lightweight yet durable nature.",
    },
    {
      question:
        "How does the growth rate of softwood trees compare to hardwood species?",
      answer:
        "Softwood trees typically grow faster than hardwood species, often reaching maturity within 10-15 years, while hardwood trees can take 30-50 years. Haldu and Pakad can achieve substantial girth in a relatively short span, making them viable for commercial forestry. Pipal, though slower than the other two, offers multiple ecological benefits such as soil stabilization and air purification. Their rapid growth allows frequent harvesting cycles, ensuring a sustainable supply of timber and reducing the environmental impact compared to slower-growing hardwood species.",
    },
    {
      question: "What are the ideal soil and climatic conditions for growing these trees?",
      answer:
        "Softwood and light timber trees thrive in well-drained, loamy to sandy soils with moderate moisture retention. Haldu prefers deep, alluvial soils, while Pakad and Pipal are highly adaptable and can grow in a variety of conditions, including rocky terrains. These species require a warm tropical to subtropical climate with moderate rainfall ranging from 800-1500 mm annually. While Haldu benefits from full sunlight, Pakad and Pipal can tolerate partial shade, making them ideal for agroforestry systems and intercropping with other crops.",
    },
    {
      question: "Are these trees resistant to pests and diseases?",
      answer:
        "Softwood trees like Haldu, Pakad, and Pipal exhibit moderate resistance to pests and diseases, though they can be affected by common threats like termites, fungal infections, and leaf borers. Regular monitoring and preventive treatments such as neem-based sprays, organic composting, and mulching can help control infestations. Pakad and Pipal have natural antifungal properties, making them less susceptible to rot. Additionally, proper spacing, pruning, and maintaining soil health enhance the trees' natural defenses, reducing the need for chemical treatments in plantations.",
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
