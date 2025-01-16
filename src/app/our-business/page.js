import React from 'react'
import { Banner } from '../components/business/Banner'
import { About } from '../components/business/About'
import { OurCard,TreeBanner } from '../components/business/OurCard'
import { OurApproach } from '../components/business/OurApproach'



function page() {
  return (
    <>
     <Banner/>
     <About/>
     <OurCard/>
     <TreeBanner/>
     <OurApproach/>
    </>
  )
}

export default page