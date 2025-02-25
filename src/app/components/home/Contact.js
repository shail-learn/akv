import React from 'react'
import logo from "../../../assets/images/logo-icon.svg";
import Image from 'next/image';

export const Contact = (props) => {
    const text = props.data.data.data.sec14_content;
    return (
        <section className='mx-auto max-w-7xl px-4 pt-0 md:px-8 lg:px-2 lg:pt-4  py-16'>
            <h2 className='text-black redhat text-center mb-0 font-medium leading-relaxed text-3xl md:text-4xl  md:mb-8'>{props.data.data.data.sec14_title}</h2>
            <div className='  gap-10  grid  grid-cols-1  lg:grid-cols-12 items-center justify-center'>
                <div className='col-span-1'></div>
                <div className='w-full  p-6 py-16 md:h-full border-[1px] poppins text-xl text-center border-[#A1A1A1] md:p-6 rounded-3xl lg:p-10 col-span-5  h-full grid items-center justify-center '>
                    <h3>"{text}</h3>
                </div>
                <div className='w-full col-span-5 p-6  rounded-3xl h-full grid   '
                    style={{ boxShadow: '8px 8px 8px 0px #0000001A' }}
                >
                    <div className='flex gap-4 items-center mb-6' >
                        <Image src={logo} alt="Logo" width={70} height={70} /> <span className='text-lg'>ATULYE KRISHI <br /> VANA</span>
                    </div>
                    <form>
                        <div className='flex flex-wrap gap-4 mb-4'>
                            <input type="text" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Name: ' />
                            <input type="email" className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]' placeholder='Email:' />
                            <textarea className='outline-none px-4 font-normal p-3 poppins rounded-xl w-full bg-[#F6F6F8] ' placeholder='Message:' />
                        </div>

                        <button className='poppins  font-normal text-white w-full py-3 rounded-[10px] bg-[#1B453C]'>Submit</button>
                    </form>

                </div>
            </div>
        </section>
    )
}


export const Map = () => {
    const text = "Whether you have questions, want to collaborate, or simply want to learn more, we’re here to help!"
    return (
        <div className="map-container pt-10" style={{ width: "100%", height: "400px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d451809.56206117827!2d76.47815205329582!3d22.977888826397418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cfbd886ae59c5%3A0x4d22e26986c50cc!2sJhalki%2C%20Madhya%20Pradesh%20466115!5e1!3m2!1sen!2sin!4v1736770450916!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
    )
}


