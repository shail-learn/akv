import { Mansarovar, Modern, Pond, Spiritual, Tradition } from '@/app/components/mansarovar/MansarovarPondSpiritualModernTradition'
import React from 'react'

function page() {
    return (
        <>
            <Mansarovar />
            <Pond />
            <Spiritual />
            <Modern />
            <Tradition />
        </>
    )
}

export default page