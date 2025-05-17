import React from 'react'
import harvestimg from "../../../assets/images/bamboo/harvest.webp";
import img01 from "../../../assets/images/lime/green-fruits.webp";
import bgimage1 from "../../../assets/images/guava/refreshment.webp";
import Image from 'next/image';

export const Pest = () => {
  const heading = "Pest and Disease Management"

  const gamharRequirements = {
    climate: {
      title: "Key Pests and Organic Control Measures",
      points: [
        "Leaf Miner & Caterpillar – Neem oil sprays and natural predators",
        "Sucking Pests (Whiteflies, Aphids, Black Flies, Rust Mites) – Neem-based bio-pesticides and botanical extracts",
        "Fruit-Sucking Moths & Fruit Flies – Light traps, pheromone lures, and polythene bag protection",
        "Mealybugs & Nematodes – Organic mulching and biopesticide applications"
      ],
    },
    soil: {
      title: "Common Diseases and Prevention",
      points: [
        "Twig Blight & Scab – Regular pruning and copper-based fungicide sprays",
        "Citrus Canker – Copper oxychloride treatments and streptocycline sprays",
        "Tristeza Virus – Disease-free seedlings and aphid control",
      ],
    },

  };
  const { climate, soil, note } = gamharRequirements;
  return (
    <>
      <section className="py-14 lg:py-16 !pt-0">
        <div className="mx-auto max-full max-w-7xl px-4 md:px-6 lg:px-2">
          <div className='w-[95%] md:w-[92%] mx-auto'>
            <div className="relative rounded-lg">
              <Image
                src={harvestimg}
                alt="Forest Image"
                className="w-full md:h-full object-cover h-60 rounded-2xl"
              />
              <div className="absolute redhat w-3/5 md:w-1/3 h-28 flex items-center top-8 -left-3 md:-left-8 bg-[#8EB558] text-white py-3 px-6 rounded-md  ">
                <h2 className='lg:leading-snug  text-white redhat text-left border-l border-white border-opacity-20 ps-3 text-2xl md:text-4xl  font-normal'>
                  {heading}
                </h2>

              </div>
              <div className="absolute top-8 md:-right-8 -right-3  bg-[#8EB558] md:w-16 w-10 h-28 rounded-md"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">

              <div>
                <h3 className="text-lg font-semibold mb-2">{climate.title}</h3>
                <ul className="list-disc  ps-6 text-sm space-y-2">
                  {climate.points.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{soil.title}</h3>
                <ul className="list-disc  ps-6 text-sm space-y-2">
                  {soil.points.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-center text-sm text-[#1B453C] mt-6">
              {note}
            </p>
          </div>


        </div>
      </section>
    </>
  )
}



export const Harvesting = () => {
  const plantingData = {
    title: "Harvesting and Post-Harvest Care",

    steptitle: "Lime trees begin fruiting in the third year, with peak production from the sixth year onward. ",
    steps: [
      "Harvesting time: When fruits turn greenish-yellow",
      "Hand-picking method: Prevents bruising and maintains quality",
      "Post-harvest treatment: Fruits are treated with 4% wax emulsion and packed in 200-gauge polythene bags to extend shelf life.",
    ],

    imageSrc: img01,
  };

  return (
    <>
      <section className=' py-16  lg:py-20 !pt-6' >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='flex flex-col lg:flex-row justify-between  gap-12 lg:gap-16'>
            <div className="md:w-1/2 w-full">
              <div className='relative'>

                <Image
                  src={plantingData.imageSrc}
                  alt="Planting Techniques"
                  width={600}
                  height={400}
                  className="rounded-[20px]"
                  style={{ boxShadow: "4px 4px 4px 0px #00000040" }}
                />
                <div className="absolute inset-0 -z-10 h-[110%] w-[96%] md:w-full translate-x-6 -translate-y-3 md:-translate-y-4 bg-white border border-gray-400 rounded-[20px] shadow-md"></div>

              </div>

            </div>
            <div className='lg:w-6/12  w-12/12'>

              <h2 className="text-3xl md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C]">{plantingData.title}</h2>

              <p className='text-[15px] redhat font-semibold mt-6 md:mt-10 mb-2 md:text-base text-black'>{plantingData.steptitle}</p>
              <ul className="list-disc space-y-1 pl-5 text-black mb-4">
                {plantingData.steps.map((step, index) => (
                  <li key={index} className="text-[15px] md:text-base redhat font-normal text-black">
                    {step}
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}



export const Yield = () => {
  const heading = "Yield and Commercial Viability"
  const text ="With proper care, our plantations yield up to 25 tons per hectare per year. Our sustainable farming model ensures higher profitability, long-term soil health, and minimal environmental impact."

  return (
    <>
      <section
        className=" bg-white py-20 lg:py-32 relative" style={{ background: `url(${bgimage1.src})center center / cover no-repeat` }}>
        <div className='absolute left-0 top-0 w-full h-full bg-black opacity-30 z-10'></div>
        <div className='mx-auto max-w-7xl  px-4 md:px-8 lg:px-2 relative z-10'>
          <div className='flex flex-wrap  items-center gap-6 px-0 md:px-6  lg:px-2'>
            <div className='w-[95%] md:w-5/12 '>
              <h2 className='text-3xl md:leading-[1.3] md:text-4xl mb-10 font-medium redhat text-white'>{heading}</h2>
              <div className='bg-[#D9D9D9C9] p-8 rounded-[20px]'>

                  <div className="mb-6">
                    <p className="list-disc mt-2 text-sm md:text-[15px] text-black redhat">
                        {text}
                    </p>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
