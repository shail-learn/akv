import { Environmental, FAQs, Grow } from '@/app/components/functional-native/EnvironmentalGrowFAQs'
import { Bajarbattu, Date, Functional } from '@/app/components/functional-native/FunctionalBajarbattuDate'
import { Application, Krishi, Promote } from '@/app/components/functional-native/PromoteKrishiApplication'
import React from 'react'

function page() {
  return (
    <>
     <Functional/>
     <Bajarbattu/>
     <Date/>
     <Promote/>
     <Krishi/>
     <Application/>
     <Environmental/>
     <Grow/>
     <FAQs/>
    </>
  )
}

export default page