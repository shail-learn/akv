"use client"
import React from "react";
import Team1 from "../../../assets/images/home/team.webp";
import Image from "next/image";

export const Ourteam = () => {
    const ourTeamData = [
        {
          id: 1,
          img: Team1,
          name: "Lt. Sh M.K Aggarwal",
          designation: "Chairman",
        },
        {
          id: 2,
          img: Team1,
          name: "Sh Atul Aggarwal",
          designation: "M.D & CEO",
        },
        {
          id: 3,
          img: Team1,
          name: "Dr. Sushant Tiwari",
          designation: "General Manager",
        },
        {
          id: 4,
          img: Team1,
          name: "Sh Sanjay Mittal",
          designation: "Technology Consultant",
        },
        {
          id: 5,
          img: Team1,
          name: "Sh HC Sirohi",
          designation: "Director",
        },
      ];

  return (
    <>
        <section className="container  pb-0 lg:pb-20  lg:py-0 ">
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 '>
      <h4 className="text-3xl md:text-4xl redhat text-center mb-8">
      Our Visionary <span className="text-[#498A8A]">Team</span>
      </h4>
      <div className=" flex flex-wrap lg:flex-nowrap justify-center gap-4 lg:gap-8">
        {ourTeamData.map((item) => (
          <div key={item.id} className="text-center  w-[47%] lg:w-2/12">
            <Image
              src={item.img}
              alt={item.name}
              className=" w-full mx-auto"

            />
            <h5 className="text-md poppins mt-4 font-normal">{item.name}</h5>
            <h6 className="text-sm font-bold poppins">{item.designation}</h6>
          </div>
        ))}
      </div>
      </div>
    </section>

    </>
  )
}
