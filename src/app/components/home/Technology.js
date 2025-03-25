import Link from 'next/link'
import React from 'react'
import img1 from "../../../assets/images/home/img01.webp";
import img2 from "../../../assets/images/home/img02.webp";
import img3 from "../../../assets/images/home/img03.webp";
import img4 from "../../../assets/images/home/img04.webp";
import Image from 'next/image';



export const Technology = () => {
    const text = 'Our sustainable agriculture approach is powered by precision farming, drones, and real-time monitoring systems. We aim to optimize resource use and enhance productivity while protecting the environment.'

    const text1 = 'Crop Health Check through Drone Monitoring';
    const text2 = 'Solar Fence Control & Fence Monitoring';

    const text3 = 'GIS & Sensor Based Monitoring';

    const text4 = 'Smart Water Management through Irrigation Automation';


    return (
        <>
            <section
                className="pt-14 pb-6 lg:pt-14 lg:pb-14 technology-sec" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <div className='mx-auto justify-between flex flex-wrap lg:flex-nowrap gap-5 lg:gap-12'>
                        <div className='w-full lg:w-4/12'>
                            <h2 className="lg:leading-snug text-black redhat mb-4 lg:mb-7 text-center lg:text-left text-3xl md:text-4xl  font-medium  w-full">
                                Technology-Driven  <span className='text-[#4C9E8C]'>Agriculture</span></h2>
                            <p className='text-center lg:text-left text-black text-lg lg:text-xl'>Features:</p>
                        </div>
                        <div className='w-full lg:w-6/12 text-justify'>
                            <p className=' text-[#1B453C] text-normal text-sm md:text-[15px] mb-8 lg:mb-10'>
                                {text}
                            </p>
                            <Link className='text-[#1B453C] bg-white border-[1px] font-normal p-2 px-12 lg:px-12 border-[#1B453C] hover:bg-teal-900 hover:text-white transition delay-100 duration-100 ease-in-out' href="#">Learn About Our Technology</Link>
                        </div>
                    </div>



                </div>
                <div className='mx-auto max-w-full  py-10'>
                    <div className='grid gap-0 grid-cols-1  lg:grid-cols-12 items-center justify-center'>
                        <div className='col-span-3  h-full'>
                            <Image src={img1} alt='icon' className='w-full mx-auto  h-full' />
                        </div>
                        <div className='col-span-3 h-72 lg:h-full text-white bg-[#1B453C] grid items-center transition-all duration-400 justify-center hover:bg-[#EFEFEF]  hover:text-[#1B453C]'>
                            <p className='text-base md:text-[18px] w-1/2 m-auto text-center '>{text1}
                            </p>
                        </div>
                        <div className='col-span-3 h-full'>
                            <Image src={img2} alt='icon' className='w-full mx-auto h-full' />
                        </div>
                        <div className='col-span-3 h-72 lg:h-full text-white bg-[#1B453C] grid items-center justify-center transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#1B453C]'>
                            <p className='text-base md:text-[18px] w-1/2 m-auto text-center '>{text2}
                            </p>
                        </div>

                        <div className='col-span-3 order-6 lg:order-none  h-72 lg:h-full text-white bg-[#1B453C] grid items-center justify-center transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#1B453C]'>
                            <p className='text-base md:text-[18px] w-1/2 m-auto text-center '>{text3}
                            </p>
                        </div>
                        <div className='col-span-3 order-5 lg:order-none  h-full'>
                            <Image src={img3} alt='icon' className='w-full mx-auto h-full' />
                        </div>
                        <div className='col-span-3 order-8 lg:order-none h-72 lg:h-full text-white bg-[#1B453C] grid items-center justify-center transition-all duration-400  hover:bg-[#EFEFEF]  hover:text-[#1B453C]'>
                            <p className='text-base md:text-[18px] w-1/2 m-auto text-center '>{text4}
                            </p>
                        </div>
                        <div className='col-span-3 order-7 lg:order-none  h-full'>
                            <Image src={img4} alt='icon' className='w-full mx-auto h-full' />
                        </div>


                    </div>
                </div>


            </section>

        </>
    )
}
