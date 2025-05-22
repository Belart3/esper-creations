import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    productColor: string
    product: string
    price: string
    details: string
    cta: string
    features: string[]
    index: number
}

const PricingCards = (props: Props) => {
  return (
    <div className="p-4 rounded-[40px] bg-white flex flex-col gap-16" key={props.index}>
        <div className="flex flex-col gap-8">
            <div className="rounded-[32px] p-6 flex flex-col gap-10 items-start bg-[#FF15491A]" style={{backgroundColor: `${props.productColor}`}}>
            <button className={`${inter.className} px-4 py-3 bg-white rounded-[32px] text-black text-[16px]/[24px] tracking-[-0.64px] font-semibold`}>
                {props.product}
            </button>
            <div className="flex flex-col gap-2">
                <p className={`${inter.className} text-[18px]/[27px] tracking-[-0.72px] font-normal text-[#999999]`}>
                Starts at
                </p>
                <p className={`${inter.className} text-[53px]/[53px] tracking-[-3.18px] font-semibold text-black`}>
                {props.price}
                </p>
            </div>
            </div>
            <p className={`${inter.className} text-[16px]/[24px] tracking-[-0.64px] font-normal text-black`}>
                {props.details}
            </p>
            <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] custom-shadow-orange w-full transition-all ease-linear duration-300 hover:!shadow-none cursor-pointer`}>
                {props.cta}
            </button>
        </div>
        <div className="py-6 px-2 rounded-[24px] bg-[#F4F5FA] custom-inset-shadow">
            <ul className=' flex flex-col gap-2'>
                {
                    props.features.map((feature: string, index: number) => (
                        <li className={`${inter.className} text-[16px]/[24px] tracking-[-0.64px] font-normal text-[#666666] list-disc ms-5`} key={index}>
                            {feature}
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default PricingCards