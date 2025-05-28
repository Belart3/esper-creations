import React from 'react'
import Link from 'next/link'
import AccordionComponent from './AccordionComponent'
import SectionHead from './SectionHead'
import BtnOrange from './BtnOrange'
import faq  from '@/data/faq.json'
import { Inter } from 'next/font/google'
import ExportedImage from 'next-image-export-optimizer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const FAQ = () => {
  return (
    <>
        <div className="flex lg:hidden mx-auto">
            <SectionHead title="Frequently Asked Questions." description="Can’t find your answer? please send us a mail by clicking the button below. " />
        </div>
        <div className="flex-col gap-6 hidden justify-center md:justify-start items-start lg:flex bg-contain bg-no-repeat bg-center h-full max-h-[400px] relative">
            <ExportedImage src="/images/faq-background.svg" alt="faq background" className="absolute bottom-0 right-0 z-[-1]" width={300} height={300} />
            <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-start text-black`}>
                Frequently Asked Questions.
            </h2>
            <p className={`${inter.className} text-[#666666] text-center md:text-start text-[16px]/[24px] md:text-[18px]/[27px] tracking-[-0.64px] md:tracking-[-0.72px] font-normal`}>
                Can’t find your answer? please send us a mail by clicking the button below.
            </p>
            <Link href='/#contact-us'>
                <BtnOrange cta="i still have questions!" />
            </Link>
        </div>
        <div className="flex flex-col gap-3">
            {
            faq.map((item, index) => (
                <AccordionComponent question={item.question} answer={item.answer} key={index} />
            ))
            }
        </div>
        <Link href='/#contact-us' className="w-fit mx-auto">
            <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] shadow-lg shadow-[#FF560060] w-full md:max-w-[300px] md:w-fit mx-auto lg:hidden cursor-pointer`}>
            i still have questions!
            </button>
        </Link>
    </>
  )
}

export default FAQ