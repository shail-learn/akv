'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const PartOfChange = () => {
  const box1 = [
    {
      title: 'Be a Part of Change',
      description:
        'Join us for a Greener and Sustainable tomorrow. Become a part of this initiative as a partner, volunteer, or a sponsor to shape the future of sustainable forestry.',
    },
  ];

  const card = [
    {
      number: '01',
      title: 'Become a Volunteer',
      bgimg: 'https://www.akv.org.in/admin/rmimages/hand-group.webp',
    },
    {
      number: '02',
      title: 'Sponsor a Tree or Project',
      bgimg: 'https://www.akv.org.in/admin/rmimages/tree.webp',
    },
    {
      number: '03',
      title: 'Corporate Partnerships',
      bgimg: 'https://www.akv.org.in/admin/rmimages/business.webp',
    },
  ];

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
        prefill: {

        },
        theme: {
          color: '#1B453C',
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
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
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 py-16">
      <div className="flex gap-4 flex-wrap lg:flex-nowrap items-center justify-center">
        <div className="w-full lg:w-5/12 bg-[#1B453C] rounded-[20px] grid items-center justify-center lg:h-[504px] p-12">
          <div>
            <h2 className="text-white poppins text-center md:text-left leading-relaxed text-3xl md:text-4xl lg:text-[40px] font-semibold mb-5">
              {box1[0].title}
            </h2>
            <p className="poppins text-justify font-normal text-base text-[17px] text-white mb-6">
              {box1[0].description}
            </p>

            <input
              type="number"
              placeholder="Enter amount"
              className="w-full rounded-xl px-4 py-2 text-black"
              value={amount}
              onChange={(e) => {
                const value = parseInt(e.target.value, 10);
                setAmount(isNaN(value) ? '' : value);
              }}
            />

            <button
              onClick={handleDonate}
              disabled={loading}
              className={`mt-4 rounded-3xl font-medium text-[17px] py-2 px-6 w-full transition ${loading
                ? 'bg-gray-400 cursor-not-allowed text-white'
                : 'bg-white text-[#1B453C]'
                }`}
            >
              {loading ? 'Processing...' : 'Donate'}
            </button>
          </div>
        </div>

        {card.map((item, index) => (
          <div
            key={index}
            className="group w-full rounded-[20px] overflow-hidden p-10 lg:w-3/12 h-auto md:h-[480px] flex items-center justify-center text-black relative transition-all duration-400"
            style={{
              backgroundImage: `url(${item.bgimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-50 transition-all duration-400 group-hover:bg-[rgba(27,69,60,0.58)]"></div>

            <div className="z-10 relative text-black transition-all duration-400 group-hover:text-white">
              <h3 className="poppins text-5xl mb-6">{item.number}</h3>
              <p className="poppins text-[22px] mb-10 md:text-2xl md:mb-12">{item.title}</p>
              <Link
                className="bg-white text-black rounded-3xl py-3 px-4 w-52 max-w-full inline-block text-center font-medium"
                style={{
                  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                }}
                href="/contact-us"
                target="_blank"
              >
                Contact Us
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};