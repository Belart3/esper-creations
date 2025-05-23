"use client"
import { Inter } from 'next/font/google';
import React from 'react'
import services from "@/data/services.json"
import BtnTransparent from "@/components/BtnTransparent";
import Image from 'next/image';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Services = () => {

  return (
        <div className="flex flex-col lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-x-6 lg:gap-y-4 gap-4 md:gap-6">
            {services.map((service, index) => (
                <div className="flex flex-col px-5 pt-5 md:px-10 md:pt-10 gap-5 md:gap-7 items-center rounded-[8px] md:rounded-[16px] bg-white lg:nth-[1]:col-span-3 lg:nth-[4]:col-span-3 lg:nth-[2]:col-span-2 lg:nth-[3]:col-span-2 lg:h-[600px] overflow-hidden cursor-pointer group/item" key={index}>
                    <div className="flex flex-col gap-4 items-start">
                        <h3 className={`${inter.className} text-black text-[22px]/[22px] md:text-[29px]/[29px] font-semibold tracking-[-1.32px] md:tracking-[-1.74px] capitalize`}>
                            {service.title}
                        </h3>
                        <p className={`${inter.className} text-[#666666] text-[16px]/[24px] md:text-[18px]/[27px] tracking-[-0.64px] md:tracking-[-0.72px] font-normal`}>
                            {service.description}
                        </p>
                        <BtnTransparent cta={service.cta} />
                    </div>   
                    <div className="w-full h-[200px] md:h-[350px] bg-[E6E6E6] relative">
                        {
                            index === 0 ? (
                                <>
                                    <Image src={"/images/services/jmg-web-design.webp"} className='absolute bottom-[-40px] md:top-[24px] left-1/2 -translate-x-3/4 h-[200px] md:h-[460px] lg:h-[600px] z-0 w-[120px] md:w-[230px] lg:w-[300px] rotate-[-15deg] transition-all ease-linear duration-300 group-hover/item:-translate-x-full lg:group-hover/item:-translate-x-[85%] shadow-2xl shadow-[#00000070]' alt="" width={290} height={280} />
                                    <Image src={"/images/services/bcm-web-design.webp"} className='absolute bottom-[-40px] md:top-0 left-1/2 -translate-x-1/2 h-[200px] md:h-[460px] lg:h-[600px] z-[1] w-[120px] md:w-[230px] lg:w-[300px]' alt="" width={290} height={280} />
                                    <Image src={"/images/services/git-web-design.webp"} className='absolute bottom-[-40px] md:top-[24px] left-1/2 -translate-x-1/4 h-[200px] md:h-[460px] lg:h-[600px] z-0 w-[120px] md:w-[230px] lg:w-[300px] rotate-[15deg] transition-all ease-linear duration-200 group-hover/item:translate-x-0 lg:group-hover/item:-translate-x-[15%] shadow-2xl shadow-[#00000070]' alt="" width={290} height={280} />
                                </>
                            ) : index === 1 ? (
                                <>
                                    <Image src={"/images/services/organic-SEO-1.webp"} className='absolute bottom-[30px] md:bottom-[50px] left-1/2 -translate-x-3/4 size-[130px] md:size-[220px] lg:size-[210px] rotate-[-15deg] transition-all ease-linear duration-300 group-hover/item:-translate-x-[85%] shadow-xl z-[1] rounded-[8px]' alt="" width={290} height={280} />
                                    <Image src={"/images/services/organic-SEO-2.webp"} className='absolute bottom-[30px] md:bottom-[50px] left-1/2 -translate-x-1/6 rotate-[15deg] transition-all ease-linear duration-200 h-[160px] md:h-[280px] lg:h-[270px] w-[130px] md:w-[220px] lg:w-[215px] group-hover/item:translate-x-[-10%] group-hover/item:z-[1] shadow-xl z-0 rounded-[8px]' alt="" width={290} height={280} />
                                </>
                            ) : index === 2 ? (
                                <>
                                    <Image src={"/images/services/social-media-marketing-1.webp"} className='absolute top-0 lg:bottom-[40px] left-1/2 -translate-x-[15%] lg:-translate-x-1/2 size-[150px] md:size-[280px] md:h-[280px] md:w-[290px] rotate-[5deg] lg:rotate-[-3deg] transition-all ease-linear duration-300 lg:group-hover/item:-translate-x-[30%] lg:group-hover/item:rotate-[3deg] z-[1]' alt="" width={290} height={280} />
                                    <Image src={"/images/services/social-media-marketing-2.webp"} className='absolute top-0 lg:bottom-[20px] left-1/2 translate-x-[-75%] lg:-translate-x-1/2 rotate-[-9deg] lg:rotate-[-5deg] transition-all ease-linear duration-200 size-[150px] md:h-[280px] md:w-[290px] group-hover/item:translate-x-[-70%] group-hover/item:z-[1] z-0' alt="" width={290} height={280} />
                                </>
                            ) : index === 3 ? (
                                <>
                                    <Image src={"/images/services/ppc-advertising-1.webp"} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full md:w-[600px] rounded-[12px] h-[89px] md:h-[180px] lg:h-[200px] rotate-[-3.5deg] transition-all ease-linear duration-300 group-hover/item:-translate-y-[40%] z-[1] shadow-lg' alt="" width={290} height={280} />
                                    <Image src={"/images/services/ppc-advertising-2.webp"} className='absolute top-1/2 rounded-[12px] -translate-y-3/4 left-1/2 -translate-x-1/2 rotate-[9deg] lg:rotate-[3.5deg] transition-all ease-linear duration-200 w-full md:w-[600px] h-[89px] md:h-[180px] lg:h-[200px] group-hover/item:translate-y-[-100%] z-0 shadow-lg' alt="" width={290} height={280} />
                                </>
                            ) : null
                        }

                    </div> 
                </div>
            ))}
        </div>
  )
}

export default Services