import React from 'react'
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
    const jobs = [
        {
          id: 1,
          title: 'Product Management',
          location: 'Delhi, India',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          title: 'Product Management',
          location: 'Delhi, India',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 3,
          title: 'Product Management',
          location: 'Delhi, India',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        }
      ];
  return (
    <>
     <div className="max-w-7xl mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-24">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>

    </>
  )
}


export const Form = () => {
  return (
    <section className='justify-center py:8 md:py-12'>

    <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
    <CareerForm/>
    </div>
    </section>
  )
}
