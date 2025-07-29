import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/functional/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/functional/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/functional/key1.webp";
import key2 from "../../../assets/images/functional/key2.webp";
import key3 from "../../../assets/images/functional/key3.webp";
import key4 from "../../../assets/images/functional/key4.webp";
import image1 from "../../../assets/images/functional/circle1.webp";
import circle2 from "../../../assets/images/functional/circle2.webp";
import key5 from "../../../assets/images/functional/key5.webp";
import key6 from "../../../assets/images/functional/key6.webp";
import key7 from "../../../assets/images/functional/key7.webp";
import key8 from "../../../assets/images/functional/key8.webp";

export const Functional = () => {
  const text = {
    banner: banner,
    heading: `Celebrating Utility, Culture, and Ecology through Native and Purposeful Palms`,
    title: 'Palms are not just ornamental—they have long served functional, ecological, and cultural roles in India’s landscapes. From providing shade and materials to bearing fruit and marking sacred spaces, native and utility palms connect communities to the land while offering climate resilience and economic value. ',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      <Wave />
    </>
  )
}



export const Bajarbattu = () => {
  const basketData = {
    note: "Under the Atulye Krishi Vana initiative, we promote the plantation and preservation of functional and native palm species, especially the Bajarbattu / Talipot Palm (Corypha umbraculifera) and the Date Palm (Phoenix dactylifera). These species reflect traditional knowledge, ecological importance, and multi-use versatility suitable for drylands, agroforestry, and cultural landscaping.",
    image: info,
  };

  const main_heading = "Bajarbattu / Talipot Palm (Corypha umbraculifera)"
  const shortinfo = "<b>The Cultural Giant with a One-Time Bloom</b> <br/> Talipot Palm is one of the tallest and most striking native palms in India, known for its massive fan-shaped leaves and a single flowering event late in life. Culturally revered in temple compounds and traditional spaces, it provides materials, shelter, and biodiversity support over decades."
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Massive Fan Leaves',
      description: "Used in making umbrellas, mats, fans, and thatching."

    },
    {
      image: key2,
      title: 'Cultural Symbol',
      description: "Planted in temples and ritual spaces for its sacred association."

    },
    {
      image: key3,
      title: 'Wildlife Habitat',
      description: "Supports birds, insects, and epiphytes during its long lifecycle."

    },
    {
      image: key4,
      title: 'Single Bloom',
      description: "Flowers once after decades, producing thousands of seeds."

    },

  ];

  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {

      image: image1,
      desc: `Thrives in humid and semi-humid tropical climates. Requires well-drained fertile soil and benefits from moderate watering. Native to southern India, it grows well in Kerala, Tamil Nadu, Karnataka, and coastal Andhra Pradesh.`,

    },

  ];

  return (
    <>

      <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
          <div className="flex flex-col-reverse justify-between lg:flex-row  items-center gap-8">
            <div className="w-full md:w-1/2">
              <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: basketData.note }} ></p>
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

      <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}

        applicationsData={[
          "Shade tree in temple gardens and heritage parks",
          "Source of sustainable leaf products in rural livelihoods",
          "Biodiversity anchor in native forest restoration projects",
          "Statement planting in spiritual or cultural tourism zones"
        ]}
      />

    </>
  )
}



export const Date = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Date Palm (Phoenix dactylifera)"
  const shortinfo = `<b>The Desert’s Sweet Survivor</b> <br/> Renowned for its edible fruit and drought tolerance, the Date Palm is both a symbol of prosperity and a model of sustainable agriculture in arid and semi-arid regions. With deep cultural roots in western and northern India, it also serves as an ornamental and agroforestry species.`
  const whyChooseData = [
    {
      image: key5,
      title: 'Edible Dates',
      description: "Nutritious fruit harvested for local markets and home use."
    },
    {
      image: key6,
      title: 'Drought Resilience',
      description: "Deep roots and low water needs make it ideal for drylands."

    },
    {
      image: key7,
      title: 'Cultural Presence',
      description: "Associated with traditional festivals and desert communities."

    },
    {
      image: key8,
      title: 'Ornamental Form',
      description: "Elegant appearance fits well in urban dryland landscaping."

    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {

      image: circle2,
      desc: `Best suited for hot, arid regions with long dry summers and low humidity. Grows well in sandy, well-drained soils. Cultivated widely in Gujarat, Rajasthan, Punjab, and dry zones of Maharashtra.`,
    },



  ];

  return (
    <>
      <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
        <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
          <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
            {main_heading}
          </h2>
          <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
        </div>
      </section>
      <Gridbox heading="Key Benefits" data={whyChooseData} className={custom_class} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
        applicationsData={[
          "Fruit-bearing plant in desert and semi-desert farming systems",
          "Landscape element in dry urban areas, traffic islands, and civic parks",
          "Plantation in agroforestry models with legumes and millets",
          "Shade and wind protection in harsh sun-exposed locations"
        ]}
      />

    </>
  )
}
