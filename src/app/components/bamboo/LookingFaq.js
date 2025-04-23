
import React from 'react'


import Image from 'next/image';
import { FaqSlider } from '../FaqSlider';

export const Looking = () => {
    const box = [
        {
            text: "Expert guidance on sustainable agroforestry"
        },
        {
            text: 'Premium-quality BAMBOO saplings'
        },
        {
            text: 'Ethical and responsible sourcing of bamboo products'
        },

    ]
    const heading = `Looking to <span style="color:#2D6B5E">Grow</span> or <span style="color:#2D6B5E">Source Bamboo?</span>`
    const subtitle = "Contact Atulye Krishi Vana for:"
    return (
        <>

            <section
                className="py-12 lg:py-16 bg-white" >
                <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
                    <h2
                        className="lg:leading-snug  text-black redhat mb-2 text-center text-3xl md:text-4xl  font-medium "
                        dangerouslySetInnerHTML={{ __html: heading }}
                    />
                    <p className='text-center text-black font-semibold mb-8 md:mb-12'>{subtitle}</p>


                    <div className='mx-auto justify-center flex flex-wrap lg:flex-nowrap gap-5 lg:gap-5'>
                        {box.map((item, index) => (
                            <div key={index} className='w-full md:w-3/12 text-black text-center grid items-center justify-center p-4 h-28 lg:h-32 border-[1px] border-[#1B453C] hover:bg-[#1B453C] hover:text-white  rounded-[30px] transition-all  duration-400'>
                                <h2 className="lg:leading-snug  poppins text-center text-sm lg:text-[15px]  font-normal  w-full">{item.text}</h2>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

        </>
    )
}



export const Faq = () => {
    const heading = "FAQs"

    const card = [
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
        {
            title: 'How can I protect my bamboo plantation from pests and diseases?',
            description: 'Bamboo is naturally resistant to most pests and diseases, but occasional issues may arise. Common pests include bamboo borers, mealybugs, and aphids, which can damage shoots and leaves.',
        },
        {
            title: 'Does bamboo require a lot of water to grow?',
            description: 'Bamboo requires water for optimal growth, especially during the initial establishment phase, but it is not a water-intensive crop. Once mature, bamboo is highly drought-resistant due to its deep root system',

        },
        {
            title: 'How does bamboo compare to traditional timber trees in terms of profitability?',
            description: 'Bamboo is significantly more profitable than traditional timber trees due to its rapid growth and continuous harvest cycle. While hardwood trees like teak take 20-30 years to mature, bamboo can be harvested within 3-5 years',

        },
    ]

    return (
        <>

       <FaqSlider card={card} heading={heading} />
        </>
    )
}
