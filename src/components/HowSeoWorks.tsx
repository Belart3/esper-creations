'use client'
import { Inter } from 'next/font/google'
import blogData from '@/data/blogData.json'
import Link from 'next/link'
import ClientFooter from '@/components/ClientFooter'
import { usePathname } from 'next/navigation'
import { Metadata } from 'next'
import MoreArticles from '@/components/MoreArticles'


export const inter = Inter(
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

export default function HowSeoWorks() {
    const path = usePathname().replace('blogs' , '')
    
    return (
        <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-5 lg:mx-auto mb-16 lg:mb-26'>
            <div className="flex flex-col gap-12 md:gap-16 w-full">
                <div className='flex flex-col gap-2 md:gap-4 items-center '>
                    <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal capitalize`}>
                        july 24,2025
                    </h4>
                    <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium capitalize`}>
                        How SEO Works: A Simple Guide to Search Engine Optimization
                    </h1>
                </div>
                <div style={{ backgroundImage: `url(/images/blogs/how-seo-works.webp)` }} className="bg-center w-full h-75 md:h-[500px] bg-cover bg-[#ffeee6]">
                    <img src='/images/blogs/how-seo-works.webp' alt='Learn how SEO works from our Simple Guide to Search Engine Optimization' className='hidden' />
                </div>
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-5">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            What Is SEO and Why Does It Matter?
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            Search Engine Optimization (SEO) is the practice of improving your website to help it rank higher in search engine results, especially Google. When someone types in a question or keyword, SEO is what determines whether your site shows up and how high it ranks.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            The better your SEO, the more visibility you gain, which leads to more organic traffic, leads, and conversions without paying for ads.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            But how exactly does SEO work? Let’s break it down into three main components.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            1. On-Page SEO: Content That Speaks to Search Engines (and Users)
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            On-page SEO is everything you can control on your website to improve rankings.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px]`}>
                            Key Elements:
                        </p>
                        <ul className="flex flex-col gap-2 md:gap-4 list-disc ms-5">
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Keywords:</span> <br /> Research and include the right search terms users type into Google
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Page Titles & Meta Descriptions:</span> <br /> Tell search engines and users what each page is about
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Header Tags (H1, H2, H3):</span> <br /> Organize content in a clear, scannable format
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Internal Linking:</span> <br /> Connect related pages on your site to guide visitors and bots
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Image Optimization:</span> <br /> Use alt text and compress images for performance
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            2. Off-Page SEO: Your Site’s Reputation on the Web
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Off-page SEO refers to actions outside your website that influence your search rankings, primarily by building trust and authority.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px]`}>
                            Key Strategies:
                        </p>
                        <ul className="flex flex-col gap-2 md:gap-4 list-disc ms-5">
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Backlinks:</span> <br /> Other reputable websites linking to yours (like citations or features)
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Brand Mentions:</span> <br /> Your business name appearing across directories, reviews, or news
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Social Shares:</span> <br /> While it is not a direct ranking factor, social proof boosts visibility
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Guest Blogging & PR:</span> <br /> Writing for other websites helps build backlinks and authority
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Image Optimization:</span> <br /> Use alt text and compress images for performance
                            </li>
                        </ul>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Google sees backlinks as votes of confidence. The more trustworthy sites link to you, the more search engines believe you’re a valuable source.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            3. Technical SEO: Making Your Site Easy to Crawl and Index
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Technical SEO ensures your website is structured in a way that search engines can easily crawl, understand, and index it.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px]`}>
                            Essentials:
                        </p>
                        <ul className="flex flex-col gap-2 md:gap-4 list-disc ms-5">
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Site Speed:</span> <br /> Fast-loading websites rank better and reduce bounce rates
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Mobile-Friendliness:</span> <br /> With 60%+ of traffic on mobile, responsive design is critical
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Sitemaps:</span> <br /> A sitemap helps search engines find and index all your pages
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Secure HTTPS:</span> <br /> Security (SSL certificate) is a ranking factor
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Clean Code:</span> <br /> Avoid broken links, duplicate content, or JavaScript-heavy pages that block crawling
                            </li>
                        </ul>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Use tools like <a target='_blank' className='text-[#ff5600] underline' href="https://search.google.com/search-console/about">Google Search Console</a>, <a target='_blank' className='text-[#ff5600] underline' href="https://www.screamingfrog.co.uk/seo-spider/">Screaming Frog</a>, and <a target='_blank' className='text-[#ff5600] underline' href="https://pagespeed.web.dev/">PageSpeed Insights</a> to help audit your site's technical SEO health.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            How Search Engines Rank Websites
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Search engines like Google use complex algorithms to determine rankings. While the exact formulas are secret, SEO experts know the main factors that influence visibility:
                        </p>
                        <ul className="flex flex-col gap-2 md:gap-4 list-disc ms-5">
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Relevance</span> (Does your content match the search?)
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Authority</span> (Are other sites linking to you?)
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>User Experience</span> (Is your site fast, mobile-friendly, and easy to navigate?)
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Freshness</span> (Is your content up-to-date?)
                            </li>
                        </ul>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            SEO helps search engines understand your content and trust that it’s the best result to show users.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            Conclusion: SEO is the Bridge Between Your Website and Real People Searching
                        </h2>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            When done right, SEO connects your content to the people who are actively searching for it. It’s not about tricking Google—it’s about helping Google understand why your site deserves to rank.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            By combining strong on-page content, off-page reputation building, and clean technical foundations, SEO helps your business get seen, trusted, and chosen—all without paid advertising.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                            3 Tools to Get Started with SEO Today
                        </h2>
                        <ul className="flex flex-col gap-2 md:gap-4 list-decimal ms-5">
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Google Search Console</span> to track rankings, fix errors, submit sitemaps and many more insights into the data from your website, a very important and recommended tool.
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Yoast SEO or RankMath:</span> Built your website with wordpress? use any of these plugins to Optimize titles, meta tags, readability of your website.
                            </li>
                            <li className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Semrush, Ubersuggest or Ahrefs:</span> Choose any from <a target='_blank' className='text-[#ff5600] underline' href="https://www.semrush.com/">Semrush</a>, <a target='_blank' className='text-[#ff5600] underline' href="https://neilpatel.com/ubersuggest/">Ubbersuggest</a> or <a target='_blank' className='text-[#ff5600] underline' href="https://ahrefs.com/">Ahrefs</a> to find keywords and analyze competitors
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <MoreArticles />
            <ClientFooter/>
        </article>
    )
}