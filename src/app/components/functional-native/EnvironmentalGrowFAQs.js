import React from 'react'
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/functional/group1.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/functional/bgimg.webp";

export const Environmental = () => {
  const heading = `Environmental & Social Benefits`

  const futurePlans = [
    `<b>Pollinator and Bird Support –</b> Tall palms serve as habitat and feeding grounds.`,
    `<b>Carbon Sequestration  –</b> Long-lived palms store carbon over decades.`,
    `<b>Desert Soil Stabilization –</b> Date Palms bind soil and reduce sand drift.`,
    `<b>Livelihood Generation –</b> Crafts, fruit sales, and eco-tourism create jobs.`,
    `<b>Cultural Stewardship –</b> Encourages preservation of oral histories, rituals, and native species.`,

  ];


  return (
    <>

      <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-20">

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-semibold redhat text-black mb-4 md:mb-20"
              dangerouslySetInnerHTML={{ __html: heading }}
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


export const Grow = () => {
  const heading = "Grow with Tradition, Thrive with Purpose";
  const description =
    "Functional and native palms are living heritage—offering value that goes far beyond aesthetics. With deep roots in Indian tradition and strong potential for modern sustainability, these palms embody what Atulye Krishi Vana stands for: ecology, economy, and culture in harmony. <br/> <br/> Whether you're restoring a sacred grove, planting for dryland productivity, or building a culturally relevant landscape, our team ensures that your palm plantations are resilient, regenerative, and rooted in purpose.  <br/><br/> <b>Plant for the people. Grow for the planet. Reclaim identity through green legacy.Join Atulye Krishi Vana in planting palms that protect, produce, and preserve.</b>";
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
    "How long does it take for a Talipot Palm to reach maturity and flower?";
  const Faqdescription = `The Talipot Palm is a monocarpic species, meaning it flowers only once in its lifetime—usually after 30 to 80 years, depending on conditions. Once it blooms, the palm produces a large, branched inflorescence with thousands of flowers and seeds before dying. Despite this long lifecycle, the palm offers decades of functional value, including shade, biodiversity support, and usable leaves. It is ideal for long-term cultural or ecological projects. Its majestic size and life story make it a botanical landmark in temple grounds, heritage parks, and community forests, where permanence is valued over productivity.`;
  const FaqsData = [
    {
      question: "Can Date Palms be integrated into smallholder farms or kitchen gardens?",
      answer:
        " Yes, Date Palms are excellent for small farms, especially in dry or semi-arid regions. Their vertical growth habit means they occupy minimal horizontal space, allowing intercrops like millets, legumes, or vegetables to thrive underneath. They require little water once established and do not heavily compete with shallow-rooted crops. In kitchen gardens, dwarf or ornamental date palm varieties can be planted for aesthetic value or home-scale fruit harvests. Proper sunlight, spacing, and a bit of seasonal pruning ensure their successful integration into multifunctional landscapes without burdening the farmer with high maintenance.",
    },
    {
      question:
        "What is the economic value of Talipot palm leaves in craft or rural livelihoods?  ",
      answer:
        "Talipot palm leaves are large, durable, and naturally foldable—making them ideal for a variety of traditional and modern crafts. They are commonly used to make ceremonial umbrellas, mats, fans, screens, and even eco-friendly packaging. In some regions, artisans earn steady income by weaving and selling Talipot-based handicrafts to tourists, religious institutions, and decor brands. The leaves are also valued for writing palm-leaf manuscripts in some tribal and temple communities. With rising interest in sustainable materials, Talipot leaves present a low-cost, biodegradable alternative to plastics and synthetics, thus supporting both environment and employment.",
    },
    {
      question: "How should Date Palms be pruned and managed for optimal fruit production?",
      answer:
        "Proper pruning enhances both yield and health. Remove dead or diseased fronds annually, especially at the base. Prune flower clusters selectively to allow better airflow and reduce fungal infection risk. For fruit-bearing palms, thinning the dates ensures larger and sweeter produce. Trimming should be done using sanitized tools to avoid pests and infections. Fertilize during flowering and fruiting seasons with organic compost or phosphate-rich feed. Avoid over-pruning, as excessive canopy loss can lead to sunburn and reduce photosynthetic efficiency. With regular management, Date Palms can produce quality fruit for decades.",
    },
    {
      question: "Are these palms suitable for coastal planting or saline soils?",
      answer:
        "Date Palms are highly salt-tolerant and are often grown in regions with slightly saline irrigation water or soils. This makes them ideal for coastal belts or inland saline tracts. Talipot Palms, on the other hand, prefer well-drained loamy soils and are moderately tolerant to salinity but thrive better in inland tropical environments. In coastal zones, they should be planted away from areas prone to salt spray. For both species, soil amendments like gypsum and organic mulch can help improve root health in saline-prone areas, ensuring longevity and stable growth.",
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
