import Image from 'next/image'
import React from 'react'


const ImageCard = ({ data }) => {
    return (
        <>
               <div className="flex md:flex-col flex-col lg:flex-row flex-wrap justify-around ">
            {data.map((item, index) => (
                <div key={index} className="md:w-[40%] mt-32 md:mt-14 w-full flex flex-col items-center lg:items-start">
                    <div className="w-full rounded-lg relative">
                        <Image
                            src={item.image}
                            alt={item.title}
                            className="md:w-[80%] h-full rounded-3xl object-cover mx-auto"
                            width={400}
                            height={300}
                        />
                         <div className="bg-white w-[250px] h-[60%] md:w-[200px] p-6 md:h-[80%] top-0 left-[14%] opacity-80 absolute md:-left-11 md:top-2/4 -translate-y-2/4 md:py-10 rounded-3xl ">
                        <h3 className="text-xl redhat mb-4 font-semibold text-[#1B453C]">{item.title}</h3>
                        <p className="text-sm text-[#1B453C]">{item.description}</p>
                    </div>
                    </div>


                </div>
            ))}
        </div>
        </>
    )
}

export default ImageCard