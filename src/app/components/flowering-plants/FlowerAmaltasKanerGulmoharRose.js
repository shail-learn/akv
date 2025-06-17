import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/plants/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/digestive/key1.webp";
import key2 from "../../../assets/images/plants/key2.webp";
import key3 from "../../../assets/images/plants/key3.webp";
import key4 from "../../../assets/images/plants/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/digestive/image1.webp";

import circle2 from "../../../assets/images/digestive/circle2.webp";
import key5 from "../../../assets/images/plants/key5.webp";
import key6 from "../../../assets/images/plants/key6.webp";
import key7 from "../../../assets/images/plants/key7.webp";
import key8 from "../../../assets/images/plants/key8.webp";

import key9 from "../../../assets/images/plants/key9.webp";
import key10 from "../../../assets/images/plants/key10.webp";
import key11 from "../../../assets/images/plants/key11.webp";
import key12 from "../../../assets/images/plants/key12.webp";
import circle3 from "../../../assets/images/digestive/circle3.webp";

import key13 from "../../../assets/images/plants/key13.webp";
import key14 from "../../../assets/images/plants/key14.webp";
import key15 from "../../../assets/images/plants/key15.webp";
import key16 from "../../../assets/images/plants/key16.webp";
import circle4 from "../../../assets/images/plants/circle4.webp";
import circle02 from "../../../assets/images/plants/circle2.webp";




export const Flower = () => {
    const text = {
        banner: banner,
        heading: `Ornamental Plants`,
        subtitle:"Beautifying Landscapes, Supporting Biodiversity,  & Enriching Agroforestry",
        title: 'Beyond food and medicine, flowering and ornamental plants play a critical role in agroforestry, ecological restoration, and aesthetic landscaping. They attract pollinators, improve soil stability, support microclimates, and elevate the visual and cultural appeal of a landscape',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Amaltas = () => {
    const basketData = {
        note: "India’s native flowering trees and ornamentals have long been valued not just for their beauty but also for their symbolism, environmental benefits, and economic potential. <br/> Under the Atulye Krishi Vana initiative, we promote the cultivation of flowering plants such as Amaltas (Cassia fistula), Kaner (Nerium oleander), Gulmohar (Delonix regia), and Red Rose (Rosa sp.). These species are well-suited to Indian agro-climatic zones, and their cultivation brings together environmental sustainability, cultural expression, and livelihood enhancement.",
        image: info,
    };

    const main_heading = "Amaltas (Cassia fistula)"
    const shortinfo = "<b>The Golden Shower Tree</b> <br/> Amaltas, also known as the Indian Laburnum, is a medium-sized deciduous tree famed for its bright yellow, cascading flower clusters. Native to the Indian subcontinent, it is widely grown along roadsides, gardens, and parks for its ornamental value. Amaltas is also culturally significant, being the state flower of Kerala, and finds mention in classical Indian literature and festivals."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key1,
        title: 'Aesthetic Appeal: Brilliant golden blooms make it a standout in public and private landscapes.',

      },
      {
        image: key2,
        title: 'Pollinator Attractor: Supports bees and butterflies, enhancing local biodiversity.',
      },
      {
        image: key3,
        title: 'Drought-Tolerant: Requires minimal irrigation once established.',
      },
      {
        image: key4,
        title: 'Medicinal Properties: Known in Ayurveda for its laxative and detoxifying effects.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: image1,
        desc: `Amaltas thrives in tropical and subtropical climates with well-drained, sandy or loamy soils. It tolerates high temperatures and dry conditions, making it an excellent choice for water-scarce areas. <br/><br/> Amaltas wood is used in small furniture and crafts, while the bark and pods have demand in herbal medicine. Its flowers are also used in religious and ceremonial offerings. Landscaping contracts, nursery sales, and highway greening programs offer steady revenue channels.`,

      },

    ];

    return (
        <>

            <section className="py-12 md:!pt-0  px-4 md:px-8 lg:px-16 bg-[#1B453C]">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className="flex flex-col-reverse justify-between lg:flex-row   gap-8">
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
      />

        </>
    )
}


