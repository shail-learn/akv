import React from 'react'
import Titleslider from '../Titleslider';
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/shrubs/impact1.webp";
import impact2 from "../../../assets/images/shrubs/impact2.webp";
import impact3 from "../../../assets/images/shrubs/impact3.webp";
import impact4 from "../../../assets/images/shrubs/impact4.webp";
import impact5 from "../../../assets/images/shrubs/impact5.webp";

import bgstay from "../../../assets/images/shrubs/bg.webp";
import { FaqSlider } from '../FaqSlider';
import PartnerBg from "../../../assets/images/shrubs/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';

export const Atulye = () => {
    const heading = "Atulye Krishi Vana’s Support Services"
    const shortdescription = "We enable communities, SHGs, farmers, and institutions to grow these shrubs effectively and profitably."

    const boxslider = [
      {
        heading: "High-Quality Saplings",
        description: "Region-appropriate, hardy, and disease-free planting stock."
      },
      {
        heading: "Soil & Water Assessment",
        description: "Tailored recommendations for soil amendment and planting layout."

      },
      {
        heading: "Training Programs",
        description: "Cultivation techniques, herbal processing, and propagation."

      },
      {
        heading: "Nursery Setup Support",
        description: "Support for SHGs and local entrepreneurs to grow and sell shrubs."

      },
      {
        heading: "Market Access",
        description: "Linkages with Ayurvedic firms, biodiversity missions, and forest departments."

      },
      {
        heading: "Sustainability Consulting",
        description: "Advice on combining shrub cultivation with rainwater harvesting and organic inputs."

      },


    ]
    return (
      <>
        <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />

      </>
    )
}



export const Applications = () => {
    const heading = "Applications Across Sectors"
    const class2 = "blurheight1"

    const boxslider = [
      {
        image: impact1,
        heading: "Medicinal Gardens",
        description: 'Public health parks, school gardens, and temple premises.',
      },
      {
        image: impact2,
        heading: "Farm Borders",
        description: 'Used in live fencing or border planting for wind protection.',
      },
      {
        image: impact3,
        heading: "Wasteland Greening",
        description: 'Ideal for reclaiming barren or saline zones.',
      },
      {
        image: impact4,
        heading: "Agroforestry Systems",
        description: "Incorporated in layered planting designs."
      },
      {
        image: impact5,
        heading: "Fodder Reserves",
        description: "Emergency fodder source during dry spells."
      },

    ]
    return (
      <>

        <section
          className="relative mt-10 pt-16 pb-16 lg:pt-20 lg:pb-20" style={{ background: `url(${bgstay.src})center center / cover no-repeat` }}>
          <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
          <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
            <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
              <div className='w-full lg:w-3/12 md:mt-10'>
                <div className='flex justify-between   flex-wrap'>
                  <h2 className="lg:leading-snug  text-white redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                    {heading}
                  </h2>
                </div>
              </div>

              <div className='w-full lg:w-8/12'>
                <SliderBlur boxslider={boxslider} class2={class2} />
              </div>
            </div>

          </div>

        </section>

      </>
    )
}



