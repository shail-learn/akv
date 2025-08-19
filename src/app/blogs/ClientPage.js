"use client"
import React, { useEffect, useState } from 'react'
import { Banner, Bigcard, Blogitem } from '../components/blogs/BannerBigcardBlogitem'

function ClientPage() {
    const [blogs, setBlogs] = useState(null) // null initially to differentiate "not loaded" from "empty"

    useEffect(() => {
        fetch('https://www.akv.org.in/api/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data.data))
            .catch(err => console.log(err))
    }, [])

    // While data is loading
    if (blogs === null) {
        return (
            <>
                <Banner />
                <div className="loading" style={{ padding: '100px 0', textAlign: 'center' }}>
                    Loading...
                </div>
            </>
        )
    }

    // If no blogs returned
    if (blogs.length === 0) {
        return (
            <>
                <Banner />
                <div className="no-blogs" style={{ padding: '100px 0', textAlign: 'center' }}>
                    No blogs available.
                </div>
            </>
        )
    }

    // Sort blogs by date descending
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date))
    const latestBlog = sortedBlogs[0]
    const otherBlogs = sortedBlogs.slice(1)

    return (
        <>
            <Banner />
            <Bigcard blog={latestBlog} />
            <Blogitem blogs={otherBlogs} />
        </>
    )
}

export default ClientPage