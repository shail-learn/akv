import { Applications, Harvesting, Market, Sustainable } from '@/app/components/sandalwood/HarvestingMarketApplicationsSustainable'
import { FAQs, Invest, Looking } from '@/app/components/sandalwood/InvestLookingFAQs'
import { Choose, Condition, Cultivation, Sandal } from '@/app/components/sandalwood/SandalChooseConditionCultivation'

import React from 'react'

function page() {
  return (
    <>
      <Sandal/>
      <Choose/>
      <Condition/>
      <Cultivation/>
      <Harvesting/>
      <Market/>
      <Applications/>
      <Sustainable/>
      <Invest/>
      <Looking/>
      <FAQs/>
    </>
  )
}

export default page