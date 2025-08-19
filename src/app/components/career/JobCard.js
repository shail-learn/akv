"use client"
import { useState, useEffect } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Link from "next/link";

export default function JobCard() {
  const [jobsData, setJobsData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  useEffect(() => {
    fetch('https://www.akv.org.in/api/jobs') // 🔥 replace with your API URL
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          const transformed = data.data.map(job => ({
            ...job,
            responsibilities: job.requirements
              ? job.requirements
                  .replace(/<\/?ul>/g, '')
                  .split(/<\/li>\s*<li>/)
                  .map(item => item.replace(/<\/?li>/g, '').trim())
              : []
          }));
          setJobsData(transformed);
        }
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="w-full mx-auto space-y-6">
      {jobsData.map((job, index) => (
        <div key={job.id} className="border-b pb-6 mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h2 className="text-[22px] md:text-[24px] text-[#1B453C] font-bold redhat mb-2">
              Profile: {job.profile}
            </h2>
            {activeIndex === index ? (
              <FiChevronUp size={24} />
            ) : (
              <FiChevronDown size={24} />
            )}
          </div>

          <div className="text-base md:text-[17px] mt-2 redhat">
            <p className="mb-1"><strong>Positions:</strong> {job.positions}</p>
            <p className="mb-1"><strong>Experience:</strong> {job.experience}</p>
            <p className="mb-1"><strong>Location:</strong> {job.location}</p>
            <p className="mb-1"><strong>Eligibility Criteria (Educational):</strong> {job.eligibility}</p>
          </div>

          {activeIndex === index && (job.summary || job.responsibilities.length > 0) && (
            <>
              {job.summary && (
                <div className="mt-4 space-y-4">
                  <h3 className="font-bold text-lg redhat">Summary:</h3>
                  <p className="redhat">{job.summary}</p>
                </div>
              )}

              {job.responsibilities.length > 0 && (
                <div className="mt-4 space-y-4">
                  <h3 className="font-bold text-lg redhat">Requirements:</h3>
                  <ul className="list-disc ml-6 space-y-1 text-base md:text-[17px] redhat">
                    {job.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="my-6 mt-10">
                <Link
                  href="#career_form"
                  className="poppins mx-auto text-center border border-[#344C31] font-medium text-white w-[200px] py-3 rounded-[4px] bg-[#344C31] inline-block transition-all duration-500 hover:border hover:bg-white hover:text-[#344C31]"
                >
                  Apply Now
                </Link>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}