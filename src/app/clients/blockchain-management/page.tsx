import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';
import { Inter } from 'next/font/google';
import React from 'react'
import ExportedImage from "next-image-export-optimizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <ClientHeader 
        client='BlockChain Management'
        url='https://bcmanagement.us/' 
        projectScope='Web Design & Dev, Social Media Marketing' 
        year='2025' 
        projectDetails='BC Management is a blockchain-focused service provider specializing in crypto tax calculations, DeFi transaction reporting, and portfolio tracking. The company helps traders, investors, and businesses simplify their crypto finances by offering clear, audit-ready reports and personalized support. With deep expertise across major chains and platforms, BC Management ensures accuracy, compliance, and peace of mind in an ever-evolving crypto landscape.' 
      /> 
      <main className='flex flex-col gap-12 md:gap-16 mx-5 md:mx-6 lg:px-14 box-content max-w-[1328px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-white flex items-center justify-center">
            <ExportedImage src="/images/blockchain-management-page/bcm-logo.png" alt="" className='w-[122px] md:w-[400px]' width={400} height={100} />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-1.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-2.png)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-3.png)` }}></div>
          <div className="!bg-contain bg-[#000000B2] !bg-center !bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/blockchain-management-page/image-long.webp)` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page