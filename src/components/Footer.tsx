import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer className=" bg-[#F4F5FA] border-t-[1px] border-[#E6E6E6]">
        <div className='pt-6 px-5 md:px-6 lg:px-14 pb-10 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-10 max-w-[1440px] mx-auto'>
          <h2 className={`${inter.className} text-[#FF5600] text-[16px]/[16px] text-center tracking-[-0.64px] font-semibold my-5 capitalize`}>
              I want to send an email!
          </h2>
          <p className={`${inter.className} text-[20px]/[20px] md:text-[24px]/[24px] tracking-[-0.8px] md:tracking-[-0.96px] text-black capitalize font-bold text-center`}>
              Esper Creations
          </p>
          <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center`}>
              © 2025 Esper Creations All rights reserved
          </p>
        </div>
    </footer>

  )
}

export default Footer