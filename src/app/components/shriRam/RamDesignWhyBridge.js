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
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/digestive/choose2.webp";
import choose3 from "../../../assets/images/digestive/choose3.webp";
import choose4 from "../../../assets/images/digestive/choose4.webp";

export const Ram = () => {
    const text = {
        banner: banner,
        heading: `Shri. Ram Setu - A Bridge of Harmony and Heritage`,

        title: 'The Shri. Ram Setu Bridge is a divinely designed structure that connects two sacred and serene spaces — Panchavati and Triveni — within Kh-112. Spanning 32 meters, this bridge is more than just a walkway — it is a symbol of unity, devotion, and cultural depth.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Design = () => {
    const basketData = {
        note: `
        Theme Index: Shri. Ram Setu (Bridge) <br/>
        Location Name: Shri. Ram Setu <br/>
        Coordinates: 22°59'33.4"N 77°10'51.3"E <br/>
        Area/Location: Kh-112 <br/>
        Dimension: 32 meters in length <br/>
        Date of Establishment: 25 December 2021 <br/>
        Distance from Admin Block: 750 meters
        `,
        image: info,
    };

    const main_heading = "Design and Purpose"
    const shortinfo = "This beautiful bridge blends traditional design elements with functional landscaping, creating a peaceful path between Panchavati and Triveni."
    const gridBox = "custom_height1 xl:!grid-cols-4"
    const whyChooseData = [

        {
            image: key1,
            title: 'Cultural Inspiration',
            description: "Modeled after the mythological Ram Setu, the bridge represents a connection between devotion and nature."

        },
        {
            image: key2,
            title: 'Aesthetic Value',
            description: "Designed with thematic elements that reflect Indian heritage, it enhances the scenic beauty of the gardens."

        },
        {
            image: key3,
            title: 'Practical Function ',
            description: "Makes it easier for visitors to explore the plantation by linking two prominent areas."

        },
        {
            image: key4,
            title: 'Symbolism',
            description: "Reflects harmony, continuity, and the spirit of service — just as the original Ram Setu united lands during Lord Rama’s journey."

        },

    ];

    const GrowthHeading = "Historical and Cultural Inspiration";
    const GrowthDescription= "The bridge is named after the legendary Ram Setu, which holds a revered place in Indian mythology and spiritual memory."
    const slides = [
        {
            image: image1,
            title:"Geography",
            desc: `A chain of limestone shoals stretching between Rameswaram (Tamil Nadu, India) and Mannar Island (Sri Lanka).`,

        },
        {
            image: image1,
            title:"Mythological Reference",
            desc: `In the Ramayana, it is said to have been built by Lord Rama’s Vanara army to reach Lanka and rescue Sita from Ravana.`,
        },
        {
            image: image1,
            title:"Miraculous Nature",
            desc: `Ancient texts describe the bridge as being made of floating stones engraved with Lord Rama’s name — giving it a divine quality.`,
        },
        {
            image: image1,
            title:"Spiritual Symbol",
            desc: `Represents determination, faith, and unity in the face of adversity.`,
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
            <Gridbox heading="Key Features" data={whyChooseData} gridBox={gridBox} />

            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
            />

        </>
    )
}



export const Why = () => {
    const heading = "Why Visit Shri. Ram Setu in Kh-112?"
    const fruitData = [
      {
        title: "Blends Culture & Nature",
        image: choose1,
        flip: "Walk across a bridge that celebrates both ancient mythology and modern garden design."
      },
      {
        title: "Peaceful Experience",
        image: choose2,
        flip: "Enjoy a calm and meaningful stroll while moving between two sacred spaces."
      },
      {
        title: "Perfect for Visitors",
        image: choose3,
        flip: "A visually striking spot that’s also ideal for quiet reflection, photos, and storytelling."
      },
      {
        title: "Connects Landmarks",
        image: choose4,
        flip: "Seamlessly links Panchavati Vatika and Triveni, creating an integrated spiritual and natural circuit."
      },

    ];
    return (
      <>
        <Productlist heading={heading} fruitData={fruitData} />
      </>
    )
}


export const Bridge = () => {
    const heading = "Shri. Ram Setu Bridge";
    const description =
      "The Shri. Ram Setu Bridge is more than just a passage — it is a tribute to India's epic traditions, a bridge of meaning, and a functional part of the sacred landscape at Kh-112. Whether you’re walking across it for ease or pausing to reflect on its symbolism, the bridge invites you to experience heritage, peace, and purpose in every step.      ";

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
