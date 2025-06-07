import { Current, Functions, Goshala, Historical, Malook, Recent } from '@/app/components/goshala/GoshalaCurrentHistoricalFunctionsRecentMalook'
import React from 'react'

function page() {
  return (
    <>
      <Goshala />
      <Current />
      <Historical />
      <Functions />
      <Recent />
      <Malook />
    </>
  )
}

export default page