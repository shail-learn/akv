import React from 'react'
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/projects/project20/banner.webp";
import image2 from "../../../assets/images/projects/project20/key.webp";
import Image from 'next/image';
import { RiCheckboxCircleFill } from "react-icons/ri";
import image3 from "../../../assets/images/projects/project20/histroy.webp";
import Titleslider from '../Titleslider';

import { Gridbox } from '../Gridbox';
import use1 from "../../../assets/images/projects/project20/use1.webp";
import use2 from "../../../assets/images/projects/project20/use2.webp";
import use3 from "../../../assets/images/projects/project20/use3.webp";
import use4 from "../../../assets/images/projects/project20/use4.webp";
import use5 from "../../../assets/images/projects/project20/use5.webp";
import use6 from "../../../assets/images/projects/project20/use6.webp";
import PartnerBg from "../../../assets/images/projects/project20/bg.webp";

export const Swayambhu = () => {
    const text = {
        banner: banner,
        heading: `Shri. Swayambhu Vatika <br> Harishankari Plantation`,
        opacity: 'opacity-50'
    }
    return (
        <>
            <BannerPage heading={text.heading} subtitle={text.subtitle} title={text.title} banner={text.banner} opacity={text.opacity} />
        </>
    )
}

export const Keys = () => {
    const description = `Shri. Swayambhu Vatika, located in Kh-112, is home to a sacred plantation known as Harishankari, which features a rare and spiritually significant combination of Peepal, Bargad, and Pakad trees in a single location. Spread across 394 square meters and situated 796 meters from the Admin Block, this unique grove was planted on 25 December 2021. <br> <br> The site is developed beside Triveni Ghati and is irrigated through a drip irrigation system with online laterals. Though compact in size, the plantation carries deep cultural and religious meaning.
    `

    const heading = "Key Details"
    const infoData = [
        {
            title: "Theme Index",
            description: "Harishankari",
        },
        {
            title: "Location Name",
            description: "Shri. Swayambhu Vatika",
        },
        {
            title: "Coordinates",
            description: ` 22°59'32.9"N 77°10'51.6"E`,
        },
        {
            title: "Area",
            description: "394 sq m",
        },
        {
            title: "Date of Planting",
            description: "25 December 2021",
        },
        {
            title: "Irrigation Method",
            description: "Drip Irrigation by online lateral",
        },

        {
            title: "Distance from Admin Block",
            description: "796 meters",
        },
    ];

    return (
        <>
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-white'>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                    <div className='md:w-[90%] mx-auto'>
                        <p className='mt-0 md:mt-4 text-black font-medium text-center'
                            dangerouslySetInnerHTML={{ __html: description }} />
                    </div>
                </div>

            </section>

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

        </>
    )
}


export const Des = () => {
    const heading = "Description"
    const description = `Harishankari refers to the combination of Peepal (Ficus religiosa), Bargad (Ficus benghalensis), and Pakad (Ficus virens) trees growing together in one location. This sacred triad is considered spiritually powerful and is believed to bring harmony, healing, and divine presence to its surroundings. <br> <br> This plantation, developed beside Triveni Ghati, offers a tranquil and spiritually charged space where visitors can connect with nature, tradition, and well-being.
    `
    return (
        <section className='text-center md:text-left pb-16 pt-16 lg:pb-20 lg:pt-20'>
            <div className='mx-auto max-w-7xl  px-6'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
            </div>
            <div className='mx-auto max-w-7xl  px-6 flex flex-col-reverse md:flex-row items-center gap-10'>
                <div className='w-full md:w-2/3 text-center md:text-left'>

                    <div className='w-full p-4 md:p-8 bg-[#1B453C] rounded-2xl'>
                        <p className='text-white text-base redhat' dangerouslySetInnerHTML={{ __html: description }}>
                        </p>
                    </div>
                </div>
                <div className='w-full md:w-1/3 text-center'>
                    <Image className='w-full h-full rounded-xl' src={image3} alt='banner' />
                </div>

            </div>
        </section>
    )
}


