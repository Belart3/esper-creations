import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    cta: string
}

const BtnOrange = (props: Props) => {
  return (
    <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full lg:w-fit custom-shadow-orange cursor-pointer`}>
        {props.cta}
    </button>
  )
}

export default BtnOrange