export const Kaner = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Kaner (Nerium oleander)"
    const shortinfo = `<b>The Hardy Beauty</b> <br/> Kaner is a tough and fast-growing evergreen shrub or small tree adorned with bright pink, white, or yellow flowers. It is ideal for ornamental hedges, boundary walls, and flowering screens. Despite its mild toxicity, it is widely used for its hardiness, long blooming period, and ease of maintenance.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Extended Blooming Season: Flowers almost year-round in favorable climates.',
      },
      {
        image: key6,
        title: 'Pest Resistance: Naturally resistant to most common pests and diseases.',
      },
      {
        image: key7,
        title: 'Windbreak and Screening: Dense foliage acts as a barrier in windy or exposed areas.',
      },
      {
        image: key8,
        title: 'Low Maintenance: Requires minimal care, pruning, and water.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle02,
        desc: `Kaner is highly adaptable to poor soils, saline conditions, and high heat. It can be cultivated in tropical, subtropical, and even arid zones, thriving in full sun and tolerating partial shade. <br> <br> Popular in landscaping, housing developments, and municipal beautification projects. Its high survival rate and low input cost make it attractive for mass plantation drives. Kaner saplings and cuttings are in consistent demand across urban and rural nurseries.`,
      },



    ];

    return (
      <>
        <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
          <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
              {main_heading}
            </h2>
            <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
          </div>
        </section>
        <Gridbox heading="Key Benefits" data={whyChooseData} className={custom_class} gridBox={gridBox} />

        <GrowthSlider
          GrowthHeading={GrowthHeading}
          slides={slides}
          className={custom_class1}
        />

      </>
    )
}


export const Gulmohar = () => {
    const main_heading = "Gulmohar (Delonix regia)"
    const shortinfo = "<b>The Flame of the Forest</b> <br/> Gulmohar is one of the most admired flowering trees globally, known for its flamboyant red-orange flowers and wide-spreading canopy. Native to Madagascar and widely naturalized in India, it is ideal for avenue plantation, institutional campuses, and ornamental parks."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key9,
        title: 'Spectacular Flowering: Striking red-orange blossoms cover the entire tree in late spring.',

      },
      {
        image: key10,
        title: 'Soil Enrichment: A nitrogen-fixing species that improves soil fertility.',
      },
      {
        image: key11,
        title: 'Shade Provider: Its umbrella-shaped canopy offers ample shade in summer.',
      },
      {
        image: key12,
        title: 'Bird Habitat: Supports nesting and roosting for many native bird species.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle3,
        desc: `Gulmohar grows best in warm, tropical climates with moderate rainfall. It requires full sunlight and prefers deep, well-drained soils. Sensitive to frost and waterlogging. <br/><br/> Gulmohar trees are often included in real estate landscaping, urban beautification projects, and rural greening schemes. Saplings are in high demand among landscape designers and horticulture departments.`,

      },

    ];

    return (
      <>

        <section className="py-12 pt-16 md:pt-20  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
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
        />

      </>
    )
}



export const Rose = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Red Rose (Rosa sp.)"
    const shortinfo = `<b>The Icon of Beauty and Emotion</b> <br/> Roses are among the most cultivated and cherished ornamental plants worldwide. Red roses, in particular, symbolize love, passion, and celebration. Beyond their aesthetic value, they are cultivated for perfumes, cosmetics, garlands, and herbal products. Rose farming can be scaled from home gardens to commercial floriculture.`
    const whyChooseData = [
      {
        image: key13,
        title: 'Aromatic Appeal: Red roses offer fragrance and elegance.',
      },
      {
        image: key14,
        title: 'Cut Flower Industry: Major demand in floristry and gifting.',
      },
      {
        image: key15,
        title: 'Cultural Usage: Widely used in weddings, festivals, and devotional offerings.',
      },
      {
        image: key16,
        title: 'Herbal & Cosmetic Value: Petals are processed into rose water, oil, and beauty products.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle4,
        desc: `Roses prefer temperate climates with cool nights and warm days but can be adapted to various conditions with proper irrigation and care. They thrive in loamy soils rich in organic matter and require full sun exposure. <br> <br> Red roses are a staple of the floriculture industry. Apart from cut flowers, value-added products like rose water, gulkand, essential oil, and dried petals ensure diverse revenue streams for farmers and entrepreneurs.`,
      },



    ];

    return (
      <>
        <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-white text-center">
          <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
            <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#3D7436] mb-10  md:mb-6">
              {main_heading}
            </h2>
            <p className="mt-0 md:mt-4 text-black" dangerouslySetInnerHTML={{__html:shortinfo}}></p>
          </div>
        </section>
        <Gridbox heading="Key Benefits" data={whyChooseData} className={custom_class} gridBox={gridBox} />

        <GrowthSlider
          GrowthHeading={GrowthHeading}
          slides={slides}
          className={custom_class1}
        />

      </>
    )
}
