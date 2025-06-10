import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/hedges/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import Image from 'next/image';
import { Gridbox } from '../Gridbox';
import key1 from "../../../assets/images/hedges/key1.webp";
import key2 from "../../../assets/images/hedges/key2.webp";
import key3 from "../../../assets/images/hedges/key3.webp";
import key4 from "../../../assets/images/hedges/key4.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import image1 from "../../../assets/images/hedges/circle1.webp";

import circle2 from "../../../assets/images/hedges/circle2.webp";
import key5 from "../../../assets/images/hedges/key5.webp";
import key6 from "../../../assets/images/hedges/key6.webp";
import key7 from "../../../assets/images/hedges/key7.webp";
import key8 from "../../../assets/images/hedges/key8.webp";


import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/hedges/choose1.webp";
import choose2 from "../../../assets/images/hedges/choose2.webp";
import choose3 from "../../../assets/images/hedges/choose3.webp";
import choose4 from "../../../assets/images/hedges/choose4.webp";
import choose5 from "../../../assets/images/hedges/choose5.webp";
import { SliderBlur } from '../SliderBlur';

import impact1 from "../../../assets/images/shrubs/impact1.webp";
import impact2 from "../../../assets/images/shrubs/impact2.webp";
import impact3 from "../../../assets/images/shrubs/impact3.webp";
import impact4 from "../../../assets/images/shrubs/impact4.webp";
import impact5 from "../../../assets/images/shrubs/impact5.webp";
import bgstay from "../../../assets/images/mahagony/growthbg.svg";

