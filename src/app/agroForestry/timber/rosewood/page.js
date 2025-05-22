import { Banner, Cultivation, Growth, Rosewood } from '@/app/components/rosewood/BannerRosewoodGrowthCultivation'
import { Exploitation, Harvesting, Market, Regulatory } from '@/app/components/rosewood/HarvestingMarketExploitationRegulatory'
import { FAQs, Looking, Sustainable, Uses, Why } from '@/app/components/rosewood/UsesSustainableWhyLookingFAQs'
import React from 'react'

function page() {
  return (
    <>
      <Banner />
      <Rosewood />
      <Growth />
      <Cultivation />
      <Harvesting />
      <Market />
      <Exploitation />
      <Regulatory />
      <Uses />
      <Sustainable />
      <Why />
      <Looking/>
      <FAQs/>
    </>
  )
}

export default page