export const Hist = () => {
    const heading = "History"
    const description = `Harishankari is associated with the goddess Shakti and the divine feminine principle in Hindu belief. It holds deep religious significance and is revered in various regional traditions.
    <br> <br> Shri. Swayambhu Vatika, meaning "self-manifested garden," draws its spiritual context from the concept of Swayambhu, referring to that which is self-created or naturally occurring. The site is associated with sacred Hindu and Buddhist traditions. <br><br> This context also connects to the Swayambhunath Stupa in Kathmandu, Nepal, one of the oldest and most revered spiritual sites in South Asia. Known as a UNESCO World Heritage Site, the stupa has long served as a center of spiritual learning and pilgrimage. The term “Swayambhu Vatika” here symbolizes a space of deep spiritual connection, sacred emergence, and cultural heritage.
    `
    return (
        <section className='relative py-12 mb-8 md:mb-10 md:py-16 bg-[#f5f5f5]'>
            <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-8'>
                <h2 className='text-3xl md:leading-[1.3] md:text-4xl text-center font-medium redhat text-[#1B453C] mb-8'>{heading}</h2>
                <div className='md:w-[90%] mx-auto'>
                    <p className='mt-0 md:mt-4 text-black font-normal text-center'
                        dangerouslySetInnerHTML={{ __html: description }} />
                </div>
            </div>

        </section>
    )
}



export const Uses = () => {
    const gridBox = "xl:!grid-cols-4 custom_height";
    const custom_class = "white_grid grid_padding";
    const whyChooseData = [
        {
            image: use1,
            title: "Respiratory Health:",
            description:
                "Helps treat asthma",
        },
        {
            image: use2,
            title: "Digestive Health: ",
            description:
                "Alleviates constipation and indigestion",
        },
        {
            image: use3,
            title: "Diabetes Management:",
            description:
                "Supports blood sugar regulation",
        },
        {
            image: use3,
            title: "Wound Healing:",
            description:
                "Used for skin infections and treating wounds",
        },


    ];
    const whyChooseData1 = [
        {
            image: use1,
            title: "Dental Care:",
            description:
                "Strengthens gums; bark used as a natural toothbrush",
        },
        {
            image: use2,
            title: "Diabetes: ",
            description:
                "Aids in reducing blood sugar levels",
        },
        {
            image: use3,
            title: "Anti-inflammatory:",
            description:
                "Helps with skin inflammations",
        },
        {
            image: use3,
            title: "Reproductive Health:",
            description:
                "Traditionally used to support fertility",
        },


    ];
    const whyChooseData2 = [
        {
            image: use1,
            title: "Digestive Health:",
            description:
                "Treats diarrhea and dysentery",
        },
        {
            image: use2,
            title: "Wound Healing: ",
            description:
                "Accelerates healing of wounds and ulcers",
        },
        {
            image: use3,
            title: "Anti-inflammatory:",
            description:
                "Relieves joint and muscle inflammation",
        },
        {
            image: use3,
            title: "Respiratory Health:",
            description:
                "Assists in managing asthma and bronchitis",
        },


    ];



    return (
        <>

            <Gridbox
                heading="Peepal (Ficus religiosa)"
                data={whyChooseData}
                className={custom_class}
                gridBox={gridBox}
            />

            <div className='-mt-6'>
            <Gridbox
                heading="Bargad / Banyan (Ficus benghalensis)"
                data={whyChooseData1}
                className={custom_class}
                gridBox={gridBox}
            />
            </div>
            <div className='-mt-6'>
            <Gridbox
                heading="Pakad (Ficus virens)"
                data={whyChooseData2}
                className={custom_class}
                gridBox={gridBox}
            />
            </div>


        </>
    );
}


export const Vatika = () => {
    const heading = "Conclusion";
    const description =
        "Shri. Swayambhu Vatika and the Harishankari plantation represent a sacred intersection of tradition, nature, and well-being. The combination of Peepal, Bargad, and Pakad trees at one site makes this a rare and spiritually rich destination. <br> <br> Rooted in cultural reverence and herbal wisdom, this grove invites visitors to pause, reflect, and experience the healing presence of India’s sacred trees.";
    return (
        <section
            className="relative bg-no-repeat py-14 lg:py-32 bg-cover bg-center w-full my-8 md:my-12 !mb-0"
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
