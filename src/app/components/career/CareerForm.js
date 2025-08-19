'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export const CareerForm = () => {
  const [resume, setResume] = useState(null);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // states for jobs
  const [jobs, setJobs] = useState([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [errorJobs, setErrorJobs] = useState(null);

  // fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoadingJobs(true);
        const res = await fetch("https://www.akv.org.in/api/jobs");
        const data = await res.json();
        if (data.success) {
          setJobs(data.data);
        } else {
          setErrorJobs("Failed to fetch jobs list");
        }
      } catch (err) {
        setErrorJobs("Error: " + err.message);
      } finally {
        setLoadingJobs(false);
      }
    };
    fetchJobs();
  }, []);

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  // clear success msg after 3s
  useEffect(() => {
    if (successMsg) {
      const timer = setTimeout(() => setSuccessMsg(''), 3000);
      return () => clearTimeout(timer);
    }
  }, [successMsg]);

  const careerfrm = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("reCAPTCHA not ready. Please try again.");
      return;
    }
    const token = await executeRecaptcha("careerFormSubmit");

    setSending(true);

    const form = e.target;
    const firstname = form.firstname.value.trim();
    const lastname = form.lastname.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;
    const cover_letter = form.cover_letter.value.trim();
    const applied_for = form.applied_for.value;

    // validation
    if (!firstname) {
      alert("Please enter your first name.");
      setSending(false);
      return;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      setSending(false);
      return;
    }
    if (!phone || !/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      setSending(false);
      return;
    }
    if (!resume) {
      alert("Please upload your resume.");
      setSending(false);
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
    } finally {
      setSending(false);
    }
  };

  return (
    <div className='bg-[#FAFAFA] py-10' id='career_form'>
      <h2 className='text-3xl text-center md:leading-[1.3] md:text-4xl lg:text-[40px] font-semibold redhat text-[#1B453C] mb-4'>
        Application Form
      </h2>
      <p className='text-black text-center border-b border-gray-500 pb-6 mb-6 md:pb-10 md:text-[17px]'>
        Please fill out the form below for job application
        <br />
        or mail us at <Link href="mailto:hrteam@mkac.in" className='text-[#1B453C]'>hrteam@mkac.in</Link>
      </p>

      <form className="max-w-4xl mx-auto p-6 space-y-6" onSubmit={careerfrm}>
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label className="block mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text" name="firstname"
              placeholder="First Name"
              className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 invisible">Last Name</label>
            <input
              type="text" name="lastname"
              placeholder="Last Name"
              className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label className="block mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email" name="email"
              placeholder="Eg: myname@example.com"
              className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">
              Phone No. <span className="text-red-500">*</span>
            </label>
            <input
              type="tel" name="phone"
              placeholder="+91 0000000000"
              className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
              pattern="[0-9]{10}"
              maxLength={10}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
              }}
              required
            />
          </div>
        </div>

        {/* Applied For and Start Date */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div>
            <label className="block mb-1">Applied For</label>
            {loadingJobs ? (
              <p>Loading jobs...</p>
            ) : errorJobs ? (
              <p className="text-red-500">{errorJobs}</p>
            ) : (
              <select
                name="applied_for"
                className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
              >
                {jobs.map((job) => (
                  <option key={job.id} value={job.profile}>
                    {job.profile}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div>
            <label className="block mb-1">Start Date</label>
            <input
              type="date" name="date"
              className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block mb-1">Cover Letter</label>
          <textarea
            name="cover_letter"
            rows="4"
            placeholder="Do not exceed 200 words"
            className="w-full border border-[#A8A8A8] bg-transparent px-3 py-2 rounded"
          ></textarea>
          <p className="text-xs text-gray-500 mt-1">Do not exceed 200 words</p>
        </div>

        {/* Upload Resume */}
        <div>
          <label className="block mb-1">
            Upload Resume <span className="text-red-500">*</span>
          </label>
          <label className="block w-full border-2 border-dashed border-[#A8A8A8] bg-gray-100 rounded-md p-6 text-center cursor-pointer">
            <input
              type="file"
              name="resume"
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

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#3b4b4a] hover:bg-[#2e3c3b] text-white text-[18px] font-medium px-16 py-3 rounded-sm"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Apply'}
          </button>
        </div>

        {successMsg && (
          <div className="mb-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow text-sm transition-all duration-300">
            <strong className="font-semibold">Success!</strong> {successMsg}
          </div>
        )}
      </form>
    </div>
  );
};