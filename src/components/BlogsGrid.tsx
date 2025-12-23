'use client'
import React from 'react'
import blogData from '@/data/blogData.json'
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { useState } from 'react';

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
});

type Props = {}

const BlogsGrid = (props: Props) => {
    const truncateText = ( text: string, textLimit: number ) => {
        const words = text.split('');
        if (words.length > textLimit) {
            return words.slice(0, textLimit).join('') + "...";
        }
        return text;
    }
    const [currentPage, setCurrentPage] = useState(1);
    const blogsPerPage = 6;
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    return (
        <div className="flex flex-col gap-4 md:gap-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    blogData.slice(indexOfFirstBlog,indexOfLastBlog).map((blog,index) => (
                        <div className="border border-[#E6E6E6] bg-white rounded-lg group transition-all ease-in-out duration-300 cursor-pointer lg:hover:drop-shadow-lg" key={index}>
                            <Link href={`/blogs/${blog.url.toLowerCase()}`} >
                                <div className="flex flex-col">
                                    <div className="h-30 md:h-53 w-full bg-cover bg-no-repeat bg-center rounded-t-lg bg-[#ffeee6]" style={{backgroundImage: `url(${blog.image})`}}>
                                        <img src={blog.image} alt={blog.alt} className='hidden' />
                                    </div>
                                    <div className="flex flex-col p-3 md:p-5 gap-2 md:gap-4">
                                        <h3 className={`${inter.className} text-[#F4844C] text-start text-[12px]/[12px] md:text-[16px]/[24px] font-normal capitalize`}>
                                            {blog.date}
                                        </h3>
                                        <h2 className={`${inter.className} text-black text-start text-[18px]/[24px] md:text-[20px]/[26px] font-medium capitalize transition-colors ease-in-out duration-300 lg:group-hover:text-[#F4844C]`}>
                                            {truncateText(blog.title, 60)}
                                        </h2>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
            <div className="flex items-center justify-between gap-4">
                <button disabled={currentPage == 1} className={`${inter.className} text-black ${currentPage == 1 ? 'hover:text-black cursor-not-allowed' : 'hover:text-[#FF5600] cursor-pointer'} transition-colors duration-200 ease-in-out text-start text-[18px]/[24px] font-normal capitalize`} onClick={() => {
                    if(currentPage > 0){
                        setCurrentPage(currentPage - 1)
                    }
                }}>previous</button>
                {
                    blogData.length > 6 &&
                    <span className={`${inter.className} text-black text-center text-[16px]/[24px] font-normal capitalize`}>{currentPage} of {Math.ceil(blogData.length / 6)}</span>
                }
                <button className={`${inter.className} cursor-pointer text-black hover:text-[#FF5600] transition-colors duration-200 ease-in-out text-starttext-[18px]/[24px] font-normal capitalize`} 
                onClick={() => {
                    if(blogData.length > indexOfLastBlog){
                        setCurrentPage(currentPage + 1)
                    }
                }}>next</button>
            </div>
        </div>
    )
}

export default BlogsGrid