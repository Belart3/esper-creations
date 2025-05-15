import { Inter } from 'next/font/google';
import React from 'react'
import services from "@/data/services.json"
import BtnTransparent from "@/components/BtnTransparent";

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
                                    <img src={"/images/services/jmg-web-design.png"} className='absolute top-[24px] left-1/2 -translate-x-3/4 h-[500px] z-0 w-[250px] rotate-[-15deg] transition-all ease-linear duration-300 group-hover/item:-translate-x-full shadow-2xl shadow-black' alt="" />
                                    <img src={"/images/services/bcm-web-design.png"} className='absolute top-0 left-1/2 -translate-x-1/2 h-[500px] z-[1] w-[250px]' alt="" />
                                    <img src={"/images/services/git-web-design.png"} className='absolute top-[24px] left-1/2 -translate-x-1/4 h-[500px] z-0 w-[250px] rotate-[15deg] transition-all ease-linear duration-200 group-hover/item:translate-x-0 shadow-2xl shadow-black' alt="" />
                                </>
                            ) : index === 1 ? (
                                <>
                                    <img src={"/images/services/organic-SEO-1.png"} className='absolute top-0 left-1/2 -translate-x-3/4 size-[200px] rotate-[-15deg] transition-all ease-linear duration-300 group-hover/item:-translate-x-[85%] shadow-xl z-[1]' alt="" />
                                    <img src={"/images/services/organic-SEO-2.png"} className='absolute top-0 left-1/2 -translate-x-1/6 rotate-[15deg] transition-all ease-linear duration-200 h-[270px] w-[200px] group-hover/item:translate-x-[-10%] group-hover/item:z-[1] shadow-xl z-0' alt="" />
                                </>
                            ) : index === 2 ? (
                                <>
                                    <img src={"/images/services/social-media-marketing-1.png"} className='absolute top-0 left-1/2 -translate-x-1/2 w-[250px] h-[250px] rotate-[-3deg] transition-all ease-linear duration-300 group-hover/item:-translate-x-[15%] group-hover/item:rotate-[3deg] z-[1]' alt="" />
                                    <img src={"/images/services/social-media-marketing-2.png"} className='absolute top-0 left-1/2 -translate-x-1/2 rotate-[-5deg] transition-all ease-linear duration-200 w-[250px] h-[250px] group-hover/item:translate-x-[-75%] group-hover/item:z-[1] z-0' alt="" />
                                </>
                            ) : index === 3 ? (
                                <>
                                    <img src={"/images/services/ppc-advertising-1.png"} className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rotate-[-3.5deg] transition-all ease-linear duration-300 group-hover/item:-translate-y-[40%] z-[1] shadow-lg' alt="" />
                                    <img src={"/images/services/ppc-advertising-2.png"} className='absolute top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 rotate-[3.5deg] transition-all ease-linear duration-200 w-[600px] h-[200px] group-hover/item:translate-y-[-100%] z-0 shadow-lg' alt="" />
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