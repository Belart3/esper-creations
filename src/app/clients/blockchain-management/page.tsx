import BtnTransparent from '@/components/BtnTransparent'
import SectionTitle from '@/components/SectionTitle'
import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <header className='pt-[148px] flex flex-col gap-6 mx-5 md:mx-6 lg:max-w-[1000px] lg:mx-auto mb-12'>
        <div className="flex flex-col md:flex-row md:justify-between gap-6 items-start">
          <SectionTitle title="BlockChain Management" />
          <a href="https://bcmanagement.us/" target='_blank'>
            <BtnTransparent cta="view live site" />
          </a>
        </div>
        <div className="flex flex-col lg:flex-row-reverse w-full lg:justify-between gap-6">
          <div className="flex flex-row w-full justify-between items-start md:w-[75%] lg:w-fit  lg:justify-between gap-16">
            <div className="flex flex-col gap-2 items-start lg:w-fit">
              <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
                Project Scope
              </p>
              <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
                Web Design & Dev, Social Media Marketing
              </p>
            </div>
            <div className="flex flex-col gap-2 items-start lg:w-fit">
              <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
                Year
              </p>
              <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
                2025
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2 lg:max-w-[400px]">
            <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
              About
            </p>
            <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
              Massa laoreet nibh ligula sit phasellus leo et viverra fusce. Eget donec viverra ultrices non ut eu phasellus. Nam elit sed urna dui pellentesque aliquam sagittis ut. Nec enim dictum est laoreet tristique purus nulla egestas pulvinar. 
            </p>
          </div>
        </div>
      </header>  
      <main className='flex flex-col gap-12 md:gap-16 mx-5 md:mx-6 lg:max-w-[1000px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-black flex items-center justify-center">
            <img src="/Images/jmg-handyman-page/jmg-logo.webp" alt="" className='w-[122px] md:w-[400px]' />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[450px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-1.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[600px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-2.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[450px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-3.webp)` }}></div>
          <div className="bg-contain bg-[#FF7833] bg-center bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-long.webp)` }}></div>
        </div>
        <div className="rounded-[16px] bg-black px-5 mb-5 py-10 flex flex-col items-center justify-center gap-6">
          <h2 className={`${inter.className} text-[32px]/[32px] tracking-[-1.92px] font-semibold text-white capitalize text-center`}>
            Let’s build together!
          </h2>
          <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] shadow-lg shadow-[#FF560060] w-full md:w-fit`}>
            sure, why not!
          </button>
          <div className="h-px w-full bg-[#333]"></div>
          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-10 w-full max-w-[1440px] mx-auto'>
            <h2 className={`${inter.className} text-[#FF5600] text-[16px]/[16px] text-center tracking-[-0.64px] font-semibold capitalize`}>
                I want to send an email!
            </h2>
            <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center`}>
                © 2025 Esper Creations All rights reserved
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default page