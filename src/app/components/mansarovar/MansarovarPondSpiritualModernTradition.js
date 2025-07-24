import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project7/banner.webp";

import Image from 'next/image';
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/projects/project7/bgimg.webp";
import image2 from "../../../assets/images/projects/project7/key.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project7/purpose.webp";
import first from "../../../assets/images/projects/project7/program-1.webp";
import second from "../../../assets/images/projects/project7/program-3.webp";
import third from "../../../assets/images/projects/project7/program-2.webp";
import fourth from "../../../assets/images/projects/project7/program-4.webp";
import InfoSection from '../InfoSection';


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
      {/* <Wave /> */}
    </>
  )
}



export const Pond = () => {
  const heading = "Key Details"
  const infoData = [
    {
      title: "Theme Index",
      description: "Shri. Mansarovar Pond",
    },
    {
      title: "Location Name",
      description: "Shri. Mansarovar",
    },
    {
      title: "Coordinates",
      description: `22°59'31.6"N 77°11'03.4"E`,
    },
    {
      title: "Area",
      description: "12,825 sq m (3 acres)",
    },

    {
      title: "Distance from Admin Block",
      description: "510 meters",
    },
  ];



  const GrowthHeading = "A Pond with Purpose";
  const GrowthDescription = `The Mansarovar Pond is more than just a water body—it’s the heart of the Atulye Krishi Vana agroforestry ecosystem. It:
     <ul class="list-disc list-inside py-3">
      <li>Harvests rainwater during monsoons</li>
      <li>Stores and supplies irrigation water to sustain plantations</li>
      <li>Provides boating space for visitors and guests</li>
      <li>Creates a calm, scenic environment that enriches the farm’s natural beauty</li>
     </ul>
     Its construction is a model of eco-engineering, aimed at long-term water sustainability and farm self-sufficiency.
  `


  return (
    <>

      <InfoSection heading={heading} image={image2} infoData={infoData} />

      {/* <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        GrowthDescription={GrowthDescription}
        GrowthDescription1={GrowthDescription1}
      /> */}

      <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
        <div className='mx-auto max-w-7xl  px-6'>
          <h2 className='text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] mb-8'>{GrowthHeading}</h2>
        </div>
        <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
          <div className='w-full md:w-2/3 text-center md:text-left'>

            <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
              <p className='text-white text-base md:text-[17px] text-left redhat' dangerouslySetInnerHTML={{ __html: GrowthDescription }}>
              </p>
            </div>
          </div>
          <div className='w-full md:w-1/3 text-center'>
            <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
          </div>

        </div>
      </section>

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
  const heading1 = "Modern Relevance & Environmental Value";

  const textoneData = {
    title: "Irrigation & Water Storage",
    listData: `<li>Collects rainwater, reducing dependency on groundwater.</li>
    <li>Provides a sustainable year-round irrigation source.</li>
    <li>Vital for trees, crops, and medicinal plantations at the farm.</li>`,
  };

  const texttwoData = {
    title: "Visual and Cultural Aesthetics",
    listData: `<li>Adds beauty and depth to the landscape.</li>
    <li>Acts as a peaceful setting for visitors and meditation.</li>`,
  };

  const textthirdData = {
    title: "Wildlife Habitat",
    listData: `
    <li>Attracts native birds, insects, and aquatic life.</li>
    <li>Supports biodiversity and acts as a mini-ecosystem.</li>`,
  };

  const textfourthData = {
    title: "Climate Moderation",
    listData: `
    <li>Helps regulate microclimate by cooling the surroundings.</li>
    <li>Improves air moisture, supporting plant health.</li>`,
  };
  return (
    <>

      <section className="py-0   md:py-0 technology-sec">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
          <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-black mt-4 text-center">
            {heading1}
          </h2>
        </div>
        <div className="mx-auto max-w-full  pt-10">
          <div className="grid gap-0 grid-cols-1  lg:grid-cols-12 items-center justify-center">
            <div className="md:col-span-3 col-span-12   h-full">
              <Image
                src={first}
                alt="icon"
                className="w-full mx-auto  h-full"
                quality={90}
              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 md:text-xl text-lg font-medium">
                  {textoneData.title}
                </p>
                <ul
                  className="w-2/2 text-base md:text-[17px] !list-disc pl-5 py-4 text-left"
                  dangerouslySetInnerHTML={{ __html: textoneData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12  h-full">
              <Image
                src={second}
                alt="icon"
                className="w-full mx-auto h-full"
              />
            </div>
            <div className="md:col-span-3 col-span-12  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 md:text-xl text-lg font-medium">
                  {texttwoData.title}
                </p>
                <ul
                  className="w-2/2 text-base md:text-[17px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: texttwoData.listData }}
                ></ul>
              </div>
            </div>

            <div className="md:col-span-3 col-span-12 order-6 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 md:text-xl text-lg font-medium">
                  {textthirdData.title}
                </p>
                <ul
                  className="w-2/2 text-base md:text-[17px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textthirdData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-5 lg:order-none    h-full">
              <Image src={third} alt="icon" className="w-full mx-auto h-full" />
            </div>
            <div className="md:col-span-3 col-span-12 order-8 lg:order-none  h-72 lg:h-full text-white bg-[#6D8C54] grid transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#000]">
              <div className="p-5">
                <p className="w-3/4 pl-5 py-3 md:text-xl text-lg font-medium">
                  {textfourthData.title}
                </p>
                <ul
                  className="w-2/2 text-base md:text-[17px] !list-disc pl-5 py-4"
                  dangerouslySetInnerHTML={{ __html: textfourthData.listData }}
                ></ul>
              </div>
            </div>
            <div className="md:col-span-3 col-span-12  order-7  lg:order-none  h-full">
              <Image
                src={fourth}
                alt="icon"
                className="w-full mx-auto h-full"
              />
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
      className="relative bg-no-repeat py-14   !mb-0 lg:py-32 bg-cover w-full my-8 md:my-16  "
      style={{ backgroundImage: `url(${PartnerBg.src})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>

      <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
        <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
          <h2 className=" w-full  text-3xl md:text-4xl leading-snug lg:text-[40px] font-semibold  mb-8 md:mb-10 redhat">
            {heading}
          </h2>
          <p
            className="mb-4 text-base  md:text-[17px]   w-full"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
      </div>
    </section>
  );
}
