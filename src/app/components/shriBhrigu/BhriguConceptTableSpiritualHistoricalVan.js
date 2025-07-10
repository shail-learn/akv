import React from 'react'
import { Wave } from '../Wave'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/agriculture/banner.webp";
import info from "../../../assets/images/digestive/info.webp";
import image1 from "../../../assets/images/digestive/image1.webp";
import { GrowthSlider } from '../utilities/Cultivationgrowthwhychoose';
import Image from 'next/image';
import { TableSection } from "../TableSection";
import { SliderBlur } from '../SliderBlur';
import impact1 from "../../../assets/images/stress/Benefit1.webp";
import bgstay from "../../../assets/images/stress/bg.webp";
import { MarketLayout } from '../utilities/UsesStanadarLayout';
import img01 from "../../../assets/images/teak/small.webp";
import PartnerBg from "../../../assets/images/respirtaory/bgimg.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";
import { RiCheckboxCircleFill } from "react-icons/ri";


export const Bhrigu = () => {
    const text = {
        banner: banner,
        heading: `Shri. Bhrigu Van – Navagrah, Nakshatra, and Rashi Garden`,

        title: `Located in Kh-102, covering 3135 square meters, and situated 670 meters from the Admin Block, Shri. Bhrigu Van is a unique sacred space at Atulye Krishi Vana. It is designed as a Navagrah Garden—a celestial landscape that brings together the spiritual and medicinal significance of India's ancient astrological systems. <br/> Established on 14 November 2021, this garden represents the nine planets (Navagrahas), the twelve zodiac signs (Rashis), and the twenty-seven lunar constellations (Nakshatras)—each associated with specific medicinal and sacred trees. This alignment of nature and cosmic energies creates a space for meditation, healing, learning, and spiritual reflection.`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
            {/* <Wave /> */}
        </>
    )
}


export const Concept = () => {
    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Navagrah",
        },
        {
            title: "Location Name",
            description: "Shri. Bhrigu Van",
        },
        {
            title: "Coordinates",
            description: `22°59'40.3"N 77°10'47.2"E`,
        },
        {
            title: "Area",
            description: "3135 square meters",
        },
        {
            title: "Date of Planting",
            description: "14 November 2021",
        },

        {
            title: "Distance from Admin Block",
            description: "670 meters",
        },
    ];


    const shortinfo = "In Hindu philosophy and astrology, Navagrahas—the nine celestial influencers—have deep effects on human life. Shri. Bhrigu Van is inspired by this tradition, using plants that are believed to resonate with each Graha (planet), Nakshatra (star), and Rashi (zodiac sign)."

    const main_heading = "It's History";
    const GrowthDescription = "Each celestial body and star is symbolically represented by a plant, selected for:"


    const slides = [
        {
            image: image1,
            desc: "Its spiritual alignment",
        },
        {
            image: image1,
            desc: "Its Ayurvedic medicinal properties",
        },
        {
            image: image1,
            desc: "Its directional placement in Vastu-based landscaping",
        },

    ];
    const GrowthDescription1 = "This garden unites the ancient sciences of Jyotish Shastra, Vrikshayurveda, and Ayurveda, creating a space of harmony between the cosmos and nature."

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

            <section className="py-12  px-4 md:px-8 lg:px-16 bg-[#1B453C] text-center">
                <div className='mx-auto max-w-3xl px-4 md:px-6 lg:px-8'>
                    <h2 className="text-3xl md:text-4xl redhat font-semibold text-center text-[#D7DD87] mb-10  md:mb-6">
                        {main_heading}
                    </h2>
                    <p className="mt-0 md:mt-4 text-white" dangerouslySetInnerHTML={{ __html: shortinfo }}></p>
                </div>
            </section>
            <GrowthSlider

                slides={slides}
                GrowthDescription={GrowthDescription}
                GrowthDescription1={GrowthDescription1}
            />


        </>
    )
}



