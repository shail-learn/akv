"use client"
import React from 'react'
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/tropical/choose1.webp";
import choose2 from "../../../assets/images/tropical/choose2.webp";
import choose3 from "../../../assets/images/tropical/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";
import choose5 from "../../../assets/images/tropical/choose5.webp";

import Titleslider from '../Titleslider';
import { SliderBlur } from '../SliderBlur';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
// import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import impact1 from "../../../assets/images/tropical/impact1.webp";
import impact2 from "../../../assets/images/tropical/impact2.webp";
import impact3 from "../../../assets/images/tropical/impact3.webp";
import impact4 from "../../../assets/images/tropical/impact4.webp";
import impact5 from "../../../assets/images/tropical/impact5.webp";
import impact6 from "../../../assets/images/tropical/impact6.webp";

import bgstay from "../../../assets/images/stress/bg.webp";
import { FaqSlider } from '../FaqSlider';
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
export const Cultivate = () => {
    const heading = "Why Cultivate Tropical Bloomers with Atulye Krishi Vana?"
    const fruitData = [
      {
        title: "Beauty with Biodiversity",
        image: choose1,
        flip: "Tropical bloomers bring color, form, and fragrance to landscapes while creating thriving habitats for bees, birds, and butterflies. Their long blooming periods ensure continuous ecological support."
      },
      {
        title: "Hardy and Low-Maintenance",
        image: choose2,
        flip: "Many tropical species are heat-tolerant and drought-resistant, making them ideal for Indian climates. They require minimal care once established, reducing labor and water costs."
      },
      {
        title: "Multipurpose Usage",
        image: choose3,
        flip: "From floral decorations and rituals to herbal remedies and organic dyes, tropical bloomers offer versatile value in day-to-day life, culture, and industry."
      },
      {
        title: "Income Diversification",
        image: choose4,
        flip: "Farmers and SHGs can earn through multiple channels—leaf harvesting, nursery production, herbal product making, or supplying to florists and event planners."
      },
      {
        title: "Cultural & Therapeutic Importance",
        image: choose5,
        flip: "Plants like Heena and Ashok are vital to Indian traditions and Ayurvedic systems, promoting not just income but emotional and spiritual wellness."
      },


    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />

      </>
    )
}



export const Include = () => {
    const heading = "Our Services Include"

    const boxslider = [
      {
        heading: "Premium Sapling Supply",
        description: "Nursery-raised, hardy, and certified planting material."
      },
      {
        heading: "Soil & Water Advisory",
        description: "Expert guidance on soil health, irrigation needs, and planting layout."

      },
      {
        heading: "Skill Building",
        description: "Workshops on pruning, organic pest control, plant propagation, and flower preservation."

      },
      {
        heading: "Business Setup Support",
        description: "Assistance for SHGs and entrepreneurs to launch nurseries or small floriculture units."

      },
      {
        heading: "Market Access",
        description: "Tie-ups with herbal companies, event managers, exporters, and florists for continuous income generation. "

      },
      {
        heading: "Eco Planning",
        description: "Site-specific guidance for sustainable, pollinator-friendly plantation design."

      },


    ]
    return (
      <>
        <Titleslider heading={heading} boxslider={boxslider} />

      </>
    )
}