export const Environmental = () => {
    const heading = "Sustainability & Climate Impact";
    const className = "slider_height height_300";

    const card = [
      {
        title: "Pollinator Support",
        description: "Shrubs offer nectar and shelter for bees, moths, and butterflies."
      },
      {
        title: "Carbon Sequestration",
        description: "Even small shrubs contribute to biomass and carbon storage."
      },
      {
        title: "Soil Health",
        description: "Root systems bind soil, prevent erosion, and improve structure."
      },
      {
        title: "Climate Adaptation",
        description: "Drought-resilient species support farming in uncertain rainfall zones."

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



export const Conclusion = () => {
    const heading = "Conclusion: Small Shrubs, Big Impact";
    const description =
      "Shrubs like Vasaka, Chirchita, Yavasa, and Kanghi are compact powerhouses of healing, resilience, and green potential. At Athulye Krishi Vana, we see these plants not just as herbal ingredients, but as tools to restore landscapes, strengthen livelihoods, and revive India’s traditional plant knowledge. <br/>Whether you're transforming a wasteland, starting a herbal garden, or looking for low-maintenance plants for agroecological farming—these shrubs offer reliable returns and lasting value. <br/><br/> <b>Grow health, heritage, and habitat with us. <br/> Partner with Athulye Krishi Vana and make every plant a purpose-driven choice.</b>";

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
    const Faqheading = "Can these shrubs be intercropped with trees or other crops?";
  const Faqdescription = `Yes, these shrubs are well-suited for intercropping in agroforestry systems. They have moderate space requirements and shallow roots, so they don’t heavily compete with deeper-rooted crops or trees. You can grow them alongside fruit trees, nitrogen-fixing species, or grasses. Their presence can help suppress weeds, retain soil moisture, and attract pollinators. Shrubs like Chirchita and Kanghi provide seasonal biomass, while Yavasa and Adusa act as natural buffers. Intercropping them can enhance farm diversity, reduce pest pressure, and create a microclimate that benefits the overall system—especially in resource-limited or climate-vulnerable regions.`;
  const FaqsData = [
    {
      question: "How do these shrubs contribute to women-led rural livelihoods?",
      answer:
        " Women’s Self-Help Groups (SHGs) often play a major role in harvesting, drying, and processing herbal plants. Shrubs like Adusa and Kanghi offer accessible raw materials for herbal teas, powders, oils, and balms. Yavasa and Chirchita are commonly used in traditional remedies that women can prepare and sell locally or supply to Ayurvedic firms. Shrubs can be grown on homestead boundaries or community plots, reducing the need for land ownership. Cultivating and marketing shrub-based herbal products helps women generate income, build local value chains, and promote indigenous knowledge, contributing to economic independence and skill development.",
    },
    {
      question:
        "What post-harvest practices are important for these medicinal shrubs?",
      answer:
        "Proper post-harvest handling ensures that the medicinal properties of these shrubs are preserved. Leaves or whole plants should be harvested during dry weather to avoid fungal contamination. Drying should be done in a shaded, well-ventilated space to retain essential oils and active compounds. For Adusa and Kanghi, slow drying helps preserve color and potency. Materials should be stored in airtight, moisture-proof containers away from sunlight. Grading, sieving, and cutting are necessary steps before packaging or processing. Poor handling can reduce market value or medicinal efficacy, so following clean, standardized practices is essential for commercial success.",
    },
    {
      question: "Are there risks of overharvesting or ecological disruption?",
      answer:
        " Yes, if not managed properly, wild harvesting—especially of Chirchita or Yavasa—can lead to depletion of natural populations. Sustainable harvesting involves rotational cutting, leaving rootstocks intact, and collecting only mature parts of the plant. Cultivation, rather than extraction from forests, is encouraged under Athulye Krishi Vana to prevent biodiversity loss. Overharvesting also affects the habitat of insects and small fauna. Educating local communities on timing, tools, and sustainable limits helps ensure that ecological functions are not disrupted. Community-led monitoring and integration with biodiversity parks help balance income generation with conservation.        ",
    },
    {
      question: "Can these shrubs be used to control weeds or invasive plants?",
      answer:
        "Yes, their dense growth habit and adaptability make these shrubs useful in outcompeting weeds or covering bare soils. Yavasa and Chirchita, in particular, are known for establishing quickly in degraded areas, suppressing invasive grass or unwanted annual weeds. Their allelopathic properties (chemical influence on surrounding plants) may also reduce germination of some weedy species. They form ground cover that blocks sunlight to weed seedlings, and their biomass can be used as mulch. Integrating them in farm borders or interspaces can reduce manual weeding needs, especially for smallholder farmers with limited labor resources.",
    },
    {
        question: "How do these shrubs perform in flood-prone or waterlogged areas?",
        answer:
          "These shrubs are generally not ideal for chronically waterlogged or flood-prone conditions. Kanghi and Adusa may tolerate short-term water saturation but suffer from root rot if drainage is poor. Chirchita and Yavasa prefer dry or well-aerated soils and can decline rapidly in soggy environments. However, they can be used on slightly elevated berms or bunds in areas with alternating wet and dry cycles. For flood-prone regions, it’s better to grow these plants on raised beds with good drainage. Farmers should consider soil amendments or contouring to prevent stagnation and maintain healthy shrub stands.",
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
