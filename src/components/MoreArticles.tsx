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
    const [showAllMobilePosts, setShowAllMobilePosts] = useState(false);
    return (
        <>
            <div className="w-full my-[104px] md:my-[168px] flex justify-center">
                <div className="w-full max-w-[1130px] flex flex-col gap-10 md:gap-12 px-5 lg:px-0">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <div className="flex flex-col gap-2">
                        <h2 className={`${inter.className} text-black text-[24px]/[28px] md:text-[34px]/[40px] font-medium`}>
                        More Articles For You
                        </h2>
                        <p className={`${inter.className} text-[#666666] text-[14px]/[22px] md:text-[16px]/[24px] font-normal`}>
                        Keep learning — explore more guides on SEO, web design, and growth.
                        </p>
                    </div>

                    <Link
                        href="/blogs"
                        className={`${inter.className} inline-flex items-center gap-2 text-[14px]/[20px] md:text-[16px]/[24px] font-normal text-black hover:text-[#FF5600] transition-colors duration-200`}
                    >
                        View all articles <span aria-hidden>→</span>
                    </Link>
                    </div>

                    {/* Desktop: Swiper */}
                    <div className="hidden md:block">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={24}
                        navigation={true}
                        modules={[Navigation]}
                        className="mySwiper w-full"
                    >
                        {blogData.map((blog, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <Link
                            href={`/blogs/${blog.url.toLowerCase()}`}
                            className="group block h-full"
                            >
                            <div className="h-full bg-white rounded-2xl overflow-hidden border border-[#EDEDED] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
                                {/* Image */}
                                <div
                                className="relative h-52 w-full bg-cover bg-center bg-no-repeat bg-[#ffeee6] overflow-hidden"
                                style={{ backgroundImage: `url(${blog.image})` }}
                                >
                                <img src={blog.image} alt={blog.alt} className="hidden" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-3 p-5">
                                <p className={`${inter.className} text-[#F4844C] text-[14px]/[20px] font-normal`}>
                                    {blog.date}
                                </p>

                                <p className={`${inter.className} text-black text-[18px]/[26px] font-medium transition-colors duration-300 group-hover:text-[#FF5600]`}>
                                    {truncateText(blog.title, 55)}
                                </p>

                                {/* Subtle CTA */}
                                <span className={`${inter.className} text-[#666666] text-[14px]/[20px] font-normal inline-flex items-center gap-2`}>
                                    Read article <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                                </span>
                                </div>
                            </div>
                            </Link>
                        </SwiperSlide>
                        ))}
                    </Swiper>
                    </div>

                    {/* Mobile: 2-col grid + See more/less */}
                    <div className="md:hidden">
                        <div className="grid grid-cols-2 gap-4">
                            {blogData
                            .slice(0, showAllMobilePosts ? blogData.length : 4)
                            .map((blog, index) => (
                                <Link
                                key={index}
                                href={`/blogs/${blog.url.toLowerCase()}`}
                                className="group block"
                                >
                                <div className="bg-white rounded-2xl overflow-hidden border border-[#EDEDED] transition-all duration-300 ease-out hover:shadow-lg">
                                    {/* Image */}
                                    <div
                                    className="relative h-28 w-full bg-cover bg-center bg-no-repeat bg-[#ffeee6] overflow-hidden"
                                    style={{ backgroundImage: `url(${blog.image})` }}
                                    >
                                    <img src={blog.image} alt={blog.alt} className="hidden" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col gap-2 p-3">
                                    <p className={`${inter.className} text-[#F4844C] text-[11px]/[11px] font-normal`}>
                                        {blog.date}
                                    </p>

                                    <p className={`${inter.className} text-black text-[14px]/[20px] font-medium transition-colors duration-300 group-hover:text-[#FF5600]`}>
                                        {truncateText(blog.title, 38)}
                                    </p>
                                    </div>
                                </div>
                                </Link>
                            ))}
                        </div>

                        {/* See more / See less */}
                        {blogData.length > 4 && (
                            <div className="flex justify-center mt-6">
                            <button
                                onClick={() => setShowAllMobilePosts((prev) => !prev)}
                                className={`${inter.className} inline-flex items-center gap-2 rounded-full border border-[#EDEDED] px-6 py-3 text-[14px]/[20px] font-normal text-black transition-all duration-200 hover:border-[#FF5600] hover:text-[#FF5600]`}
                            >
                                {showAllMobilePosts ? "See less" : "See more"}
                                <span aria-hidden className="text-[16px] leading-none">
                                {showAllMobilePosts ? "↑" : "↓"}
                                </span>
                            </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
