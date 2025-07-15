
import React from 'react'
import { MdPrivacyTip } from 'react-icons/md';
import { FaRegAddressBook } from 'react-icons/fa6';
import { BiLinkExternal } from 'react-icons/bi';
import { FiMail, FiPhone } from 'react-icons/fi';

export const PrivacyPolicy = () => {
  return (
    <>
    <section className="bg-white text-[#1F1E17] py-16 px-4 md:px-8 lg:px-24 content_page">
                <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2 ">
                    <div className="flex items-center gap-3 mb-6 justify-center">
                        <h1 className="text-3xl font-semibold redhat">Privacy Policy</h1>
                    </div>
                    <p className="text-sm text-gray-500 mb-8">Last Updated: 15-07-2025</p>

                    <p className="mb-6">
                        At <strong>Atulye Krishi Vana (AKV)</strong>, your privacy is important to us. This policy explains how we
                        collect, use, and protect your information when you visit our website.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
                    <ul className="list-disc ml-6 mb-6 space-y-1 text-base">
                        <li>Personal details (name, email, phone) when you contact us or submit a form</li>
                        <li>Browsing data such as IP address, browser type, and pages visited</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">How We Use Your Data</h2>
                    <ul className="list-disc ml-6 mb-6 space-y-1 text-base">
                        <li>To respond to inquiries or project collaborations</li>
                        <li>To improve our website and services</li>
                        <li>To send occasional updates (only if you opt-in)</li>
                    </ul>

                    <h2 className="text-xl font-semibold mb-2">Cookies</h2>
                    <p className="mb-6">
                        We use cookies to enhance your browsing experience. You can disable cookies in your browser settings if
                        preferred.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Data Security</h2>
                    <p className="mb-6">
                        We follow standard practices to keep your data secure. However, no system is 100% foolproof.
                    </p>

                    <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        Third-Party Links
                    </h2>
                    <p className="mb-6">
                        Our site may link to external pages. We are not responsible for their privacy practices.
                    </p>

                    <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
                    <p className="mb-6">
                        You can request access, correction, or deletion of your data by emailing us at <strong>info@akv.org.in</strong>.
                    </p>

                    <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        Contact Us
                    </h2>
                    <p className="mb-4">For any concerns or questions, write to us at:</p>
                    <div className="ml-4 space-y-1 text-base">
                        <p className="font-semibold mb-2">Atulye Krishi Vana</p>
                        <p className="flex items-center gap-3">
                            <FiMail className="text-[#2A5D55]" /> info@akv.org.in
                        </p>
                        <p className="flex items-center gap-2">
                            <FiPhone className="text-[#2A5D55]" /> +91 9220152225
                        </p>
                    </div>
                </div>
            </section>

    </>
  )
}
