import { Applications, Faqs, Join } from '@/app/components/respirtaory/ApplicationsJoinFaqs'
import { Bharangi, Pippali, Respirtaory } from '@/app/components/respirtaory/RespirtaoryPippaliBharangi'
import { Tulsi, Vajradanti, Whypartner } from '@/app/components/respirtaory/VajradantiTulsiWhypartner'
import React from 'react'

function page() {
  return (
    <>

  <Respirtaory/>
  <Pippali/>
  <Bharangi/>
  <Vajradanti/>
  <Tulsi/>
  <Whypartner/>
  <Applications/>
  <Join/>
  <Faqs/>

    </>
  )
}

export default page