export const Table = () => {
    const navagrahaTable = {

        headers: ["Planet", "Direction", "Plant Name", "Botanical Name"],
        rows: [
            ["Surya", "Middle", "Aak", "Calotropis gigantea"],
            ["Chandra", "South-East", "Palash", "Butea monosperma"],
            ["Mangal", "South", "Khair", "Acacia catechu"],
            ["Budh", "North", "Apamarg", "Achyranthus aspera"],
            ["Guru", "North-East", "Peepal", "Ficus religiosa"],
            ["Shukra", "East", "Umbar", "Ficus racemosa"],
            ["Shani", "West", "Shami", "Prosopis cineraria"],
            ["Rahu", "South-West", "Durva Grass", "Cynodon dactylon"],
            ["Ketu", "North-West", "Darbha Grass", "Desmostachya bipinnata"],
        ],
    };

    const rashiTable = {
        title: "Rashi (Zodiac Signs) and Their Plants",
        description:
            "Each zodiac sign is linked with a plant that mirrors its elemental and healing characteristics. These plants are placed according to directional degrees.",
        headers: ["Zodiac Sign", "Plant Name", "Botanical Name"],
        rows: [
            ["Aries", "Rakta Chandan", "Pterocarpus santalinus"],
            ["Taurus", "Sapta Parni", "Alstonia scholaris"],
            ["Gemini", "Jackfruit", "Artocarpus heterophyllus"],
            ["Cancer", "Palash", "Butea monosperma"],
            ["Leo", "Ber", "Ziziphus mauritiana"],
            ["Virgo", "Mango", "Mangifera indica"],
            ["Libra", "Kaitha", "Limonia acidissima"],
            ["Scorpio", "Khair", "Acacia catechu"],
            ["Sagittarius", "Peepal", "Ficus religiosa"],
            ["Capricorn", "Sissam", "Dalbergia sissoo"],
            ["Aquarius", "Shami", "Prosopis cineraria"],
            ["Pisces", "Banyan", "Ficus benghalensis"]
        ]
    };
    const Nakshatra = {
        title: "Navagraha & their representing plant & directions",
        headers: ["Navagraha & their representing plant & directions"],
        rows: [
            ["Surya", "Aak", "Calotropis gigantea", "Middle"],
            ["Chandra", "Palash", "Butea monosperma", "South-East"],
            ["Mangal", "Khair", "Acacia catechu", "South"],
            ["Budh", "Apamarg", "Achyranthus aspera", "North"],
            ["Guru", "Peepal", "Ficus religiosa", "North-East"],
            ["Shukra", "Umbar", "Ficus racemosa", "East"],
            ["Shani", "Shami", "Prosopis cineraria", "West"],
            ["Rahu", "Durva", "Cynadon dactylon", "South-West"],
            ["Ketu", "Darbha", "Desmostachya bipinnata", "North-West"]
        ]
    };

    const Rashi = {
        title: "Rashi & their representing plant & directions",
        headers: ["Rashi & their representing plant & directions"],
        rows: [
            ["Vrushabh (Taurus)", "Sapta parni (Devil’s tree)", "Alstonia scholaris", "30-60°"],
            ["Mithun (Gemini)", "Fanas (Jack fruit)", "Artocarpus heterophyllus", "60-90°"],
            ["Karka (Cancer)", "Palash (Flame of forest)", "Butea monosperma", "90-120°"],
            ["Sinha (Leo)", "Ber (Indian jujube)", "Ziziphus mauritiana", "120-150°"],
            ["Kanya (Virgo)", "Aam (Mango)", "Mangifera indica", "150-180°"],
            ["Tula (Libra)", "Kaitha / Kabith", "Limonia acidissima", "180-210°"],
            ["Vrushchik (Scorpio)", "Khair (Cutch tree)", "Acacia catechu", "210-240°"],
            ["Dhanu (Sagittarius)", "Aswatha / Peepal (Sacred fig)", "Ficus religiosa", "240-270°"],
            ["Makar (Capricorn)", "Sissam (Indian rose wood)", "Dalbergia sissoo", "270-300°"],
            ["Kumbha (Aquarius)", "Shami (Spunge tree)", "Prosopis cineraria", "300-330°"],
            ["Meen (Pisces)", "Vata vruksha (Banyan tree)", "Ficus benghalensis", "330-360°"]
        ]
    };

    const Nakshtra = {
        title: "Nakshtra & their representing plant & directions",
        headers: ["Nakshtra & their representing plant & directions"],
        rows: [
            ["Ashwini (Beta Arietis)", "Kuchala", "Strychnos nux-vomica", "0-13° 20´"],
            ["Bharani (41 Arietus)", "Aonla", "Emblica officinalis", "13° 20′ - 26° 40′"],
            ["Kritika (Eta Tauri Alcyone-2)", "Anjir", "Ficus carica", "26° 40′ - 40° 00′"],
            ["Rohini (Aldebaran)", "Jamun", "Syzigium cumini", "40° 00′ - 53° 20′"],
            ["Mrigashirsha (Lambda Orionis)", "Khair", "Acacia catechu", "53° 20′ - 66° 40′"],
            ["Ardra (Gamma)", "Laung / Long pepper", "Piper longum", "66° 40′ - 80° 00′"],
            ["Punarvasu (Beta Geminorum Pollux)", "Bamboo", "Bambusa vulgaris", "80° 00′ - 93° 20′"],
            ["Pushya (Delta Cancri)", "Peepal", "Ficus religiosa", "93° 20′ - 106° 40′"],
            ["Ashlesha (Zeta Hydrae)", "Kathal", "Artocarpus heterophyllus", "106° 40′ - 120° 00′"],
            ["Magha (Regulus / Roleonis)", "Bargad", "Ficus bengalensis", "120° 00′ - 133° 20′"],
            ["Purva Phalguni (Delta Leonis)", "Phalsa", "Butea monosperma", "133° 20′ - 146° 40′"],
            ["Uttara Phalguni (Denebola)", "Aak", "Calotropis gigantea", "146° 40′ - 160° 00′"],
            ["Hasta (Delta Corvi)", "Mango", "Jasminum grandiflorum", "160° 00′ - 173° 20′"],
            ["Chitra (Virginis spica)", "Bilva/Bael", "Aegle marmelos", "173° 20′ - 186° 40′"],
            ["Swathi (Alpha Bootis/Arcturus)", "Arjun", "Terminalia arjuna", "186° 40′ - 200° 00′"],
            ["Vishakha (Alpha Librae)", "Kaitha", "Limonia acidissima", "200° 00′ - 213° 00′"],
            ["Anuradha (Delta Scorpii)", "Shami", "Prosopis cineraria", "213° 00′ - 226° 40′"],
            ["Jeshta (Antares)", "Semal", "Bombax ceiba", "226° 40′ - 240° 00′"],
            ["Moola (Lambada Scorpi)", "Kala kattha", "Senegelia catechu", "240° 00′ - 253° 20′"],
            ["Purva ashata (Delta sagittarii)", "Ashok", "Saraca indica", "253° 20′ - 266° 40′"],
            ["Uttara ashata (Sigma sagittavivi)", "Kathal", "Artocarpus heterophyllus", "266° 40′ - 280° 00′"],
            ["Shravan (Alpha Aquila/Altair)", "Madar/Aak", "Calotropis procera/gigantia", "280° 00′ - 293° 20′"],
            ["Dhanishtha (Beta Delphini)", "Shami", "Prosopis cineraria", "293° 20′ - 306° 40′"],
            ["Shatataaraka (Lambda Aquarii)", "Kadamb", "Mitragyna parvifolia", "306° 40′ - 320° 00′"],
            ["Purva Bhadrapada (Beta Pegasi/Markab)", "Neem", "Azadirachta indica", "320° 00′ - 333° 20′"],
            ["Uttara Bhadrapada (Gamma Pegasi/Algenib)", "Aam", "Mangifera indica", "333° 20′ - 346° 40′"],
            ["Revati (Zeta Piscium)", "Mahua", "Madhuca indica", "346° 40′ - 360° 00′"]
        ]
    };


    return (
        <>
            <section className="py-8 md:py-12   px-4 md:px-8 lg:px-16">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <TableSection
                        outerTitle="Navagraha and Their Plants (with Directions)"
                        tableData={navagrahaTable} />

                </div>
            </section>

            <section className="pb-8 md:pb-12   px-4 md:px-8 lg:px-16">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <TableSection
                        outerTitle="Rashi (Zodiac Signs) and Their Plants"
                        outerDescription="Each zodiac sign is linked with a plant that mirrors its elemental and healing characteristics. These plants are placed according to directional degrees.
                        "
                        tableData={rashiTable}
                    />
                </div>
            </section>
            <section className="pb-8 md:pb-12   px-4 md:px-8 lg:px-16">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <TableSection
                        outerTitle="Nakshatra and Their Plants"
                        outerDescription="This section features 27 Nakshatras, each associated with a specific tree or herb. These are arranged in the garden to reflect their celestial positions.
                        "
                        tableData={Nakshatra}
                    />
                </div>
            </section>

            <section className="pb-8 md:pb-12   px-4 md:px-8 lg:px-16">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <TableSection
                        tableData={Rashi}
                    />
                </div>
            </section>

            <section className="pb-8 md:pb-12   px-4 md:px-8 lg:px-16">
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>

                    <TableSection
                        tableData={Nakshtra}
                    />
                </div>
            </section>


        </>
    );
};


