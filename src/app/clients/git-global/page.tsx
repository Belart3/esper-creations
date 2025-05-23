import { Inter } from 'next/font/google';
import React from 'react'
import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Git Global Website Design | Esper Creations',
  description: 'View snapshots of the website design Esper Creations created for Git Global. Explore the visual layout, user experience, and visit the live site.',
  alternates: {
    canonical: 'http://localhost:3000/clients/git-global',
  },
  openGraph: {
    title: 'Git Global Website Design | Esper Creations',
    description: 'View snapshots of the website design Esper Creations created for Git Global. Explore the visual layout, user experience, and visit the live site.',
  },
};

const page = () => {
  return (
    <>
      <ClientHeader 
        client='GIT Global'
        url='https://gitsiowa.com/' 
        projectScope='Web Design & Dev, Social Media Marketing' 
        year='2024' 
        projectDetails='GIT Global is an Iowa-based immigration service provider focused on making the U.S. immigration process more accessible, affordable, and transparent. They assist clients with visa applications, green card processing, and general immigration documentation. With a commitment to clarity and care, GIT Global supports individuals and families navigating complex legal systems with professionalism and integrity.' 
      />
      <main className='flex flex-col gap-16 mx-5 md:mx-6 box-content lg:px-14 max-w-[1328px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-[#001F3C] flex items-center justify-center">
            <h2 className={`${inter.className} text-[44px]/[44px] tracking-[-2.64px] font-semibold text-white capitalize`}>
              GIT Global
            </h2>
          </div>
          <div className="bg-cover bg-top bg-no-repeat h-[350px] md:h-[550px] lg:h-[750px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/git-global-page/image-1.webp)` }}></div>
          <div className="bg-[length:290px_216px] md:bg-[length:75%_80%] bg-bottom bg-no-repeat bg-[#001F3D99] h-[350px] md:h-[550px] lg:h-[750px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/git-global-page/image-2.webp)` }}></div>
          <div className="bg-contain bg-center bg-no-repeat h-[250px] md:h-[400px] lg:h-[600px] w-full bg-[#001F3D99] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/git-global-page/image-3.webp)` }}></div>
          <div className="bg-contain bg-center bg-no-repeat bg-[#001F3D99] w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/git-global-page/image-long.webp)` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page