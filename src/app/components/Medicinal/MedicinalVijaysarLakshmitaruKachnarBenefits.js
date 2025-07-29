import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/medicinal/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/medicinal/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/medicinal/key1.webp";
import key2 from "../../../assets/images/medicinal/key2.webp";
import key3 from "../../../assets/images/medicinal/key3.webp";
import key4 from "../../../assets/images/digestive/key4.webp";
import image1 from "../../../assets/images/medicinal/circle1.webp";
import circle2 from "../../../assets/images/medicinal/circle2.webp";
import circle3 from "../../../assets/images/medicinal/circle3.webp";

import key5 from "../../../assets/images/medicinal/key5.webp";
import key6 from "../../../assets/images/medicinal/key6.webp";
import key7 from "../../../assets/images/medicinal/key7.webp";
import key8 from "../../../assets/images/medicinal/key8.webp";

import key9 from "../../../assets/images/medicinal/key9.webp";
import key10 from "../../../assets/images/medicinal/key10.webp";
import key11 from "../../../assets/images/medicinal/key11.webp";
import key12 from "../../../assets/images/medicinal/key12.webp";

import { Productlist } from '../Productlist';
import choose1 from "../../../assets/images/medicinal/choose1.webp";
import choose2 from "../../../assets/images/medicinal/choose2.webp";
import choose3 from "../../../assets/images/medicinal/choose3.webp";
import choose4 from "../../../assets/images/medicinal/choose4.webp";


export const Medicinal = () => {
    const text = {
        banner: banner,
        heading: `Healing Landscapes and Sustainable Livelihoods`,

        title: 'Medicinal and multi-purpose trees offer dual benefits—providing therapeutic resources and supporting ecological and economic resilience. These trees are central to traditional Indian healing systems such as Ayurveda, Siddha, and Unani. They also serve important roles in sustainable development through soil improvement, reforestation, agroforestry, and value-added bio-products.        ',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Vijaysar = () => {
    const basketData = {
        note: "Under the Atulye Krishi Vana initiative, we promote the cultivation of medicinal and multi-functional trees such as Vijaysar (Pterocarpus marsupium), Lakshmi Taru (Simarouba glauca), and Kachnar (Bauhinia variegata). These trees are ideal for both farmers and communities looking to harmonize health, biodiversity, and income.",
        image: info,
    };

    const main_heading = "Vijaysar (Pterocarpus marsupium)"
    const shortinfo = "<b>The Diabetic Tree of Ayurveda</b> <br/> Vijaysar, also known as the Indian Kino tree, is highly valued in Ayurveda for managing diabetes and digestive disorders. It yields kino gum and heartwood used in herbal formulations. "
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Antidiabetic Agent',
            description: "Wood infusions help regulate blood sugar levels"

        },
        {
            image: key2,
            title: 'Other Medicinal Uses',
            description: "Treats ulcers, diarrhea, and skin ailments"

        },
        {
            image: key3,
            title: 'Timber Use',
            description: "Provides durable wood for construction and furniture"

        },
        {
            image: key4,
            title: 'Environmental Benefits',
            description: "Fixes nitrogen and supports reforestation"

        },

    ];

    const GrowthHeading = "Agro-Climatic Suitability";
    const slides = [
        {

            image: image1,
            desc: `Vijaysar grows well in tropical and sub-tropical climates. It prefers deep, well-drained soils and full sun exposure. It is commonly cultivated in central and southern India.
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
                    "Ayurvedic medicine manufacturing",
                    "Organic herbal health product development",
                    "Timber plantations for high-value wood",
                    "Watershed and forest restoration"
                ]}
            />

        </>
    )
}



export const Lakshmitaru = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Lakshmi Taru (Simarouba glauca)"
    const shortinfo = `<b>The Miracle Tree for Biofuel and Health</b> <br/> Originally native to Central America, Lakshmi Taru is gaining prominence in India due to its adaptability and multi-use potential. Every part of the tree—leaves, seeds, bark, and oil—has commercial and medicinal value.`
    const whyChooseData = [
        {
            image: key5,
            title: 'Biofuel Production',
            description: "Seeds yield oil ideal for biodiesel"
        },
        {
            image: key6,
            title: 'Medicinal Uses',
            description: "Anti-cancer and anti-viral properties"

        },
        {
            image: key7,
            title: 'Drought Tolerant',
            description: "Grows well in arid and semi-arid regions"

        },
        {
            image: key8,
            title: 'Fast-Growing',
            description: "Useful for soil regeneration and carbon capture"

        },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: circle2,
            desc: `Lakshmi Taru thrives in dry, marginal soils and saline environments. It is suitable for the Deccan Plateau, Rajasthan, and arid coastal regions. Requires minimal irrigation after establishment.`,
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
                    "Biofuel production and green energy",
                    "Herbal and nutraceutical industries",
                    "Soil reclamation and arid land greening",
                    "Intercropping in degraded landscapes"
                ]}
            />

        </>
    )
}


export const Kachnar = () => {
    const main_heading = "Kachnar (Bauhinia variegata)"
    const shortinfo = "<b>The Blooming Healer of Indian Forests</b> <br/> Kachnar is an attractive flowering tree known for its edible buds and therapeutic bark. It’s commonly found in home gardens, roadsides, and forest edges."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key9,
            title: 'Edible Flowers',
            description: "Used in Indian cuisine and herbal preparations"

        },
        {
            image: key10,
            title: 'Medicinal Value',
            description: "Bark treats goiter, digestive issues, and wounds"

        },
        {
            image: key11,
            title: 'Aesthetic Appeal',
            description: "Orchid-like flowers in pink, purple, or white"

        },
        {
            image: key12,
            title: 'Soil Enricher',
            description: "Helps in nitrogen fixation"

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: circle3,
            desc: `Kachnar thrives in loamy to sandy soils across tropical and subtropical India. It tolerates mild drought and urban pollution, making it ideal for both rural and urban greening.  `,

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
                    "Culinary herbs and pickles from flower buds",
                    "Herbal teas, powders, and ayurvedic supplements",
                    "Landscaping and decorative tree lines",
                    "Buffer zones in agroforestry models"
                ]}
            />

        </>
    )
}



export const Benefits = () => {
    const heading = "Benefits of Medicinal & Multi-purpose Trees"
    const fruitData = [
        {
            title: "Reviving Herbal Traditions",
            image: choose1,
            flip: "These trees form the foundation of India’s ancient wellness systems. Their cultivation revives traditional healing knowledge, supports community health, and fosters biodiversity."
        },
        {
            title: "Income from High-Value Products",
            image: choose2,
            flip: "Heartwood, oils, gums, flowers, and bark can be processed into products with export potential. Farmers can sell raw or value-added goods to ayurvedic firms and eco-conscious markets."
        },
        {
            title: "Climate Resilience and Land Reclamation",
            image: choose3,
            flip: "Species like Lakshmi Taru can thrive in harsh conditions, regenerating degraded land. Vijaysar and Kachnar contribute to carbon capture, water retention, and erosion control."
        },
        {
            title: "Low Maintenance, High Returns",
            image: choose4,
            flip: "Once established, these trees require minimal inputs. Their long lifespan ensures sustained yields, reducing dependence on seasonal crops and creating a long-term revenue model."
        },
        {
            title: "Integrates with Agroforestry",
            image: choose4,
            flip: "All three trees blend well with food crops, pulses, or medicinal herbs. They can be used in boundary planting, intercropping, and home garden models."
        },


    ];
    return (
        <>
            <Productlist heading={heading} fruitData={fruitData} />

        </>
    )
}
