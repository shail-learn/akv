import { Kadam, Mahua, Paras, Sacred, Sindoor } from '@/app/components/sacred/SacredMahuaKadamSindoorParas'
import { Atulye, Conclusion, FAQs, Sector, Unique, Why } from '@/app/components/sacred/WhyAtulyeSectorUniqueConclusionFAQs'
import React from 'react'

function page() {
  return (
    <>
    <Sacred/>
    <Mahua/>
    <Kadam/>
    <Sindoor/>
    <Paras/>
    <Why/>
    <Atulye/>
    <Sector/>
    <Unique/>
    <Conclusion/>
    <FAQs/>
    </>
  )
}

export default page