"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import {Inter} from 'next/font/google'
import { Spiral as Hamburger } from 'hamburger-react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const pages = [
    { name: "Services", link: "/#services" },
    { name: "Our Work", link: "/#work" },
    { name: "Pricing", link: "/#pricing" },
    { name: "FAQs", link: "/#faq" },
    { name: "Contact Us", link: "/#contact-us" },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
    }
  return (
    <nav className='p-1 md:p-[10px] rounded-[40px] flex justify-between items-center bg-white w-[calc(100%-40px)] md:w-[calc(100%-48px)] max-w-[1104px] mx-auto absolute top-5 left-1/2 transform -translate-x-1/2 z-50'>
        <Link href="/">
            <div className="flex gap-1 items-center">
                <img src="/images/logo.png" alt="esper creation's logo" className="size-10" />
                <p className={`${inter.className} text-[16px]/[16px] md:text-[20px]/[20px] text-black font-semibold tracking-[-0.8px]`}>
                Esper Creations
                </p>
            </div>
        </Link>
        <div className="flex justify-between items-center">
            <div className="gap-[20px] items-center hidden lg:flex">
                {
                    pages.map((page, index) => (
                        <Link href={page.link} key={index}>
                            <p className={`${inter.className} text-[14px]/[14px] tracking-[-0.56px] capitalize text-[#666666] font-medium`}>
                                {page.name}
                            </p>
                        </Link>
                    )
                    )
                }
            </div>
        </div>
        <button className={`${inter.className} rounded-[32px] bg-[#FFEEE6] py-5 px-6 capitalize text-[#FF5600] font-semibold text-[16px]/[16px] tracking-[-0.64px] hidden lg:flex`}>
            transform my online presence
        </button>
        <button className="size-14 rounded-full bg-[#FF5600] flex items-center justify-center shadow-lg shadow-[#FF560060] lg:hidden z-[51]" onClick={handleToggle}>
            <Hamburger
                color="#fff"
                label="Show menu"
                distance="sm"
                toggled={open} toggle={setOpen}
            />
        </button>
    </nav>
  )
}

export default Navbar