import React from 'react'
import { AboutSlider, Banner, UnderBanner } from '../components/about/Banner'
import { Guide, Mission } from '../components/about/GuideMission'
import { Jounery } from '../components/about/JouneryRoot'

function page() {
  return (
    <>
     <Banner/>
     <AboutSlider/>
     <UnderBanner/>
     <Guide/>
     <Mission/>
     <Jounery/>

       </>
  )
}

export default page