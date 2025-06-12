import { Application, Atulye, Cultural, FAQs, Grow } from '@/app/components/sacred-and-religious-trees/AtulyeApplicationCulturalGrowFAQs'
import { Bargad, Pipal, Sacred, Safed, Why } from '@/app/components/sacred-and-religious-trees/SacredBargadPipalGularSafedWhy'


import React from 'react'

function page() {
  return (
    <>
    <Sacred/>
    <Bargad/>
    <Pipal/>
    <Safed/>
    <Why/>
    <Atulye/>
   <Application/>
   <Cultural/>
   <Grow/>
   <FAQs/>
    </>
  )
}

export default page