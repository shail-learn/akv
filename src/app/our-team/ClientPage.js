"use client"
import { useEffect, useState } from 'react';

import BannerPage from '../components/BannerPage'
import banner from "../../assets/images/team/teambanner.webp";
import member1 from "../../assets/images/team/mk.webp";
import member2 from "../../assets/images/team/Atul-Aggarwal.webp";
import member3 from "../../assets/images/team/Sanjay-Mittal.webp";
import member4 from "../../assets/images/team/SK-Pande.webp";

import Image from 'next/image';
import { GrLinkedinOption } from "react-icons/gr";



function ClientPage() {
  const text = {
    banner: banner,
    heading: `The Minds Behind Sustainable Agroforestry`,
    title: "A team of experts dedicated to creating the world's most sustainable forestry systems.",
    opacity: "opacity-50"
  }

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;


  const founders = [
    {
      "name": "Late and Emeritus Shri M.K. Aggarwal",
      "title": "Founder",
      "linkedin": "",
      "quote": "\"A Legacy of Vision, Innovation, and Sustainable Growth\"",
      "image": member1,
      "description": [
        "Late Shri <strong>M.K. Aggarwal</strong> was a visionary leader and financial expert who laid the foundation for sustainable agroforestry. His foresight and commitment to environmental and economic prosperity have created a lasting impact.",
        "With a deep understanding of <strong>finance, agriculture, and business</strong>, he played a crucial role in shaping <strong>Atulye Krishi Vana’s</strong> mission. His work emphasized <strong>eco-friendly and community-driven forestry models</strong>, promoting innovation in sustainable agriculture.",
        "<strong class='text-base md:text-xl'>His Contributions:</strong>",
        "Established <strong>Atulye Krishi Vana</strong>, integrating agroforestry with sustainability. Advocated for <strong>green forestry practices and rural empowerment</strong>. Inspired <strong>research and innovation in sustainable agriculture</strong>.",
        "Though he is no longer with us, his <strong>vision continues to guide our organization,</strong> leaving behind a legacy of <strong>growth, sustainability, and resilience.<strong>"
      ]
    },
    {
      "name": "Shri Atul Aggarwal",
      "title": "Founder & MD, Atulye Krishi Vana",
      "quote": "\"Leading Agroforestry into a Sustainable Future\"",
      "linkedin": "https://www.linkedin.com/in/atul-aggarwal-a1851646/",
      "image": member2,
      "description": [
        "Shri Atul Aggarwal, an enthusiastic changemaker since childhood, is the founder of Atulye Krishi Vana (AKV)—a pioneering agroforestry initiative focused on transforming barren land into thriving, sustainable ecosystems. Deeply inspired by his father, the late Shri M.K. Aggarwal, Atul combines financial expertise with a deep-rooted commitment to ecological and social impact.",
        'With a belief that modern life demands more than just Roti, Kapda, Makaan, he champions what he calls the "Redefined Necessities": ',

        "<b>Health:</b> Physical & mental well-being through nature.",
        "<b>Wealth:</b> Sustainable income via regenerative farming. ",
        "<b>Nature:</b> A thriving environment for future generations.",
        "<b class='text-base md:text-xl'>Under his leadership, AKV has:</b>",
        "Restored 5,000+ acres of degraded land",
        "Planted over 2 lakh trees",
        "Empowered rural communities, especially women and youth ",
        "Integrated cutting-edge tech like AI, drones, and solar power",
        "<b>Agroforestry Visionary</b>",
        "His vision is to develop the world’s most sustainable private forestry system and position agroforestry as a global solution to climate change, food security, and economic resilience."
      ]
    },
    {
      "name": "Dr. S.K. Pande",
      "title": "Director, School of Agriculture Science-ex",
      "quote": "\"A Legacy of Research, Innovation, and Agricultural Excellence\"",
      "linkedin": "https://www.linkedin.com/in/dr-subodh-kumar-pande-604930295/",

      "image": member4,
      "description": [
        "Dr. S.K. Pande is a distinguished academician, researcher, and leader in agricultural sciences. Having decades of experience in teaching, research, and administration, he has dedicated his career in innovative agriculture technologies, advancing sustainable farming practices and plant pathology.",
        "His expertise spans <strong>integrated pest and disease management, mycotoxin research, hydroponics, medicinal plants, and bio-fertilizers,</strong> significantly contributing to the development of eco-friendly and technology-driven agricultural solutions.",
        "<strong class='text-base md:text-xl'>His Contributions:</strong>",
        "Driving research in <strong>sustainable modern agriculture, food grain storage, and plant disease management etc.</strong>",
        "Mentoring future leaders, having <strong>guided Ph.D. and M.Sc. scholars</strong> in pioneering research.",
        "Leading multiple <strong>government-funded projects</strong> on mushrooms, medicinal plants, and crop protection.",
        "Published  <strong>60+ research papers, authoring books, and holding patents </strong> in plant science / agriculture science.",
        "Served as <strong>Director, School of Agriculture Science at LNCT University, Bhopal,</strong> Dr. Pande continues to <strong>shape the future of agriculture through education, research, and innovation,</strong> ensuring a greener and more resilient tomorrow."
      ]
    },
    {
      "name": "Shri Sanjay Mittal",
      "title": "Technology Consultant",
      "quote": "\"Innovating Agroforestry with Technology & Sustainability\"",
      "image": member3,
      "description": [
        "<strong>Shri Sanjay Mittal</strong> is an <strong>innovative and performance-driven executive</strong> with <strong>28+ years of expertise</strong> in <strong>business development, project management, and AI-based technical solutions.</strong>",
        "His work includes the <strong>design and deployment of IoT-driven automation solutions</strong> for <strong>large infrastructure projects, metro rail, airports, and industrial facilities.</strong> As a <strong>leader in engineering and facility management,</strong> he ensures <strong>Atulye Krishi Vana remains at the forefront of sustainable technology integration.</strong>",

        "<b  class='text-base md:text-xl'>His Key Contributions:</b>",
        "Leads <strong>AI and IoT-based innovations</strong> in agroforestry.",
        "Manages <strong>large-scale technical projects and infrastructure development.</strong>",
        "Ensures <strong>sustainable engineering solutions</strong> for efficiency and growth.",
        "Develops <strong>strategic collaborations with government and corporate partners.</strong>",
        "With a <strong>strong technical background and business acumen,</strong> he is committed to <strong>enhancing efficiency and sustainability</strong> through <strong>cutting-edge technology.</strong>",
      ]
    }

  ]




  return (
    <>

      <BannerPage className="white_btn_banner" opacity={text.opacity} heading={text.heading} title={text.title} banner={text.banner} classname='py-3   ' />



      <section
        className=" relative text-center md:text-left  flex items-center justify-center pb-16 md:pb-32">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          {founders.map((founder, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex flex-col pt-32 md:flex-row ${!isEven ? 'md:flex-row-reverse ' : ''
                  }   gap-8 md:gap-16 px-4 md:px-16`}
              >

                <div className="relative w-full md:w-1/2 md:mb-0 mb-12 ">
                  <div className="relative z-10 rounded-xl">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={500}
                      height={600}
                      className="rounded-[16px] w-full object-cover bg-[#A8A8A8]"
                    />
                    <div className={`absolute w-20  h-20 bg-[#D2AE6D] -top-8 ${isEven ? '-left-8' : '-left-8'} -z-10 rounded-lg`}></div>
                    <div className={`absolute w-20 h-20 bg-[#6D8C54] -bottom-10 ${isEven ? '-right-0 md:-right-8' : 'md:-right-8 right-0'} -z-10 rounded-lg`}></div>
                  </div>



                </div>


                <div className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-xl md:text-2xl  font-bold">{founder.name}</h2>
                  <p className="text-lg text-gray-700 redhat !mt-0">{founder.title}</p>
                  {founder.linkedin && (
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-white bg-[#0077B5] rounded-md text-sm w-fit"
                    >
                      <GrLinkedinOption className='text-lg' />
                      <span color='text-[#FFFFFF33]'>|</span> Connect on LinkedIn
                    </a>
                  )}
                  <p className="text-[#6C8A54] md:text-lg lg:text-[20px] redhat pt-2">{founder.quote}</p>
                  {founder.description.map((htmlLine, i) => (
                    <p
                      key={i}
                      className="text-base md:text-[17px] text-justify font-medium redhat text-gray-800"
                      dangerouslySetInnerHTML={{ __html: htmlLine }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </>
  )
}

export default ClientPage