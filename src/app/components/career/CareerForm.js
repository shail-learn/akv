'use client';
import React from 'react'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
// import { useState } from 'react';

export const CareerForm = () => {
    const [resume, setResume] = useState(null);

    const { executeRecaptcha } = useGoogleReCaptcha();





    const [sending, setsending] = useState(false);
    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    const [successMsg, setSuccessMsg] = useState('');
    useEffect(() => {
        if (successMsg) {
            const timer = setTimeout(() => setSuccessMsg(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [successMsg]);

    const careerfrm = async (e) => {
        e.preventDefault();

        if (!executeRecaptcha) {
            console.log('recaptcha missing');
            alert("reCAPTCHA not ready. Please try again in a moment.");
            return;
        }

        const token = await executeRecaptcha("careerFormSubmit");

        setsending(true);

        const form = e.target;
        const firstname = form.firstname.value.trim();
        const lastname = form.lastname.value.trim();
        const email = form.email.value.trim();
        const phone = form.phone.value.trim();
        const date = form.date.value;
        const cover_letter = form.cover_letter.value.trim();
        const applied_for = form.querySelector("select").value;

        // // Basic validation
        // if (!firstname) return alert("Please enter your first name.");
        // if (!email || !/\S+@\S+\.\S+/.test(email)) return alert("Please enter a valid email.");
        // if (!phone || !/^[0-9]{10}$/.test(phone)) return alert("Please enter a valid 10-digit phone number.");
        // if (!resume) return alert("Please upload your resume.");


        //basic validation**********
        if (!firstname) {
            alert("Please enter your first name.");
            setLoading(false);
            return;
        }

        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email.");
            setLoading(false);
            return;
        }

        if (!phone || !/^[0-9]{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            setLoading(false);
            return;
        }

        if (!resume) {
            alert("Please upload your resume.");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append("firstname", firstname);
        formData.append("lastname", lastname);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("date", date);
        formData.append("cover_letter", cover_letter);
        formData.append("applied_for", applied_for);
        formData.append("resume", resume);
        formData.append("recaptchaToken", token);

        try {
            const res = await fetch("/data/career", {
                method: "POST",
                body: formData,
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setSuccessMsg(data.message || "Resume sent successfully!");
                form.reset();
                setResume(null);
            } else {
                alert(data.error || "Something went wrong. Try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Unexpected error occurred. Please try again later.");
        } finally { setsending(false); }
    };

    return (
        <>

            <div className='bg-[#FAFAFA] py-10' id='career_form'>
                <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] mb-4'>Application Form </h2>
                <p className='text-black text-center border-b border-gray-500 pb-6 mb-6 md:pb-10 md:text-[17px]'>Please fill out the form below for job application
                    <br />
                    or mail us at <Link href="mailto:hrteam@mkac.in" className='text-[#1B453C]'>hrteam@mkac.in</Link>
                </p>

                <form className="max-w-4xl mx-auto p-6 space-y-6 " onSubmit={careerfrm}>
                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text" name='firstname'
                                placeholder="First Name"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                                required
                            />
                        </div>
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1 invisible">Last Name</label>
                            <input name='lastname'
                                type="text"
                                placeholder="Last Name"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                            />
                        </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input name='email'
                                type="email"
                                placeholder="Eg: myname@example.com"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                                required
                            />
                        </div>
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">
                                Phone No. <span className="text-red-500">*</span>
                            </label>
                            <input name='phone'
                                type="tel"
                                placeholder="+91 0000000000"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                                pattern="[0-9]{10}"
                                maxLength={10}
                                onInput={(e) => {
                                    e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
                                }} required
                            />
                        </div>
                    </div>

                    {/* Applied For and Start Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">Applied For</label>
                            <select className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded">
                                <option value={'Agronomist - Plant Health & Nutrition'}>Agronomist - Plant Health & Nutrition</option>
                                <option value={'Plant Irrigation Specialist'}>Plant Irrigation Specialist</option>

                            </select>
                        </div>
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">Start Date</label>
                            <input
                                type="date" name='date'
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                            />
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div className='mb-2 md:mb-4'>
                        <label className="block mb-1">Cover Letter</label>
                        <textarea name='cover_letter'
                            rows="4"
                            placeholder="Do not exceed 200 words"
                            className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                        ></textarea>
                        <p className="text-xs text-gray-500 mt-1">Do not exceed 200 words</p>
                    </div>

                    {/* Upload Resume */}
                    <div className='mb-2 md:mb-4'>
                        <label className="block   mb-1">
                            Upload Resume <span className="text-red-500">*</span>
                        </label>
                        <label className=" block w-full border-2 border-dashed border-[#A8A8A8] bg-transparent  bg-gray-100 rounded-md p-6 text-center cursor-pointer">
                            <input
                                type="file"
                                name='resume'
                                onChange={handleResumeChange}
                                className="hidden"
                                required
                            />
                            <div className="text-gray-600">
                                <p className="font-semibold">Upload a file</p>
                                <p className="text-sm">Drag & drop files here</p>
                            </div>
                        </label>
                        {resume && <p className="text-sm mt-2">Selected: {resume.name}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-[#3b4b4a] hover:bg-[#2e3c3b] text-white text-[18px] font-medium px-16 py-3 rounded-sm"
                            disabled={sending}
                        >
                            {sending ? 'Sending...' : 'Apply'}
                        </button>
                    </div>
                    <br />
                    <br />
                    {successMsg && (
                        <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow text-sm transition-all duration-300">
                            <strong className="font-semibold">Success!</strong> {successMsg}
                        </div>
                    )}
                </form>
            </div>

        </>
    )
}
