'use client';
import { useState } from 'react';

export const CareerForm = () => {
    const [resume, setResume] = useState(null);

    const handleResumeChange = (e) => {
        setResume(e.target.files[0]);
    };

    return (
        <>

            <div className='bg-[#FAFAFA] py-10'>
                <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl font-semibold redhat text-[#1B453C] md:mb-6'>Application Form </h2>
                <p className='text-black text-center border-b border-gray-500 pb-6 mb-6 md:pb-10'>Please fill out the form below for job application </p>
                <form className="max-w-4xl mx-auto p-6 space-y-6 ">
                    {/* Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="First Name"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                                required
                            />
                        </div>
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1 invisible">Last Name</label>
                            <input
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
                            <input
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
                            <input
                                type="tel"
                                placeholder="+91 0000000000"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                                required
                            />
                        </div>
                    </div>

                    {/* Applied For and Start Date */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">Applied For</label>
                            <select className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded">
                                <option>Product Designer</option>
                                <option>Frontend Developer</option>
                                <option>Backend Developer</option>
                            </select>
                        </div>
                        <div className='mb-2 md:mb-4'>
                            <label className="block mb-1">Start Date</label>
                            <input
                                type="date"
                                className="w-full border border-[#A8A8A8] bg-transparent  px-3 py-2 rounded"
                            />
                        </div>
                    </div>

                    {/* Cover Letter */}
                    <div className='mb-2 md:mb-4'>
                        <label className="block mb-1">Cover Letter</label>
                        <textarea
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
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </div>

        </>
    )
}
