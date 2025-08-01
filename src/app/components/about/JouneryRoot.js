import React from 'react'
import icon1 from "../../../assets/images/about/icon01.webp";
import icon2 from "../../../assets/images/about/icon02.webp";
import banner from "../../../assets/images/about/rootbanner.webp";
import icon01 from "../../../assets/images/about/icon01.svg";
import icon02 from "../../../assets/images/about/icon02.svg";
import icon03 from "../../../assets/images/about/icon03.svg";

import Image from 'next/image';

export const Jounery = () => {
    const heading = "A Journey from Barren Lands to Lush Forests"
    const subheading = "The idea was to build an ecosystem for the future generations that has taken shape and grown into a powerful force."
    const smallHeading = "Our Milestones:"
    const card = [
        {
            title: 'Humble Beginnings',
            description: 'Acquired 500 acres of barren land & transformed it into fertile plantations.',

        },
        {
            title: 'Growing Green',
            description: 'Covered over 5000 acres with greenery & implemented revenue generating models.',

        },
        {
            title: 'Future Vision',
            description: 'Aiming for 20,000 acres of greenery & developing automated green zones.',
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
                            <h2 className="text-[#1B453C] text-3xl md:text-4xl lg:text-[40px]  mb-4 lg:leading-tight  redhat  font-semibold  w-full">{heading}</h2>
                            <div className='mx-auto max-full w-full lg:w-5/12'>
                                <h5 className='text-black font-normal text-base md:text-[17px]'>{subheading}</h5>
                                <h6 className='text-black italic text-[20px] md:text-[22px] mt-8 mb-10 md:mt-16 md:mb-16'>{smallHeading}</h6>
                            </div>
                            <div className='lg:grid flex flex-wrap gap-4 grid-cols-1 lg:grid-cols-12'>
                                {card.map((item, index) => {
                                    return (
                                        <div key={index} className='lg:col-span-4 bg-white transition-all card1 duration-400  text-black p-6 py-20 lg:p-20 lg:py-28 w-full w-12/12 hover:bg-[#4B8B8B] hover:text-white hover:rounded-lg lg:hover:scale-110 hover:z-10  jounery_card'
                                            style={{
                                                boxShadow: '6px 6px 15px 0px #00000033',

                                            }}
                                        >
                                            <div className='grid items-center justify-center gap-6 '>
                                                <h3 className='text-2xl font-medium md:text-[26px] text-[#4B8B8B]'>{item.title}</h3>
                                                <p className='text-base md:text-[17px]'>{item.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>
                        </div>

                        <div>
                            <Image src={icon1} alt="Banner Tree" className='lg:w-60 w-32 h-auto object-contain -bottom-16 lg:-bottom-28 absolute lg:-left-24 left-0 z-10' />
                            <Image src={icon2} alt="Banner Tree" className='lg:w-64 w-36 h-full object-contain lg:top-8 absolute left-auto  lg:-right-28 -right-10 -top-64' />
                        </div>



                    </div>
                </section>

            </section>
        </>
    )
}


export const JouneryRoot = () => {
    const text = {
        heading: 'The Roots of Our Mission',

    }
    const card = [
        {
            icon: icon01,
            title: 'Sustainable Agroforestry Practices',
            description: 'We implement innovative agroforestry techniques that restore ecosystems, enhance biodiversity, and promote environmental resilience while generating economic benefits for local communities.'

        },
        {
            icon: icon02,
            title: 'Community-Centric Development',
            description: 'We prioritize sustainable development with livelihood initiatives to foster lasting impact and socioeconomic growth.'

        },
        {
            icon: icon03,
            title: 'Cutting-Edge Technology Integration',
            description: 'Leveraging advanced technology, we optimize resource management and maximize productivity in our initiatives, ensuring a scalable and efficient approach to agroforestry.'

        }
    ]
    return (
        <>
            <section
                className="bg-cover bg-center relative text-center md:text-left  flex items-center justify-center pt-16 pb-16 lg:pt-20 lg:pb-20"
                style={{ backgroundImage: `url(${banner.src})` }}
            >
                <div className="absolute inset-0 bg-[#000] opacity-80"></div>
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative z-1 '>
                    <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px]  font-semibold redhat text-white mb-14'>{text.heading}</h2>
                    <div className='lg:grid flex flex-wrap gap-4 lg:gap-4 grid-cols-1 lg:grid-cols-12 border_remove'>
                        {card.map((item, index) => {
                            return (
                                <div key={index} className='lg:col-span-4 pt-0 p-4 pl-4 pr-4 lg:pl-10 lg:pr-10 pb-8 w-full w-12/12 border-b md:border-b-0 md:border-r border-[#DEFFFF] border-opacity-40 mb-6 md:mb-0' >
                                    <div className='grid items-center gap-4 justify-center text-center'>
                                        <div className='w-16 h-16 mx-auto'>
                                            <Image src={item.icon} width="100" height="100" alt="icon" />
                                        </div>
                                        <h3 className='  md:mb-6 md:mt-6 mb-2 mt-4 text-xl leading-9 lg:text-[26px]  font-medium text-white'>{item.title}</h3>
                                        <p className='text-base md:text-[17px] redhat text-justify font-normal text-opacity-90 text-white'>{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>

                </div>
            </section>
        </>
    )
}

