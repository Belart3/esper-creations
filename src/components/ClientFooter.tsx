import { Inter } from 'next/font/google';
import Link from 'next/link';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const ClientFooter = () => {
  return (
    <div className="rounded-[16px] bg-black px-5 mb-5 py-10 flex flex-col items-center justify-center gap-6 bg-contain md:bg-cover bg-[50%_130%] md:bg-[50%_0%] bg-no-repeat"  style={{backgroundImage: 'url(/images/transparent-esper-text.png)'}}>
        <h2 className={`${inter.className} text-[32px]/[32px] tracking-[-1.92px] font-semibold text-white capitalize text-center`}>
        Let’s build together!
        </h2>
        <Link href="/#contact-us" className='w-fit mx-auto'>
          <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] custom-shadow-orange w-full md:w-fit cursor-pointer`}>
            sure, why not!
          </button>
        </Link>
        <div className="h-px w-full bg-[#333]"></div>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-10 w-full max-w-[1440px] mx-auto'>
          <a href="mailto:changes@espercreations.com" className='w-fit mx-auto lg:mx-0'>
            <button className={`${inter.className} text-[#FF5600] text-[16px]/[16px] text-center tracking-[-0.64px] font-semibold my-5 capitalize cursor-pointer rounded-[32px] bg-white py-5 px-6 lg:px-10 max-w-[300px] mx-auto lg:mx-0`}>
              I want to send an email!
            </button>
          </a>
          <Link href={'/terms-and-conditions'} className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center hover:text-white transition-colors duration-300`}>
            terms and conditions
          </Link>
          <Link href={'/privacy-policy'} className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center hover:text-white transition-colors duration-300`}>
            privacy policy
          </Link>
          <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center`}>
            © 2025 Esper Creations All rights reserved
          </p>
        </div>
    </div>
  )
}

export default ClientFooter