'use client'
import { Inter } from 'next/font/google'
import blogData from '@/data/blogData.json'
import Link from 'next/link'
import { Metadata } from 'next'
import ClientFooter from '@/components/ClientFooter'
import { usePathname } from 'next/navigation'
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

export default function WebsiteDesignPrinciples() {
    const path = usePathname().replace('blogs' , '')
    
    return (
        <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-5 lg:mx-auto mb-16 lg:mb-26'>
            <div className="flex flex-col gap-12 md:gap-16 w-full">
                <div className='flex flex-col gap-2 md:gap-4 items-center '>
                    <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal capitalize`}>
                        August 04,2025
                    </h4>
                    <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium capitalize`}>
                        Website Design Principles That Drive Results
                    </h1>
                </div>
                <div style={{ backgroundImage: `url(/images/blogs/website-design-principles-that-drive-results.webp)` }} className="bg-center w-full h-75 md:h-[500px] bg-cover bg-[#ffeee6]">
                    <img src='/images/blogs/website-design-principles-that-drive-results.webp' alt='Person creating a website wireframe on paper and digital tablet, illustrating the application of key website design principles for layout, usability, and conversions.' className='hidden' />
                </div>
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-5">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            Every website design has a purpose, whether it’s to attract leads, sell products, or grow your brand online. Yet, many small business websites look great but fail to deliver real results. At Esper Creations, we’ve been designing and building websites since 2015, specializing in Wordpress, Custom coded solutions, e-commerce stores and brochure websites for local service businesses like plumbers, accountants, restaurants (you name them). Over the years, we’ve developed website design principles that consistently turn websites into conversion-focused online assets.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            Here’s a guide based on our experience, case studies, and best practices for building websites that drive traffic, engagement, and results.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        1. Design Like a Marketer, Not Just a Designer
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            One of the first things we emphasize is that every pixel has a job. Websites aren’t just for aesthetics; they exist to guide visitors toward action, whether that’s filling out a form, booking a service, or purchasing a product online.
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] italic`}>
                                We approach web design for conversions with a marketing mindset:
                            </p>
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Forms optimized for completion to capture leads
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    CTAs strategically placed with compelling copy and color
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Layouts that naturally lead users’ eyes through your content
                                </li>
                            </ul>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Clean, conversion-focused design eliminates guesswork and ensures users can complete desired actions effortlessly.                            
                            </p>
                        </div>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        2. Mobile-First Layouts Are Essential
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            With most users accessing websites on mobile devices, a mobile-friendly website isn’t optional. Mobile-first design ensures that buttons, forms, and content flow naturally on smaller screens, improving engagement and increasing conversions.
                        </p>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        3. Minimalist Design Reduces Cognitive Load
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Cluttered websites overwhelm users. Minimalist UI/UX design highlights key content and conversion points. Benefits include:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Improved readability and navigation
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Highlighting products and services
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Faster page load times, enhancing user experience
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        4. Story-Driven Hero Sections
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Your hero section is the first thing visitors see. A story-first hero section communicates who you are, what you offer, and why it matters — immediately. This builds trust and encourages users to take action, from signing up for services to requesting a quote.
                        </p>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        5. Fast Load Times & Optimized Media
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Nothing kills conversions faster than a slow website. We focus on:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Using lightweight media files and optimized images
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Implementing fast-loading CSS and frameworks like Tailwind CSS and Next.js
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Ensuring SEO-friendly performance to rank higher on search engines
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        6. Data-Backed Design Decisions
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            We use tools like Google Analytics and user feedback to validate design choices. This ensures your website isn’t just visually appealing but also effective in meeting your business goals.
                        </p>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        7. Avoid Overused Trends That Hurt Results
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Some design trends are more harmful than helpful. Examples include:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Heavy animations that slow down your website
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Excessive pop-ups that frustrate visitors
                                </li>
                            </ul>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Instead, we focus on timeless, functional website design that prioritizes user experience and conversions.
                            </p>
                        </div>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        8. Real Results from Real Projects
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Case Study 1: <a href="https://gregslawn.com/" className={`${inter.className} text-[#ff5622] font-normal text-[16px]/[24px]`}> Greg’s Lawn & Landscaping</a>
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Problem: Low form submissions
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Solution: Rebuilt the quote form, added blog content, and ran ads, driving traffic to the site
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Result: Increased inquiries and completed quote forms, generating more leads
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Case Study 2: <a href="https://gitsiowa.com/" className={`${inter.className} text-[#ff5622] font-normal text-[16px]/[24px]`}>GITS Iowa</a>
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Problem: Outdated website with low engagement
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Solution: Complete redesign with modern UI/UX
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Result: Higher user engagement, increased feedback, and more bookings
                                </li>
                            </ul>
                        </div>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            These examples demonstrate the power of combining conversion-focused design with SEO-friendly layouts.
                        </p>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        9. Our Website Design Process
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            We follow a structured, results-driven workflow:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Discovery & client interview — Understand business goals and challenges
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Wireframes & prototypes — Plan the user journey
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Design — Create visually appealing, functional layouts
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Development & testing — Build and validate website functionality
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Client feedback — Incorporate revisions to ensure alignment
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Final testing & launch — Deliver a fast, responsive, and engaging website
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        10. Signature Philosophy
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            At Esper Creations, we live by:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <ul className="list-decimal ">
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    “Bring your vision to life with results-driven design.”
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Design like a marketer, not just a designer.”
                                </li>
                            </ul>
                        </div>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            We merge story, brand personality, layout psychology, and SEO optimization to build websites that look great and convert visitors into customers.
                        </p>
                    </div>

                    <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                        A website is more than a digital brochure — it’s a business tool. By applying mobile-first design, conversion-focused layouts, fast load times, and data-driven decisions, you can create a website that drives measurable results. 
                    </p>
                    <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                        Whether you’re a small business owner, startup founder, or anyone looking to design and build a website, remember: every design choice should drive results. Ready to transform your website into a conversion machine? Contact Esper Creations today to discuss your project and <a href="https://espercreations.com/#contact-us" className={`${inter.className} text-[#ff5622] font-normal text-[16px]/[24px]`}> get started!</a>
                    </p>
                </div>
            </div>
            <MoreArticles />
            <ClientFooter/>
        </article>
    )
}