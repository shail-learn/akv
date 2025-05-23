import { Commercial, Eucalyptus, Fast, Plantation } from '@/app/components/fast-growing-timber-trees/FastEucalyptusPlantationCommercial'
import { Growth, Khamer } from '@/app/components/fast-growing-timber-trees/KhamerGrowth'
import { Rain, Requirements, Uses } from '@/app/components/fast-growing-timber-trees/RainRequirementsUses'
import { FAQs, Start, Why } from '@/app/components/fast-growing-timber-trees/WhyStartFAQs'
import React from 'react'

function page() {
  return (
    <>
    <Fast/>
    <Eucalyptus/>
    <Plantation/>
    <Commercial/>
    <Rain/>
    <Requirements/>
    <Uses/>
    <Khamer/>
    <Growth/>
    <Why/>
    <Start/>
    <FAQs/>
    </>
  )
}

export default page