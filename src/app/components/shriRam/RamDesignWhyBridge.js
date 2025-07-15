import React from 'react'
// import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project2/banner.webp";
import { Gridbox } from '../Gridbox';
import Image from 'next/image';
import key1 from "../../../assets/images/projects/project2/key1.webp";
import key2 from "../../../assets/images/projects/project2/key2.webp";
import key3 from "../../../assets/images/projects/project2/key3.webp";
import key4 from "../../../assets/images/projects/project2/key4.webp";
import PartnerBg from "../../../assets/images/projects/project2/bgimg.webp";
import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/digestive/choose1.webp";
import choose2 from "../../../assets/images/projects/project2/why2.webp";
import choose3 from "../../../assets/images/projects/project2/why3.webp";
import choose4 from "../../../assets/images/projects/project2/why4.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";
import image2 from "../../../assets/images/projects/project2/key.webp";
import image3 from "../../../assets/images/projects/project2/hist.webp";
import { Info } from '../Info';


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
            {/* <Wave /> */}
        </>
    )
}


export const Design = () => {
    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Shri. Ram Setu (Bridge)",
        },
        {
            title: "Location Name",
            description: "Shri. Ram Setu",
        },
        {
            title: "Coordinates",
            description: `22°59'33.4"N 77°10'51.3"E`,
        },
        {
            title: "Area",
            description: "Kh-112",
        },

        {
            title: "Dimension",
            description: "32 meters in length",
        },
        {
            title: "Date of Establishment",
            description: "25 December 2021",
        },
        {
            title: "Distance from Admin Block",
            description: "750 meters",
        },
    ];



    const main_heading = "Design and Purpose"
    const shortinfo = "This beautiful bridge blends traditional design elements with functional landscaping, creating a peaceful path between Panchavati and Triveni."
    const gridBox = "custom_height1  xl:!grid-cols-4 !bg-white"
    const custom_class = "white_grid"
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
    const GrowthDescription = `The bridge is named after the legendary Ram Setu, which holds a revered place in Indian mythology and spiritual memory. <br><br> About the Original Ram Setu:
    <ul class="list-disc ms-4 py-3 space-y-2">
    <li>Geography: A chain of limestone shoals stretching between Rameswaram (Tamil Nadu, India) and Mannar Island (Sri Lanka).</li>
    <li>Mythological Reference: In the Ramayana, it is said to have been built by Lord Rama’s Vanara army to reach Lanka and rescue Sita from Ravana.</li>
    <li>Miraculous Nature: Ancient texts describe the bridge as being made of floating stones engraved with Lord Rama’s name — giving it a divine quality.</li>
    <li>Spiritual Symbol: Represents determination, faith, and unity in the face of adversity.</li>
  </ul>
    `


    return (
        <>

            <section className='relative text-center md:text-left   pb-16  pt-20 lg:pb-16 bg-[#f5f5f5]'  >
                <div className='mx-auto max-w-7xl px-4 md:px-6 mx:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-12'>
                        <div className='md:w-[40%] w-full  w-12/12'>
                            <div className='relative'>
                                <Image className='w-full h-full rounded-xl' src={image2} alt='banner' />

                            </div>
                        </div>
                        <div className='md:w-[60%]  w-full  w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>

                            <div className='my-6 mb-14'>
                                {infoData.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3 mb-4 py-1">
                                        <RiCheckboxCircleFill className="h-5 w-5 text-green-800 mt-1" />
                                        <div>
                                            <h3 className="font-semibold redhat text-left text-lg">{item.title}</h3>
                                            <p className="text-black redhat">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section> */}
            <Info
                title="Design and Purpose"
                description="This beautiful bridge blends traditional design elements with functional landscaping, creating a peaceful path between Panchavati and Triveni."
            />

            <Gridbox heading="Key Features" data={whyChooseData} gridBox={gridBox} className={custom_class} />

            {/* <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                GrowthDescription={GrowthDescription}
            /> */}
            <section className='text-center md:text-left pb-10 pt-10 lg:pb-10 lg:pt-10'>
                <div className='mx-auto max-w-7xl  px-6'>
                    <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{GrowthHeading}</h2>
                </div>
                <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                    <div className='w-full md:w-[60%] text-center md:text-left'>

                        <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                            <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: GrowthDescription }}>
                            </p>
                        </div>
                    </div>
                    <div className='w-full md:w-[40%] text-center'>
                        <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
                    </div>

                </div>
            </section>

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
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

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
