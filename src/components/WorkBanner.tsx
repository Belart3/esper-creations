import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import work from '@/data/work-banner.json';
import { Inter } from 'next/font/google';
import Link from 'next/link';

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
        className="mySwiper w-full flex flex-row gap-4 h-[500px] md:h-[600px]"
      >
        {
            work.map((item, index) => (
                <SwiperSlide className='rounded-[40px] w-full md:!w-[400px] h-[500px] md:h-[600px] p-3 pb-[20px] !flex items-end group bg-no-repeat bg-center bg-cover overflow-hidden cursor-pointer' style={{backgroundImage: `url(${item.image})`}} key={index}>
                    <div className="flex justify-between w-full items-center rounded-[32px] border border-[#E6E6E6] p-1 ps-4 backdrop-blur-[7.5px] bg-[#00000066] lg:translate-y-[200%] lg:group-hover:translate-y-0 transition-all duration-500 ease-linear">
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
