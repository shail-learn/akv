import React from 'react'
import banner from "../../../assets/images/business/bg-forest.webp";
import Link from 'next/link';

export const About = () => {
    const heading = "About Agroforestry:"
    const text = {
        heading: 'Definition and importance:',
        title: "Agroforestry is a transformative approach that integrates agriculture with forestry to create sustainable systems that benefit the environment and communities."
    }
  return (
    <>
       <section
                className=" bg-white   pt-16 pb-10 lg:pt-24" >
                <div className='mx-auto max-full'>
                    <div className='w-full text-center'>
                       <h2 className="text-[#1B453C] text-3xl md:text-4xl lg:leading-tight  redhat  font-normal  w-full">{heading}</h2>

                    </div>

                    </div>
                    </section>


    <section
    className="bg-cover bg-center relative  pt-0 pb-44 lg:py-20 lg:pb-44   flex items-center justify-center"
    style={{ backgroundImage: `url(${banner.src})` }}
>

    <div className="relative text-center z-1 flex flex-wrap items-center justify-center">
        <div className='w-11/12 md:w-8/4 lg:w-6/12   bg-white bg-opacity-50  p-6 rounded-3xl'>
            <h2 className="text-black text-2xl md:text-4xl lg:leading-tight redhat  font-normal w-full">  {text.heading}</h2>

            <p className='w-full text-black text-sm lg:text-[15px] italic mt-4'>
                {text.title}
            </p>


        </div>
    </div>
</section>

    </>
  )
}
