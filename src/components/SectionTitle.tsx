import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    title: string;
}

const SectionTitle = (props: Props) => {
  return (
    <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-center text-black`}>
        {props.title}
    </h2>
  )
}

export default SectionTitle