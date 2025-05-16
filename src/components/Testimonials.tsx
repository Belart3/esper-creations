import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import testimonial from '@/data/testimonials.json';
import { Inter } from 'next/font/google';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
    selectedService: string
}

export default function Testimonials (props: Props) {
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
        className="mySwiper w-full flex flex-row gap-4"
      >
        {
            testimonial.filter((item) => item.service === props.selectedService).map((item:any, index:number) => (
                <SwiperSlide className='rounded-[40px] bg-white w-full md:!w-[400px] h-fit p-[10px] pb-[20px] flex flex-col space-y-[20px] md:space-y-[28px] items-center group/item cursor-pointer' key={index}>
                    <div className={`h-[275px] w-full rounded-[32px] ease-linear transition-colors duration-300 bg-linear-to-b lg:from-[#99999980] lg:to-[#999999] overflow-hidden
                    ${
                    item.company === 'git global' ? 'from-[#001F3D80] lg:group-hover/item:from-[#001F3D80] to-[#001F3D] lg:group-hover/item:to-[#001F3D]' 
                    : 
                    item.company === 'JMG Handyman' ? 'from-[#DA232780] lg:group-hover/item:from-[#DA232780] to-[#DA2327] lg:group-hover/item:to-[#DA2327]' 
                    :
                    item.company === 'BlockChain Management' ? 'from-[#F4844C80] lg:group-hover/item:from-[#F4844C80] to-[#F4844C] lg:group-hover/item:to-[#F4844C]' 
                    :
                    item.company === 'Weight Loss Paradise' ? 'from-[#31939380] lg:group-hover/item:from-[#31939380] to-[#319393] lg:group-hover/item:to-[#319393]' 
                    :
                    item.company === 'Excel Daycare' ? 'from-[#69319380] lg:group-hover/item:from-[#69319380] to-[#693193] lg:group-hover/item:to-[#693193]' 
                    :
                    ''
                    } 
                    relative`
                    }>
                        <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.image})`}}></div>
                    </div>
                    <div className="flex flex-col gap-[12px] px-[10px]">
                        {
                            item.reviews.map((review:any, index:number) => (
                                <div className={`bg-[#EDEFF7] rounded-[24px] odd:rounded-bl-[0px] even:rounded-br-[0px] w-fit even:self-end py-3 px-4 space-y-3 flex flex-col odd:items-start even:items-end even:bg-black lg:even:bg-[#EDEFF7] lg:group-hover/item:even:bg-black ease-linear transition-colors duration-300`} key={index}>
                                    <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] font-normal tracking-[-0.56px} text-white  `}>
                                        {review.message}
                                    </p>
                                    <p className={`${inter.className} text-[12px]/[12px] md:text-[12px]/[18px] tracking-[-0.48px] font-normal text-[#999999]`}>
                                        {review.name}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="flex flex-row gap-3">
                        <div className="size-13 rounded-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${item.clientImage})`}}></div>
                        <div className="flex flex-col gap-1">
                            <blockquote className={`${inter.className} text-[16px]/[24px] font-semibold tracking-[-0.64px] text-black capitalize`}>
                                {item.name}
                            </blockquote>
                            <figcaption className={`${inter.className} text-[12px]/[18px] tracking-[-0.48px] font-normal text-[#999999] capitalize`}>
                                {item.company}
                            </figcaption>
                        </div>
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
