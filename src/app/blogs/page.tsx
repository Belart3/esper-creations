import ClientFooter from '@/components/ClientFooter';
import { Inter } from 'next/font/google';
import React from 'react'
import blogData from '@/data/blogData.json'
import Link from 'next/link';
import type { Metadata } from "next";
import BlogsGrid from '@/components/BlogsGrid';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Creative Design Meets SEO Strategy | Esper Creations',
  description: 'How web design and SEO strategy work together to boost user experience, search rankings, and online visibility. Learn best practices with Esper Creations.',
  alternates: {
    canonical: 'https://espercreations.com/blogs',
  },
  openGraph: {
    title: 'Creative Design Meets SEO Strategy | Esper Creations',
    description: 'Discover how creative web design and smart SEO strategy work together to boost user experience, search rankings, and online visibility. Learn best practices with Esper Creations.',
  },
};

const page = () => {
    const truncateText = ( text: string, textLimit: number ) => {
        const words = text.split('');
        if (words.length > textLimit) {
            return words.slice(0, textLimit).join('') + "...";
        }
        return text;
    }
    return (
        <div className='mt-35 md:mt-54 lg:mt-56 flex flex-col gap-12 md:gap-16 mb-16 md:mb-[104px] max-w-[1130px] mx-5 lg:mx-auto'>
            <div className="flex items-center justify-center max-w-[700px] mx-auto">
                <h1 className={`${inter.className} text-black text-center text-[32px]/[32px] md:text-[53px]/[53px] font-medium`}>
                    Esper Creations Blog: <br />Web Design, SEO & Digital Marketing Insights
                </h1>
            </div>
            <BlogsGrid  />
            <ClientFooter/>
        </div>
    )
}

export default page