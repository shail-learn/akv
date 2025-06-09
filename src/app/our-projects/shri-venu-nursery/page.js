import { Background, Nursery, Offerings, Uses, Venu } from '@/app/components/venuNursery/VenuOfferingsBackgroundUsesNursery'
import React from 'react'

function page() {
    return (
        <>
            <Venu />
            <Offerings />
            <Background />
            <Uses />
            <Nursery />
        </>
    )
}

export default page