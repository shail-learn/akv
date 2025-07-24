import React from 'react'
import BannerPage from '../BannerPage';
import banner from "../../../assets/images/training-development/mushroom/banner.webp";
import IntroImg from "../../../assets/images/training-development/mushroom/info.webp";

import Img1 from "../../../assets/images/training-development/multi/choose1.webp";
import Img2 from "../../../assets/images/training-development/multi/choose2.webp";
import Img3 from "../../../assets/images/training-development/multi/choose3.webp";
import Img4 from "../../../assets/images/training-development/multi/choose4.webp";

import story1 from "../../../assets/images/training-development/multi/module1.webp";
import story2 from "../../../assets/images/training-development/multi/module2.webp";
import story3 from "../../../assets/images/training-development/multi/module3.webp";


import Image from 'next/image';
import Titleslider from '../Titleslider';

export const Mushroom = () => {
    const text = {
        banner: banner,
        heading: `Mushroom Spawn Preparation and Cultivation Training`,
        title:
            "A Practical Skill-Building Program by Atulye Krishi Vana",
        // link: "/contact",
        // button: "Explore Training Programs",
        opacity: "opacity-40"
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
        </>
    )
}

export const Why = () => {
    const IntroData = {
        heading: "A Practical Skill-Building Program by Atulye Krishi Vana",
        info: "Atulye Krishi Vana presents a comprehensive training program in Mushroom Spawn Preparation and Cultivation, designed to equip individuals with the complete knowledge and hands-on experience needed to start their own mushroom-based enterprise. This program is especially relevant for small-scale farmers, self-help groups, rural entrepreneurs, and youth looking to create a high-value, low-investment source of income. <br>The core of this program is the 25-day intensive training in mushroom spawn preparation—the most crucial and technical aspect of mushroom farming. Alongside this, participants are also trained in mushroom cultivation practices, post-harvest handling, and enterprise planning. The training is suitable for those interested in setting up end-to-end mushroom production units without depending on external spawn suppliers.  ",
        image: IntroImg,
    };

    return (
        <>
            <section className="relative text-center md:text-left  my-20 md:my-[4rem] mb-10">
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
                            <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-black mt-4 mb-8 ">
                                {IntroData.heading}
                            </h2>

                            <p
                                className="text-black text-base md:text-[17px]   redhat mb-10"
                                dangerouslySetInnerHTML={{ __html: IntroData.info }}
                            ></p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}


export const Course = () => {
    const heading = "Why Mushroom Farming?";
    const info = "Mushroom cultivation is one of the most space-efficient and climate-resilient agricultural activities available today. It can be carried out in small rooms, temporary sheds, or unused corners of a home or farm. Mushrooms are rich in nutrients and have growing demand in urban and rural markets alike. More importantly, the inputs required for cultivation—agricultural waste, moisture, and humidity—are easily available or manageable. <br><br> Most importantly, cultivating mushrooms is profitable year-round when farmers can produce their own spawn, which eliminates delays, reduces dependency, and improves quality."

    return (
        <>
            <section className="relative text-center px-4  bg-[#1B453C] py-14 lg:py-20">

                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 ">
                    <div className='md:max-w-[70%] mx-auto'>
                        <h2 className="text-3xl md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold text-center redhat text-white mb-12">
                            {heading}
                        </h2>
                        <p className='text-base md:text-[17px] text-white' dangerouslySetInnerHTML={{ __html: info }} />


                    </div>
                </div>
            </section>
        </>
    )
}



export const Training = () => {
    const heading = "Course Duration and Structure";
    const short = "This is a structured, multi-phase training program. It includes both theoretical understanding and hands-on practice in controlled, real-life conditions."
    const slides = [
        {
            heading: "Total Training Duration",
            description: "Approximately 30 days",
        },
        {
            heading: "Spawn Preparation Module",
            description: '25 days (core technical focus)',
        },
        {
            heading: "Cultivation Training Module",
            description: "5–7 days (conducted in parallel or post-spawn training)",
        },
        {
            heading: "Mode",
            description: ' Residential, in-person',
        },
        {
            heading: "Training Type",
            description: 'Field-intensive, skill-oriented',
        },
    ];

    return (
        <>
            <div className='mt-6 md:mt-10 -mb-6'>
                <Titleslider heading={heading} boxslider={slides} shortdescription={short} />
            </div>
        </>
    )
}
