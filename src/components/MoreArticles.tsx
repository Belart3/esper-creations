'use client'
import React, { useRef, useState } from 'react';
import { Inter } from 'next/font/google'
import blogData from '@/data/blogData.json'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const inter = Inter(
    { 
        subsets: ['latin'] ,
        variable: "--font-inter",
    }
)

const truncateText = ( text: string, textLimit: number ) => {
    const words = text.split('');
    if (words.length > textLimit) {
        return words.slice(0, textLimit).join('') + "...";
    }
    return text;
}

type Props = {}

export default function MoreArticles(props: Props) {
    return (
        <>
            <div className='flex flex-col gap-12 md:gap-16 w-full my-[104px] md:my-[168px] items-center max-w-[1130px]'>
                <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium capitalize`}>
                    More Articles For You
                </h2>
                <div className="hidden md:flex">
                    <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    modules={[Navigation]}
                    color='#F4844C'
                    className="mySwiper h-[400px] w-full max-w-[1130px]"
                >
                {
                    blogData.map((blog, index) => (
                        <SwiperSlide key={index} className='md:!w-[350px]'>
                            <div className="border border-[#E6E6E6] w-full  bg-white rounded-lg group transition-all ease-in-out duration-300 cursor-pointer lg:hover:drop-shadow-lg">
                                <Link href={`/blogs/${blog.url.toLowerCase()}`} >
                                    <div className="flex flex-col">
                                        <div className="h-30 md:h-53 w-full bg-cover bg-no-repeat bg-center rounded-t-lg" style={{backgroundImage: `url(${blog.image})`}}>
                                            <img src={blog.image} alt={blog.alt} className='hidden' />
                                        </div>
                                        <div className="flex flex-col p-3 md:p-5 gap-2 md:gap-4">
                                            <p className={`${inter.className} text-[#F4844C] text-start text-[12px]/[12px] md:text-[16px]/[24px] font-normal capitalize`}>
                                                {blog.date}
                                            </p>
                                            <p className={`${inter.className} text-black text-start text-[18px]/[24px] md:text-[20px]/[26px] font-medium capitalize transition-colors ease-in-out duration-300 lg:group-hover:text-[#F4844C]`}>
                                                {truncateText(blog.title, 45)}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                }
                    </Swiper>
                </div>
                <div className="flex md:hidden">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {
                            blogData.map((blog, index) => (
                                <div className="border border-[#E6E6E6] bg-white rounded-lg group transition-all ease-in-out duration-300 cursor-pointer lg:hover:drop-shadow-lg" key={index}>
                                    <Link href={`/blogs/${blog.url.toLowerCase()}`} >
                                        <div className="flex flex-col">
                                            <div className="h-30 md:h-53 w-full bg-cover bg-no-repeat bg-center rounded-t-lg" style={{backgroundImage: `url(${blog.image})`}}>
                                                <img src={blog.image} alt={blog.alt} className='hidden' />
                                            </div>
                                            <div className="flex flex-col p-3 md:p-5 gap-2 md:gap-4">
                                                <p className={`${inter.className} text-[#F4844C] text-start text-[12px]/[12px] md:text-[16px]/[24px] font-normal capitalize`}>
                                                    {blog.date}
                                                </p>
                                                <p className={`${inter.className} text-black text-start text-[18px]/[24px] md:text-[20px]/[26px] font-medium capitalize transition-colors ease-in-out duration-300 lg:group-hover:text-[#F4844C]`}>
                                                    {truncateText(blog.title, 30)}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
