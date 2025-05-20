import React from 'react'
import ClientHeader from '@/components/ClientHeader';
import ClientFooter from '@/components/ClientFooter';


const page = () => {
  return (
    <>
      <header className='pt-[148px] flex flex-col gap-6 mx-5 md:mx-6 lg:max-w-[1104px] lg:mx-auto mb-12'>
        <ClientHeader 
          client='JMG Handyman'
          url='https://jmghandymania.com/' 
          projectScope='Web Design & Dev' 
          year='2025' 
          projectDetails='JMG HandyMania is a reliable handyman service based in Iowa City, offering a wide range of home repair and improvement solutions. From electrical and plumbing fixes to painting, carpentry, and lawn maintenance, their team delivers quality work with efficiency and professionalism. With transparent pricing and a strong focus on customer satisfaction, JMG HandyMania is a go-to choice for both homeowners and small businesses.' 
        />
      </header>  
      <main className='flex flex-col gap-16 mx-5 md:mx-6'>
        <div className="flex flex-col gap-4">
          <div className="h-[250px] md:h-[400px] lg:h-[600px] w-full rounded-[16px] bg-black flex items-center justify-center">
            <img src="/Images/jmg-handyman-page/jmg-logo.webp" alt="" className='w-[122px] md:w-[230px] lg:w-[350px]' />
          </div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-1.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[350px] md:h-[550px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-2.webp)` }}></div>
          <div className="bg-cover bg-center bg-no-repeat h-[250px] md:h-[400px] lg:h-[700px] w-full mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-3.webp)` }}></div>
          <div className="bg-contain bg-[#000000B2] bg-center bg-no-repeat w-full h-[1200px] md:h-[2500px] mx-auto rounded-[24px]" style={{ backgroundImage: `url(/images/jmg-handyman-page/image-long.webp)` }}></div>
        </div>
        <ClientFooter />
      </main>
    </>
  )
}

export default page