export const Hedges = () => {
    const text = {
        banner: banner,
        heading: `Hedges: Living Borders That Define, Defend, and Decorate`,
        title: 'Hedges are essential elements in both rural and urban landscapes. These structured, often linear plantations serve as natural fences, windbreaks, visual partitions, and soil protectors, while adding beauty and ecological richness. At Atulye Krishi Vana, we promote hedging not as a mere ornamental practice, but as a multipurpose green intervention with long-term value for farmers, institutions, panchayats, and city planners. <br/> Our recommended hedge species include Subabul (Leucaena leucocephala) and Alternanthera (Alternanthera sp.)—two plants that offer contrasting forms but complementary benefits. While Subabul is tall, fast-growing, and protective, Alternanthera is low, colorful, and ideal for decorative structuring.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Subabul = () => {
    const main_heading = "Subabul (Leucaena leucocephala)"
    const shortinfo = "<b>The Green Wall of Productivity</b> <br/> Subabul is a fast-growing leguminous shrub or small tree widely used in agroforestry, live fencing, soil reclamation, and fodder systems. Its vigorous growth and nitrogen-fixing properties make it one of the most useful hedging species in India."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Fast-Growing Fence: Subabul quickly forms a tall, thick boundary for crop protection and privacy.',

        },
        {
            image: key2,
            title: 'Soil Enrichment: As a legume, it fixes nitrogen, improving soil fertility.',
        },
        {
            image: key3,
            title: 'Fodder and Fuel: Leaves are rich in protein and used as animal feed; wood is used as firewood.',
        },
        {
            image: key4,
            title: 'Erosion Control: Roots bind soil on bunds, slopes, and degraded land.',
        },

    ];

    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: image1,
            desc: `Subabul is adaptable to tropical and subtropical climates. It thrives in areas with 500–2000 mm annual rainfall and temperatures ranging from 15°C to 40°C. It grows well in sandy loam, degraded, and slightly saline soils. Suitable for states like Maharashtra, Karnataka, Andhra Pradesh, Madhya Pradesh, and Tamil Nadu. <br/> <br/> Subabul provides multiple income streams—from fodder and fuelwood to seed sales and green manure. Farmers use it to protect high-value crops or demarcate fields. It is also used by government departments in watershed and soil conservation projects. Its biomass supports vermicomposting and organic matter improvement in farm soil.`,

        },

    ];


    const heading = "Application Use Cases"
    const class2 = "blurheight2"

    const boxslider = [
        {
            image: impact1,
            heading: "Boundary hedging in crop fields",
        },
        {
            image: impact2,
            heading: "Erosion control along canals and slopes",
        },
        {
            image: impact3,
            heading: "Fuelwood and leaf fodder for livestock",
        },
        {
            image: impact4,
            heading: "Biomass source for composting units",
        },
        {
            image: impact5,
            heading: "Farm bund reinforcement in dryland areas",
        },

    ]

    return (
        <>


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

            <section
                className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 bg-[#183e36]"  >

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



export const Alternanthera = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Alternanthera (Alternanthera sp.)"
    const shortinfo = `<b>The Ornamental Carpet of Borders</b> <br/> Alternanthera is a low-growing, herbaceous ornamental plant widely used in garden design and landscape edging. Its striking red, purple, green, or variegated foliage offers aesthetic structure to lawns, pathways, and public parks.`
    const whyChooseData = [
        {
            image: key5,
            title: 'Aesthetic Appeal: Bright, colorful foliage enhances visual layout of landscapes.',
        },
        {
            image: key6,
            title: 'Easy Shaping: Can be trimmed into neat edges and creative patterns.',
        },
        {
            image: key7,
            title: 'Low Maintenance: Requires minimal watering, thrives in various soils.',
        },
        {
            image: key8,
            title: 'Fast Coverage: Quickly covers open borders or gaps in gardens.',
        },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: circle2,
            desc: `Alternanthera thrives in tropical and subtropical climates and grows well in both sun and partial shade. It adapts to sandy, loamy, or red soils with good drainage. Ideal for Karnataka, Kerala, West Bengal, and parts of Northeast India. <br> <br> It is popular among nurseries, home gardeners, municipal landscape teams, and hospitality chains. Alternanthera cuttings are easy to propagate, making it a steady nursery income option. Garden designers increasingly use it for thematic borders and color blocking in parks and eco-resorts.`,
        },



    ];


    const heading = "Application Use Cases"
    const class2 = "blurheight2 black_text"

    const boxslider = [
        {
            image: impact1,
            heading: "Lawn and garden edging",
        },
        {
            image: impact2,
            heading: "Traffic islands and public parks",
        },
        {
            image: impact3,
            heading: "School and institutional landscapes",
        },
        {
            image: impact4,
            heading: "Indoor courtyard designs (with light exposure)",
        },
        {
            image: impact5,
            heading: "Branding landscapes in resorts and corporate campuses",
        },

    ]

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
            />


            <section
                className="relative pt-16 pb-16 lg:pt-20 lg:pb-20 bg-[#e6e6e6]"  >

                <div className='mx-auto max-w-[1400px] md:mr-0 px-4 md:px-8 lg:px-2 '>
                    <div className='flex flex-wrap lg:flex-nowrap justify-between  gap-6 px-0 md:px-6 z-10 relative lg:px-2'>
                        <div className='w-full lg:w-3/12 md:mt-10'>
                            <div className='flex justify-between   flex-wrap'>
                                <h2 className="lg:leading-snug  text-black redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
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



export const Why = () => {
    const heading = "Why Plant Hedges with Atulye Krishi Vana?"
    const fruitData = [
        {
            title: "Eco-Functional Landscaping",
            image: choose1,
            flip: "Hedges improve land functionality—controlling erosion, providing shade, demarcating land, and enriching soil—while enhancing landscape structure."
        },
        {
            title: "Faster Results, Lower Costs",
            image: choose2,
            flip: "Species like Subabul and Alternanthera establish quickly, offering effective results within one growing season, with far less investment than artificial fencing."
        },
        {
            title: "Biodiversity Enhancement",
            image: choose3,
            flip: "Hedges attract pollinators, offer micro-habitats for beneficial insects and birds, and support agroecological balance on farms and campuses."
        },
        {
            title: "Low-Input and Scalable",
            image: choose4,
            flip: "Hedge species require minimal fertilizer, irrigation, or pest control after establishment. This makes them suitable for both smallholder plots and large institutional landscapes."
        },
        {
            title: "Visual Identity and Cultural Fit",
            image: choose5,
            flip: "In many Indian villages and towns, hedges are part of traditional agricultural layouts. Our selections respect local aesthetic and ecological values."
        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} />

        </>
    )
}
