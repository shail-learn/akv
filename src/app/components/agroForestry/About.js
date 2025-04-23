import React from 'react'
import banner from "../../../assets/images/business/bg-img.webp";
import Link from 'next/link';

export const About = () => {
    const heading = "About Agroforestry"
    const text = {
        heading: 'Definition and importance:',
        title: "Agroforestry is a transformative approach that integrates agriculture with forestry to create sustainable systems that benefit the environment and communities."
    }
    return (
        <div className='bg-cover bg-center relative  pt-0 pb-44 lg:py-0' style={{ backgroundImage: `url(${banner.src})` }}>
            <section
                className=" pt-16 pb-10 lg:pt-24" >
                <div className='mx-auto max-full'>
                    <div className='w-full text-center'>
                        <h2 className="text-[#1B453C] text-3xl md:text-4xl lg:leading-tight  redhat  font-medium  w-full">{heading}</h2>

                    </div>

                </div>
            </section>


            <section
                className="bg-cover bg-center relative  pt-0 pb-44 lg:py-0 lg:pb-[22rem]   flex items-center justify-center"

            >

                <div className="relative text-center z-1 flex flex-wrap items-center justify-center">
                    <div className='w-11/12 md:w-7/4 lg:w-5/12   bg-[#1B453C] bg-opacity-80  p-6 rounded-3xl'>
                        {/* <h2 className="text-white text-2xl md:text-4xl lg:leading-tight redhat  font-medium w-full">  {text.heading}</h2> */}

                        <p className='w-full text-white text-base lg:text-[18px] py-3'>
                            {text.title}
                        </p>


                    </div>
                </div>
            </section>

        </div>
    )
}
