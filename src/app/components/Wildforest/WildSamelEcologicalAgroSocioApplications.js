import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/forest/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/forest/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/forest/key1.webp";
import key2 from "../../../assets/images/forest/key2.webp";
import key3 from "../../../assets/images/forest/key3.webp";
import key4 from "../../../assets/images/forest/key4.webp";
import circle1 from "../../../assets/images/forest/circle1.webp";

import image1 from "../../../assets/images/digestive/image1.webp";
import { Iconslider } from '../Iconslider';
import image2 from "../../../assets/images/forest/circle02.webp";
import image3 from "../../../assets/images/forest/circle03.webp";
import image4 from "../../../assets/images/fast/img4.webp";

export const Wild = () => {
    const text = {
        banner: banner,
        heading: `Strengthening Forests, Celebrating Natural Beauty`,

        title: 'India’s forests are home to a spectacular array of native trees that serve both ecological and cultural functions. These trees stand tall as guardians of biodiversity, climate stability, and community heritage. ',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}


export const Samel = () => {
    const basketData = {
        note: `The Atulye Krishi Vana initiative recognizes the importance of cultivating and conserving these forest giants and bloomers—not just within wild landscapes, but also in community woodlots, biodiversity parks, and agroforestry zones. <br/><br/>
        One such species, Samel (Bombax ceiba), is a towering native tree known for its seasonal visual spectacle and essential ecological contributions.`,
        image: info,
    };

    const main_heading = "Samel (Bombax ceiba)"
    const shortinfo = "<b>The Red Silk Cotton Tree</b> <br/> Samel, also called Semal or Silk Cotton Tree, is a majestic deciduous tree native to the Indian subcontinent. It is easily recognized by its massive trunk, thorny bark, and brilliant red flowers that bloom before leafing out in early spring."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Visual Impact',
            description: "One of India’s tallest native flowering trees, reaching up to 60-70 feet"

        },
        {
            image: key2,
            title: 'Floral Display',
            description: "Produces large, bright red flowers that cover the leafless canopy"

        },
        {
            image: key3,
            title: 'Wildlife Magnet',
            description: "Attracts birds, bees, bats, and pollinators with nectar-rich flowers"

        },
        {
            image: key4,
            title: 'Seed Fiber Use',
            description: "The cotton-like fluff (silk) is used for stuffing mattresses and cushions"

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





        </>
    )
}



export const Ecological = () => {
    const heading = "Ecological Contributions";
    const custom_class = "!-mt-6 plant_p !pb-10"
    const cardData = [
        {
            title: "Biodiversity Support",
            description: "Samel serves as a keystone tree in mixed forest ecosystems. Its flowers feed pollinators such as sunbirds, mynas, and fruit bats, which in turn support the regeneration of nearby plant life. The seed pods and fallen flowers provide fodder and organic mulch.",
        },
        {
            title: "Soil Enrichment & Water Regulation",
            description: "Samel trees develop deep roots and broad canopies that regulate microclimates and stabilize soil. Their leaf litter decomposes into rich humus, supporting soil microbial life and moisture retention. When planted along forest edges, they prevent erosion and improve land fertility.  ",
        },
        {
            title: "Climate Mitigation",
            description: "As a fast-growing, large-canopied species, Samel sequesters significant carbon over its lifespan. It helps reduce urban heat islands when planted in city parks and green corridors.",
        },
        {
            title: "Soil Enrichment & Water Regulation",
            description: "Samel trees develop deep roots and broad canopies that regulate microclimates and stabilize soil. Their leaf litter decomposes into rich humus, supporting soil microbial life and moisture retention. When planted along forest edges, they prevent erosion and improve land fertility.  ",
        },

    ];
    return (
        <>
            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />

        </>
    )
}


export const Agro = () => {
    const custom_class1 = "growth_padding"
    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
        {

            image: circle1,
            desc: "Samel thrives in tropical to subtropical regions and adapts well to both dry and moist deciduous zones. It prefers well-drained loamy soils and full sunlight. It is highly drought-tolerant once established, making it a viable option for afforestation in water-scarce areas.",

        },

    ];
    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
            />

        </>
    )
}


export const Socio = () => {

    const custom_class = "!mt-0 plant_p !py-10 bg-white h2_green"
    const heading = "Socio-cultural Significance";
    const cardData = [
        {
            title: "Traditional & Medicinal Use",
            description: "Various parts of the Samel tree—roots, bark, and gum—are used in Ayurvedic medicine to treat inflammation, skin conditions, and respiratory ailments.",
        },
        {
            title: "Cultural Reverence",
            description: "Samel appears in folklore, tribal rituals, and seasonal celebrations, particularly in central and eastern India. Its flowers are offered in local shrines and are used in natural dyes and crafts.",
        },
        {
            title: "Craft & Economic Potential",
            description: "The tree's softwood is suitable for low-load construction, toymaking, and carving. Its silk fiber is harvested for cushion filling and handloom products, offering rural livelihood avenues.",
        },
        {
            title: "Cultural Reverence",
            description: "Samel appears in folklore, tribal rituals, and seasonal celebrations, particularly in central and eastern India. Its flowers are offered in local shrines and are used in natural dyes and crafts.",
        },


    ];
    return (
        <>

            <Iconslider
                card={cardData}
                heading={heading}
                custom_class={custom_class}
            />

        </>
    )
}

export const Applications = () => {


    const custom_class1 = "growth_padding growth_white"
    const GrowthHeading = "Applications Beyond Forests";
    const slides = [
        {

            image: image1,
            title: "Biodiversity Parks & Urban Forestry -",
            desc: "Samel is an excellent addition to biodiversity parks, botanical gardens, and large public green spaces. Its seasonal blooming attracts tourists and students while enriching the native flora palette.",

        },
        {

            image: image2,
            title: "Avenue & Cultural Landscapes – ",
            desc: "With proper spacing and pruning, Samel can be planted along wide avenues and roadsides. Its stunning bloom cycle makes it a visual landmark in institutional campuses and pilgrimage trails.",
        },
        {

            image: image3,
            title: "Agroforestry Integration -",
            desc: "Samel works well in silvopasture models—its canopy allows partial light for fodder crops. It also fits in long-term buffer plantation models around farms, forest edges, and water bodies.",
        },


    ];
    return (
        <>
            <GrowthSlider
                GrowthHeading={GrowthHeading}
                slides={slides}
                className={custom_class1}
            />

        </>
    )
}
