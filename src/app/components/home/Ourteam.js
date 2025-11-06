"use client"
import React, { useState } from "react";
import Team1 from "../../../assets/images/home/mk.webp";
import Team2 from "../../../assets/images/home/atul.webp";
import Team3 from "../../../assets/images/home/pankaj-sarda.webp";
import Team4 from "../../../assets/images/home/sanjay.webp";
import Team5 from "../../../assets/images/home/team5.png";
import Team6 from "../../../assets/images/home/team6.png";

import Image from "next/image";
import Link from "next/link";

export const Ourteam = () => {

  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 items

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more items on click
  };

  const ourTeamData = [
    {
      id: 1,
      image: Team1,
      name: "Emeritus <br> Lt. Shri M.K. Aggarwal",
      designation: "Chairman",
    },
    {
      id: 2,
      image: Team2,
      name: "Shri Atul Aggarwal",
      designation: "Co-Founder & Chairman",
    },
    {
      id: 3,
      image: Team3,
      name: "Mr. Pankaj Sarda",
      designation: "Project Head",
    },
    {
      id: 4,
      image: Team4,
      name: "Shri Sanjay Mittal",
      designation: "Technology Consultant",
    },
    // {
    //   id: 5,
    //   img: Team5,
    //   name: "Mrs. Taran",
    //   designation: "Head of PR & Communications",
    // },
    // {
    //   id: 6,
    //   img: Team6,
    //   name: "Ms. Shweta Sharma",
    //   designation: "Head of HR & Corporate Governance",
    // },

  ];

  return (
    <>
      <section className="container mx-auto pb-0 lg:pb-20  lg:py-0 ">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
          <h4 className="text-3xl md:text-4xl redhat text-center  lg:text-[40px] font-semibold mb-8">
            Our  <span className="text-[#498A8A]">Visionary Team</span>
          </h4>
          <div className=" flex flex-wrap  justify-center gap-4 lg:gap-8">
            {ourTeamData.slice(0, visibleCount).map((item) => (

              <div key={item.id} className="text-center w-[47%] lg:w-[20%]">
                <div className="bg-[#A8A8A8] rounded-[20px] overflow-hidden">
                  <Link href="/our-team" >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full mx-auto"
                      quality={90}
                    />
                  </Link>
                </div>
                <Link href="/our-team" >
                  <h5 className="text-xl mb-2 mt-4 font-normal" dangerouslySetInnerHTML={{ __html: item.name }} />
                  <h6 className="text-[15px] font-semibold">{item.designation}</h6>
                </Link>
              </div>

            ))}
          </div>
          {visibleCount < ourTeamData.length && (
            <div className="text-center mt-8">
              <button
                className="text-[#1B453C] bg-white border-[1px] font-normal p-2 px-12 lg:px-12
                    border-[#1B453C] hover:bg-teal-900 hover:text-white transition delay-100
                    duration-100 ease-in-out mt-6"
                onClick={handleShowMore}
              >
                View More
              </button>
            </div>
          )}
        </div>
      </section>

    </>
  )
}
