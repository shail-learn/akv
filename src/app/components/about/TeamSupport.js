'use client';

import React from 'react'
import { TeamCard } from './TeamCard'
// import teamMember from './../../../api/teamMembers.json'
import banner from "../../../assets/images/about/greenBanner.webp";
import banner2 from "../../../assets/images/about/contact.webp";
import { useState, useEffect } from 'react';
import Team1 from "../../../assets/images/home/mk.webp";
import Team2 from "../../../assets/images/home/atul.webp";
import Team3 from "../../../assets/images/home/sk-pande.webp";
import Team4 from "../../../assets/images/home/sanjay.webp";

import Link from 'next/link';
export const Team = () => {
  const heading = "Meet Our Visionaries";

  const heading2 = "The Green Force";
  const info = `Our dedicated team of experts combines passion and knowledge in
   <span style="color: #D2AE6D;">agroforestry, ensuring sustainable practices</span>
   that benefit both people and the planet.`;
  const pageUrl = "/our-team";
  const teamMember = [
    {
      id: 1,
      image: Team1,
      name: "Emeritus <br> Lt. Shri M.K. Aggarwal",
      designation: "Chairman",
    },
    {
      id: 2,
      image: Team2,
      name: "Shri Atul Aggarwal",
      designation: "Co-Founder & Chairman",
    },
    {
      id: 3,
      image: Team3,
      name: "Dr. SK Pande",
      designation: "Associate Director",
    },
    {
      id: 4,
      image: Team4,
      name: "Shri Sanjay Mittal",
      designation: "Technology Consultant",
    },


  ];
  return (
    <>
      <section
        className="text-center md:text-left  flex items-center justify-center pt-16 pb-16 lg:pt-20 lg:pb-20"
      >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px]  font-semibold redhat text-[#1B453C] mb-14'>{heading}</h2>
          <div className='lg:w-12/12 mx-auto w-full'>
            <div className='lg:grid flex items-center flex-wrap justify-items-between  gap-4 lg:gap-6 grid-cols-1 lg:grid-cols-12 flex-col-reverse'>
              <div className='lg:col-span-8 w-full w-12/12' >
                <div className='lg:grid flex flex-wrap gap-6  lg:gap-6 grid-cols-1 lg:grid-cols-12'>
                  {teamMember.map((item, index) => (
                    <div key={index} className='md:col-span-3 md:w-full md:w-12/12 col-span-2 w-[46%]' >
                      <TeamCard data={item} />
                    </div>
                  ))}
                </div>
              </div>
              <div className='lg:col-span-4   w-full w-12/12' >
                <div className='bg-[#1A3232] p-10 md:p-10 mb-10  grid items-center rounded-xl h-full text-white'>
                  <div>
                    <h3 className='text-2xl font-medium redhat mb-6'>{heading2}</h3>
                    <p className='italic pb-8 leading-8' dangerouslySetInnerHTML={{ __html: info }}></p>
                    <Link href={pageUrl} className='bg-[#D9D9D9] font-medium text-[#1A3232] py-3 px-16 inline-block text-center text-base hover:bg-white transition-all  duration-500 ' >Our Team</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>

      </section>

    </>
  )
}



export const GreenSupport = () => {
  const heading = `Let’s <span style="color: #51BB63;">Go Green</span> <br/> Together`;
  const info = "Our doors are always open for farmers, tech-savvy partners and policymakers. Come, let’s make our mother earth greener for the future."
  return (
    <>
      <section
        className="bg-cover bg-center relative text-center md:text-left  flex items-center justify-center pt-16 pb-16 lg:pt-32 lg:pb-32"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-30'></div>
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2 relative'>
          <h2 className="text-4xl lg:text-[40px]  text-center lg:text-start md:leading-[1.3] md:text-4xl font-semibold redhat text-white mb-10" dangerouslySetInnerHTML={{ __html: heading }}></h2>

          <div className='lg:w-6/12   w-full'>
            <div className='text-white'>
              <p className="italic md:text-[17px]" dangerouslySetInnerHTML={{ __html: info }}></p>

            </div>
          </div>


        </div>

      </section>

    </>
  )
}



export const Support = () => {
  const heading1 = `Collaborate with Us:`;
  const info1 = "Let’s work together to create lasting, positive change.";

  const heading2 = `Support Our Cause:`;
  const info2 = "Contribute to a greener tomorrow through donations, partnerships, and shared resources.";

  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleDonate = async () => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/data/razorpay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: 'INR',
        name: 'Atulye Foundation',
        description: 'Donation',
        order_id: order.id,
        handler: function (response) {
          alert('Thank you for your donation!\nPayment ID: ' + response.razorpay_payment_id);
        },
        theme: {
          color: '#1B453C',
        },
        modal: {
          ondismiss: () => setLoading(false),
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Something went wrong!');
      setLoading(false);
    }
  };

  return (
    <>
      <section className="relative text-center md:text-left flex items-center justify-center pt-16 pb-16">

        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <div className="lg:w-10/12 mx-auto w-full">
            <div className="grid gap-4 md:flex">
              {/* Collaborate with us */}
              <div className="lg:w-6/12 w-full bg-[#F2F2F2] p-8 lg:p-10 py-16 lg:py-24">
                <div className="w-full lg:w-4/6">
                  <h2 className="text-3xl text-center lg:text-start md:leading-[1.3] md:text-4xl lg:text-[40px]  font-semibold redhat text-[#1B453C] mb-6" dangerouslySetInnerHTML={{ __html: heading1 }}></h2>
                  <p className="text-black mb-10 lg:mb-16 md:text-[17px]" dangerouslySetInnerHTML={{ __html: info1 }}></p>
                  <Link href="https://atulye-foundation.org" target='_blank' className='rounded border border-black py-2 px-10 w-4/5 inline-block text-center text-base hover:bg-white transition-all duration-500 font-medium'>Connect with us</Link>
                </div>
              </div>

              {/* Support our cause */}
              <div className="lg:w-6/12 bg-cover bg-center p-8 lg:p-10 py-16 lg:py-24 w-full" style={{ backgroundImage: `url(${banner2.src})` }}>
                <div className="w-full lg:w-4/6 text-white">
                  <h2 className="text-3xl text-center lg:text-[40px]  lg:text-start md:leading-[1.3] md:text-4xl font-semibold redhat mb-6" dangerouslySetInnerHTML={{ __html: heading2 }}></h2>
                  <p className="mb-10 lg:mb-6 md:text-[17px]" dangerouslySetInnerHTML={{ __html: info2 }}></p>

                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full rounded-xl px-4 py-2 mb-4 text-black"
                    value={amount}
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      setAmount(isNaN(value) ? '' : value);
                    }}
                  />

                  <button
                    onClick={handleDonate}
                    disabled={loading}
                    className={`rounded-3xl py-2 px-6 w-full font-medium transition ${loading
                      ? 'bg-gray-400 cursor-not-allowed text-white'
                      : 'bg-white text-[#1B453C]'
                      }`}
                  >
                    {loading ? 'Processing...' : 'Donate'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};