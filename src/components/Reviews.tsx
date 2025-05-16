import React from 'react'
import testimonial from '@/data/testimonials.json'
import { Inter } from 'next/font/google';
import { useState } from 'react';
import Testimonials from "@/components/Testimonials";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Reviews = () => {
    const filters = Array.from(
        new Map(testimonial.map(item => [item.service, item])).values()
    );
    const [selectedService, setSelectedService] = useState('Web Design & Dev.');
    const [activeFilter, setActiveFilter] = useState(0);
  return (
        <div className='flex flex-col gap-12 md:gap-16'>
            <div className="flex flex-col items-center justify-center p-2 rounded-[32px] bg-[#EDEFF7] w-full md:w-fit mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center relative w-full md:w-fit">
                {
                    filters.map((filter, index) => (
                    <button className={`${inter.className} rounded-[32px] ${activeFilter == index ? ' text-[#FF5600] md:bg-white drop-shadow-lg drop-shadow-[#00000033] text-shadow-none' : 'text-[#666666]'}  py-4 px-6  text-[16px]/[16px] font-semibold tracking-[-0.64px] capitalize w-full z-10 text-shadow-none transition-all ease-linear duration-300 md:w-fit cursor-pointer lg:hover:text-[#FF5600] lg:hover:bg-white lg:hover:drop-shadow-lg lg:hover:drop-shadow-[#00000033] `} key={index} onClick={() => (
                        setActiveFilter(index),
                        setSelectedService(filter.service)
                    )}>
                        {filter.service}
                    </button>
                    ))
                }
                <div className="flex md:hidden absolute w-full h-[calc(25%)] bg-white left-1/2 top-0 -translate-x-1/2 rounded-[32px] drop-shadow-xl drop-shadow-[#00000033] z-0 transition-all ease-linear duration-300" style={{ top: `${(activeFilter / 4) * 100}%` }}></div>
                </div>
            </div>
            <Testimonials selectedService={selectedService} />
        </div>
  )
}

export default Reviews
