"use client"
import BannerPage from '@/app/components/BannerPage'
import Image from 'next/image';

export default function ClientPage({ blog }) {

  if (!blog) return <div>Blog not found...</div>;

  return (
    <>
      <BannerPage
  heading={blog.title}
  banner={blog.blog_image ? `https://akv.org.in/admin/blogs/${blog.blog_image}` : null}
/>

      <section className='py-14'>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <section className='blog_details'>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </section>
        </div>
      </section>
    </>
  )
}