export const Spiritual = () => {
    const heading = "Spiritual and Medicinal Value"
    const class2 = "blurheight"

    const boxslider = [
        {
            image: impact1,
            heading: "Spiritual Uses",
            description: [
                "Astrological Remedies: Planting specific trees helps balance planetary influences",
                "Meditation & Worship: Enhances connection with cosmic energies",
                "Vastu Shastra: Aligns environmental energies for health and prosperity",
            ]
        },
        {
            image: impact1,
            heading: "Medicinal Uses",
            description: [
                "Ayurvedic Healing: Each plant has known therapeutic properties",
                "Mental and Emotional Balance: Trees promote calmness and resilience",
                "Holistic Well-being: Supports physical, spiritual, and ecological health",

            ]
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


export const Historical = () => {
    const marketData = {
        imageSrc: img01,
        title: "Historical Context",
        description: "The concept of Navagrah originates in Vedic astrology and is rooted in texts such as the Brihat Parashara Hora Shastra. The garden is a reflection of these age-old beliefs, bringing together:",

        steps: [
            "Spiritual traditions",
            "Cultural heritage",
            "Ecological sustainability",
        ],

    };
    return (
        <>
            <MarketLayout marketData={marketData} />

        </>
    );
}


export const Van = () => {
    const heading = "Shri. Bhrigu Van – Navagrah Garden";
    const description =
        "Shri. Bhrigu Van – Navagrah Garden is not just a plantation—it is a cosmic experience on earth. Each plant, each direction, and each step in this garden is aligned with celestial wisdom. It invites visitors to explore the intersection of astrology, ecology, and wellness, while contributing to biodiversity and environmental education.<br/> <br/> This garden exemplifies how ancient knowledge and natural systems can be harmonized to create a space of lasting significance.";

    return (
        <section
            className="relative bg-no-repeat py-14 !mt-0 lg:py-32 bg-cover w-full my-8 md:my-12  "
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
