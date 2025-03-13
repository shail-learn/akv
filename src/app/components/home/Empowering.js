import React from 'react'
import banner from "../../../assets/images/home/communication.webp";
export const EmpoweringBanner = () => {
    const heading = 'Building Natural Resources for the Generations to Come';
    const text = "Our agroforestry initiatives have already made a significant positive impact on the environment and the local community."
    return (
        <section className="bg-cover bg-center relative h-[500px]  flex items-center justify-center" style={{ backgroundImage: `url(${banner.src})` }}>
            <div className='bg-black bg-opacity-30 w-4/5 lg:w-3/5 text-white text-center p-6 py-10'>
                <h2 className='redhat mb-4 text lg:mb-7 text-center text-3xl lg:text-4xl  font-normal'>{heading}</h2>
                <p className='font-light poppins text-sm md:text-base'>{text}</p>
            </div>
        </section>
    )
}



export const EmpoweringBox = () => {

    const box = [
        {
            text: "Women and Youth Environment."
        },
        {
            text: 'Improved groundwater table from 500 feet to 350 feet.'
        },
        {
            text: 'Reduce soil temperature by 5 °C.'
        },
        {
            text: 'Improved Carbon Absorption from 198.5 Tons per Annum to 780 Tons per Annum.'
        },
    ]

    return (
        <>
            <section
                className="pt-8 pb-8 lg:pt-8 lg:pb-8 bg-[#ECF7F3]" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <div className='mx-auto justify-between flex flex-wrap lg:flex-nowrap gap-5 lg:gap-5'>
                        {box.map((item,index) => (
                            <div key={index} className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white hover:rounded-[15px] transition-all  duration-400'>
                                <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}
