import { Acidlime,Potential,Partner } from '@/app/components/lime/AcidlimePotentialPartner'
import { Conditions, Growth, Lime, Varieties } from '@/app/components/lime/LimeVarietiesConditionsGrowth'
import { Harvesting, Pest, Yield } from '@/app/components/lime/PestHarvestingYield'
import React from 'react'

function page() {
  return (
    <>
      <Lime />
      <Varieties />
      <Conditions />
      <Growth />
      <Pest/>
      <Harvesting/>
      <Yield/>
      <Acidlime/>
      <Potential/>
      <Partner/>

    </>
  )
}

export default page