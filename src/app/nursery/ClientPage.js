"use client"
import React from 'react'
import { About, Banner, Key } from '../components/midh-nursery/BannerAboutKey'
import { Future, Impact, Join } from '../components/midh-nursery/ImpactFutureJoin'

function ClientPage() {
    return (
        <>

            <Banner />
            <About />
            <Key />
            <Impact/>
            <Future/>
            <Join/>
        </>
    )
}

export default ClientPage