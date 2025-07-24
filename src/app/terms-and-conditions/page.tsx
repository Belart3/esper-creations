import { Inter } from 'next/font/google';
import React from 'react'
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for using our website',
  alternates: {
    canonical: 'https://espercreations.com/terms-and-conditions',
  },
};
import termsConditions from '@/data/terms-and-conditions.json';
import ClientFooter from '@/components/ClientFooter';

const page = () => {
  return (
    <div className='pt-[148px] flex flex-col gap-6 box-content px-5 md:px-10 lg:mx-auto lg:max-w-[1104px]'>
      <h1 className={`${inter.className} text-black font-semibold tracking-[-3.18px] text-[53px]/[53px] text-center`}>
        Terms and Conditions.
      </h1>
      <div className="flex flex-row gap-20 mb-[104px]">
        {/* <aside className='flex flex-col gap-6 items-start w-[320px] fixed top-[23=0px]'>
          {
            termsConditions.map((section, index) => (
              <Link  href={section.link} className={`${inter.className} text-[20px]/[20px] font-semibold tracking-[-1.12px] text-black`} key={index}>
                {section.title}
              </Link>
            ))
          }
        </aside> */}
        <main className='flex flex-col gap-6'>
          {
            termsConditions.filter(section =>  section.title !== 'Contact Us').map((section, index) => (
              <section id={section.link} className='flex flex-col gap-6' key={index}>
                <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
                  {section.title}
                </h2>
                {
                  section.content && (
                    <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                      {section.content}
                    </p>
                  )
                }
                {
                  section.conditions && (
                    <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                      {
                        section.conditions.map((condition, index) => (
                          <li key={index}>{condition}</li>
                        ))
                      }
                    </ul>
                  )
                }
              </section>
            ))
          }
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Contact Us
            </h2>
            <div className='flex flex-col'>
              <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                Questions about these Terms? Contact Us
              </p>
              <p className={`${inter.className} text-black text-[18px]/[27px] font-bold tracking-[-0.72px]`}>
                Esper Creations
              </p>
              <p className={`${inter.className} text-[#666666] text-[18px]/[27px] font-normal tracking-[-0.72px]`}>
                Email: 
                <span className='text-[#FF5600] font-bold'>
                  <a href="mailto:changes@espercreations.com"> changes@espercreations.com</a>
                </span>
              </p>
              <p className={`${inter.className} text-[#666666] text-[18px]/[27px] font-normal tracking-[-0.72px]`}>
                Mailing Address: <span className='text-black font-bold'>2 E Benton St, Iowa City, Iowa, United States</span>
              </p>
            </div>
          </section>
        </main>
      </div>
      <ClientFooter />
    </div>
  )
}

export default page