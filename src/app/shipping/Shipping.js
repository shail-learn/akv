import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { FiMail, FiPhone } from 'react-icons/fi';

export const Shipping = () => {
  return (
    <>
     <section className="bg-white text-[#1F1E17] py-16 px-4 md:px-8 lg:px-24 content_page">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
        <div className="flex items-center gap-3 mb-6 justify-center">

          <h1 className="text-3xl font-semibold redhat ">Shipping Policy for Atulye Krishi Vana</h1>
        </div>

        <p className="mb-6">
          At <strong>Atulye Krishi Vana (AKV)</strong>, all donations made through our website are directed solely
          towards our agroforestry and environmental development programs. We do not ship any physical products in
          exchange for donations unless explicitly mentioned as part of a specific campaign.
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg">No Physical Deliveries</h2>
            <p>
              As a general policy, donations do not involve any physical shipping. Instead, you will receive a digital
              acknowledgment via email once your donation is successfully processed.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Campaign-Specific Exceptions</h2>
            <p>
              In rare cases where a donation campaign includes merchandise, gifts, or materials, the delivery
              information—including cost, method, and estimated delivery time—will be clearly mentioned on that
              campaign’s page.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">Need Assistance?</h2>
            <p className="mb-2">For any queries related to shipping or delivery, please contact us:</p>
            <div className="ml-4 space-y-1">
              <p className="flex items-center gap-2">
                <FiMail className="text-[#2A5D55]" /> info@akv.org.in
              </p>
              <p className="flex items-center gap-2">
                <FiPhone className="text-[#2A5D55]" /> +91-9220152225
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}
