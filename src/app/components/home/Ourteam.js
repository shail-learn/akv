"use client"
import React, { useState } from "react";
import Team1 from "../../../assets/images/home/team1.png";
import Team2 from "../../../assets/images/home/team2.png";
import Team3 from "../../../assets/images/home/team3.png";
import Team4 from "../../../assets/images/home/team4.png";
import Team5 from "../../../assets/images/home/team5.png";
import Team6 from "../../../assets/images/home/team6.png";

import Image from "next/image";

export const Ourteam = () => {

  const [visibleCount, setVisibleCount] = useState(4); // Initially show 4 items

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4); // Show 4 more items on click
  };

  const ourTeamData = [
    {
      id: 1,
      img: Team1,
      name: "Lt. Sh M.K Aggarwal",
      designation: "Founder",
    },
    {
      id: 2,
      img: Team2,
      name: "Sh Atul Aggarwal",
      designation: "Co-Founder & Chairman",
    },
    {
      id: 3,
      img: Team3,
      name: "Dr. SK Pande",
      designation: "Associate Director Training & Development",
    },
    {
      id: 4,
      img: Team4,
      name: "Mr. Sanjay Mittal",
      designation: "Head of Engineering & Technical Solutions",
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
          <h4 className="text-3xl md:text-4xl redhat text-center font-medium mb-8">
            Our  <span className="text-[#498A8A]">Visionary Team</span>
          </h4>
          <div className=" flex flex-wrap  justify-center gap-4 lg:gap-8">
            {ourTeamData.slice(0, visibleCount).map((item) => (
              <div key={item.id} className="text-center w-[47%] lg:w-[20%]">
                <div className="bg-[#A8A8A8] rounded-[20px] overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full mx-auto"
                  />
                </div>
                <h5 className="text-lg mb-4 mt-4 font-normal">{item.name}</h5>
                <h6 className="text-sm font-semibold">{item.designation}</h6>
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
