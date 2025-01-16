import React from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Logo from "../../assets/images/logo-icon.svg";

import Image from 'next/image';
import Link from 'next/link';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Us', href: '/about-us', current: false },
  { name: 'Our Business', href: '/our-business', current: false },
  { name: 'Eco Initiatives', href: '/eco-initiatives', current: false },
  { name: 'Insights', href: '/insights', current: false },
  { name: 'Media', href: '/media', current: false },
  { name: 'Contact Us', href: '/contact-us', current: false },

]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <>
      <header className='sticky top-0 z-[99]'>
        <Disclosure as="nav" className="bg-white pt-2 pb-2">
          <div className="mx-auto max-w-7xl px-2 md:px-6 lg:px-2">
            <div className="relative flex  items-center justify-between">

              <div className="flex md:flex-1  items-center justify-center md:items-center md:justify-between">
                <div className="flex shrink-0 items-center">
                  <Link className='bg-teal-900 p-2 rounded-full' href="/">
                  <Image
                    alt="Your Company"
                    src={Logo}
                    className="h-14 w-14 object-contain"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 md:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? 'page' : undefined}
                        className={classNames(
                          item.current ? ' text-[#469E8E]' : 'text-[#A8A8A8] hover:text-[#469E8E]',
                          'md:px-1 md:text-sm lg:px-3 py-2 lg:text-base font-normal',
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="inset-y-0 left-0 flex items-center md:hidden">

                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  hover:text-white focus:outline-none">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <FaBars aria-hidden="true" className="text-teal-900 block size-6 group-data-[open]:hidden" />
                  <IoCloseSharp aria-hidden="true" className="text-teal-900 hidden size-6 group-data-[open]:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current ? ' text-white' : 'text-gray-300  hover:text-white',
                    'block   px-3 py-2 text-base font-medium',
                  )}
                >

                  {item.name}

                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </Disclosure>
      </header>
    </>
  )
}

export default Navbar