import { Chitrak, Jimikand, Nagarmotha, Punarnava } from '@/app/components/digestive-liver/ChitrakNagarmothaJimikandPunarnava'
import { Aloevera, Digestive, Mulethi } from '@/app/components/digestive-liver/DigestiveAloeveraMulethi'
import { FAQs, Join, Whypartner } from '@/app/components/digestive-liver/WhypartnerJoinFAQs'
import React from 'react'

function page() {
  return (
    <>
      <Digestive />
      <Aloevera />
      <Mulethi />
      <Chitrak />
      <Nagarmotha />
      <Jimikand />
      <Punarnava />
      <Whypartner />
      <Join />
      <FAQs />
    </>
  )
}

export default page