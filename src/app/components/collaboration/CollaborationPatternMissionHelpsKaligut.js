import React from 'react'
import banner from "../../../assets/images/collab/banner.webp";
import BannerPage from '../BannerPage';
import bgbanner from "../../../assets/images/about/bgbanner.webp";
import icon1 from "../../../assets/images/about/icon01.webp";
import icon2 from "../../../assets/images/about/icon02.webp";
import Image from 'next/image';


export const Collaboration = () => {
    const text = {
        banner: banner,
        heading: `Upcoming Collaborations`,
        title: ` Atulye Krishi Vana is proud to collaborate with national missions and government agencies to drive innovation in agroforestry, medicinal plant cultivation, and sustainable horticulture.`,
        opacity: "opacity-55"
    };
    return (
        <>

            <BannerPage
                heading={text.heading}
                title={text.title}
                subtitle={text.subtitle}
                opacity={text.opacity}
                banner={text.banner}
                button={text.button}
                link={text.link}
                classname={text.className}

            />

        </>
    )
}


export const Pattern = () => {
    const cards = [
        {
            title: 'Mission Integrated Development of Horticulture',
            subtitle: '(MIDH)',
        },
        {
            title: 'Kaligut',
            subtitle: 'Financial Aid for Sustainable Cultivation',
        },
        {
            title: 'Spices Board India',
            subtitle: 'Value Chain Enhancement',
        },
        {
            title: 'National Medicinal Plants Board',
            subtitle: '(NMPB)',
        },
        {
            title: 'National Horticulture Board',
            subtitle: '(NHB)',
        },
        {
            title: 'In the Pipeline',
            subtitle: 'Future Collaborations',
        },
    ];

    return (
        <>
            <section className="w-full overflow-x-auto alter-bg">
                <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-6 w-full">
                    {cards.map((card, index) => {
                        const bgColor = index % 2 === 0 ? 'bg-[#295F54]' : 'bg-[#549999]';

                        return (
                            <div
                                key={index}
                                className={`    text-white px-4 py-10 ${bgColor} text-center flex flex-col justify-center items-center`}
                            >
                                <h3 className="font-semibold text-lg md:text-xl leading-snug">
                                    {card.title}
                                </h3>
                                <p className="font-medium text-base md:text-lg mt-1">{card.subtitle}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    )
}


export const Mission = () => {
    const heading = "Mission Integrated Development of Horticulture (MIDH)";
    const description = `
    <b>Ministry:</b> Ministry of Agriculture & Farmers Welfare <br>
    <b>Nature of Collaboration:</b> Government-supported mission<br>
    <b>About the Mission:</b><br>
    MIDH promotes holistic growth of the horticulture sector by supporting production, post-harvest management, and marketing. It aids farmers with financial assistance, infrastructure development, and technical training.
    `

    return (
        <>
            <section className='bg-cover bg-bottom md:bg-center relative text-center md:text-left -mt-10 pt-16 pb-16 lg:pt-36 lg:pb-36' style={{ background: `url(${bgbanner.src})center / cover no-repeat` }}>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <div className='flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-12'>
                        <div className='lg:w-4/12 md:w-6/12 w-12/12'>
                            <h2 className='text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-white mb-6'>{heading}</h2>
                            <p className='text-white text-base  text-justify' dangerouslySetInnerHTML={{ __html: description }}>

                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Helps = () => {
    const heading = "How It Helps Atulye Krishi Vana"

    const textitem = [
        {
            title: 'Enables establishment of model nurseries and orchard zones',
        },
        {
            title: 'Supports infrastructure for post-harvest handling of fruits and herbs',
        },
        {
            title: 'Facilitates capacity building for farmers on organic practices',
        }
    ]

    return (
        <>
            <section
                className="py-14 lg:py-16 bg-[#295F54] overflow-hidden " >


                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-4'>
                    <div className='w-full text-center'>
                        <div className='mx-auto w-full lg:w-7/12'>
                            <h2 className="text-white text-3xl md:text-4xl mb-10 md:mb-16 lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>

                        </div>
                    </div>

                    <div className='w-full px-6'>
                        <div className='lg:grid flex flex-wrap gap-6 md:gap-16 [min-width:1240px]:gap-1 grid-cols-1 lg:grid-cols-3'>
                            {textitem.map((item, index) => {
                                return (

                                    <div key={index} className='grid items-center mb-4 md:mb-0 justify-center gap-8 '>
                                        <div className='w-full text-center border-2 border-white h-full p-10 py-12 md:py-16 rounded-xl' style={{ boxShadow: "5px 4px 5px 0px #FFFFFF40" }}>
                                            <h2 className='text-white text-lg md:text-xl'> {item.title}</h2>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


export const Kaligut = () => {
    const heading = "Kaligut – Financial Aid for Sustainable Cultivation"
    const info = `<b>Status:</b> Proposed project under discussion with government bodies <br>
     <b>Type:</b> State-supported initiative (expected) <br>
     <b>Focus:</b> Aimed at providing direct financial assistance to small and marginal farmers for adopting sustainable practices in medicinal and aromatic plant cultivation.
    `
    const smallHeading = "Our Milestones:"
    const card = [
        {
            description: 'Incentivizes ecological farming in tribal and semi-arid zones',

        },
        {
            description: 'Enhances livelihood opportunities for rural communities',

        },
        {

            description: 'Drives regional adoption of organic farming techniques',
        }
    ]
    const myStyle = {
        background: "linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 70%)"
    };
    return (
        <>
            <section className='overflow-hidden'>
                <section
                    className="py-14 lg:py-16 lg:pb-40" style={myStyle} >
                    <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                        <div className='w-full text-center'>
                            <h2 className="text-[#1B453C] text-3xl md:text-4xl mb-4 lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>
                            <div className='mx-auto max-full w-full lg:w-5/12'>
                                <h5 className='text-black font-normal text-base' dangerouslySetInnerHTML={{__html:info}}/>
                                <h6 className='text-black italic text-[20px] mt-8 mb-10 md:mt-16 md:mb-16'>{smallHeading}</h6>
                            </div>
                            <div className='lg:grid flex flex-wrap gap-4 grid-cols-1 lg:grid-cols-12'>
                                {card.map((item, index) => {
                                    return (
                                        <div key={index} className='lg:col-span-4 bg-white transition-all card1 duration-400  text-black p-6 py-16 lg:p-18 lg:py-20 w-full w-12/12 hover:bg-[#4B8B8B] hover:text-white hover:rounded-lg lg:hover:scale-110 hover:z-10 rounded-3xl jounery_card'
                                            style={{
                                                boxShadow: '6px 6px 15px 0px #00000033',

                                            }}
                                        >
                                            <div className='grid items-center justify-center gap-6 '>
                                                <h3 className='text-2xl text-[#4B8B8B]'>{item.title}</h3>
                                                <p className='text-base'>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                        <div>
                            <Image src={icon1} alt="Banner Tree" className='lg:w-60 w-32 h-auto object-contain -bottom-16 lg:-bottom-28 absolute lg:-left-24 left-0 z-10' />
                            <Image src={icon2} alt="Banner Tree" className='lg:w-64 w-36 h-full object-contain lg:top-8 absolute left-auto  lg:-right-28 -right-10 -top-32' />
                        </div>



                    </div>
                </section>

            </section>
        </>
    )
}
