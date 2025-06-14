import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/bloomers/banner.webp";
import info from "../../../assets/images/tropical/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/tropical/key1.webp";
import key2 from "../../../assets/images/tropical/key2.webp";
import key3 from "../../../assets/images/tropical/key3.webp";
import key4 from "../../../assets/images/tropical/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/tropical/image1.webp";

import circle2 from "../../../assets/images/digestive/circle2.webp";
import key5 from "../../../assets/images/tropical/key5.webp";
import key6 from "../../../assets/images/tropical/key6.webp";
import key7 from "../../../assets/images/tropical/key7.webp";
import key8 from "../../../assets/images/tropical/key8.webp";

import key9 from "../../../assets/images/tropical/key9.webp";
import key10 from "../../../assets/images/tropical/key10.webp";
import key11 from "../../../assets/images/tropical/key11.webp";
import key12 from "../../../assets/images/tropical/key12.webp";
import key13 from "../../../assets/images/tropical/key13.webp";
import key14 from "../../../assets/images/tropical/key14.webp";
import key15 from "../../../assets/images/tropical/key15.webp";
import key16 from "../../../assets/images/tropical/key16.webp";
import circle3 from "../../../assets/images/digestive/circle3.webp";

import circle03 from "../../../assets/images/tropical/circle03.webp";


