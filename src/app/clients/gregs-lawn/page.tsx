import React from 'react'
import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';
import ExportedImage from "next-image-export-optimizer";

export const metadata = {
  title: 'Gregs Lawn & Landscaping Website Design | Esper Creations',
  description: 'View snapshots of the website design Esper Creations created for Gregs Lawn. Explore the visual layout, user experience, and visit the live site.',
  alternates: {
    canonical: 'http://localhost:3000/clients/gregs-lawn',
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
        client='Greg’s Lawn & Landscaping'
        url='https://gregslawn.com/' 
        projectScope='Web Design & Dev' 
        year='2025' 
        projectDetails="Greg's Lawn & Landscaping is a family-owned company based in Cedar Rapids, Iowa, offering comprehensive services in lawn care, landscaping, irrigation, and snow management. With over 40 years of experience, the company serves both residential and commercial clients across Eastern Iowa. Greg's Lawn & Landscaping is recognized for its sustainable practices, certified expertise, and commitment to delivering high-quality, eco-friendly solutions." 
      />
      <main className='flex flex-col gap-16 mx-5 md:mx-6 lg:px-14 box-content max-w-[1328px] lg:mx-auto'>
        <div className="flex flex-col gap-4">
          {/* <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-black flex items-center justify-center">
            <ExportedImage src="/Images/gregs-lawn-page/jmg-logo.webp" alt="" className='w-[122px] md:w-[230px] lg:w-[350px]' height={100} width={350} />
          </div> */}
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/gregs-lawn-page/image-1.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/gregs-lawn-page/image-2.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[400px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/gregs-lawn-page/image-3.webp)` }}></div>
          <div className="bg-contain bg-[#000000B2] bg-center bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/gregs-lawn-page/image-long.webp)` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page