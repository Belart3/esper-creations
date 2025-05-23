import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';
import { Inter } from 'next/font/google';
import React from 'react'
import ExportedImage from "next-image-export-optimizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Colony Heating Website Design | Esper Creations',
  description: 'View snapshots of the website design Esper Creations created for Colony Heating. Explore the visual layout, user experience, and visit the live site.',
  alternates: {
    canonical: 'http://localhost:3000/clients/colony-heating',
  },
  openGraph: {
    title: 'Colony Heating Website Design | Esper Creations',
    description: 'View snapshots of the website design Esper Creations created for Colony Heating. Explore the visual layout, user experience, and visit the live site.',
  },
};

const page = () => {
  return (
    <>
      <ClientHeader 
        client='Colony Heating'
        url='https://colonyheating.com/' 
        projectScope='Web Design & Dev' 
        year='2025' 
        projectDetails='JMG HandyMania is a reliable handyman service based in Iowa City, offering a wide range of home repair and improvement solutions. From electrical and plumbing fixes to painting, carpentry, and lawn maintenance, their team delivers quality work with efficiency and professionalism. With transparent pricing and a strong focus on customer satisfaction, JMG HandyMania is a go-to choice for both homeowners and small businesses.' 
      /> 
      <main className='flex flex-col gap-12 md:gap-16 mx-5 md:mx-6 lg:px-14 box-content max-w-[1328px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-white flex items-center justify-center">
            <ExportedImage src="/images/colony-heating-page/colony-heating-logo.webp" alt="" className='w-[122px] md:w-[400px]' width={400} height={100} />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/colony-heating-page/image-1.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/colony-heating-page/image-2.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/colony-heating-page/image-3.webp)` }}></div>
          <div className="!bg-contain bg-[#004D7BB2] !bg-center !bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/colony-heating-page/image-long.webp)` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page