export const Tropical = () => {
    const text = {
        banner: banner,
        heading: `Tropical Bloomers`,
        subtitle:"Bringing Resilience, Radiance, and Regenerative Power to Indian Landscapes",
        title: 'Tropical bloomers are vibrant, resilient, and deeply rooted in India’s natural and cultural tapestry. From backyard gardens to temple courtyards, these plants are treasured not only for their ornamental beauty but also for their ecological and medicinal benefits',
        opacity: 'opacity-40'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Gudhal = () => {
    const basketData = {
        note: "Atulye Krishi Vana promotes the large-scale cultivation of tropical bloomers that are suited to a variety of Indian agro-climatic zones. These plants support pollinators, thrive in high temperatures, and require low maintenance—making them ideal for sustainable landscaping, urban greening, and agroforestry.<br/> Under our initiative, we promote the cultivation of hardy tropical bloomers such as Gudhal / Jaswand (Hibiscus rosa-sinensis), Ashok (Saraca asoca), Bougainvillea (Bougainvillea glabra), and Heena (Lawsonia inermis). These flowering plants combine ornamental appeal with economic and ecological viability, supporting livelihoods while enriching the land.",
        image: info,
    };

    const main_heading = "Gudhal / Jaswand (Hibiscus rosa-sinensis)"
    const shortinfo = "<b>The Ever-Blooming Healer</b> <br/> Gudhal, also known as Jaswand or Hibiscus, is a hardy evergreen shrub adorned with large, showy flowers in hues of red, pink, yellow, and white. Commonly seen in Indian homes, schools, and temples, the plant has sacred significance and is widely used in herbal remedies and organic fertilizers."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key1,
        title: 'Continuous Blooming: Produces large flowers almost year-round in tropical regions.',

      },
      {
        image: key2,
        title: 'Pollinator-Friendly: Attracts bees and butterflies, enhancing ecosystem health',
      },
      {
        image: key3,
        title: 'Sacred Significance: Red hibiscus is offered to deities like Goddess Kali and Lord Ganesha.',
      },
      {
        image: key4,
        title: 'Medicinal Use: Petals are used in Ayurvedic hair oils, teas, and skin treatments.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: image1,
        desc: `Gudhal thrives in warm, humid climates with full sun to partial shade. It adapts well to loamy and sandy soils and requires regular but moderate watering. Withstand pruning and can be trained as a hedge or small tree. <br/><br/> The hibiscus flower industry is growing, especially in wellness and beauty sectors. Petals are dried for herbal teas, infused in oils, and processed into shampoos and creams. Jaswand is also sold as potted ornamental plants and saplings for institutional landscaping. With proper pruning and care, the plant can be harvested regularly for both flowers and leaves.`,

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


export const Ashok = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Ashok (Saraca asoca)"
    const shortinfo = `<b>The Tree of Joy and Healing</b> <br/> Ashok, a revered and endangered tree, is deeply intertwined with India’s cultural, spiritual, and botanical heritage. Known for its beautiful orange-red flowers and mythological significance, the Ashok tree is considered sacred and medicinal. It is a must-have in temple gardens, herbal parks, and biodiversity corridors.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Ornamental Charm: Bright clusters of orange and red blooms stand out in shaded gardens.',
      },
      {
        image: key6,
        title: 'Shade and Shelter: Dense foliage provides excellent shade and habitat for birds.',
      },
      {
        image: key7,
        title: 'Medicinal Properties: Bark extracts are used for gynecological treatments in Ayurveda.',
      },
      {
        image: key8,
        title: 'Spiritual Importance: Often planted in temple compounds and spiritual sites.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle2,
        desc: `Ashok prefers partial shade, humid climates, and fertile, well-drained soils. It thrives in the Western Ghats, Northeastern India, and moist regions across the country. It is relatively slow-growing but highly rewarding in ecological terms. <br> <br> Ashok is increasingly being used in herbal formulations, especially for women’s health. Landscapers and institutions seek Ashok saplings for their spiritual and medicinal aura. Conservation projects and temple gardens present a strong demand for this species. Nurseries growing Ashok trees enjoy long-term demand from both the herbal and spiritual sectors.`,
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



export const Bougainvillea = () => {
    const main_heading = "Bougainvillea (Bougainvillea glabra)"
    const shortinfo = "<b>The Colorful Climber</b> <br/> Bougainvillea, with its papery, vibrant bracts in magenta, red, orange, and white, is one of the most drought-tolerant ornamental plants in India. This versatile climber can be used to cover walls, fences, or even shaped into decorative hedges and bonsais. Bougainvillea thrives with minimal care and adds vivid color to arid and semi-arid landscapes."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

      {
        image: key9,
        title: 'Vibrant Appeal: Long-lasting colorful bracts bloom for most of the year.',

      },
      {
        image: key10,
        title: 'Drought-Resistant: Ideal for water-scarce regions and xeriscaping.',
      },
      {
        image: key11,
        title: 'Natural Fencing: Its thorny nature makes it an effective barrier plant.',
      },
      {
        image: key12,
        title: 'Soil Stabilization: Roots prevent erosion on slopes and embankments.',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle3,
        desc: `Bougainvillea grows best in hot, dry climates with full sunlight. It adapts to poor, rocky, and sandy soils. Requires minimal irrigation and pruning to maintain shape and bloom frequency. Avoids heavy shade and waterlogged conditions. <br/><br/> Bougainvillea is widely used in municipal beautification, resort landscaping, and institutional fencing. Potted varieties are popular in urban balconies and rooftop gardens. The demand for shaped bonsai-style Bougainvillea is also increasing. Sapling production and garden installations offer consistent income for rural entrepreneurs and nursery owners.`,

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



export const Heena = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Heena (Lawsonia inermis)"
    const shortinfo = `<b>The Traditional Beautifier</b> <br/> Heena or Mehendi is a small shrub with fragrant white flowers and naturally dye-rich leaves. Traditionally used in body art, rituals, and hair care, Heena holds a timeless place in Indian households. In addition to its cultural value, it is also a pollinator attractor and an effective boundary plant.`
    const whyChooseData = [
      {
        image: key13,
        title: 'Natural Dye: Leaves produce a reddish-orange dye used for skin and hair.',
      },
      {
        image: key14,
        title: 'Aromatic Flowers: Tiny white blooms attract bees and provide light fragrance.',
      },
      {
        image: key15,
        title: 'Medicinal Value: Known for antifungal, cooling, and healing properties.',
      },
      {
        image: key16,
        title: 'Boundary Use: Forms dense hedges for natural fencing and windbreaks.',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle03,
        desc: `Heena is highly drought-resistant and can grow in arid and semi-arid zones. It tolerates high heat and poor soils. Thrives with full sun and minimal irrigation, making it ideal for Rajasthan, Gujarat, and Deccan Plateau regions. <br> <br> Heena farming is profitable due to steady demand in herbal cosmetics, hair care, and ritual markets. Dried leaves are powdered and exported or sold in domestic markets. Sapling sales, leaf harvest, and natural dye processing offer income streams for women-led SHGs, rural youth, and herbal clusters.`,
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


