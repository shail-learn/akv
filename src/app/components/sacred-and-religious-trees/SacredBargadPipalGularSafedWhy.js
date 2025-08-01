import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/digestive/key1.webp";
import key2 from "../../../assets/images/digestive/key2.webp";
import key3 from "../../../assets/images/digestive/key3.webp";
import key4 from "../../../assets/images/digestive/key4.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import circle2 from "../../../assets/images/digestive/circle2.webp";
import key5 from "../../../assets/images/digestive/key5.webp";
import key6 from "../../../assets/images/digestive/key6.webp";
import key7 from "../../../assets/images/digestive/key7.webp";
import key8 from "../../../assets/images/digestive/key8.webp";

import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";

export const Sacred = () => {
  const text = {
    banner: banner,
    heading: `Nurturing Spirituality, Ecology, and Heritage with Every Leaf`,

    title: 'India’s sacred trees are more than just botanical wonders—they are living representations of culture, religion, ecological stewardship, and social resilience. These species have been revered across centuries for their spiritual symbolism and healing properties, while also playing a vital role in sustaining biodiversity and microclimates. Temples, schools, villages, and homes across India have traditionally sheltered these trees at their heart.',
    opacity: 'opacity-50'
  }
  return (
    <>
      <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
      <Wave />
    </>
  )
}



