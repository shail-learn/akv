"use client"
import { Banner, Know, Who } from '@/app/components/fruits-and-vegetables/BannerWhoKnow'
import { Environmental, Faq, Future, Looking } from '@/app/components/fruits-and-vegetables/EnvironmentalFutureLookingFaq'
import { Approach, Economic, Points } from '@/app/components/fruits-and-vegetables/PointsApproachEconomic'
import React from 'react'

function page() {
  return (
    <>
    <Banner/>
    <Who/>
    <Know/>
    <Points/>
    <Approach/>
    <Economic/>
    <Environmental/>
    <Future/>
    <Looking/>
    <Faq/>
    </>
  )
}

export default page