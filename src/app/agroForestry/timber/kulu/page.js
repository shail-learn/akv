import { Characteristics, Marketdemand, Sustainable } from '@/app/components/kulu/CharacteristicsSustainableMarketdemand'
import { Benifits, Botanical, Kulubanner } from '@/app/components/kulu/KulubannerBotanicalBenifits'
import { Faqkulu, Started, Whykulu } from '@/app/components/kulu/WhykuluStartedFaqkulu'
import React from 'react'

function page() {
  return (
    <>
     <Kulubanner/>
     <Botanical/>
     <Benifits/>
     <Characteristics/>
     <Sustainable/>
     <Marketdemand/>
     <Whykulu/>
     <Started/>
     <Faqkulu/>
    </>
  )
}

export default page