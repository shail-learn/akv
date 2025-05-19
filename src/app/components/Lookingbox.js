import React from 'react'

export const Lookingbox = ({heading,subheading,box}) => {
    return (
        <>

            <section
                className="py-12 md:py-14 bg-[#D9D9D966]" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2 className='lg:leading-snug text-[#1B453C] redhat text-center mb-4 text-3xl md:text-4xl font-medium w-full'>{heading}</h2>
                    <p className='mb-10 text-black text-base font-semibold text-center'>{subheading}</p>
                    <div className='mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-5 lg:gap-5'>
                        {box.map((item, index) => (
                            <div key={index} className='w-[47%] lg:w-3/12 text-black text-center grid items-center justify-center p-4 h-40 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white rounded-[20px] transition-all  duration-400'>
                                <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </>
    )
}
