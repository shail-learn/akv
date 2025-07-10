import { Desc, Hist, Keys, Pampasar, Uses } from '@/app/components/ShriPampasar/PampasarKeysDescHistUses'
import React from 'react'

function page() {
    return (
        <>
            <Pampasar />
            <Keys />
            <Desc />
            <Hist />
            <Uses />
        </>
    )
}

export default page