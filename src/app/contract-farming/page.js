"use client"
import React from 'react'
import { Banner, Mission, Why } from '../components/contractFarming/BannerWhyMission'
import { Economic, Fodder, Sustainability, Works } from '../components/contractFarming/FodderWorksSustainability'
import { Contact, Support } from '../components/contractFarming/ContactSupport'


function page() {

  return (
    <>
     <Banner/>
     <Why/>
     <Mission/>
     <Fodder/>
     <Works/>
     <Sustainability/>
     <Economic/>
     <Support/>
      <Contact/>
    </>
  )
}

export default page