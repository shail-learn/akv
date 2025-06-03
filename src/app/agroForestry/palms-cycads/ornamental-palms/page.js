import { Bottle, Fishtail, Foxtail, Ornamental } from '@/app/components/ornamental/OrnamentalFoxtailFishtailBottle'
import { Applications, Atulye, Palms, Sustainability } from '@/app/components/ornamental/PalmsAtulyeApplicationsSustainability'
import { FAQs, Shape } from '@/app/components/ornamental/ShapeFAQs'
import React from 'react'

function page() {
  return (
    <>
     <Ornamental/>
     <Foxtail/>
     <Fishtail/>
     <Bottle/>
      <Palms/>
      <Atulye/>
      <Applications/>
      <Sustainability/>
      <Shape/>
      <FAQs/>
    </>
  )
}

export default page