export const Bargad = () => {
  const basketData = {
    note: "Under the Atulye Krishi Vana initiative, we promote the plantation of four sacred species: Bargad (Ficus benghalensis), Pipal (Ficus religiosa), Gular (Ficus racemosa), and Safed Chandan (Santalum album). These trees offer a harmonious blend of reverence, environmental value, and long-term utility.",
    image: info,
  };

  const main_heading = "Bargad (Ficus benghalensis)"
  const shortinfo = "<b>The Living Canopy of Community Wisdom</b> <br/> Known as the Banyan tree, Bargad is India’s national tree and often a symbol of unity, longevity, and wisdom. Its vast canopy and aerial roots create a natural gathering space."
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Longevity & Shade',
      description: "Lives for centuries and provides expansive shade."

    },
    {
      image: key2,
      title: 'Aerial Roots',
      description: "Creates a living complex structure beneficial for microhabitats."

    },
    {
      image: key3,
      title: 'Cultural Significance',
      description: "Worshipped during Vat Savitri and associated with Yama and Brahma."

    },
    {
      image: key4,
      title: 'Medicinal Use',
      description: "Bark, leaves, and roots used for ulcers, diabetes, and skin ailments."

    },

  ];

  const GrowthHeading = "Agro-Climatic Suitability";
  const slides = [
    {

      image: image1,
      desc: `Grows in a wide range of soils, from loamy to sandy, and tolerates drought and moderate salinity. It flourishes in tropical and subtropical climates with minimal maintenance once established.
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
      <Gridbox heading="Key Features" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}

        applicationsData={[
          "Ideal for temple grounds, school campuses, and parks",
          "Biodiversity hubs attracting birds, bats, and pollinators",
          "Soil-binding roots prevent erosion in degraded lands",
          "Cultural centers for community storytelling and rituals"
        ]}
      />

    </>
  )
}


export const Pipal = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Pipal (Ficus religiosa)"
  const shortinfo = `<b>The Tree of Enlightenment and Ecological Harmony</b> <br/> Pipal is perhaps India’s most sacred tree, associated with the enlightenment of the Buddha and venerated in Hinduism, Buddhism, and Jainism.`
  const whyChooseData = [
    {
      image: key5,
      title: 'Spiritual Icon',
      description: "Meditated under by saints; linked with Vishnu and Lakshmi."
    },
    {
      image: key6,
      title: 'Air Purifier',
      description: "Absorbs CO₂ and releases oxygen even at night."

    },
    {
      image: key7,
      title: 'Pollinator-Friendly',
      description: "Supports fig wasps and numerous insects."

    },
    {
      image: key8,
      title: 'Medicinal Use',
      description: "Bark and leaves used for asthma, ulcers, and heart conditions."

    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-Climatic Suitability";
  const slides = [
    {

      image: circle2,
      desc: `Requires full sun and grows well in deep alluvial or loamy soils. It is drought-resistant, making it suitable for urban greening and rural landscapes alike.`,
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
      <Gridbox heading="Key Features" data={whyChooseData} className={custom_class} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
        applicationsData={[
          "Sacred groves, temple corridors, and meditation gardens",
          "Urban oxygen parks and biodiversity corridors",
          "Boundary planting for ecological restoration zones",
          "Ethnobotanical gardens and spiritual tourism circuits"
        ]}
      />

    </>
  )
}


export const Gular = () => {
  const main_heading = "Gular (Ficus racemosa)"
  const shortinfo = "<b>The Fruitful Link Between Nature and Tradition</b> <br/> Gular is a lesser-known yet culturally rooted tree, often considered sacred in Ayurveda and village folklore. Its multiple-trunk form and fruit-bearing capacity make it ecologically valuable."
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const whyChooseData = [

    {
      image: key1,
      title: 'Fruit for All',
      description: "Figs provide food for birds, monkeys, and rural communities."

    },
    {
      image: key2,
      title: 'Ayurvedic Power',
      description: "Bark and fruit used for diarrhea, diabetes, and dental care."

    },
    {
      image: key3,
      title: 'Shade Provider',
      description: "Grows into a lush tree with wide coverage."

    },
    {
      image: key4,
      title: 'Ecological Ally',
      description: "Attracts pollinators and improves soil fertility."

    },

  ];

  const GrowthHeading = "Agro-Climatic Suitability";
  const slides = [
    {

      image: image1,
      desc: `Gular grows well in tropical to sub-temperate climates, prefers moist, fertile soils, and is ideal for riverbanks, wetlands, and open fields. `,

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
      <Gridbox heading="Key Features" data={whyChooseData} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}

        applicationsData={[
          "Integration into agroforestry for fruit and shade",
          "Revival of community groves and ancient wells",
          "Support for pollinator corridors and animal foraging",
          "Ayurvedic gardens and public health plantations"
        ]}
      />

    </>
  )
}



export const Safed = () => {
  const gridBox = "xl:!grid-cols-4 custom_height1"
  const custom_class = "white_grid grid_padding"
  const main_heading = "Safed Chandan (Santalum album)"
  const shortinfo = `<b>The Sacred Scent of Purity and Healing</b> <br/> Safed Chandan, or white sandalwood, is synonymous with purity, fragrance, and spiritual use in Indian rituals and ayurvedic formulations.`
  const whyChooseData = [
    {
      image: key5,
      title: 'High Economic Value',
      description: "One of the most valuable tree species per kg."
    },
    {
      image: key6,
      title: 'Cultural Relevance',
      description: "Used in pujas, rituals, and temple construction."

    },
    {
      image: key7,
      title: 'Medicinal Uses',
      description: "Antiseptic, cooling, and anti-inflammatory properties."

    },
    {
      image: key8,
      title: 'Aromatic Wood',
      description: "Heartwood yields essential oil for perfumes and incense."

    },

  ];

  const custom_class1 = "growth_white"
  const GrowthHeading = "Agro-Climatic Suitability";
  const slides = [
    {

      image: circle2,
      desc: `Chandan grows in semi-arid to humid climates with red loam or well-drained soil. It is a semi-parasitic plant and needs a host plant (like Pongamia or Cassia) for successful establishment.`,
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
      <Gridbox heading="Key Features" data={whyChooseData} className={custom_class} gridBox={gridBox} />

      <GrowthSlider
        GrowthHeading={GrowthHeading}
        slides={slides}
        className={custom_class1}
        applicationsData={[
          "Revenue-generating plantation for long-term wealth",
          "Ritual and cosmetic product supply chains",
          "Intercropping in agroforestry systems",
          "Sacred plant in temple complexes and forest temples"
        ]}
      />

    </>
  )
}


export const Why = () => {
  const heading = "Why Grow Sacred Trees with Atulye Krishi Vana?"
  const fruitData = [
    {
      title: "Ecological Conservation with Spiritual Harmony",
      image: choose1,
      flip: "These species enhance biodiversity, sequester carbon, and improve soil while upholding spiritual traditions."
    },
    {
      title: "Low Maintenance, High Impact",
      image: choose2,
      flip: "Once established, these trees thrive with minimal care and provide long-term benefits like fruits, medicine, and shade."
    },
    {
      title: "Cultural Preservation",
      image: choose3,
      flip: "Revive dying practices like sacred groves, tree-based rituals, and community storytelling under traditional trees."
    },
    {
      title: "Educational & Wellness Integration",
      image: choose4,
      flip: "Ideal for use in healing gardens, school heritage plantations, and cultural walks."
    },
    {
      title: "Climate Resilience",
      image: choose4,
      flip: "Ficus species and sandalwood endure extreme temperatures and drought, making them climate-smart choices."
    },


  ];
  return (
    <>
      <Productlist heading={heading} fruitData={fruitData} />

    </>
  )
}
