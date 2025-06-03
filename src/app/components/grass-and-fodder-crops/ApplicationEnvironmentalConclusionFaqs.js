import React from 'react'
import Titleslider from '../Titleslider'
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Application = () => {
    const heading = "Application Use Cases Across Sectors "

    const boxslider = [
      {
        heading: "Dairy Farming",
        description: "Daily green fodder, fodder reserves for dry months"
      },
      {
        heading: "Livestock Cooperatives",
        description: "Collective fodder banks, fodder nurseries"

      },
      {
        heading: "Organic Farming",
        description: "Green manure, nitrogen-fixing rotation crops"

      },
      {
        heading: "Watershed Development",
        description: "Slope stabilization, grass strips on bunds"

      },
      {
        heading: "Peri-urban Agriculture",
        description: "Cut-and-carry fodder for stall-fed systems"

      },


    ]
    return (
      <>
        <Titleslider heading={heading} boxslider={boxslider} />

      </>
    )
}



export const Environmental = () => {
    const heading = `Environmental & Livelihood Benefits`

    const futurePlans = [
      `<b>Improved Milk Yields  –</b> Better nutrition leads to higher and better-quality output.`,
      `<b>Reduced Feed Costs  –</b> Home-grown fodder cuts down dependence on expensive feed mixes.`,
      `<b>Soil Protection –</b> Grasses reduce runoff; legumes replenish fertility.`,
      `<b>Employment Generation –</b> Nursery work and fodder harvesting create local jobs.`,
      `<b>Carbon Sequestration –</b> Perennial roots contribute to carbon capture in soils.`,

    ];


    return (
      <>

        <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
          <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20">

            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
               dangerouslySetInnerHTML={{__html : heading}}
              />

              <ul className="mt-6 space-y-4">
                {futurePlans.map((plan, index) => (
                  <li key={index} className="flex  text-left space-x-3">
                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                      <MdCheckCircle className='w-6 h-6' />
                    </span>
                    <p
                      className="text-[#141414] redhat"
                      dangerouslySetInnerHTML={{ __html: plan }}
                    />
                  </li>
                ))}
              </ul>


            </div>
            <div className=" w-full md:w-1/2">

              <Image
                src={Plant}
                alt="Planting"
                width={200}
                height={200}
                className="w-full h-full"
              />

            </div>
          </div>
        </section>
      </>
    )
}


export const Conclusion = () => {
    const heading = "Conclusion: Feed the Herd, Heal the Land";
    const description =
      "Fodder crops like Hathi Ghas and Lucerne are silent champions of sustainable agriculture. They don’t just feed animals—they heal the land, support farm resilience, and empower rural households with dependable resources. <br/> With Atulye Krishi Vana, fodder cultivation becomes more than routine—it becomes a strategic part of your land-use planning. We work with you to ensure every strip of green yields food, fertility, and future security. <br/><br/> <b>Invest in green fodder. Support your livestock. Strengthen your soil. Join Atulye Krishi Vana in building a greener, more nourished India. </b>";
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
    "How do Hathi Ghas and Lucerne support mixed farming systems?";
  const Faqdescription = `Both crops complement mixed farming beautifully. Hathi Ghas provides bulk green fodder for cattle and acts as a protective barrier around vegetable plots. Lucerne adds protein-rich feed for dairy animals while improving soil fertility for subsequent crops. Their root systems help retain moisture and reduce erosion, benefiting nearby crops. When integrated into rotational cycles, Lucerne enhances soil nitrogen before cereal planting. Hathi Ghas can be grown along field borders or fallow land. Their presence reduces feed costs, boosts milk yield, and contributes to a more resilient, sustainable mixed-farm ecosystem.`;
  const FaqsData = [
    {
      question: "What are the initial setup requirements for planting Hathi Ghas on 1 acre?",
      answer:
        "To plant Hathi Ghas on one acre, you need approximately 15,000–20,000 rooted slips depending on spacing (generally 60x45 cm). The land should be ploughed and leveled, with a basal application of compost or FYM. Furrows are made, and slips are planted vertically and firmly. Initial irrigation is critical for establishment. One light irrigation every 5–6 days for the first month ensures root development. Weed control is essential during the first two months. After 45–60 days, the first cut can be made, and successive harvests continue every 30–45 days with proper management.",
    },
    {
      question:
        "Can Lucerne be grown in rainfed areas without irrigation?",
      answer:
        "Lucerne prefers well-irrigated conditions for optimal growth and yield. However, in areas with good soil moisture retention and well-timed rainfall (especially during rabi), it can be grown with supplemental irrigation through rainwater harvesting structures or shallow wells. Without consistent moisture, Lucerne may survive but not reach its full nutritional or yield potential. Mulching and moisture-conserving farming practices help extend viability. For truly rainfed zones, it's better to mix Lucerne with hardy grasses or switch to leguminous species like Stylosanthes or cowpea, which require less water.",
    },
    {
      question: "Are there any pest or disease challenges in Hathi Ghas or Lucerne cultivation?",
      answer:
        "Hathi Ghas is relatively pest-resistant, though stem borers or shoot flies may appear in very humid conditions. Regular trimming discourages pests. Lucerne may face challenges like aphids, root rot, or powdery mildew, particularly in poorly drained soils or over-irrigated fields. Timely thinning, ensuring air circulation, and using neem oil sprays or organic bio-pesticides helps manage these issues. Crop rotation, especially avoiding back-to-back legume planting, also reduces disease risk. Healthy soil, correct spacing, and monitoring at early stages ensure that pest or disease pressures remain minimal and manageable.",
    },
    {
      question: "How does Lucerne improve soil health and structure over time?",
      answer:
        "Lucerne is a deep-rooted legume that enhances soil in multiple ways. Its roots fix atmospheric nitrogen, enriching the soil for future crops like wheat or maize. Over time, its organic root mass breaks down, improving soil porosity and microbial activity. This allows better water infiltration and root aeration for subsequent crops. Lucerne also acts as a live mulch—reducing weed pressure and protecting the soil surface from sun and rain erosion. Regular incorporation of Lucerne cuttings into compost or directly into the field boosts organic carbon levels and overall soil fertility.",
    },
    {
        question: "Can fodder crops be grown on bunds or farm perimeters?",
        answer:
          " Absolutely. Planting fodder crops like Hathi Ghas on bunds or borders is an excellent space-saving practice. It provides continuous green feed without taking up main crop space. These boundary strips act as windbreaks, reduce water runoff, and minimize soil erosion. Lucerne is more suitable for plots rather than bunds due to its softer structure, but low-growing legumes like cowpea or stylosanthes may be used on perimeters. Integrating grasses into bunds also reduces weed infestation and gives farmers a low-maintenance feed resource at the edge of every field.",
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
