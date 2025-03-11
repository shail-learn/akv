import React from 'react'

import bgsupport from '../../../assets/images/contract-farming/bg-img.webp'
import support1 from '../../../assets/images/contract-farming/support1.webp'
import support2 from '../../../assets/images/contract-farming/support2.webp'
import support3 from '../../../assets/images/contract-farming/support3.webp'
import support4 from '../../../assets/images/contract-farming/support4.webp'
import middleimg from '../../../assets/images/contract-farming/long.svg'

import Image from 'next/image'


export const Support = () => {

   const star = middleimg

    const heading = "Support & Partnerships"
    const text = "We collaborate with various stakeholders to ensure the success of our contract farming initiative:"
    const partnerships = [
        {
            title: "Government Bodies",
            description: "Availing subsidies, infrastructure support, and policy advocacy.",
            image: support1,
        },
        {
            title: "Research Institutions",
            description: "Partnering with agricultural universities for innovation and training.",
            image: support2,
        },

    ];

    const partnerships1 = [
        {
            title: "Corporate & Dairy Farms",
            description: "Ensuring large-scale procurement and fair trade practices.",
            image: support3,
        },
        {
            title: "Financial Institutions",
            description: "Providing farmers with access to loans and financial literacy programs.",
            image: support4,
        },

    ];

    return (
        <>

            <section
                className=" pt-16 pb-8 lg:pt-20 lg:pb-20" style={{ background: `url(${bgsupport.src})center bottom / contain no-repeat`, 'backgroundColor': '#1B453C' }}>
                <div className='mx-auto max-w-7xl   px-4 md:px-8 lg:px-2 '>

                    <h2 className="lg:leading-snug  text-white redhat mb-3 text-center text-3xl md:text-4xl  font-normal  w-full">
                        {heading}
                    </h2>
                    <p className='text-lg md:text-xl text-center text-[#F7C35F] mb-8 md:mb-12'>{text}</p>
                    <div className='flex flex-wrap lg:flex-nowrap items-center gap-6 px-0 md:px-6    lg:px-2'>
                        <div className='w-full md:w-5/12'>
                            <div className='flex gap-8 flex-col'>
                                <div className='w-full  md:w-12/12'>
                                    {partnerships.map((partner, index) => (
                                        <div className='w-full w-12/12 mt-10' key={index}>
                                           <div className="relative bg-white border border-[#F7C35F]  rounded-full overflow-hidden shadow-lg">
                                                <Image src={partner.image} alt={partner.title} className="w-full h-56  rounded-full object-cover" />
                                                <div className="absolute inset-0 flex items-center justify-start">
                                                    <div className="bg-white p-8 text-right flex flex-col items-center justify-center h-56 w-56 rounded-full">
                                                        <h3 className="text-xl text-[#1B453C]">{partner.title}</h3>
                                                        <p className="text-sm text-[#1B453C] mt-2">{partner.description}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}

                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-2/12 self-start'>
                        <Image src={star} className='w-auto mx-auto h-auto  hidden md:block' alt="icon" />
                        </div>
                        <div className='w-full md:w-5/12'>
                        {partnerships1.map((partner, index) => (
                                        <div className='w-full w-12/12 mt-10' key={index}>
                                            <div className="relative bg-white border border-[#F7C35F]  rounded-full overflow-hidden shadow-lg">
                                                <Image src={partner.image} alt={partner.title} className="w-full h-56  rounded-full object-cover" />
                                                <div className="absolute inset-0 flex items-center justify-end">
                                                    <div className="bg-white p-8 text-right flex flex-col items-center justify-center h-56 w-56 rounded-full">

                                                        <h3 className="text-xl text-[#1B453C]">{partner.title}</h3>
                                                        <p className="text-sm text-[#1B453C] mt-2">{partner.description}</p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    ))}
                        </div>



                    </div>
                </div>
            </section>



        </>
    )
}





export const Contact = () => {
    const heading = "Join Us in the Green Revolution!"
    const text = "At Atulye Krishi Vana, we are committed to creating a sustainable future through contract farming. Whether you are a farmer looking for a secure livelihood or a buyer seeking a reliable source of high-quality fodder, we welcome you to be part of this transformative journey."
    return (
        <section className='mx-auto max-w-7xl px-4 pt-0 md:px-8 lg:px-2 lg:pt-16  py-16'>

            <div className='  gap-10  grid  grid-cols-1  lg:grid-cols-12 items-center justify-center'>
                <div className='col-span-1'></div>
                <div className='w-full  p-6 py-16 md:h-full border-[1px] poppins text-xl text-center border-[#F7C35F] md:p-6 rounded-3xl lg:p-10 col-span-5  h-full grid items-center justify-center '>
                    <h2 className='text-black redhat text-center md:text-left mb-0 font-medium leading-relaxed text-3xl md:text-4xl  md:mb-8'>{heading}</h2>
                    <h3 className=' text-center md:text-left'>{text}</h3>
                </div>
                <div className='w-full col-span-5 p-6 border border-[#E9E9E9]  rounded-3xl h-full grid   '
                    style={{ boxShadow: '8px 8px 8px 0px #0000001A' }}
                >
                    <div className='flex gap-4 items-center mb-6' >
                        <span className='text-lg'> Contact Us Today!</span>
                    </div>
                    <form>
                        <div className='flex flex-wrap gap-4 mb-4'>
                            <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Name ' />
                            <input type="email" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Email' />
                            <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Website' />
                            <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-md w-full bg-[#F6F6F8]' placeholder='Phone Number' />
                        </div>

                        <button className='poppins  font-normal text-white w-full py-3 rounded-[10px] bg-[#1B453C]'>Submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}


