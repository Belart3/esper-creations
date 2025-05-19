import BtnTransparent from '@/components/BtnTransparent'
import ClientFooter from '@/components/ClientFooter';
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
              BC Management is a blockchain-focused service provider specializing in crypto tax calculations, DeFi transaction reporting, and portfolio tracking. The company helps traders, investors, and businesses simplify their crypto finances by offering clear, audit-ready reports and personalized support. With deep expertise across major chains and platforms, BC Management ensures accuracy, compliance, and peace of mind in an ever-evolving crypto landscape. 
            </p>
          </div>
        </div>
      </header>  
      <main className='flex flex-col gap-12 md:gap-16 mx-5 md:mx-6 lg:max-w-[1000px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-gradient-bcm flex items-center justify-center">
            <img src="/Images/jmg-handyman-page/jmg-logo.webp" alt="" className='w-[122px] md:w-[400px]' />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[450px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-1.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[600px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-2.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[450px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-3.png)` }}></div>
          <div className="!bg-contain bg-gradient-bcm !bg-center !bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-long.webp) , linear-gradient(0deg, rgba(255, 120, 51, 0.7), rgba(255, 120, 51, 0.7))` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page