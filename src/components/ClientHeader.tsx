import React from 'react'
import BtnTransparent from '@/components/BtnTransparent'
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    client: string,
    url: string,
    projectScope: string,
    year: string,
    projectDetails: string
}

const ClientHeader = (props: Props) => {
  return (
    <header className='pt-[148px] flex flex-col gap-6 box-content px-5 md:px-14 lg:mx-auto lg:max-w-[1104px] mb-12'>
      <div className="flex flex-coInter, l md:flex-row md:justify-between gap-6 items-start">
        <h1 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-start text-black`}>
          {props.client}
        </h1>
        <a href={props.url} target='_blank'>
          <BtnTransparent cta="view live site" />
        </a>
      </div>
      <div className="flex flex-col lg:flex-row-reverse w-full gap-6 lg:gap-16">
        <div className="flex flex-row w-full justify-between items-start md:w-[75%] lg:w-max  lg:justify-between gap-16">
              <div className="flex flex-col gap-2 items-start lg:w-max">
                  <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
                      Project Scope
                  </p>
                  <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
                      {props.projectScope}
                  </p>
                  </div>
                  <div className="flex flex-col gap-2 items-start lg:w-max">
                  <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
                      Year
                  </p>
                  <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
                      {props.year}
                  </p>
              </div>
          </div>
          <div className="flex flex-col gap-2">
              <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] md:tracking-[-0.64px] font-normal tracking-[-0.56px] text-[#999999] capitalize`}>
                  About
              </p>
              <p className={`${inter.className} text-[16px]/[24px] md:text-[18px]/[27px] md:tracking-[-0.72px] font-normal tracking-[-0.64px] text-black capitalize`}>
                  {props.projectDetails} 
              </p>
            </div>
      </div>
    </header>
  )
}

export default ClientHeader