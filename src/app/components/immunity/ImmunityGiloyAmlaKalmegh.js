import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/Immunity/banner.webp";
import info from "../../../assets/images/Immunity/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/Immunity/key1.webp";
import key2 from "../../../assets/images/Immunity/key2.webp";
import key3 from "../../../assets/images/Immunity/key3.webp";
import key4 from "../../../assets/images/Immunity/key4.webp";
import key5 from "../../../assets/images/Immunity/key5.webp";

import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import circle1 from "../../../assets/images/Immunity/circle1.webp";
import circle2 from "../../../assets/images/Immunity/circle2.webp";


export const Immunity = () => {
    const text = {
        banner: banner,
        heading: `Immunity & Infection Control:  <br/>
        Herbal Powerhouses for Natural Resilience`,
        title: 'The Athulye Krishi Vana initiative champions the cultivation of herbal and medicinal plants that provide profound benefits for mental clarity, emotional balance, and cognitive enhancement. In today’s world, stress and mental fatigue are common concerns.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Giloy = () => {
    const basketData = {
        note: "Our program champions five remarkable herbs—Giloy, Amla, Kalmegh, Chitvan, and Patha—that have been keystones of traditional medical systems for centuries, offering potent antimicrobial, antiviral, and immunomodulatory benefits. <br/> These herbs not only thrive in India's diverse agro-climatic conditions but also represent significant commercial opportunities in the rapidly expanding natural health market. Each plant brings unique therapeutic properties while offering farmers sustainable cultivation options with promising economic returns.  ",
        image: info,
    };

    const main_heading = "Giloy (Tinospora cordifolia)"
    const shortinfo = '<b>The Immunity Shield of Ayurveda</b>  <br/> Giloy, often called "Amrita" or nectar of immortality, stands as one of the most versatile and powerful immunomodulatory herbs in the traditional pharmacopeia. This climbing shrub grows abundantly on neem, mango, or other trees, making it ideal for agroforestry systems.'
    const gridBox = " custom_height1"
    const whyChooseData = [

      {
        image: key1,
        title: 'Enhances both innate and adaptive immune responses',

      },
      {
        image: key2,
        title: 'Possesses potent antiviral, antibacterial, and antifungal properties',
      },
      {
        image: key3,
        title: 'Reduces inflammation and oxidative stress',
      },
      {
        image: key4,
        title: 'Supports liver function and detoxification processes',
      },
      {
        image: key5,
        title: 'Helps in recovery from fevers and infectious diseases',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle1,
        desc: `Giloy adapts to diverse climatic conditions across India, from tropical to subtropical regions. It requires minimal irrigation once established and can be grown as an understory vine in existing orchards, creating an efficient use of vertical space in farming systems. <br/><br/> The pharmaceutical and nutraceutical industries have shown increasing interest in Giloy stem extracts for immunity formulations. The herb's surge in popularity during recent health crises has created sustained demand, with standardized extracts commanding premium prices in domestic and international markets.`,

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



export const Amla = () => {
    const gridBox = "custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Amla (Phyllanthus emblica)"
    const shortinfo = `Vitamin C Powerhouse with Antimicrobial Properties
    Amla, or Indian Gooseberry, contains one of the highest natural concentrations of vitamin C, which remains stable even during processing due to its unique molecular structure. This medium-sized deciduous tree produces nutrient-dense fruits with remarkable medicinal properties.
     `
    const whyChooseData = [
      {
        image: key1,
        title: 'Provides exceptional antioxidant protection',
      },
      {
        image: key2,
        title: 'Strengthens immune system against seasonal infections',
      },
      {
        image: key3,
        title: 'Demonstrates antimicrobial effects against common pathogens',
      },
      {
        image: key4,
        title: 'Supports respiratory health and mucous membrane integrity',
      },
      {
        image: key5,
        title: 'Enhances iron absorption and combats anemia',
      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle2,
        desc: ` Amla trees thrive in diverse soil types, from sandy loam to clay, and demonstrate remarkable drought tolerance once established. They perform optimally in tropical and subtropical regions, making them suitable for cultivation across central and southern India. <br> <br>  Amla trees thrive in diverse soil types, from sandy loam to clay, and demonstrate remarkable drought tolerance once established. They perform optimally in tropical and subtropical regions, making them suitable for cultivation across central and southern India.`,
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


export const Kalmegh = () => {
    const main_heading = "Kalmegh (Andrographis paniculata)"
    const shortinfo = `<b>Nature's Antibiotic and Fever Fighter</b>  <br/>Kalmegh, known as the "King of Bitters," has gained international recognition for its potent antimicrobial and immunostimulant properties. This herbaceous annual is renowned for its effectiveness against respiratory infections and fever.`
    const gridBox = " custom_height1"
    const whyChooseData = [

      {
        image: key1,
        title: 'Exhibits broad-spectrum antimicrobial activity',

      },
      {
        image: key2,
        title: 'Stimulates antibody production and cellular immunity',
      },
      {
        image: key3,
        title: 'Reduces fever and inflammation effectively',
      },
      {
        image: key4,
        title: 'Supports liver function and detoxification',
      },
      {
        image: key5,
        title: 'Provides relief from upper respiratory infections',
      },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
      {

        image: circle1,
        desc: ` Kalmegh grows well in tropical and subtropical regions with moderate rainfall. It prefers well-drained soil and thrives in partial shade, making it suitable for intercropping in tree-based farming systems or as a stand-alone crop in rotation with cereals.<br/> The pharmaceutical demand for Kalmegh has grown exponentially, particularly for its active compound andrographolide, which is used in various antiviral and immunomodulatory formulations. The herb can be harvested multiple times during its growing season, offering farmers regular income cycles. Contract farming arrangements with herbal pharmaceutical companies offer stable pricing and assured markets.`,

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
