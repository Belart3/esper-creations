import React from 'react'
import { Inter } from "next/font/google";
import SectionTitle from './SectionTitle';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    title: string;
    description: string;
}

const SectionHead = (props: Props) => {
  return (
        <div className="flex flex-col gap-6">
          <SectionTitle title={props.title} />
            <p className={`${inter.className} text-[#666666] text-center text-[16px]/[24px] md:text-[18px]/[27px] tracking-[-0.64px] md:tracking-[-0.72px] font-normal`}>
              {props.description}
            </p>
        </div>
  )
}

export default SectionHead