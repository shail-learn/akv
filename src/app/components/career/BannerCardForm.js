"use client";
import { useRef } from "react";
import BannerPage from '../BannerPage'
import banner from "../../../assets/images/career/career-banner.webp";
import JobCard from './JobCard';
import { CareerForm } from './CareerForm';


export const Banner = () => {
    const text = {
        banner: banner,
        heading: `Shape Your Future with AKV`,
        title: 'Explore exciting opportunities and become part of a dynamic, growing team.',
        //  link : "/contact",
        //  button:"View Openings",
         opacity:"opacity-40"
    }
  return (
    <>
    <BannerPage heading={text.heading} opacity={text.opacity} classname='py-4 !px-10' title={text.title} banner={text.banner} button={text.button} link={text.link}/>

    </>
  )
}


export const Card = () => {

  return (
    <>
     <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 gap-8 md:gap-24">

          <JobCard  />

      </div>
    </div>

    </>
  )
}


export const Form = () => {
  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };


  return (
    <section className='justify-center py:8 md:py-12'>

    <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
    <CareerForm />
    </div>
    </section>
  )
}
