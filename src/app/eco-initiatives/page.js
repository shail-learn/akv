"use client"
import React from 'react'
import { Banner, Objective, Reviving } from '../components/ecoInitiative/BannerRevivingObjective'
import { Agroforestry, CsrProject } from '../components/ecoInitiative/CSRAgroforestry'
import { Achievements, Future } from '../components/ecoInitiative/AchievementsFuture'

function page() {
  return (
    <>
     <Banner/>
     <Reviving/>
     <Objective/>
     <CsrProject/>
     <Agroforestry/>
     <Achievements/>
     <Future/>
    </>
  )
}

export default page