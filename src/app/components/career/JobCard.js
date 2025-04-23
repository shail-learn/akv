"use client"
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import icon from "../../../assets/images/career/cloud-management.svg";
import Image from 'next/image';
import { useState , useRef } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

import jobsData from '../../../api/jobsData.json';
import Link from 'next/link';


export default function JobCard( ) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };


  return (

    <>

      <div className=" w-full mx-auto  space-y-6">
        {jobsData.map((job, index) => (
          <div key={job.id} className="border-b pb-6 mb-6">
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h2 className="text-xl md:text-2xl text-[#1B453C] font-bold redhat mb-2">
                Profile: {job.title}
              </h2>
              {activeIndex === index ? (
                <FiChevronUp size={24} />
              ) : (
                <FiChevronDown size={24} />
              )}
            </div>

            <div className="text-sm md:text-base mt-2 redhat">
              <p className='mb-1'><strong>Positions:</strong> {job.positions}</p>
              <p  className='mb-1'><strong>Experience:</strong> {job.experience}</p>
              <p className='mb-1'><strong>Location:</strong> {job.location}</p>
              <p className='mb-1'><strong>Eligibility Criteria (Educational):</strong> {job.eligibility}</p>
            </div>

            {activeIndex === index && job.summary && (
              <>
              <div className="mt-4 space-y-4">
                <h3 className="font-bold text-lg redhat">Summary:</h3>
                <p className='redhat'>{job.summary}</p>

                <h3 className="font-bold text-lg redhat">Requirements:</h3>
                <ul className="list-disc ml-6 space-y-1 text-sm md:text-base redhat">
                  {job.responsibilities?.map((item, i) => (
                    <li key={i}>{item}</li> // ✅ Use i here, not index
                  ))}
                </ul>
              </div>
                  <div className='my-6 mt-10'>
                  <Link href="#career_form"     className='poppins mx-auto text-center border border-[#344C31] font-normal text-white w-[200px] py-3 rounded-[4px] bg-[#344C31] inline-block transition-all duration-500 hover:border hover:bg-white hover:text-[#344C31]'>
                   Apply Now
                    </Link>
                  </div>
                  </>
            )}

          </div>
        ))}
      </div>
      {/* <div className="bg-white p-6 md:p-14 rounded-sm r  transition-transform duration-300 transform hover:scale-110 " style={{ boxShadow: "4px 9px 19px 5px #00000040" }}>
        <div className="text-4xl text-center  mb-4 text-black">
          <Image src={icon} alt='career icon' className='mx-auto' />
        </div>
        <h2 className="text-xl font-semibold mb-2 text-black">{job.title}</h2>
        <p className="text-sm flex text-black items-center mb-6">
          <FaMapMarkerAlt className="mr-1" />
          {job.location}
        </p>
        <p className="text-sm text-black mb-4">{job.description}</p>

      </div> */}
    </>
  );
}
