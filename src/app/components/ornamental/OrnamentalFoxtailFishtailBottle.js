import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/palm/banner.webp";
import { Gridbox } from '../Gridbox';
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import info from "../../../assets/images/ornamental/info.webp";
import Image from 'next/image';
import key1 from "../../../assets/images/ornamental/key1.webp";
import key2 from "../../../assets/images/ornamental/key2.webp";
import key3 from "../../../assets/images/ornamental/key3.webp";
import key4 from "../../../assets/images/ornamental/key4.webp";
import image1 from "../../../assets/images/ornamental/circle1.webp";
import circle2 from "../../../assets/images/digestive/circle2.webp";
import key5 from "../../../assets/images/digestive/key5.webp";
import key6 from "../../../assets/images/digestive/key6.webp";
import key7 from "../../../assets/images/digestive/key7.webp";
import key8 from "../../../assets/images/digestive/key8.webp";

export const Ornamental = () => {
    const text = {
        banner: banner,
        heading: `Sculpting Space with Grace`,
        subtitle: "The Role of Palms and Cycads in Modern Landscapes",
        title: 'Palms and cycads are architectural plants that bring elegance, structure, and a sense of permanence to any space. With their dramatic silhouettes, textured trunks, and graceful fronds, they are indispensable in contemporary and traditional landscaping.',
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            <Wave />
        </>
    )
}



export const Foxtail = () => {
    const basketData = {
        note: "Whether lining boulevards, flanking gates, or anchoring garden vistas, these plants create visual impact while demanding surprisingly little maintenance. <br/> Under the Atulye Krishi Vana initiative, we promote the cultivation and landscape integration of select ornamental palm species such as the Foxtail Palm (Wodyetia bifurcata), Fishtail Palm (Caryota urens), and Bottle Palm (Hyophorbe lagenicaulis). These species are chosen for their aesthetic adaptability, climate compatibility, and design versatility in Indian urban and peri-urban environments.",
        image: info,
    };

    const main_heading = "Foxtail Palm (Wodyetia bifurcata)"
    const shortinfo = "<b>The Graceful Avenue Star</b> <br/> Native to Australia and now widely cultivated, the Foxtail Palm is named for its fronds, which resemble the bushy tail of a fox. With a solitary, smooth trunk and finely divided leaves, it creates a refined and tropical look, making it a favorite for resorts, institutions, and high-end residential projects."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Functional & Native Palms',
            description: "Uniform trunk and lush, full fronds add symmetry and softness."

        },
        {
            image: key2,
            title: 'Low Maintenance',
            description: "Requires minimal pruning and is generally pest-resistant."

        },
        {
            image: key3,
            title: 'Drought Tolerant',
            description: "Once established, thrives with minimal irrigation."

        },
        {
            image: key4,
            title: 'Vertical Accent',
            description: "Adds height and drama without overpowering nearby structures."

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability & Economic Potential";
    const slides = [
        {

            image: image1,
            desc: `Foxtail Palm thrives in warm, humid to semi-arid tropical climates. It prefers full sun and well-drained soils. It performs well in the coastal belts of Kerala, Tamil Nadu, Maharashtra, and Karnataka, as well as in planned landscapes of central India.

        `,

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

                applicationsData={[
                    "Avenue Planting For Civic Boulevards And Corporate Campuses",
                    "Entryway Statement Planting",
                    "Vertical Accent In Minimalistic Or Modernist Gardens",
                    "Resort And Hotel Landscaping To Evoke Tropical Luxury"
                ]}
            />

        </>
    )
}


export const Fishtail = () => {
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const custom_class = "white_grid grid_padding"
    const main_heading = "Fishtail Palm (Caryota urens)"
    const shortinfo = `<b>The Tropical Texture Master</b> <br/> Named for its jagged, fishtail-like leaves, Caryota urens is a unique palm native to India and Southeast Asia. Unlike many palms, it has a more bushy, clustered appearance and is often grown in groups for dense coverage or solitary for a bold, textured look.`
    const whyChooseData = [
      {
        image: key5,
        title: 'Textural Interest',
        description:"Bipinnate leaves provide a distinctive visual break in tropical gardens"
      },
      {
        image: key6,
        title: 'Cluster Growth',
        description:"Can form multi-stemmed clumps, suitable for privacy or screening."

      },
      {
        image: key7,
        title: 'Native Heritage',
        description:"Naturally adapted to Indian conditions and soil profiles."

      },
      {
        image: key8,
        title: 'Fast Growth',
        description:"Establishes quickly in moist, shaded environments."

      },

    ];

    const custom_class1 = "growth_white"
    const GrowthHeading = "Agro-climatic Suitability";
    const slides = [
      {

        image: circle2,
        desc: `Fishtail Palm prefers moist, warm climates and partial to full sun. It thrives in loamy, fertile soils and tolerates high humidity. Found commonly in Kerala, Assam, Odisha, and Eastern ghats, it is highly adaptable to home gardens and public parks.`,
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
          applicationsData={[
            "Tropical screens and privacy hedges",
            "Botanical gardens and forest-themed landscapes",
            "Waterbody edges and shaded outdoor zones",
            "Landscaping in wellness resorts and eco-lodges"
        ]}
        />

      </>
    )
}


export const Bottle = () => {
    const main_heading = "Bottle Palm (Hyophorbe lagenicaulis)"
    const shortinfo = "<b>The Iconic Compact Statement</b> <br/> Famed for its swollen, bottle-shaped trunk, the Bottle Palm is a compact palm ideal for small spaces and ornamental focal points. Its slow growth and manageable size make it suitable for confined landscapes and container planting."
    const gridBox = "xl:!grid-cols-4 custom_height1"
    const whyChooseData = [

        {
            image: key1,
            title: 'Unique Form',
            description: "Swollen base gives a sculptural, almost artistic quality."

        },
        {
            image: key2,
            title: 'Small Footprint',
            description: "Ideal for tight spaces or small gardens."

        },
        {
            image: key3,
            title: 'Indoor-Outdoor Flexibility',
            description: "Can be grown in large containers for patios."

        },
        {
            image: key4,
            title: 'Tropical Charm',
            description: "Evokes island aesthetics, great for beachside or thematic decor."

        },

    ];

    const GrowthHeading = "Agro-climatic Suitability ";
    const slides = [
        {

            image: image1,
            desc: `Bottle Palm requires a warm climate and does not tolerate frost. It grows best in well-drained, slightly sandy soils with moderate watering. It suits coastal cities like Chennai, Mumbai, Goa, and port towns, as well as protected urban spaces in Delhi, Ahmedabad, and Hyderabad.

        `,

        },

    ];

    return (
        <>

            <section className="py-12 md:pt-16   px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
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
                    "Centerpiece in small lawns and courtyards",
                    "Container planting for decks, patios, or balconies",
                    "Accent plant in tropical-themed gardens",
                    "Visual anchor in symmetrical or geometric garden designs"
                ]}
            />

        </>
    )
}
