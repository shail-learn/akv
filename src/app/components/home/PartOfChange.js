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

  const [amounts, setAmounts] = useState({});
  const [loadingIndex, setLoadingIndex] = useState(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handleDonate = async (amount, index) => {
    if (!amount || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setLoadingIndex(index);

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
          // name: 'Donor',
          // email: 'donor@example.com',
          // contact: '9999999999',
        },
        theme: {
          color: '#1B453C',
        },
        modal: {
          ondismiss: () => {
            setLoadingIndex(null);
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error('Payment Error:', err);
      alert('Something went wrong!');
      setLoadingIndex(null);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-2 py-16">
      <div className="flex gap-4 flex-wrap lg:flex-nowrap items-center justify-center">
        <div className="w-full lg:w-5/12 bg-[#1B453C] rounded-[20px] grid items-center justify-center lg:h-[504px] p-12">
          <div>
            <h2 className="text-white poppins text-center md:text-left leading-relaxed text-3xl md:text-4xl mb-5">
              {box1[0].title}
            </h2>
            <p className="poppins text-justify font-normal text-[15px] text-white">
              {box1[0].description}
            </p>
          </div>
        </div>

        {card.map((item, index) => (
          <div
            key={index}
            className="group w-full rounded-[20px] overflow-hidden p-10 lg:w-3/12 h-auto text-black relative transition-all duration-400"
            style={{
              backgroundImage: `url(${item.bgimg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute top-0 left-0 h-full w-full bg-white bg-opacity-50 transition-all duration-400 group-hover:bg-[rgba(27,69,60,0.58)]"></div>

            <div className="z-10 relative text-black transition-all duration-400 group-hover:text-white">
              <h3 className="poppins text-5xl mb-6">{item.number}</h3>
              <p className="poppins text-lg mb-4">{item.title}</p>

              <input
                type="number"
                placeholder="Enter amount"
                className="w-full rounded-xl px-4 py-2 mt-2 text-black"
                value={amounts[index] || ''}
                onChange={(e) => {
                  const updated = { ...amounts };
                  updated[index] = parseInt(e.target.value);
                  setAmounts(updated);
                }}
              />

              <button
                onClick={() => handleDonate(amounts[index], index)}
                disabled={loadingIndex === index}
                className={`mt-4 rounded-3xl py-2 px-6 w-full transition ${
                  loadingIndex === index
                    ? 'bg-gray-400 cursor-not-allowed text-white'
                    : 'bg-[#1B453C] text-white'
                }`}
              >
                {loadingIndex === index ? 'Processing...' : 'Donate'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
