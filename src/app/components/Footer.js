'use client';
import Link from 'next/link'
import React from 'react'
import logo from "../../assets/images/color-logo.png"
import whatsapp from "../../assets/images/WhatsApp.svg"
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";




export const Footer = (htmlContent) => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact-us';

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About Us', href: '/about-us', current: false },
    { name: 'Our Business', href: '/our-business', current: false },
    { name: 'Eco Initiatives', href: '/eco-initiatives', current: false },
    { name: 'Blogs', href: '/blogs', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'Contact Us', href: '/contact-us', current: false },
    { name: 'Career', href: '/career', current: false },


  ]
  const address = [
    {
      phone: "+91 9220152225",
      location:
        "A&M Agriventures Pvt Ltd, <br/> Village: Ramgarh, Tehsil: lchhawar, <br/> District: Sehore- 466115 Madhya Pradesh, India",
    },
  ];

  const message = `Hello,

Thanks for contacting Atulye Krishi Vana!
To help us assist you better, please reply with:

Your Name

Location

What you're looking for?`;

  const encodedMessage = encodeURIComponent(message);
  return (
    <footer className='bg-[#1B453C]  px-4 md:px-8 lg:px-2  py-8  md:py-16' >
      <Link
        className='fixed right-2 bottom-4 z-[99]'
        target="_blank"
        href={`https://wa.me/919220152225?text=${encodedMessage}`}
      >
        <Image className='h-16 w-auto' src={whatsapp} alt='whatsapp' />
      </Link>
      <section className='mx-auto max-w-7xl'>
        <div className='flex gap-4 md:gap-0 flex-wrap'>
          <div className='w-full md:w-4/12'>
            <ul className='footer_menu'>
              {navigation.map((item, key) => (
                <li className='text-[#D2AE6D] hidden md:block hover:text-white mb-3' key={item.name}><Link href={item.href}>{item.name}</Link></li>

              ))}
            </ul>
          </div>

          <div className='w-full md:w-4/12 grid justify-center'>
            {!isContactPage && (
              <div className={`rounded-full bg-white p-4 w-28 h-28 flex justify-center items-center `}  >
                <Image src={logo} className='w-auto h-full' alt="logo" height="30px" width="30px" />
              </div>
            )}
            <ul className="flex gap-2 justify-center mt-5 md:mt-8">
              <li><Link className='bg-[#D2AE6D] p-2 rounded-full grid hover:bg-white' href="https://www.facebook.com/profile.php?id=61552925864614" target='_blank'><FaFacebookF /></Link></li>
              <li><Link className='bg-[#D2AE6D] p-2 rounded-full grid hover:bg-white' href="https://www.instagram.com/atulyekrishivana/" target='_blank'><SiInstagram /></Link></li>
              <li><Link className='bg-[#D2AE6D] p-2 rounded-full grid hover:bg-white' href="https://www.linkedin.com/company/atulyekrishivana/" target='_blank'><FaLinkedinIn /></Link></li>

            </ul>
          </div>

          <div className='w-full md:w-4/12 md:grid  justify-end'>
            <div>
              <p className='text-white font-semibold md:mt-0 mt-4 text-lg mb-5 text-center md:text-left'>Project Office</p>

              <ul>
                <li className='text-white font-light flex gap-4 mb-6'>
                  <span className='text-[#D2AE6D] text-xl mt-1'><IoLocationSharp /></span>
                  Atulye Krishi Vana
                  <br /> Mithlesh Nagar, Village, Ramgarh,
                  <br /> P.O. : Brijesh Nagar, Tehsil: Icchawar,
                  <br />Dist. : Sehore, Bhopal, (MP) - 466115
                </li>
                <li className='text-white font-light flex gap-4'>
                  <span className='text-[#D2AE6D] text-xl mt-1'><FaPhone /></span>
                  +91 9220152225</li>
              </ul>


            </div>
          </div>

        </div>
      </section>
    </footer>
  )
}
