import React from 'react'

import { Cultivation, Harvesting, Market } from '@/app/components/bamboo/CultivationHarvestingMarket'
import { Invest, Sustainable, Uses } from '@/app/components/bamboo/UsesSustainableInvest'
import { Faq, Looking } from '@/app/components/bamboo/LookingFaq'
import { BannerBamboo, GrowthBamboo, WhyBamboo } from '@/app/components/bamboo/BambooWhyGrowth'


function page() {
  return (
    <>
     <BannerBamboo/>
     <WhyBamboo/>
    <GrowthBamboo/>
    <Cultivation/>
    <Harvesting/>
    <Market/>
    <Uses/>
    <Sustainable/>
    <Invest/>
    <Looking/>
    <Faq/>
    </>
  )
}

export default page