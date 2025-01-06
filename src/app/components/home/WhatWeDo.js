"use client"
import React from 'react'
import Image from 'next/image';
import icon from "../../../assets/images/logo-icon.svg";
function WhatWeDo() {
    const text = [
        { description: "<b>Atulye Krishi Vana</b>, incorporated in September 2018, is an agriventure based in New Delhi, India. Our first project, covering 400 acres in Madhya Pradesh, includes over 175,000 trees across multiple species. With state-of-the-art farming techniques, we promote agroforestry that provides fresh air, clean water, and a sustainable livelihood. </br> Our dedication to protecting life and resources continues to expand across different states as we finalize regulatory formalities for future projects." },

    ]
    return (
        <section className=' pt-20 pb-20 lg:pt-28 lg:pb-28 bg-gray-800'>
            <div className='mx-auto max-w-7xl px-2 md:px-6 lg:px-2'>
                <div className='grid gap-12 sm:grid-cols-12'>
                    <div className='p-10 pt-16 text-center rounded-3xl bg-white md:col-span-5 relative'>
                        <div className="absolute flex items-center left-1/2 -top-12 -translate-x-1/2   bg-teal-900 p-4 rounded-full w-24 h-24">
                            <Image
                                src={icon}
                                alt="shape"
                                className='h-auto w-auto'
                            />
                        </div>
                        <h3 className='mb-4 text-xl poppins'>What We Do</h3>
                        {text.map((item, index) => {
                            return (
                                <p
                                    key={index}
                                    className="text-black-400 poppins text-md"
                                    dangerouslySetInnerHTML={{ __html: item.description }}
                                ></p>
                            )

                        })}

                    </div>
                    <div className='min-h-28 rounded bg-red-600 md:col-span-7'></div>


                </div>
            </div>


        </section>
    )
}

export default WhatWeDo