"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import work from '@/data/work-banner.json';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import ExportedImage from "next-image-export-optimizer";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function WorkBanner () {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={16}
        modules={[Pagination]}
        grabCursor={true}
        centerInsufficientSlides={true}
        pagination={{ 
          clickable: true 
        }}
        freeMode={true}
        className="mySwiper w-full flex flex-row gap-4 h-[500px] md:h-[600px]"
      >
        {
            work.map((item, index) => (
                <SwiperSlide className='rounded-[40px] w-full max-w-[400px] md:!w-[400px] h-[500px] md:h-[600px] p-3 pb-[20px] bg-[#00000033] bg-no-repeat bg-center bg-cover overflow-hidden cursor-pointer relative group' key={index}>
                    <ExportedImage src={item.image} alt={item.alt} sizes='' fill />
                    <div className="absolute bottom-[12px] left-1/2 -translate-x-1/2 flex justify-between w-[calc(100%-24px)] items-center rounded-[32px] border border-[#E6E6E6] p-1 ps-4 backdrop-blur-[7.5px] bg-[#00000066] lg:bottom-[-20%] lg:group-hover:bottom-[12px] transition-all duration-500 ease-linear">
                        <p className={`${inter.className} text-white text-[18px]/[18px] tracking-[-1.08px] font-semibold`}>
                          {item.project}
                        </p>
                        <Link href={item.url}>
                            <button className={`${inter.className} text-[16px]/[16px] tracking-[-0.64px] capitalize font-semibold text-white bg-[#FF5600] rounded-[24px] px-6 py-5 cursor-pointer`}>
                                view project
                            </button>
                        </Link>
                    </div>
                </SwiperSlide>
            ))
        }
      </Swiper>
        <style jsx global>{`
        .swiper-pagination {
            @apply block md:hidden;
        }
        `}</style>
    </>
  );
}
