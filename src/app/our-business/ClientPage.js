"use client"
import React from 'react'
import { Banner, OurService, WhoAre } from '../components/business/BannerService'
import { Goal, Impact, Project } from '../components/business/ImpactProjectGoal'
import { Making, RealVoice } from '../components/business/RealVoice'


function ClientPage() {
  return (
    <>
     <Banner/>
     <WhoAre/>
     <OurService/>
     <Impact/>
     <Project/>
     <Goal/>
     <RealVoice/>
     <Making/>

    </>
  )
}

export default ClientPage