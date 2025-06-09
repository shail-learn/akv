
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
import { Info } from '../Info';
import bgstay from "../../../assets/images/stress/bg.webp";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import Titleslider from '../Titleslider';
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";

export const Tulsi = () => {
    const text = {
        banner: banner,
        heading: `Shri Tulsidasji Panchavati Vatika: A Sacred Green Legacy`,

        title: 'Located at Kh-112, the Shri Tulsidasji Panchavati Vatika is a sacred plantation that blends spiritual heritage, ecological wisdom, and traditional healing. Planted on 25th December 2021, this site brings together five holy trees in a layout known as Panchvati, meaning “the grove of five”. This plantation reflects not only devotion to nature but also deep cultural and religious significance tied to Saint Tulsidas and the epic Ramayana.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Panchvati = () => {
    const basketData = {
        note: `
        Location Name: Shri. Tulsidasji Panchavati Vatika <br/>
        Coordinates: 22°59'33.4"N 77°10'52.9"E <br/>
        Area/Dimension: 3539 square meters<br/>
        Distance from Admin Block: 723 meters<br/>
        Irrigation Method: Drip Irrigation (Online Lateral) <br/>
        Date of Planting: 25th December 2021
        `,
        image: info,
    };

    const main_heading = "What is Panchvati?"
    const shortinfo = "Panchvati refers to a sacred combination of five trees, each known for its divine symbolism and healing properties. These trees are considered sacred in Hinduism, Buddhism, and Jainism."
    const gridBox = "custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Peepal',
            description: "(Ficus religiosa)"

        },
        {
            image: key2,
            title: 'Bargad / Banyan',
            description: "(Ficus benghalensis)"

        },
        {
            image: key3,
            title: 'Bael ',
            description: "(Aegle marmelos)"

        },
        {
            image: key4,
            title: 'Aonla / Indian Gooseberry',
            description: "(Phyllanthus emblica)"

        },
        {
            image: key4,
            title: 'Ashok',
            description: "(Saraca asoca)"

        },

    ];

    const GrowthHeading = "Historical and Religious Significance";
    const slides = [
        {
            image: image1,
            desc: `This Vatika is named after Sant Tulsidasji, the revered 16th-century poet-saint known for composing the Ramcharitmanas, a devotional retelling of the Ramayana.`,

        },
        {
            image: image1,
            desc: `Tulsidas is believed to have spent time in Panchavati, meditating and composing verses in devotion to Lord Rama.`,
        },
        {
            image: image1,
            desc: `Panchavati itself holds mythological importance—it is where Lord Rama, Sita, and Lakshmana spent part of their exile.`,
        },
        {
            image: image1,
            desc: `The area is said to be blessed by Rama’s presence and also marks the location where Sita was abducted by Ravana.`,
        },

    ];

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

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section>
            <Gridbox heading="Tree Combination (Index: Panchvati)" data={whyChooseData} gridBox={gridBox} />

            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
            />

        </>
    )
}


export const Vatika = () => {
    return (
        <>
        <Info
      title="What is a Vatika?"
      description="Vatika means garden or grove. Shri Tulsidasji Panchavati Vatika is not just a plantation—it is a living tribute to devotion, harmony with nature, and the poetic legacy of Tulsidas. Over the years, this area has developed into a spiritual retreat for devotees and nature lovers alike."
    />
        </>
    )
}



export const Medicinal = () => {
    const heading = "Medicinal Benefits of the Panchvati Trees"
    const class2 = "blurheight"

    const boxslider = [
      {
        image: impact1,
        heading: "Bargad (Banyan – Ficus benghalensis)",
        description: 'Strengthens gums and supports oral health <br/> Manages diabetes by regulating blood sugar <br/> Reduces inflammation and helps treat skin conditions',
      },
      {
        image: impact1,
        heading: " Peepal (Ficus religiosa)",
        description: 'Supports asthma relief and respiratory function <br/> Heals wounds and boosts recovery <br/> Helps manage blood sugar levels',
      },
      {
        image: impact1,
        heading: "Bael (Aegle marmelos)",
        description: 'Used as a digestive aid and in treating diarrhea <br/> Has antimicrobial and infection-fighting properties <br/> Soothes stomach ulcers and reduces inflammation',
      },
      {
        image: impact1,
        heading: "Aonla (Indian Gooseberry – Phyllanthus emblica)",
        description: 'Rich in Vitamin C, boosts immunity <br/> Full of antioxidants, helps slow aging <br/> Aids in digestion and controls sugar levels',
      },
      {
        image: impact1,
        heading: "Ashok (Saraca asoca)",
        description: 'Used in supporting women’s reproductive health <br/> Helps reduce menstrual pain and inflammation <br/> Promotes clear, healthy skin',
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


export const Layout = () => {
    const heading = "Why It Matters"

    const boxslider = [
      {
        heading: "Cultural Connection",
        description: "Linking modern life with ancient traditions"
      },
      {
        heading: "Health and Healing",
        description: "Home to trees that promote wellness"

      },
      {
        heading: "Environmental Awareness",
        description: "An example of sacred conservation"

      },
      {
        heading: "Pilgrimage Value",
        description: "A place of quiet prayer and connection for believers"

      },

    ]
    return (
        <>
        <Info
      title="Layout and Maintenance"
      description="While the layout diagram is maintained onsite, a current snapshot of the plantation shows lush and healthy trees growing under proper care. The entire area is supported by drip irrigation using online lateral systems, ensuring water efficiency and plant well-being."
    />
    <Titleslider heading={heading} boxslider={boxslider} />

        </>
    )
}



export const Tulsidasji = () => {
    const heading = "Shri Tulsidasji Panchavati Vatika";
    const description =
      "The Shri Tulsidasji Panchavati Vatika is a perfect example of how nature, faith, and tradition come together. Located peacefully away from the busy areas, this sacred grove offers healing, spiritual calm, and cultural value to every visitor. <br/><br/> Whether you’re looking to meditate, learn about traditional trees, or reconnect with history, the Vatika welcomes you with its deep roots in faith and nature.";

    return (
      <section
        className="relative bg-no-repeat !mb-0 py-14 lg:py-32 bg-cover w-full my-8 md:my-12 !mt-0"
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
