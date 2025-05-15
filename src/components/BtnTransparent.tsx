import { Inter } from 'next/font/google';
import React from 'react'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    cta: string;
}

const BtnTransparent = (props: Props) => {
  return (
        <button className={`${inter.className} flex gap-2 items-center justify-start w-fit text-[#FF5600] text-[16px]/[16px] font-semibold tracking-[-0.64px] capitalize text-center rounded-[8px] py-5 cursor-pointer`}>
            {props.cta}
            <img src="/images/icons/arrow-right-orange.svg" alt="" />
        </button>
  )
}

export default BtnTransparent