import { Bhrigu, Concept, Historical, Spiritual, Table, Van } from '@/app/components/shriBhrigu/BhriguConceptTableSpiritualHistoricalVan'
import React from 'react'

function page() {
  return (
    <>
      <Bhrigu />
      <Concept />
      <Table />
      <Spiritual />
      <Historical />
      <Van />
    </>
  )
}

export default page