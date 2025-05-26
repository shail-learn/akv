import { Bring, Categories, Info, Medicinal } from '@/app/components/medicinal-herbal-plants/MedicinalInfoCategoriesBring'
import React from 'react'

function page() {
  return (
    <>
      <Medicinal />
      <Info />
      <Categories />
      <Bring />
    </>
  )
}

export default page