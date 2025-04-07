import React from 'react'
import contactbg from "../../../assets/images/contact/contact-banner.webp";

const ContactPage = () => {
  const banner = contactbg;
  const heading = `Contact Us <br/> Atulye Krishi Vana`
  const subtitle = `Sustaining Ecosystems, Empowering Communities`;

  return (
    <>

      <section
        className={`py-16 lg:h-[550px] flex items-center justify-center relative`}
        style={{ background: `url(${banner?.src}) center center / cover no-repeat` }}
      >

        <div className="relative text-center z-10 flex flex-wrap w-full items-center justify-center">
          <div className="w-11/12 md:w-3/4 lg:w-7/12">
            <h1
              className="text-black text-3xl md:text-4xl lg:leading-tight lg:text-[40px] font-medium w-full"
              dangerouslySetInnerHTML={{ __html: heading }}
            ></h1>

            <p className="w-full text-black text-base md:text-lg mt-5 mb-7 lg:mt-7 lg:mb-10">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section
        className=" relative text-center md:text-left  flex items-center justify-center pt-16 pb-16"

      >
        <div className='mx-auto max-w-7xl px-4 md:px-6 lg:px-2'>
          <div className='lg:w-10/12 mx-auto w-full'>
            <h2 className="text-3xl text-center lg:text-start md:leading-[1.3] md:text-4xl font-medium redhat text-[#1B453C] mb-6">Get In Touch!</h2>
            <div className='grid gap-4 md:flex'>
              <div className='lg:w-6/12 w-full bg-[#F2F2F2] p-8'>

                  <h2 className="text-lg lg:text-start md:leading-[1.3] md:text-xl font-medium text-black mb-3">Send Message</h2>
                  <p className="text-black mb-6 lg:mb-8">
                    We’d love to hear from you! Whether you have inquiries
                    about our sustainable Agroforestry initiatives, partnerships,
                    or investment opportunities, feel free to connect with us.

                  </p>
                  <form className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          placeholder="Your name"
                          className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="Your email"
                          className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                        />
                      </div>
                    </div>

                    <div className="mt-6">
                      <label className="block font-semibold mb-2">Ph. No.</label>
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="w-full bg-transparent border-b border-gray-400 outline-none py-2"
                      />
                    </div>

                    <div className="mt-6">
                      <label className="block font-semibold mb-2">Message</label>
                      <textarea
                        rows={2}
                        placeholder="Your message"
                        className="w-full bg-transparent border-b border-gray-400 outline-none py-2 resize-none"
                      />
                    </div>

                    <div className="mt-8">
                      <button
                        type="submit"
                        className="bg-black font-semibold text-white px-12 py-4 hover:bg-[#1A3232] transition-all duration-300"
                      >
                        Submit
                      </button>
                    </div>
                  </form>

              </div>
              <div className='lg:w-6/12 bg-cover bg-center p-8 lg:p-10 py-16 lg:py-24 w-full'>
                {/* <div className='w-full lg:w-4/6 text-white'>
                  <h2 className="text-3xl text-center lg:text-start md:leading-[1.3] md:text-4xl font-normal redhat mb-6" dangerouslySetInnerHTML={{ __html: heading2 }}></h2>
                  <p className=" mb-10 lg:mb-16" dangerouslySetInnerHTML={{ __html: info2 }}></p>
                  <Link href={pageUrl} className='rounded border border-white py-2 px-10 w-4/5 inline-block text-center text-base hover:bg-[#1b453c] transition-all  duration-500 ' >Read More</Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default ContactPage