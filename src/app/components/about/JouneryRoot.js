import React from 'react'
import icon1 from "../../../assets/images/about/icon01.webp";
import icon2 from "../../../assets/images/about/icon02.webp";


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
    return (
        <>
        <section className='overflow-hidden'>
            <section
                className="py-14 lg:py-16 lg:pb-48" style={{background:"linear-gradient(180deg, rgba(245,245,245,1) 0%, rgba(255,255,255,1) 70%);"}} >
                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2 relative'>
                    <div className='w-full text-center'>
                        <h2 className="text-[#1B453C] text-3xl md:text-4xl mb-4 lg:leading-tight  redhat  font-normal  w-full">{heading}</h2>
                        <div className='mx-auto max-full w-5/12'>
                            <h5 className='text-black italic font-normal text-[15px]'>{subheading}</h5>
                            <h6 className='text-black italic text-[20px] md:mt-16 md:mb-16'>{smallHeading}</h6>
                        </div>
                        <div className='lg:grid flex flex-wrap gap-4 grid-cols-1 lg:grid-cols-12'>
                            {card.map((item, index) => {
                                return (
                                    <div key={index} className='lg:col-span-4 bg-white transition-all card1 duration-400  text-black p-6 py-10 lg:p-20 lg:py-28 w-full w-12/12 hover:bg-[#4B8B8B] hover:text-white hover:rounded-lg lg:hover:scale-110 hover:z-10  jounery_card'
                                        style={{
                                            boxShadow: '6px 6px 15px 0px #00000033',

                                        }}
                                    >
                                        <div className='grid items-center justify-center gap-6 '>
                                            <h3 className='text-base text-[#4B8B8B]'>{item.title}</h3>
                                            <p className='text-base'>{item.description}</p>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>

                      <div>
                        <Image src={icon1} alt="Banner Tree" className='w-60 h-auto object-contain -bottom-28 absolute -left-24 z-10'/>
                        <Image src={icon2} alt="Banner Tree" className='w-64 h-full object-contain top-8 absolute left-auto  -right-28' />
                        </div>



                </div>
            </section>

            </section>
        </>
    )
}
