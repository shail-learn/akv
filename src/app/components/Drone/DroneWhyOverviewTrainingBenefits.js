import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/training-development/drone/banner.webp";
import IntroImg from "../../../assets/images/training-development/drone/info.webp";
import Image from 'next/image';
import Img1 from "../../../assets/images/training-development/drone/choose1.webp";
import Img2 from "../../../assets/images/training-development/drone/choose2.webp";
import Img3 from "../../../assets/images/training-development/drone/choose3.webp";
import Img4 from "../../../assets/images/training-development/drone/choose4.webp";
import ModuleSlider from '../ModuleSlider';
import story1 from "../../../assets/images/training-development/drone/module1.webp";
import story2 from "../../../assets/images/training-development/drone/module2.webp";
import story3 from "../../../assets/images/training-development/drone/module3.webp";
import story4 from "../../../assets/images/training-development/drone/module4.webp";
import story5 from "../../../assets/images/training-development/drone/module5.webp";
import story6 from "../../../assets/images/training-development/drone/module6.webp";
import story7 from "../../../assets/images/training-development/drone/module7.webp";

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/training-development/drone/key1.webp";
import use2 from "../../../assets/images/training-development/drone/key2.webp";
import use3 from "../../../assets/images/training-development/drone/key3.webp";
import use4 from "../../../assets/images/training-development/drone/key4.webp";

export const Drone = () => {
    const text = {
        banner: banner,
        heading: `Drone Application in  <br/> Agriculture Training`,
        title:
            "Harnessing Precision for Modern, Scalable Farming",
        // link: "/contact",
        // button: "Explore Training Programs",
        opacity: "opacity-40"
    };
    const IntroData = {
        heading: "Harnessing Precision for Modern, Scalable Farming",
        info: "Atulye Krishi Vana is proud to introduce its latest training initiative—Drone Application in Agriculture, a forward-looking program designed to equip farmers, agri-entrepreneurs, and rural youth with the technical skills to use drones effectively in agricultural operations. As farming continues to evolve with the infusion of technology, this program ensures that small and marginal farmers are not left behind.   <br> Drones offer more than just aerial imagery—they are transforming agriculture by enabling precision input application, real-time crop monitoring, and efficient farm management. This training builds awareness, capability, and practical knowledge to use drones for sustainable, cost-effective agriculture.  ",
        image: IntroImg,
    };
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
        </>
    )
}