export const Cases = () => {
    const heading = "Use Cases Across Sectors"
    const class2 = "blurheight1"

    const boxslider = [
      {
        image: impact1,
        heading: "Green Highways & Smart Cities",
        description: 'Colorful hedges, roadside climbers, and roundabout gardens.',
      },
      {
        image: impact2,
        heading: "Temples & Cultural Sites",
        description: 'Continuous flower supply for rituals and spiritual ambiance.',
      },
      {
        image: impact3,
        heading: "Herbal Villages & Panchayat Initiatives",
        description: 'Community cultivation of Heena and Gudhal for income and tradition.',
      },
      {
        image: impact4,
        heading: "Tourism & Hospitality",
        description: "Resort gardens, eco-retreat landscapes, and decorative climbers."
      },
      {
        image: impact5,
        heading: "Women’s Livelihoods",
        description: "Leaf processing, dye preparation, and handcrafted herbal products from Heena and Hibiscus."
      },
      {
        image: impact6,
        heading: "MGNREGA & Horticulture Missions",
        description: "Plantation drives, herbal corridors, and biodiversity gardens."
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



export const Climate = () => {
    const heading = "Sustainability & Climate Impact";
    const className = "slider_height height_300";

    const card = [
      {
        title: "Water Conservation",
        description: "Drought-resistant species help reduce water usage in green projects."
      },
      {
        title: "Soil Protection",
        description: "Shrubs like Heena and Bougainvillea prevent erosion and improve soil health."
      },
      {
        title: "Carbon Capture",
        description: "Trees like Ashok and shrubs like Gudhal contribute to CO₂ absorption and temperature regulation."
      },
      {
        title: "Urban Microclimates",
        description: "Planting along walls, rooftops, and boundaries reduces heat buildup and improves air quality."

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



export const Beauty = () => {
    const heading = "Rooted in Culture, Rising with Climate Wisdom";
    const description =
      "Tropical bloomers symbolize the harmonious blend of tradition, biodiversity, and sustainable development. At Atulye Krishi Vana, we encourage communities to plant not just for profit—but for resilience, regeneration, and reverence. <br/> From bright bougainvillea-lined walls to sacred Ashok groves, these plants can transform landscapes and lives. Whether you're a farmer, panchayat leader, urban planner, or wellness entrepreneur, we invite you to partner with us. <br/><br/> <b>Let's grow beauty, support biodiversity, and build an economy rooted in nature. Connect with Atulye Krishi Vana. Let's make every bloom count.</b>";

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


export const Questions = () => {
    const Faqheading =
    "Can tropical bloomers be used for natural fencing or privacy screens?";
  const Faqdescription = `Yes, many tropical bloomers like Bougainvillea and Heena are ideal for natural fencing. Their dense growth, thorny stems (in Bougainvillea), and fast regeneration make them excellent barriers for livestock control, privacy, or boundary marking. These live fences reduce dependency on artificial structures, offer habitat for beneficial insects, and help conserve soil. Additionally, they contribute to farm aesthetics while serving multiple functions—protective, ecological, and economic. Planting them along perimeters ensures space efficiency and long-term utility, especially in smallholder or mixed-use farms. Maintenance is easy with occasional pruning to retain desired height and shape.`;
  const FaqsData = [
    {
      question: "What kind of pruning is required for tropical blooming plants?",
      answer:
        "Tropical bloomers benefit greatly from regular pruning to enhance flowering, maintain shape, and encourage bushier growth. For instance, Gudhal responds well to light trimming after each bloom cycle, while Bougainvillea requires harder pruning during dormancy to control its vigorous spread. Ashok trees need minimal pruning—mainly to remove deadwood or balance canopy. Heena benefits from post-harvest leaf trimming to promote fresh shoots. Pruning improves air circulation, reduces disease risks, and enhances plant aesthetics. It’s best done during early morning or late afternoon using sterilized tools to prevent shock and infection.",
    },
    {
      question:
        "How do tropical bloomers help support year-round flowering in farms or landscapes?",
      answer:
        "Different tropical bloomers have varied flowering cycles, which can be strategically combined to ensure year-round color. For instance, Gudhal flowers almost continuously, Bougainvillea bursts into bloom in warm dry spells, and Ashok typically blooms in late spring. Heena offers seasonal fragrance and flowering. By selecting plants with overlapping or alternating flowering seasons, farmers and landscapers can maintain visual interest, attract pollinators continuously, and support eco-tourism or homestay gardens. With proper pruning, organic feeding, and sunlight exposure, bloom cycles can even be extended or induced during off-seasons in some varieties.",
    },
    {
      question: "Are these plants suitable for rooftop or balcony gardening?",
      answer:
        "Yes, several tropical bloomers adapt well to container gardening on rooftops and balconies. Gudhal and Bougainvillea grow beautifully in medium to large pots with adequate drainage and sun exposure. Compact Ashok varieties or trained Heena hedges also work well in terrace gardens. These plants withstand heat, need limited watering, and are excellent for creating lush micro gardens in urban spaces. With proper soil mixes (rich in organic matter, well-drained) and regular pruning, they thrive in containers while offering aesthetic value, shade, and even natural fragrance for homes or workplaces.",
    },
    {
      question: "What pollinators are attracted to tropical bloomers?",
      answer:
        "Tropical bloomers attract a variety of pollinators that are vital for agriculture and biodiversity. Gudhal draws hummingbirds, bees, and butterflies with its large colorful blooms. Ashok’s clustered flowers invite honeybees and beetles. Bougainvillea, while not highly nectar-rich, still attracts butterflies due to its bright bracts. Heena’s small, fragrant flowers are popular with native bees and moths. These plants help create pollinator-friendly corridors, supporting nearby food crops and native vegetation. Insects visiting tropical bloomers aid in natural pest control and ecosystem balance, which is especially useful in mixed or agroforestry models.",
    },
    {
        question: "Can tropical bloomers tolerate saline or coastal conditions?",
        answer:
          "Yes, some tropical bloomers are well-suited for coastal or saline environments. Bougainvillea, in particular, tolerates salty winds and poor soil conditions, making it popular in coastal landscaping. Gudhal also performs reasonably well in such zones, though it benefits from organic mulching and wind protection. Heena has moderate tolerance to saline soils, while Ashok prefers more stable inland conditions. For farmers or landscapers near seashores or estuaries, these plants can be valuable in resisting erosion, adding beauty, and maintaining ecological health with minimal maintenance.",
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
