import React from 'react'
import { FaqSlider } from '../FaqSlider';
import Titleslider from '../Titleslider';
import { MdCheckCircle } from "react-icons/md";
import Image from 'next/image';
import Plant from "../../../assets/images/eco/future.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Atulye = () => {
  const heading = "Atulye Krishi Vana’s Support Ecosystem";
    const title= "We provide a culturally-sensitive and ecologically sound approach to sacred tree cultivation across India."
    const subtitle = "Our Services Include:"
    const className = "slider_height height_300";

    const card = [
      {
        title: "Heritage Sapling Supply",
        description: "Rare, disease-free saplings of sacred trees"
      },
      {
        title: "Intercropping Plans",
        description: "Compatible planting designs with host species"
      },
      {
        title: "Community Engagement Kits",
        description: "Festival kits and educational signage"
      },
      {
        title: "School & Temple Modules",
        description: "DIY plantation drives and spiritual tree trails"
      },
      {
        title: "Revenue Planning",
        description: "For sandalwood and fruit-bearing tree monetization"
      },
      {
        title: "Soil & Site Selection",
        description: "Geotagging, pit design, and seasonal advisories"
      },


    ];
    return (
      <>
        <FaqSlider
          classname={className}
          className="shailendra"
          card={card}
          heading={heading}
          title1={title}
          subtitle={subtitle}
        />
      </>
    );
}


export const Application = () => {
  const heading = "Application Use Cases Across Sectors"

    const boxslider = [
        {
            heading: "Religious Institutions",
            description: "Temple compounds, ashram plantations, puja tree belts"
        },
        {
            heading: "Urban Municipalities",
            description: "Spiritual parks, heritage corridors, oxygen zones"

        },
        {
            heading: "Schools & Colleges",
            description: "Culture gardens, wellness campuses, botany trails"

        },
        {
            heading: "FPOs & SHGs",
            description: "Sandalwood-based agroforestry and crafts"

        },
        {
            heading: "Tourism & Culture",
            description: "Spiritual trails, Ayurvedic wellness resorts"

        },


    ]
    return (
        <>
            <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}



export const Cultural = () => {
  const heading = `Cultural, Ecological & Medicinal Significance`

  const futurePlans = [
    `<b>Bargad  –</b> Symbol of strength and longevity; habitat for 100+ species`,
    `<b>Pipal –</b> Enhances urban air quality; night oxygen release`,
    `<b>Gular –</b> Famine food source; fig-based nutrition for animals`,
    `<b>Poovarasu –</b> High-value wood; sacred in Hindu, Jain, and Buddhist rituals`,

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


export const Grow = () => {
  const heading = "Grow Devotion, Ecology, and Livelihood Together";
    const description =
      "Sacred trees are timeless guardians of India’s soil, spirit, and society. They carry the breath of gods and the roots of generations past. In replanting them, we restore a way of life. <br/><br/> Atulye Krishi Vana invites temples, communities, schools, and ecopreneurs to revive this sacred heritage. Let every village have its pipal, every temple its chandan, and every courtyard its gular. <br/><br/> <b>Plant a tree, preserve a tradition, protect the planet.</b>";
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
    "Why are sacred trees important for rural communities beyond religious value?";
  const Faqdescription = `Sacred trees like Bargad, Pipal, and Gular offer shade, nutrition, and ecological benefits, making them essential in rural landscapes. They act as informal gathering spots, support local biodiversity, and improve soil quality. Trees like Chandan provide long-term economic returns. Their cultural significance encourages communities to protect them, promoting conservation by default. In rural India, these trees are often linked to festivals, rituals, and social events, weaving environmental care into daily life. Their spiritual relevance ensures they’re respected and rarely cut, making them ideal for long-term sustainability in village ecosystems.`;
  const FaqsData = [
    {
      question: "What are the benefits of planting Bargad in school or temple campuses?",
      answer:
        "Bargad (Banyan tree) offers expansive shade, making it perfect for courtyards, temple grounds, and school yards. Its large canopy fosters a natural classroom environment, encouraging storytelling, study circles, and traditional learning methods. It’s a habitat for birds, bats, and pollinators, turning a plain space into a living ecosystem. Its deep cultural association with strength, wisdom, and shelter makes it a symbolic centerpiece. Additionally, planting Bargad fosters patience and legacy-building, as it thrives for centuries. Students and devotees alike benefit from its cooling environment and the continuity it brings across generations.",
    },
    {
      question:
        "How does Pipal help in improving air quality in urban areas?",
      answer:
        "Pipal (Ficus religiosa) is known for releasing oxygen even at night due to its Crassulacean Acid Metabolism (CAM)-like properties. This makes it an excellent tree for improving air quality, especially in polluted cities. Its wide leaves trap dust and particulate matter, while its large surface area supports transpiration and cooling. Urban planners and municipal bodies increasingly use Pipal in spiritual parks and oxygen corridors. Apart from its environmental benefits, its sacred status ensures that it is protected, which is a bonus in city environments where tree felling is common.",
    },
    {
      question: "Is Safed Chandan profitable to grow on private or community land?",
      answer:
        "Yes, Safed Chandan (Santalum album) is highly profitable. After 12–15 years, mature trees yield heartwood that is valuable in the perfumery, cosmetic, and ritual markets. A single tree can fetch thousands of rupees, especially when cultivated legally with proper documentation. It can be intercropped with host plants like Pongamia, Cassia, or neem, making use of space efficiently. Community plantations managed by SHGs or FPOs can generate significant income. Additionally, Chandan wood and oil are in demand both in domestic and international markets, making it a high-value agroforestry option.",
    },
    {
      question: "What permissions are needed to grow and harvest Sandalwood legally in India?",
      answer:
        "Sandalwood cultivation is regulated due to its high value and risk of illegal harvesting. However, many states like Karnataka, Tamil Nadu, and Maharashtra have relaxed rules, allowing farmers to grow and harvest Safed Chandan on private land. Registration with the Forest Department is often required, and harvest must be declared and supervised by officials. Farmers can sell through authorized channels or to licensed buyers. Atulye Krishi Vana assists cultivators with documentation, host pairing, and legal compliance, ensuring the process is transparent, traceable, and profitable for long-term growers.",
    },
    {
        question: "Can these sacred trees be part of climate resilience projects?",
        answer:
          "Absolutely. Bargad and Pipal have deep root systems that stabilize soil, prevent erosion, and retain groundwater. Their broad canopies offer shade, reduce heat stress, and moderate local temperatures—essential during heatwaves. Gular supports pollinators and fruit-eating animals, improving biodiversity. Chandan adds value with drought tolerance and low maintenance needs. These species are ideal for afforestation, riverbank restoration, urban greening, and climate-smart agriculture. Their cultural importance also ensures they are more likely to be preserved and maintained by local communities, adding a social resilience layer to environmental projects.",
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
