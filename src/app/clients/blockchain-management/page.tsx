import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';
import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <header className='pt-[148px] flex flex-col gap-6 mx-5 md:mx-6 lg:max-w-[1104px] lg:mx-auto mb-12'>
        <ClientHeader 
          client='BlockChain Management'
          url='https://bcmanagement.us/' 
          projectScope='Web Design & Dev, Social Media Marketing' 
          year='2025' 
          projectDetails='BC Management is a blockchain-focused service provider specializing in crypto tax calculations, DeFi transaction reporting, and portfolio tracking. The company helps traders, investors, and businesses simplify their crypto finances by offering clear, audit-ready reports and personalized support. With deep expertise across major chains and platforms, BC Management ensures accuracy, compliance, and peace of mind in an ever-evolving crypto landscape.' 
        />
      </header>  
      <main className='flex flex-col gap-12 md:gap-16 mx-5 md:mx-6 lg:mx-14'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-gradient-bcm flex items-center justify-center">
            <img src="/Images/jmg-handyman-page/jmg-logo.webp" alt="" className='w-[122px] md:w-[400px]' />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-1.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-2.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-3.png)` }}></div>
          <div className="!bg-contain bg-gradient-bcm !bg-center !bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-long.webp) , linear-gradient(0deg, rgba(255, 120, 51, 0.7), rgba(255, 120, 51, 0.7))` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page