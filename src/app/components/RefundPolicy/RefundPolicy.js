import React from 'react'
import { MdReplayCircleFilled } from 'react-icons/md';
import { FiMail, FiPhone } from 'react-icons/fi';

export const RefundPolicy = () => {
  return (
    <>
    <section className="bg-white text-[#1F1E17] py-16 px-4 md:px-8 lg:px-24 content_page">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
                    <div className="flex items-center gap-3 mb-6 justify-center">

                        <h1 className="text-3xl font-semibold redhat">Cancellation & Refund Policy</h1>
                    </div>

                    <p className="mb-6">
                        At <strong>Atulye Krishi Vana (AKV)</strong>, we sincerely appreciate your support. Your donations directly
                        contribute to our mission of promoting sustainable agroforestry and eco-development.
                    </p>

                    <div className="space-y-6 text-base leading-relaxed">
                        <div>
                            <h2 className="font-semibold text-lg">Donation Cancellation Policy</h2>
                            <p>
                                Once a donation is successfully made through Razorpay, it generally cannot be cancelled. However, if the
                                donation was made by mistake or without authorization, please contact us as soon as possible at:
                            </p>
                            <div className="ml-4 mt-2 space-y-1">
                                <p className="flex items-center gap-2">
                                    <FiMail className="text-[#2A5D55]" /> support@akv.org.in
                                </p>
                                <p className="flex items-center gap-2">
                                    <FiPhone className="text-[#2A5D55]" /> +91-9220152225
                                </p>
                            </div>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">Refund Policy</h2>
                            <p>Refunds may be considered under the following exceptional circumstances:</p>
                            <ul className="list-disc ml-6 mt-2 space-y-1">
                                <li>Duplicate transactions due to a technical error</li>
                                <li>Incorrect donation amount entered</li>
                                <li>Unauthorized or fraudulent transaction</li>
                            </ul>
                            <p className="mt-2">
                                To request a refund, email us at <strong>support@akv.org.in</strong> within <strong>7 days</strong> of the
                                transaction. Please include your transaction ID, date of donation, and contact details.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">Refund Processing Timeline</h2>
                            <p>
                                If approved, refunds will be processed within <strong>7 to 10 business days</strong> using the original
                                payment method used during the donation.
                            </p>
                        </div>

                        <div>
                            <h2 className="font-semibold text-lg">Need Assistance?</h2>
                            <p>For any queries related to cancellations or refunds, please reach out to:</p>
                            <div className="ml-4 mt-2 space-y-1">
                                <p className="font-semibold">Atulye Krishi Vana (AKV)</p>
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
