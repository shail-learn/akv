import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';
import icon from "../../../assets/images/career/cloud-management.svg";
import Image from 'next/image';


export default function JobCard({ job }) {
  return (
    <div className="bg-white p-6 md:p-14 rounded-sm r  transition-transform duration-300 transform hover:scale-110 " style={{boxShadow:"4px 9px 19px 5px #00000040"}}>
      <div className="text-4xl text-center  mb-4 text-black">
        {/* <FaDesktop className='mx-auto' /> */}
        <Image src={icon} alt='career icon' className='mx-auto' />
      </div>
      <h2 className="text-xl font-semibold mb-2 text-black">{job.title}</h2>
      <p className="text-sm flex text-black items-center mb-6">
        <FaMapMarkerAlt className="mr-1" />
        {job.location}
      </p>
      <p className="text-sm text-black mb-4">{job.description}</p>
      {/* <button className="bg-[#4ca08d] text-white font-semibold px-6 py-2 rounded-full hover:bg-[#3a8c78] transition">
        Apply
      </button> */}
    </div>
  );
}
