import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/training-development/multi/banner.webp";
import IntroImg from "../../../assets/images/training-development/multi/info.webp";
import Image from 'next/image';
import story1 from "../../../assets/images/training-development/multi/module1.webp";
import story2 from "../../../assets/images/training-development/multi/module2.webp";
import story3 from "../../../assets/images/training-development/multi/module3.webp";
import ModuleSlider from '../ModuleSlider';
import Titleslider from '../Titleslider';
import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/training-development/multi/key1.webp";
import use2 from "../../../assets/images/training-development/multi/key2.webp";
import use3 from "../../../assets/images/training-development/multi/key3.webp";
import use4 from "../../../assets/images/training-development/multi/key4.webp";

import { MdCheckCircle } from "react-icons/md";
import Plant from "../../../assets/images/training-development/multi/future.svg";
import PartnerBg from "../../../assets/images/training-development/multi/bgimg.webp";



export const Integrated = () => {
    const text = {
        banner: banner,
        heading: `Integrated Sustainable Agriculture  <br/> Training by Atulye Krishi Vana`,
        title:
            "Empowering Rural Communities Through Soil, Water, and Crop Management Techniques",
        // link: "/contact",
        // button: "Explore Training Programs",
        opacity: "opacity-40"
    };
    const IntroData = {
        heading: "Empowering Rural Communities Through Soil, Water, and Crop Management Techniques",
        info: "Agriculture is evolving, and with growing challenges like soil degradation, water scarcity, pest resistance, and declining yields, traditional practices alone are no longer sufficient. Atulye Krishi Vana offers a series of comprehensive and interconnected agricultural training modules that address these issues holistically. <br> This program is designed to equip farmers, rural youth, women’s self-help groups, and small landholders with modern, sustainable, and organic farming practices. The focus is not just on productivity but on regenerative agriculture—restoring soil health, conserving resources, and building long-term resilience in farming systems.  ",
        image: IntroImg,
    };
    const heading = "Overview of Training Modules";
    const info = "This training is divided into key thematic areas. Each module is practical, field-oriented, and contextualized for small to medium-scale Indian farming environments."

    return (
        <>
            <BannerPage
                heading={text.heading}
                title={text.title}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}
                opacity={text.opacity}
            />
            <section className="relative text-center md:text-left  my-20 md:my-[4rem] mb-0">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className="flex md:flex-col flex-col lg:flex-row justify-between gap-4 lg:gap-12  ">
                        <div className="lg:w-6/12  w-full  w-12/12 ">
                            <Image
                                className="w-full h-full rounded-xl"
                                src={IntroData.image}
                                alt="banner"
                            />
                        </div>
                        <div className="lg:w-6/12 mt-2 md:mt-4 w-full  w-12/12">
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-black mt-4 mb-8 ">
                                {IntroData.heading}
                            </h2>

                            <p
                                className="text-black text-base md:text-lg   redhat mb-10"
                                dangerouslySetInnerHTML={{ __html: IntroData.info }}
                            ></p>

                        </div>
                    </div>
                </div>
            </section>

            <section className="relative text-center px-4  bg-[#1B453C] py-14 lg:py-20">

                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className='md:max-w-[70%] mx-auto'>
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-white mb-12">
                            {heading}
                        </h2>
                        <p className='text-base text-white '>{info}</p>

                    </div>
                </div>
            </section>
        </>
    )
}


export const Modules = () => {
    const stories = [
        {
            image: story1,
            title: "Composting Techniques: Turning Waste into Wealth",
            description: `
             <ul>
                <li>Aerobic and anaerobic composting methods</li>
                <li>Compost pit design and site selection</li>
                <li>Composting with dry leaves, cattle dung, kitchen waste, and crop residue</li>
                <li>Temperature, moisture, and microbial balance</li>
             </ul>
            ` ,
        },
        {
            image: story2,
            title: "Vermicomposting: Harnessing the Power of Earthworms",
            description: `
            <ul>
                <li>Selection of earthworm species</li>
                <li>Construction of low-cost vermi beds</li>
                <li>Feeding and maintaining worm populations</li>
                <li>Harvesting vermicast and vermiwash</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Grafting and Budding: Propagation for Improved Crop Quality",
            description: `
            <ul>
                <li>Types of grafting: cleft, tongue, side, and veneer</li>
                <li>Budding techniques: shield, patch, and T-budding</li>
                <li>Tools, hygiene, and aftercare</li>
                <li>Suitable plants: guava, mango, citrus, hibiscus, and more</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Soil Health Improvement: Rebuilding the Foundation of Farming",
            description: `
            <ul>
                <li>Understanding soil composition, pH, and fertility indicators</li>
                <li>Soil testing and interpretation of results</li>
                <li>Application of organic matter: compost, biochar, cow dung slurry</li>
                <li>Use of green manures and legumes</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Soil Conservation: Safeguarding Productive Land",
            description: `
            <ul>
                <li>Contour bunding and trenching</li>
                <li>Mulching with crop residue and biodegradable covers</li>
                <li>Cover cropping and intercropping</li>
                <li>Vegetative barriers (vetiver, lemongrass)</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Water Conservation: Using Every Drop Wisely",
            description: `
            <ul>
                <li>Drip irrigation system setup and maintenance</li>
                <li>Mulching to reduce evaporation loss</li>
                <li>Rainwater harvesting methods: check dams, recharge pits, bunds</li>
                <li>Farm pond design and silt traps</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Organic Farming: Farming Without Chemicals",
            description: `
            <ul>
                <li>Principles and benefits of organic farming</li>
                <li>Making Jeevamrut, Beejamrut, and Panchagavya</li>
                <li>Natural growth promoters using fermented extracts</li>
                <li>Crop rotation and trap cropping for disease control</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Integrated Pest Management (IPM): Smart Pest Control",
            description: `
            <ul>
                <li>Understanding pest life cycles and seasonal patterns</li>
                <li>Setting up pheromone and light traps</li>
                <li>Natural repellents and botanical sprays</li>
                <li>Promoting beneficial predators and parasitoids</li>
             </ul>
            `,
        },
    ];

    return (
        <>
            <div className='mt-8'>
                <ModuleSlider heading="Training Modules" stories={stories} />
            </div>
        </>
    )
}



