import React from 'react'
import icon3 from "../../../assets/images/business/icon1.svg";
import icon2 from "../../../assets/images/business/icon3.svg";
import icon1 from "../../../assets/images/business/icon2.svg";
import banner from "../../../assets/images/business/banner-tree.webp";
import quotes from "../../../assets/images/business/quotes.svg";



import Image from 'next/image';

export const OurCard = () => {
    const heading = "Our Milestones:"
    const card = [
        {
            description: 'Combats climate change through carbon sequestration.',
            icon: icon1,

        },
        {
            description: 'Restores degraded land.',
            icon: icon2,

        },
        {
            description: 'Enhances soil health and biodiversity.',
            icon: icon3,

        }
    ]
    return (
        <>
            <section
                className=" bg-white   py-14 lg:py-16" >
                <div className='mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2'>
                    <div className='w-full text-center'>
                        <h2 className="text-[#1B453C] text-3xl md:text-4xl mb-12 lg:leading-tight  redhat  font-normal  w-full">{heading}</h2>
                        <div className='lg:grid flex flex-wrap gap-4 grid-cols-1 lg:grid-cols-12'>
                            {card.map((item, index) => {
                                return (
                                    <div key={index} className='lg:col-span-4 bg-[#EBEBEB] transition-all card1 duration-400  text-black p-6 py-10 lg:p-10 lg:py-20  w-full   w-12/12 hover:bg-[#1B453C] hover:text-white hover:rounded-lg lg:hover:scale-110'
                                        style={{
                                            boxShadow: '6px 6px 15px 0px #00000033',

                                        }}
                                    >
                                        <div className='grid items-center justify-center gap-4 '>
                                            <div className=' text-center'>
                                                <Image src={item.icon} className='mx-auto pb-6 lg:pb-10' width="50" height="50" alt="icon" />
                                            </div>
                                            <p className='text-base font-medium '>{item.description}</p>
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


export const TreeBanner = () => {
    const description = "Trees are the original skyscrapers that sustain life on "
     const bold = "Earth"
    return (
        <>
            <section
                className=" py-8 lg:py-10 tree-sec" >

                <div className='mx-auto max-full bg-[#DFDCB1]   '>
                    <div className='grid items-center grid-col-1  md:grid-cols-12 justify-center gap-6'>
                        <div className='w-full md:col-span-6'>
                        <Image className='w-100' src={banner} alt="banner" />
                        </div>
                        <div className='w-full p-6 pb-16 md:col-span-4 md:p-10'>
                        <Image src={quotes}  className='h-12 w-full md:w-auto md:h-auto' alt="icon" />
                            <p className='text-xl text-center md:text-left md:text-2xl font-normal mt-6'>
                             {description} <b className='text-[#1B453C]'>{bold}.</b>
                            </p>
                            </div>
                    </div>

                </div>
            </section>
        </>
    )
}