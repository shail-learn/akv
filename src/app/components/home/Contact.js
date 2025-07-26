import React from 'react'
import logo from "../../../assets/images/logo-akv.webp";
import bgimg from "../../../assets/images/home/contact-bg.webp";
import {useState,useEffect} from 'react';

import Image from 'next/image';

export const Contact = () => {
    const text = "Whether you have questions, want to collaborate, or simply want to learn more, we’re here to help!";
    const [sending, setSending] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    useEffect(() => {
        if (successMsg) {
            const timer = setTimeout(() => setSuccessMsg(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMsg]);

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = formData;

        // Basic validation
        if (!name.trim()) return alert("Please enter your name.");
        if (!email || !/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email.");
        if (!message.trim()) return alert("Please enter a message.");

        setSending(true);

        try {
            const res = await fetch("/data/home", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccessMsg(data.message || "Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(data.error || "Something went wrong. Try again.");
            }
        } catch (err) {
            console.error("Form error:", err);
            alert("Unexpected error occurred. Please try again.");
        } finally {
            setSending(false);
        }
    };

    return (
        <section className='mx-auto max-w-7xl px-4 pt-0 md:px-8 lg:px-2 lg:pt-4 py-16'>
            <h2 className='text-black redhat text-center mb-0 leading-relaxed text-3xl md:text-4xl lg:text-[40px] font-semibold md:mb-8'>Get in Touch</h2>

            <div className='gap-10 grid grid-cols-1 lg:grid-cols-12 items-center justify-center'>
                <div className='col-span-1'></div>

                <div className='w-full relative p-6 py-16 md:h-full border-[1px] poppins text-xl text-justify border-[#A1A1A1] md:p-6 rounded-3xl lg:p-10 col-span-5 h-full grid items-center justify-center'
                    style={{ backgroundImage: `url(${bgimg.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className='absolute top-0 left-0 rounded-3xl w-full bg-black/30 h-full'></div>
                    <h3 className='relative z-10 text-white '>"{text}"</h3>
                </div>

                <div className='w-full col-span-5 p-6 rounded-3xl h-full grid'
                    style={{ boxShadow: '8px 8px 8px 0px #0000001A' }}
                >
                    <div className='flex gap-4 items-center justify-center mb-6'>
                        <Image src={logo} alt="Logo" width={70} height={70} />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-wrap gap-4 mb-4'>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]'
                                placeholder='Name:'
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className='outline-none font-normal px-4 p-3 poppins rounded-xl w-full bg-[#F6F6F8]'
                                placeholder='Email:'
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className='outline-none px-4 font-normal p-3 poppins rounded-xl w-full bg-[#F6F6F8]'
                                placeholder='Message:'
                                rows="4"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={sending}
                            className={`poppins text-[17px] font-medium text-white w-full py-3 rounded-[10px] bg-[#1B453C] ${sending ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {sending ? "Sending..." : "Submit"}
                        </button>

                        {successMsg && (
                            <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow text-sm transition-all duration-300">
                                <strong className="font-semibold">Success!</strong> {successMsg}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};


export const Map = () => {
    const text = "Whether you have questions, want to collaborate, or simply want to learn more, we’re here to help!"
    return (
        <div className="map-container pt-2 md:pt-10" style={{ width: "100%", height: "400px" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3529.312464908885!2d77.1826692!3d22.9950995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cf92475629591%3A0xa1c838400aff4884!2sAtulye%20Krishi%20Vana!5e1!3m2!1sen!2sin!4v1744010227346!5m2!1sen!2sin"
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



