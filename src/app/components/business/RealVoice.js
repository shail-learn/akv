"use client"
import React from 'react';
import { useState, useEffect } from 'react';

import client1 from "../../../assets/images/business1/rajesh-patel.webp";
import client2 from "../../../assets/images/business1/meena-kumari.webp";
import client3 from "../../../assets/images/business1/Ramprashad-yadav.webp";
import client4 from "../../../assets/images/business1/Kamla-bai.webp";
import client5 from "../../../assets/images/business1/Kusum.webp";



import banner from "../../../assets/images/business1/join-us.webp";
import Image from 'next/image';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';






export const RealVoice = () => {
    const heading1 = "Real voices, real impact: "
    const heading = "Stories from farmers, employees, and partners."
    const testimonial = [
        {
            image: client1,
            quote: `<span style="color:#1B453C;font-weight:800;">Atulye Krishi Vanna</span> helped transform our barren land into a thriving farm. Their agroforestry solutions are
life-changing!" `,
            position: "Rajesh Patel, Farmer, Bhopal"

        },
        {
            image: client2,
            quote: `Thanks to their training programs, I’ve adopted sustainable farming practices and doubled my yields.`,
            position: "Meena Kumari, Farmer, Bhopal"

        },
        {
            image: client3,
            quote: `<span style="color:#1B453C;font-weight:800;">Farming on Atulye’s</span>  land feels like working on our own soil. It brings peace to the heart." `,
            position: "Bhola Prasad, Bhopal"

        },
        {
            image: client4,
            quote: `Here, we don’t just work—we grow, learn, and stand on our own feet.`,
            position: "Kamla Bai, Bhopal"

        },
        {
            image: client5,
            quote: ` Farming at AKV gave me purpose. I now earn with pride.`,
            position: "Kusum Bai, Bhopal"

        },
    ]
    return (
        <>
            <section
                className=" py-14 lg:py-20 bg-[#F2F2F2] outer-arrow arrow_black" >

                <div className='mx-auto max-w-7xl px-4 md:px-8 lg:px-2 max-ful'>
                    <h2 className="text-black text-center  md:text-left text-3xl md:text-4xl mb-4 lg:mb-8 lg:leading-tight  redhat  font-medium  w-full">
                        {heading1} <br /> <span className='text-[#1B453C]'>{heading}</span>
                    </h2>


                    <div className='w-full lg:w-12/12'>

                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}

                            slidesPerView={1}
                            spaceBetween={10}
                            navigation={true}
                            loop={true}
                            modules={[Autoplay, Navigation]}
                            autoplay={{
                                delay: 6000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 50,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 50,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 60,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 80,
                                },
                            }}

                            className="mySwiper2"
                        >

                            {testimonial.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div className='w-full grid h-full  text-black bg-[#E9E9E9] rounded-3xl overflow-hidden  item_slider'
                                        style={{
                                            boxShadow: "5px 5px 4px 0px #00000033",

                                        }}
                                    >
                                        <div className='lg:w-12/ 12 mx-auto'>
                                            <div className='gap-6 flex items-center h-full '>
                                                <div className='w-w-3/6 lg:w-3/6 min-w-[40%]'>
                                                    <Image src={item.image} alt='client' className='w-full h-full ' />
                                                </div>
                                                <div className='w-full'>
                                                <p className=' pl-0 p-4 text-sm lg:text-[16] font-normal' dangerouslySetInnerHTML={{ __html: item.quote }}></p>

                                                    <p className='text-black font-semibold text-sm lg:text-[16] '>– {item.position}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}



export const Making = () => {
  const heading = `Join Us <br/> in Making a Difference!`;
  const info =
    "Be a part of the movement to create a greener and more sustainable future. Whether you're a farmer, a partner, or someone passionate about the environment, there’s a place for you in our journey.";

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
      <section
        className="bg-cover bg-center relative text-center md:text-left flex items-center justify-center pt-16 pb-16 lg:pt-48 lg:pb-48"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
          <h2
            className="text-3xl text-center lg:text-start md:leading-[1.3] md:text-4xl font-normal redhat text-white mb-10"
            dangerouslySetInnerHTML={{ __html: heading }}
          ></h2>

          <div className="lg:w-6/12 w-full">
            <div className="text-white">
              <p
                className="font-light mb-4"
                dangerouslySetInnerHTML={{ __html: info }}
              ></p>
            </div>

            <div className="flex gap-3 flex-wrap sm:flex-nowrap">
              <input
                type="number"
                placeholder="Enter amount"
                className="rounded px-4 py-2 text-black w-[140px]"
                value={amount}
                onChange={(e) => {
                  const value = parseInt(e.target.value, 10);
                  setAmount(isNaN(value) ? '' : value);
                }}
              />
              <button
                onClick={handleDonate}
                disabled={loading}
                className={`inline-flex items-center justify-center gap-4 py-3 px-8 lg:px-12 text-black redhat font-medium bg-white border transition-all duration-300 ${
                  loading
                    ? 'cursor-not-allowed bg-gray-400 text-white'
                    : 'hover:bg-[#f8f8f8]'
                }`}
              >
                {loading ? 'Processing...' : 'Donate'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};