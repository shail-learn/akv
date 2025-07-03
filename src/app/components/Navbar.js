"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { FaBars } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo-akv.webp";
import { GoogleTranslate } from "./GoogleTranslate";
import { FaGlobe } from "react-icons/fa";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About Us",
    href: "#",
    submenu: [
      { name: "About Atulye Krishi Vana", href: "/about-us" },
      { name: "About A&M Agriventure", href: "/a-m-agriventures" },
      { name: "Our Team", href: "/our-team" },

    ],
  },
  {
    name: "Our Business",
    href: "/our-business",
    submenu: [
      { name: "Agroforestry", href: "/agroForestry" },
      { name: "Agro-Tourism", href: "/agro-tourism" },
      { name: "Contract Farming", href: "/contract-farming" },
      // { name: "Contract Farming Fodder", href: "/contract-farming-fodder" },
      { name: "Training & Development", href: "/training-development" },
      { name: "MIDH Nursery", href: "/midh-nursery" },
    ],
  },
  { name: "Eco Initiatives", href: "/eco-initiatives" },
  {
    name: "Insights",
    href: "#",
    submenu: [
      // { name: "CSR Activity", href: "/csr-activity" },
      { name: "Our Projects", href: "/our-projects" },
      { name: "Events", href: "/events" },
      { name: "Blogs", href: "/blogs" },

    ],
  },
  {
    name: "Media",
    href: "#",
    submenu: [
      { name: "Gallery", href: "/gallery" },
      { name: "PR Activity", href: "/pr-activity" },
    ],
  },

  { name: "Career", href: "/career" },

  { name: "Contact Us", href: "/contact-us" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const pathname = usePathname(); // Detect current route

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMouseEnter = (index) => {
    if (hoverTimeout) clearTimeout(hoverTimeout);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    setHoverTimeout(setTimeout(() => setOpenDropdown(null), 300)); // Delay closing
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <Disclosure as="nav">
          <div className="mx-auto max-w-7xl px-4 md:px-4 lg:px-2">
            <div className="flex items-center justify-between py-0">
              {/* Logo */}
              <div className="flex items-center">
                <Link href="/" className="p-2">
                  <Image src={Logo} alt="Logo" width={100} height={100} className="h-20 md:h-[100px] w-auto object-contain" />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-2">
                {navigation.map((item, index) => {
                  const isActive =
                    pathname === item.href ||
                    (item.submenu &&
                      item.submenu.some((sub) => pathname === sub.href));

                  return (
                    <div
                      key={index}
                      className="relative group"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center px-3 py-2 text-base font-normal transition-colors duration-200 ${isActive
                            ? "text-[#469E8E]"
                            : "text-[#A8A8A8] hover:text-[#469E8E]"
                          }`}
                      >
                        {item.name}
                        {item.submenu && <MdKeyboardArrowDown className="ml-1" />}
                      </Link>
                      {/* Dropdown Menu */}
                      {item.submenu && openDropdown === index && (
                        <div
                          className="absolute left-0 mt-2 w-48 bg-white shadow-lg"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          {item.submenu.map((subItem, subIndex) => {
                            const isSubActive = pathname === subItem.href;
                            return (
                              <Link
                                key={subIndex}
                                href={subItem.href}
                                className={`block px-4 py-2 text-sm ${isSubActive
                                    ? "text-[#469E8E]  hover:bg-teal-50"
                                    : "text-gray-600 hover:bg-teal-50"
                                  }`}
                              >
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* ✅ Language Selector for Desktop */}
                <GoogleTranslate showHiddenDiv={true} />
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-600 focus:outline-none"
              >
                {menuOpen ? <IoCloseSharp size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Sidebar Menu */}
          <div
            className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out md:hidden`}
          >
          <ul className="mt-12 px-4 space-y-4">
          {navigation.map((item, index) => {
            const isActive =
              pathname === item.href ||
              (item.submenu && item.submenu.some((sub) => pathname === sub.href));

            return (
              <li key={index}>
                <div
                  onClick={() =>
                    item.submenu
                      ? setOpenDropdown(openDropdown === index ? null : index)
                      : setMenuOpen(false) // close on non-submenu item click
                  }
                  className={`flex justify-between items-center cursor-pointer ${
                    isActive ? "text-[#469E8E]" : "text-gray-600"
                  }`}
                >
                  <Link href={item.href} onClick={() => setMenuOpen(false)}>
                    {item.name}
                  </Link>
                  {item.submenu && <MdKeyboardArrowDown />}
                </div>

                {item.submenu && openDropdown === index && (
                  <ul className="ml-2 mt-2 space-y-2">
                    {item.submenu.map((subItem, subIndex) => {
                      const isSubActive = pathname === subItem.href;
                      return (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block py-1 ${
                              isSubActive ? "text-[#469E8E]" : "text-gray-500"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
          <div className="flex items-center space-x-1 text-[#A8A8A8] pl-3">
          <GoogleTranslate showHiddenDiv={false} />
  </div>
        </ul>
          </div>
        </Disclosure>
      </header>
    </>
  );
}

export default Navbar;
