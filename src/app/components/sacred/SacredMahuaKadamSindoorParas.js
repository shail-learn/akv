import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/sacred/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/sacred/key1.webp";
import key2 from "../../../assets/images/sacred/key2.webp";
import key3 from "../../../assets/images/sacred/key3.webp";
import key4 from "../../../assets/images/sacred/key4.webp";
import image1 from "../../../assets/images/sacred/circle1.webp";
import circle2 from "../../../assets/images/sacred/circle2.webp";
import key5 from "../../../assets/images/sacred/key5.webp";
import key6 from "../../../assets/images/sacred/key6.webp";
import key7 from "../../../assets/images/sacred/key7.webp";
import key8 from "../../../assets/images/sacred/key8.webp";

import circle3 from "../../../assets/images/sacred/circle3.webp";
import circle4 from "../../../assets/images/sacred/circle4.webp";

import key9 from "../../../assets/images/sacred/key9.webp";
import key10 from "../../../assets/images/sacred/key10.webp";
import key11 from "../../../assets/images/sacred/key11.webp";
import key12 from "../../../assets/images/sacred/key12.webp";

import key13 from "../../../assets/images/sacred/key13.webp";
import key14 from "../../../assets/images/sacred/key14.webp";
import key15 from "../../../assets/images/sacred/key15.webp";
import key16 from "../../../assets/images/sacred/key16.webp";

export const Sacred = () => {
  const text = {
    banner: banner,
    heading: `Preserving Heritage, Ecology, and Livelihoods through Living Tradition`,

    title: 'India’s landscape is richly interwoven with trees that carry sacred and cultural significance. These species are not only admired for their beauty or ecological benefits, but deeply respected as custodians of age-old traditions, spiritual rites, and rural livelihoods. Across villages and tribal belts, these trees stand as silent witnesses to ceremonies, festivals, medicinal practices, and community gatherings.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      <Wave />
    </>
  )
}


export const Mahua = () => {
  const basketData = {
    note: "Under the Atulye Krishi Vana initiative, we actively promote the plantation of sacred and culturally revered trees such as Mahua (Madhuca longifolia), Kadam (Neolamarckia cadamba), Sindoor (Bixa orellana), and Paras Peepal/Poovarasu (Thespesia populnea). These species embody India’s ecological spirit and cultural continuity while also supporting sustainable rural economies.",
    image: info,
  };

  const main_heading = "Mahua (Madhuca longifolia)"
  const shortinfo = "<b>The Tribal Tree of Nourishment and Ritual</b> <br/> Mahua is one of the most revered trees in Central and Eastern India, especially among tribal communities. Almost every part of the tree is used—flowers for food and fermented liquor, seeds for oil, and bark for medicine. "
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Multi-Purpose Use',
      description: "Edible flowers, oil seeds, fuelwood, and medicine"

    },
    {
      image: key2,
      title: 'Cultural Role',
      description: "Worshipped during Sarhul and Karma festivals"

    },
    {
      image: key3,
      title: 'Nutrient Source',
      description: "Rich in sugars, fats, and vitamins"

    },
    {
      image: key4,
      title: 'Livelihood Base',
      description: "Central to forest-based tribal economies"

    },

  ];

  const GrowthHeading = "Agro-Climatic Suitability";
  const slides = [
    {

      image: image1,
      desc: `Mahua thrives in tropical and sub-tropical regions with dry deciduous forests. It tolerates poor soil, drought, and high temperatures, making it suitable for central and western Indian landscapes.
        `,

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
          "Agroforestry models and mixed cropping systems",
          "Flower collection and distillation units",
          "Women-led SHG processing of oil and food products",
          "Forest regeneration and drought-prone area restoration"
        ]}
      />

    </>
  )
}


export const Kadam = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Kadam (Neolamarckia cadamba)"
  const shortinfo = `<b>The Fragrant Companion of Lord Krishna</b> <br/> Often associated with Lord Krishna’s childhood tales, the Kadam tree is admired for its fragrant, globe-shaped flowers and dense foliage.`
  const whyChooseData = [
    {
      image: key5,
      title: 'Religious Symbolism',
      description: "Featured in Bhagavata Purana; revered in Janmashtami festivities"
    },
    {
      image: key6,
      title: 'Ornamental Beauty',
      description: "Yellow-orange ball-like flowers"

    },
    {
      image: key7,
      title: 'Pollinator Magnet',
      description: "Attracts bees and butterflies"

    },
    {
      image: key8,
      title: 'Fast Growth',
      description: "Provides quick canopy for shade"

    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {

      image: circle2,
      desc: `Kadam grows best in moist, tropical climates with well-drained alluvial soils. It is suitable for plantation in coastal belts, urban landscapes, and water-adjacent zones.`,
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
          "Avenue and institutional planting",
          "Cultural parks and festival gardens",
          "Pollinator corridors and biodiversity projects",
          "Rain-fed agroforestry and erosion-prone zones"
        ]}
      />

    </>
  )
}



export const Sindoor = () => {
  const main_heading = "Sindoor (Bixa orellana)"
  const shortinfo = "<b>The Tree of Natural Color and Ritual Identity</b> <br/> Known as the source of vermilion (kumkum or sindoor), this small tree bears vibrant red seed coats used in religious and cosmetic applications."
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const whyChooseData = [

    {
      image: key9,
      title: 'Natural Dye',
      description: "Seeds yield annatto, used in food and cosmetics"

    },
    {
      image: key10,
      title: 'Cultural Importance',
      description: "Kumkum for tilak and sindoor traditions"

    },
    {
      image: key11,
      title: 'Antioxidant-rich',
      description: "Seeds used in herbal formulations"

    },
    {
      image: key12,
      title: 'Ornamental Shrub',
      description: "Bright foliage and distinctive seed pods"

    },

  ];

  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {

      image: circle3,
      desc: `Sindoor prefers warm, humid climates and well-drained soils. It grows well in sub-tropical and tropical regions with partial shade or full sun.
        `,

    },

  ];

  return (
    <>
      <section className="py-16  px-4 md:px-8 md:pt-20 lg:px-16 bg-[#1B453C] text-center">
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
          "Women’s collectives for sindoor production",
          "Natural dye units for textiles and food industry",
          "School gardens and religious plantation drives",
          "Value-added cosmetic and herbal product chains"
        ]}
      />

    </>
  )
}


export const Paras = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Paras Peepal / Poovarasu (Thespesia populnea)"
  const shortinfo = `<b>Sacred Shade of Temples and Coasts</b> <br/> This medium-sized evergreen tree is native to coastal and riverine areas and is known for its spiritual presence and environmental strength.`
  const whyChooseData = [
    {
      image: key13,
      title: 'Temple Tree',
      description: "Planted in coastal shrines across South India"
    },
    {
      image: key14,
      title: 'Environmental Resilience',
      description: "Salt-tolerant and wind-resistant"

    },
    {
      image: key15,
      title: 'Traditional Uses',
      description: "Bark and flowers used in Ayurveda and folk medicine"

    },
    {
      image: key16,
      title: 'Coastal Protector',
      description: "Prevents soil erosion and supports marine biodiversity"

    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-climatic Suitability";
  const slides = [
    {

      image: circle4,
      desc: `Paras Peepal flourishes in saline, sandy soils and high-humidity coastal belts. It also grows inland under warm, tropical climates.`,
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
          "Coastal shelterbelts and windbreaks",
          "Temple boundary greening and ritual groves",
          "Ayurvedic gardens and shoreline landscaping",
          "Climate resilience and disaster risk reduction"
        ]}
      />

    </>
  )
}
