import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Mansarovar = () => {
    const text = {
        banner: banner,
        heading: `Shri. Mansarovar Pond – A Sacred Source of Life and Sustainability`,

        title: 'Spread across 3 acres (12,825 sq m) in Kh-112, Shri. Mansarovar Pond is one of the most essential and symbolic features of Atulye Krishi Vana. Located just 510 meters from the Admin Block, it serves as both a rainwater harvesting reservoir and a recreational site. With its dual function—supporting irrigation and offering boating activities—Mansarovar Pond combines traditional water conservation wisdom with modern agroforestry needs.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Pond = () => {
    const basketData = {
        note: `
        Theme Index: Shri. Mansarovar Pond <br/>
        Location Name: Shri. Mansarovar <br/>
        Coordinates: 22°59'31.6"N 77°11'03.4"E <br/>
        Area: 12,825 sq m (3 acres) <br/>
        Distance from Admin Block: 510 meters
        `,
        image: info,
    };

    const GrowthHeading = "A Pond with Purpose";
    const GrowthDescription = "The Mansarovar Pond is more than just a water body—it’s the heart of the Atulye Krishi Vana agroforestry ecosystem. It:"
    const slides = [
        {
            image: image1,
            title: "Harvests rainwater during monsoons",
        },
        {
            image: image1,
            title: "Stores and supplies irrigation water to sustain plantations",
        },
        {
            image: image1,
            title: "Provides boating space for visitors and guests",
        },
        {
            image: image1,
            title: "Supports biodiversity, attracting birds and aquatic life",
        },
        {
            image: image1,
            title: "Creates a calm, scenic environment that enriches the farm’s natural beauty",
        },

    ];

    const GrowthDescription1 = "Its construction is a model of eco-engineering, aimed at long-term water sustainability and farm self-sufficiency."

    return (
        <>

            <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
                        <div className="w-full md:w-1/2">
                            <h2 className='text-white text-2xl md:text-3xl font-medium mb-6'>Key Details</h2>
                            <p className="mt-0 md:mt-4 text-white redhat" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
                        </div>
                        <div className="w-full md:w-[40%]">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src={basketData.image}
                                    alt="Basket of fruits and vegetables"
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-auto"
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
                GrowthDescription1={GrowthDescription1}
            />

        </>
    )
}


export const Spiritual = () => {
    const heading = "Spiritual & Historical Inspiration"
    const shortdescription = 'By naming the pond "Mansarovar," Atulye Krishi Vana honors these faiths and acknowledges the deep connection between water, life, and spirituality.'

    const boxslider = [
      {
        heading: "Hinduism",
        description: "Considered a divine lake where Lord Shiva and Goddess Parvati reside. The Kailash Mansarovar Yatra is one of the most sacred pilgrimages in Hinduism."
      },
      {
        heading: "Buddhism",
        description: "Revered as the site where the Wheel of Dharma first turned. Believed to be home to celestial beings."

      },
      {
        heading: "Jainism",
        description: "Linked with Lord Rishabhanatha, the first Tirthankara. A place for divine experience and reflection."

      },
      {
        heading: "Bon Religion",
        description: "Seen as the origin of the universe and sacred ground in Tibetan spiritual tradition."

      },

    ]
    return (
        <>

    <Titleslider heading={heading} boxslider={boxslider} shortdescription={shortdescription} />

        </>
    )
}



export const Modern = () => {
    const heading = "Modern Relevance & Environmental Value"
    const class2 = "blurheight"

    const boxslider = [
        {
          image: impact1,
          heading: "Irrigation & Water Storage   ",
          description: [
            "Collects rainwater, reducing dependency on groundwater",
            "Vital for trees, crops, and medicinal plantations at the farm",

          ]
        },
        {
          image: impact1,
          heading: "Boating & Recreation",
          description: [
            "Offers safe, serene boating experiences for guests",
            "Blends leisure with learning in a natural environment"
          ]
        },
        {
          image: impact1,
          heading: "Wildlife Habitat",
          description: [
            "Attracts native birds, insects, and aquatic life",
            "Supports biodiversity and acts as a mini-ecosystem"

          ]
        },
        {
          image: impact1,
          heading: "Climate Moderation",
          description: [
            "Helps regulate microclimate by cooling the surroundings",
            "Improves air moisture, supporting plant health"
          ]
        },
        {
            image: impact1,
            heading: "Visual and Cultural Aesthetics",
            description: [
              "Adds beauty and depth to the landscape",
              "Acts as a peaceful setting for visitors and meditation"
            ]
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




export const Tradition = () => {
    const heading = "From Tradition to Transformation";
    const description =
      "The vision for this pond came from ancient Indian wisdom — community-based water bodies that not only supported agriculture but also nourished community bonds and local ecology. Atulye Krishi Vana carries this legacy into the future, using the pond as a living model for ecological farming, water wisdom, and spiritual grounding. <br/> Shri. Mansarovar Pond is more than a functional asset — it is a living symbol of balance, bridging our spiritual past with sustainable progress. It supports agriculture, enriches biodiversity, enhances beauty, and reminds every visitor of the sacredness of water. <br/> At Atulye Krishi Vana, we believe that every drop of water tells a story, and Mansarovar is where those stories flow — deeply, silently, and meaningfully.      ";

    return (
      <section
        className="relative bg-no-repeat py-14 mt-10 lg:py-32 bg-cover w-full my-8 md:my-12  "
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
