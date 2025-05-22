import { Inter } from 'next/font/google';
import React from 'react'
import ExportedImage from "next-image-export-optimizer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    cta: string;
}

const BtnTransparent = (props: Props) => {
  return (
        <button className={`${inter.className} flex gap-2 items-center justify-start w-max text-[#FF5600] text-[16px]/[16px] font-semibold tracking-[-0.64px] capitalize text-center rounded-[8px] py-5 cursor-pointer`}>
            {props.cta}
            <ExportedImage src="/images/icons/arrow-right-orange.svg" alt="" width={24} height={24} />
        </button>
  )
}

export default BtnTransparent