export const Training = () => {
    const heading = "Training Format and Delivery";
    const slides = [
        {
            heading: "Demonstration farms",
            description: "Demonstration farms for hands-on practice",
        },
        {
            heading: "Visual aids",
            description: 'Visual aids and printed manuals for easy recall',
        },
        {
            heading: "Practical group activities",
            description: " Practical group activities like compost bed preparation, soil testing, grafting demos, and IPM trap installation",
        },
        {
            heading: "Interactive sessions",
            description: 'Interactive sessions for clarifying local challenges and finding contextual solutions',
        },
        {
            heading: "Assessments and observation logs",
            description: 'Assessments and observation logs to monitor progress and application',
        },
    ];

    return (
        <>
            <div className='mt-6 md:mt-10'>
                <Titleslider heading={heading} boxslider={slides} />
            </div>
        </>
    )
}


export const Who = () => {
    const heading = "Who Should Attend?"

    const title = "This integrated training is ideal for:"
    const futurePlans = [
        "Marginal and smallholder farmers",
        'Women’s Self-Help Groups (SHGs)',
        "Rural youth and first-time entrepreneurs",
        "Organic growers and homestead gardeners",
        "Agricultural extension officers and community volunteers",

    ];


    return (
        <>

            <section className="text-center md:text-left  pb-16 pt-16 lg:pb-20 lg:pt-16">
                <div className="mx-auto max-w-7xl  px-6 flex flex-col-reverse justify-between md:flex-row items-center gap-10">

                    <div className="w-full md:w-[45%] text-center md:text-left">
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-normal redhat text-black mb-2">
                            {heading}
                        </h2>

                        <p className="text-black py-4 md:py-6 text-xl">{title}</p>

                        {/* List using map() */}
                        <ul className="mt-6 space-y-4">
                            {futurePlans.map((plan, index) => (
                                <li key={index} className="flex   space-x-3">
                                    <span className="w-6 h-6 text-[#1B453C] flex items-center justify-center rounded-full">
                                        <MdCheckCircle className='w-6 h-6' />
                                    </span>
                                    <p className="text-[#141414] text-left opacity-80">{plan}</p>
                                </li>
                            ))}
                        </ul>

                    </div>
                    <div className=" w-full md:w-[45%]">
                        <Image
                            src={Plant}
                            alt="Planting"
                            width={600}
                            height={600}
                            className="w-full h-full"
                            quality={90}
                        />

                    </div>
                </div>
            </section>
        </>
    )
}


export const Benefits = () => {
    const gridBox = "md:!grid-cols-4 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Economic Resilience",
            description:
                "By learning to make their own inputs and reduce external dependency, farmers can lower costs and increase net profits.",
        },
        {
            image: use2,
            title: "Environmental Stewardship",
            description:
                "Soil and water conservation techniques build climate resilience and reduce environmental degradation.",
        },
        {
            image: use3,
            title: "Nutritional Security",
            description:
                "Organic produce, grown without harmful residues, improves household nutrition and opens up premium market channels.",
        },
        {
            image: use4,
            title: "Community Impact",
            description:
                "Participants can transfer skills to peers, train others, and create community-driven green initiatives.",
        },


    ];
    return (
        <>
            <div className='-pt-10'>
                <Gridbox
                    heading="Long-Term Benefits of the Program"
                    data={whyChooseData}
                    className={custom_class}
                    gridBox={gridBox}
                />
            </div>
        </>
    )
}


export const Movement = () => {
    const heading = "A Movement Toward Regenerative Agriculture";
    const description =
        "This integrated training package represents more than just techniques—it reflects a mindset shift toward harmony with nature, local knowledge, and sustainable innovation. Atulye Krishi Vana’s mission is to restore balance to farming ecosystems while ensuring farmers lead lives of dignity, stability, and purpose. <br><br> By combining composting, grafting, organic inputs, conservation, and pest management into a cohesive training offering, this program gives participants the tools to transform not just their fields—but their futures. ";

    return (
        <section
            className="relative bg-no-repeat !mb-0 py-12 lg:py-20 bg-cover w-full my-8 md:my-12 !mt-0"
            style={{ backgroundImage: `url(${PartnerBg.src})` }}
        >

            <div className="relative z-10 h-full flex mx-auto px-4   max-w-7xl">
                <div className="max-w-2xl text-white text-center md:text-left pl-3   mt-5">
                    <h2 className=" w-full  text-3xl md:text-4xl leading-snug font-bold mb-8 md:mb-10 redhat">
                        {heading}
                    </h2>
                    <p
                        className="mb-6 text-sm  md:text-base   w-full"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>



                </div>
            </div>
        </section>
    );
}

