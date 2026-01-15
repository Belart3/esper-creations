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
        <div className="flex flex-col gap-8 md:gap-12">
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
    {blogData
      .slice(indexOfFirstBlog, indexOfLastBlog)
      .map((blog, index) => (
        <Link
          href={`/blogs/${blog.url.toLowerCase()}`}
          key={index}
          className="group"
        >
          <div className="h-full bg-white rounded-2xl overflow-hidden border border-[#EDEDED] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl">
            {/* Image */}
            <div
              className="relative h-40 md:h-56 bg-center bg-cover bg-no-repeat bg-[#ffeee6] overflow-hidden"
              style={{ backgroundImage: `url(${blog.image})` }}
            >
              <img src={blog.image} alt={blog.alt} className="hidden" />

              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-3 p-4 md:p-6">
              <span
                className={`${inter.className} text-[#F4844C] text-[12px]/[12px] md:text-[14px]/[20px] font-normal`}
              >
                {blog.date}
              </span>

              <h2
                className={`${inter.className} text-black text-[18px]/[24px] md:text-[20px]/[28px] font-medium transition-colors duration-300 group-hover:text-[#FF5600]`}
              >
                {truncateText(blog.title, 65)}
              </h2>
            </div>
          </div>
        </Link>
      ))}
  </div>

  {/* Pagination */}
  <div className="flex items-center justify-between pt-4">
    <button
      disabled={currentPage === 1}
      onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      className={`${inter.className} text-[16px]/[24px] font-normal transition-colors duration-200 cursor-pointer
        ${
          currentPage === 1
            ? "text-[#999999] cursor-not-allowed"
            : "text-black hover:text-[#FF5600]"
        }`}
    >
      ← Previous
    </button>

    {blogData.length > 6 && (
      <span
        className={`${inter.className} text-[#666666] text-[14px]/[24px] font-normal`}
      >
        Page {currentPage} of {Math.ceil(blogData.length / 6)}
      </span>
    )}

    <button
      onClick={() =>
        blogData.length > indexOfLastBlog &&
        setCurrentPage(currentPage + 1)
      }
      className={`${inter.className} text-[16px]/[24px] font-normal transition-colors duration-200 cursor-pointer
        ${
          blogData.length <= indexOfLastBlog
            ? "text-[#999999] cursor-not-allowed"
            : "text-black hover:text-[#FF5600]"
        }`}
    >
      Next →
    </button>
  </div>
        </div>
    )
}

export default BlogsGrid