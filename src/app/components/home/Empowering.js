import React from 'react'
import banner from "../../../assets/images/home/communication.webp";
export const EmpoweringBanner = () => {
    const heading ='Empowering Communities & the Planet';
    const text = "At Atulye Krishi Vana, we’re making a lasting impact by supporting local communities, reducing carbon emissions, and improving soil and water quality. Through our efforts, we’re creating a sustainable future for both humanity and the environment."
  return (
    <section className="bg-cover bg-center relative h-[500px]  flex items-center justify-center" style={{ backgroundImage: `url(${banner.src})` }}>
        <div className='bg-black bg-opacity-30 w-4/5 lg:w-3/5 text-white text-center p-6 py-10'>
        <h2 className='redhat mb-4 text lg:mb-7 text-center text-3xl lg:text-4xl  font-normal'>{heading}</h2>
        <p className='font-light poppins text-sm'>{text}</p>
        </div>
    </section>
  )
}



export const EmpoweringBox = () => {
    const text1='100+ villagers employed ** (70% women)'
    const text2='Increased crop diversity** and environmental protection'
    const text3='Economic growth** for rural areas'
    const text4='Support Our Social Impact'

    return (
      <>
        <section
                className="pt-8 pb-8 lg:pt-8 lg:pb-8 bg-[#ECF7F3]" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <div className='mx-auto justify-between flex flex-wrap lg:flex-nowrap gap-5 lg:gap-5'>
                        <div className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white hover:rounded-[15px] transition-all  duration-400'>
                            <h2 className="lg:leading-snug  poppins text-center text-[15px]  font-normal  w-full">{text1}</h2>

                        </div>
                        <div className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white hover:rounded-[15px] transition-all  duration-400'>
                            <h2 className="lg:leading-snug  poppinstext-center text-s[15px] font-normal  w-full">{text2}</h2>

                        </div>
                        <div className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white hover:rounded-[15px] transition-all  duration-400'>
                            <h2 className="lg:leading-snug  poppinstext-center text-s[15px] font-normal  w-full">{text3}</h2>

                        </div>
                        <div className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white hover:rounded-[15px] transition-all  duration-400'>
                            <h2 className="lg:leading-snug  poppinstext-center text-s[15px] font-normal  w-full">{text4}</h2>

                        </div>
                    </div>
                </div>



            </section>

      </>
    )
  }