export const Why = () => {
    const heading = "Why Drones in Agriculture?";
    const info = "Agricultural drones are rapidly becoming indispensable tools for modern farming. Their ability to collect, interpret, and act on field data saves time, reduces input waste, and improves yields. With a single flight, drones can survey large areas, detect problems early, and help farmers take timely action. <br> <br> Applications include:"
    const features = [
        {
            image: Img1,
            title: `Crop health assessment`,
        },
        {
            image: Img2,
            title: `Aerial spraying of fertilizers and pesticides`,
        },
        {
            image: Img3,
            title: `Irrigation monitoring`,
        },
        {
            image: Img4,
            title: `Field mapping and soil condition analysis`,
        },



    ];
    return (
        <>
            <section className="relative text-center px-4  bg-[#1B453C] py-14 lg:py-20">

                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className='md:max-w-[70%] mx-auto'>
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-white mb-12">
                            {heading}
                        </h2>
                        <p className='text-base text-white mb-12 md:mb-16'>{info}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-4 md:gap-10">
                                    <div className="min-w-32 min-h-32 relative rounded-full overflow-hidden">
                                        <Image
                                            src={feature.image}
                                            alt={feature.title}
                                            layout="fill"
                                            objectFit="cover rounded-full"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white opacity-75 text-[17px] text-left redhat relative"
                                            dangerouslySetInnerHTML={{ __html: feature.title }}
                                        />

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Overview = () => {
    const heading = "Training Overview";
    const info = ` <b>Mode:</b> Field-based and classroom training <br>
    <b>Eligibility:</b> Open to farmers, youth, FPO members, and agri-technical staff <br>
    <b>No prior technical background is required</b> <br><br>
    This program blends theory, demonstration, and supervised practical sessions, ensuring each participant understands how drones are flown, managed, and integrated into farming operations.
   `

    return (
        <>
            <section className="relative text-center px-4  bg-white py-14 lg:py-20 !pb-10">

                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className='md:max-w-[70%] mx-auto'>
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium text-center redhat text-[#1B453C] mb-12">
                            {heading}
                        </h2>
                        <p className='text-base text-black mb-12 md:mb-16' dangerouslySetInnerHTML={{ __html: info }} />


                    </div>
                </div>
            </section>
        </>
    )
}


export const Training = () => {
    const stories = [
        {
            image: story1,
            title: "Introduction to Drone Technology",
            description: `
             <ul>
                <li>What is a drone?</li>
                <li>Types of agricultural drones (quadcopter, fixed-wing)</li>
                <li>Key components: GPS, sensors, sprayers, cameras, batteries</li>
                <li>Safety and government regulations for drone usage in agriculture</li>
             </ul>
            ` ,
        },
        {
            image: story2,
            title: "Agricultural Use Cases for Drones",
            description: `
            <ul>
                <li>Surveying large fields quickly and efficiently</li>
                <li>Monitoring crop health using multispectral and thermal imaging</li>
                <li>Detecting pest and disease outbreaks</li>
                <li>Estimating plant population and canopy density</li>
             </ul>
            `,
        },
        {
            image: story3,
            title: "Drone Operation and Flying Skills",
            description: `
            <ul>
                <li>Basics of aerodynamics and flight controls</li>
                <li>Pre-flight checklist and safety protocol</li>
                <li>Hands-on flying sessions (manual and programmed flights)</li>
                <li>Geo-fencing, altitude settings, and emergency handling</li>
             </ul>
            `,
        },
        {
            image: story4,
            title: "Data Collection and Analysis",
            description: `
            <ul>
                <li>Capturing images and video for crop health</li>
                <li>Mapping field boundaries and topography</li>
                <li>Converting images into actionable insights using software tools</li>
             </ul>
            `,
        },
        {
            image: story5,
            title: "Aerial Spraying: Techniques and Calibration",
            description: `
            <ul>
                <li>Choosing the right drone for spraying</li>
                <li>Nozzle selection and spray pattern calibration</li>
                <li>Mixing and loading of inputs</li>
                <li>Setting dosage and area coverage</li>
             </ul>
            `,
        },
        {
            image: story6,
            title: "Maintenance and Troubleshooting",
            description: `
            <ul>
                <li>Battery care and charging protocols</li>
                <li>Cleaning and storing drone</li>
                <li>Common issues and field-level repairs</li>
                <li>Preventive maintenance to extend lifespan</li>
             </ul>
            `,
        },
        {
            image: story7,
            title: "Business Opportunities and Licensing",
            description: `
            <ul>
                <li>Opportunities for drone service providers</li>
                <li>Creating micro-enterprises around drone spraying and data services</li>
                <li>Collaborating with agri-input companies, cooperatives, and FPOs</li>
                <li>Role of drones in government schemes and smart agriculture programs</li>
             </ul>
            `,
        },

    ];

    return (
        <>
            <div className='-mt-8'>
                <ModuleSlider heading="What the Training Covers?" stories={stories} />
            </div>
        </>
    )
}


export const Benefits = () => {
    const gridBox = "md:!grid-cols-4 grid3";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Reduced Labour and Input Costs",
            description:
                "Spraying one acre manually may take over an hour and two people. A drone can do the same in under 10 minutes with greater accuracy.",
        },
        {
            image: use2,
            title: "Improved Input Efficiency",
            description:
                "Inputs are applied only where needed. This reduces overuse and cuts costs without compromising yields.",
        },
        {
            image: use3,
            title: "Early Problem Detection",
            description:
                "Drones can spot issues before they are visible to the human eye—allowing for early intervention and saving entire harvests.",
        },
        {
            image: use4,
            title: "Safer Practices",
            description:
                "Farmers are no longer exposed to harmful chemicals. Drones carry out spraying at a safe distance, reducing health risks.",
        },


    ];
    return (
        <>
            <div className='pt-10'>
                <Gridbox
                    heading="Benefits of Drone Adoption for Farmers"
                    data={whyChooseData}
                    className={custom_class}
                    gridBox={gridBox}
                />
            </div>
        </>
    )
}
