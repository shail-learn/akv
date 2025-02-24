"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import contact from "../../../assets/images/business/contact.webp";
import small from "../../../assets/images/business/bg-text.webp";



export const PartnerUs = () => {
    const text = "Partner with us to transform agriculture and build a"
    const bold = " greener tomorrow."


    return (


        <section
            className="py-16  " >
            <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful'>
                <div className='grid  grid-col-1 place-content-center md:grid-cols-12 md:w-9/12 mx-auto items-center justify-center  gap-10 md:gap-4 bg-[#E9E9E9] p-6 rounded-3xl'>
                    <div className='w-full grid p-0 md:p-6   md:col-span-7'>
                        <h2 className='text-black text-2xl md:text-3xl font-light mb-10 md:mb-20 '>{text} <br />
                        <b style={{ background: `url(${small.src})center center / cover no-repeat` }} className='font-bold text-white inline-block p-2 mt-2 px-4 rounded-3xl'>{bold}</b></h2>
                        <Link href="#" className='border-[1px] border-black text-center bg-[#D9D9D9] p-4 text-black md:w-3/4 transition delay-100 duration-100 ease-in-out text-sm md:text-base hover:bg-[#1B453C] hover:text-white'>Explore Collaboration Opportunities</Link>
                    </div>
                    <div className='w-full   md:col-span-5'>
                        <Image
                            src={contact}
                            alt="product"

                            className="w-full  h-auto"
                        />

                    </div>
                </div>
            </div>
        </section>
    )
}
