import React from 'react'
import { FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { FiMail, FiPhone } from 'react-icons/fi';
import { MdGavel } from 'react-icons/md';


function page() {
  return (
    <>

    <section className="bg-white text-[#1F1E17] py-16 px-4 md:px-8 lg:px-24 content_page">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-2">
        <div className="flex items-center gap-3 mb-6 justify-center">

          <h1 className="text-3xl font-semibold redhat">Terms & Conditions</h1>
        </div>

        <p className="mb-6">
          Welcome to the website of <strong>Atulye Krishi Vana (AKV)</strong>. By accessing or using our site (
          <a
            href="https://www.akv.org.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2A5D55] underline inline-flex items-center gap-1"
          >
            www.akv.org.in
          </a>
          ), you agree to comply with and be bound by the following terms and conditions.
        </p>

        <div className="space-y-6 text-base leading-relaxed">
          <div>
            <h2 className="font-semibold text-lg">1. Use of the Website</h2>
            <p>
              This website is operated by AKV to provide information and accept donations for environmental and
              agroforestry initiatives. You agree to use this site lawfully.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">2. Donations</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>All donations are voluntary and non-refundable unless stated in our Refund Policy.</li>
              <li>
                AKV may use donations for current or future programs aligned with its mission and vision.
              </li>
              <li>Donations do not grant any service, ownership, or material benefit unless explicitly stated.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-lg">3. Acknowledgment of Donations</h2>
            <p>
              A confirmation email and receipt will be sent after a successful transaction to the email provided.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">4. Tax Exemption</h2>
            <p>
              If AKV is registered under tax-exemption provisions like 80G, the details will be mentioned. Receipts are
              issued only when valid donor information is provided.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">5. Privacy</h2>
            <p>
              All donor data is protected as per our <a href="/privacy-policy" className="underline text-[#2A5D55]">Privacy Policy</a>. We never sell, rent, or share data without consent.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">6. Content Ownership</h2>
            <p>
              All content (text, images, videos, logos) belongs to AKV. Reuse or reproduction requires written
              permission.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">7. External Links</h2>
            <p>
              We may link to third-party sites. AKV is not responsible for their content or practices.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">8. Limitation of Liability</h2>
            <p>
              AKV is not liable for any damages resulting from the use or inability to use our website or linked
              platforms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">9. Changes to Terms</h2>
            <p>
              We reserve the right to update these terms at any time. Continued use of the site indicates acceptance of
              revised terms.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg flex items-center gap-2">10. Contact Us</h2>
            <p className="ml-2">For any queries related to these terms, you can reach us at:</p>
            <div className="ml-4 mt-2 space-y-1">
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

export default page