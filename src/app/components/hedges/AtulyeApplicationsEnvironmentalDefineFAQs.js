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
import PartnerBg from "../../../assets/images/hedges/bgimg.webp";
import { FaqsLayout } from '../utilities/Cultivationgrowthwhychoose';
export const Atulye = () => {
  const heading = "Atulye Krishi Vana’s Support Services"
  const shortdescription = "We help farmers, landscape designers, community leaders, and planners integrate live hedges into their environments for both functional and decorative purposes."

  const boxslider = [
    {
      heading: "Certified Planting Material",
      description: "Healthy saplings, rooted cuttings, and ready-to-plant stocks."
    },
    {
      heading: "Layout Design",
      description: "Custom plans for borders, bunds, and demarcation lines."

    },
    {
      heading: "Training Programs",
      description: "Best practices for planting, pruning, pest management, and intercropping."

    },
    {
      heading: "Nursery Development Support",
      description: "For SHGs and entrepreneurs looking to propagate and sell hedge plants."

    },
    {
      heading: "Market Linkages",
      description: "Support to sell saplings or processed biomass (Subabul leaves, Alternanthera cuttings)."

    },
    {
      heading: "Ecological Planning",
      description: "Guidance for hedge integration in watershed, urban forestry, and green belt projects."

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
        heading: "Agriculture",
        description: 'Farm fencing, bund stabilization, crop protection',
      },
      {
        image: impact2,
        heading: "Urban Landscaping",
        description: 'Traffic medians, garden edges, decorative groundcover',
      },
      {
        image: impact3,
        heading: "Institutional Grounds",
        description: 'School gardens, government office landscaping',
      },
      {
        image: impact4,
        heading: "Eco-Tourism",
        description: "Green fencing in resorts, spas, nature parks"
      },
      {
        image: impact5,
        heading: "Public Works",
        description: "Highway plantation drives, stormwater barrier planting"
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
  const heading = "Environmental Benefits";
    const className = "slider_height height_300";

    const card = [
      {
        title: "Wind Reduction",
        description: "Subabul hedges break wind speed, protecting crops from lodging."
      },
      {
        title: "Dust Filtration",
        description: "Hedges act as natural air filters in polluted or dusty areas."
      },
      {
        title: "Temperature Buffering",
        description: "They help reduce heat around buildings and open fields."
      },
      {
        title: "Soil Moisture Retention",
        description: "Hedge roots reduce evaporation and keep soil stable."
      },
      {
        title: "Pollinator Corridors",
        description: "Continuous hedge lines support bees, butterflies, and small birds."
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


export const Define = () => {
  const heading = "Define Your Landscape with Purpose!";
  const description =
    "Whether you're a farmer seeking a protective fence, a designer building a low-maintenance garden, or a planner creating a green corridor—hedges offer a timeless solution. <br/>Subabul brings strength, resilience, and productivity. Alternanthera brings elegance, color, and form. Together, they demonstrate how green borders can offer both function and flair. <br/>At Atulye Krishi Vana, we offer the planting material, knowledge, and partnership to help you build hedges that last, support, and inspire.    <br/><br/> <b>Reclaim boundaries. Reshape land. Revive ecosystems. <br/> Let Atulye Krishi Vana help you grow living lines of life.</b>";

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
  const Faqheading = "Can Subabul be used for making biofencing or live barriers with multiple species?";
  const Faqdescription = `Yes, Subabul works exceptionally well in mixed-species live barriers. It can be combined with thorny shrubs like Jatropha or flowering hedges like Bougainvillea to enhance both defense and biodiversity. Subabul’s upright structure offers a vertical layer, while other species add texture, color, or physical deterrence. This combination reduces pest vulnerability, provides ecological layering, and improves the effectiveness of boundary planting. Mixed hedging also reduces the risk of monoculture failure and ensures year-round performance. Subabul acts as a fast-growing backbone, supporting slower-growing species and offering quick protection even in newly established plots.`;
  const FaqsData = [
    {
      question: "Is Alternanthera suitable for high-traffic or walkover areas in gardens?      ",
      answer:
        "Alternanthera is not ideal for walkover zones but works well as a border plant along high-traffic paths. It’s a delicate groundcover—best appreciated when undisturbed. Constant foot traffic can crush its foliage and reduce its vibrant appeal. However, it can be planted alongside paths with stepping stones or in raised beds to delineate walkways. In large public gardens, it helps guide pedestrian flow when used with low fencing. For more durable walkable green covers, species like grass or hardy sedges should be used. Alternanthera shines where visibility, not trampling, is the priority.",
    },
    {
      question:
        "How frequently should Subabul be pruned to maintain hedge form?",
      answer:
        "To maintain a hedge-like form, Subabul should be pruned 2 to 4 times a year, depending on rainfall and regional growth rates. Initial pruning when plants reach 1–1.5 meters promotes bushier growth. Afterward, regular topping encourages lateral branching and denser coverage. Pruning also reduces flowering, redirecting energy into foliage and thickness. In dry seasons, limit pruning to avoid stress. The trimmed biomass can be used as green fodder, mulch, or compost. Structured pruning not only improves hedge aesthetics but also strengthens the plant base, making it sturdier against wind or grazing.",
    },
    {
      question: " What is the best way to propagate Alternanthera for bulk plantation?",
      answer:
        " Alternanthera is best propagated using soft-stem cuttings. Choose healthy, non-woody shoots around 3–5 inches long and place them directly in moist, well-draining soil or nursery trays. Roots begin to form within 7–10 days. Large-scale propagation is cost-effective and fast, making it ideal for municipal planting drives or commercial nurseries. For best results, prepare beds with a mix of compost and sand. Keep the cuttings shaded initially and gradually expose them to sunlight. Alternanthera rarely seeds in cultivation, so vegetative propagation remains the preferred and most efficient method for bulk plantation.",
    },
    {
      question: "Do Subabul hedges attract or repel specific pests or animals?",
      answer:
        "Subabul can attract certain leaf-chewing insects and bruchid beetles, but it’s largely pest-resilient under good management. It’s not preferred by large herbivores, making it effective in protecting adjacent crops. Its dense foliage can serve as a shelter for beneficial predators like spiders and birds that reduce harmful insect populations. In agroforestry zones, its flowers can attract bees, enhancing nearby pollination. However, caution is advised if grown near pulse crops, as it may harbor some similar pests. Routine monitoring and integrated pest management (IPM) keep Subabul hedges healthy and productive.",
    },
    {
        question: "Can hedges like Subabul be legally used along government roads or boundaries?",
        answer:
          "Yes, but permissions may be required depending on the location. In rural panchayat or municipal areas, Subabul is often planted under greening schemes or MGNREGA works. However, along state or national highways, specific guidelines apply regarding plant height, visibility, and setback from the road. Subabul’s fast growth and structure can be modified through pruning to meet these norms. Planners and institutions should coordinate with horticulture or forest departments to ensure compliance. When approved, these hedges serve both as green barriers and as visual cues for roadsides and property demarcation.",
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
