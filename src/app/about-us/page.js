import React from 'react'
import { AboutSlider, Banner, UnderBanner } from '../components/about/Banner'
import { Guide, Mission } from '../components/about/GuideMission'
import { Jounery, JouneryRoot } from '../components/about/JouneryRoot'
import { GreenSupport, Support, Team } from '../components/about/TeamSupport'

function page() {
  return (
    <>
     <Banner/>
     <AboutSlider/>
     <UnderBanner/>
     <Guide/>
     <Mission/>
     <Jounery/>
     <JouneryRoot/>
     <Team/>
     <GreenSupport/>
     <Support/>

       </>
  )
}

export default page