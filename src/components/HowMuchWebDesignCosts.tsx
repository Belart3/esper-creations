'use client'
import { Inter } from 'next/font/google'
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

export default function HowMuchWebDesignCosts() {
    const path = usePathname().replace('blogs' , '')
    
    return (
        <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-5 lg:mx-auto mb-16 lg:mb-26'>
            <div className="flex flex-col gap-12 md:gap-16 w-full">
                <div className='flex flex-col gap-2 md:gap-4 items-center '>
                    <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal capitalize`}>
                        july 16,2025
                    </h4>
                    <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium capitalize`}>
                        How Much Does Website Design Cost?
                    </h1>
                </div>
                <div style={{ backgroundImage: `url(/images/blogs/how-much-does-website-design-cost.webp)` }} className="bg-center w-full h-75 md:h-[500px] bg-cover bg-[#ffeee6]">
                    <img src='/images/blogs/how-much-does-website-design-cost.webp' alt='How Much Does Website Design Cost? check out our post and get more insight into the intricacies of web design cost' className='hidden' />
                </div>
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-5">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            “How much does a website cost?” This is one of the most common questions businesses and entrepreneurs ask when planning to build or redesign a website. The truth is, there’s no universal price tag. Website design costs vary significantly depending on the type of site, desired features, and who you hire to build it.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            In this post, we’ll break down the general cost ranges, key factors that influence pricing, and whether to choose a freelancer or an agency—so you can plan your budget wisely.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        General Cost Ranges
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                            Website costs can vary dramatically. Below is a breakdown of the typical price ranges based on the type of website you want to build:
                        </p>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <div className="border border-[#374151] !overflow-hidden w-full md:w-[400px]">
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className={`text-[#333333] text-[12px]/[18px] tracking-[-0.48px] font-normal border-b border-[#374151]`}>
                                            <th className='text-start p-5 capitalize'>type</th>
                                            <th className='text-start p-5 capitalize'>estimated range</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className={`text-[#333333] text-[16px]/[24px] tracking-[-0.64px] font-normal relative border-b last-of-type:!border-0 border-[#374151]`}>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    Basic Website
                                                </p>
                                            </td>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    $1,500 – $3,000
                                                </p>
                                            </td>
                                        </tr> 
                                        <tr className={`text-[#333333] text-[16px]/[24px] tracking-[-0.64px] font-normal relative border-b last-of-type:!border-0 border-[#374151]`}>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    Business Website
                                                </p>
                                            </td>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    $3,000 – $8,000
                                                </p>
                                            </td>
                                        </tr> 
                                        <tr className={`text-[#333333] text-[16px]/[24px] tracking-[-0.64px] font-normal relative border-b last-of-type:!border-0 border-[#374151]`}>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    E-Commerce Website
                                                </p>
                                            </td>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    $8,000 – $25,000
                                                </p>
                                            </td>
                                        </tr> 
                                        <tr className={`text-[#333333] text-[16px]/[24px] tracking-[-0.64px] font-normal relative border-b last-of-type:!border-0 border-[#374151]`}>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    Fully Custom Platform
                                                </p>
                                            </td>
                                            <td className='w-[200px] p-5'>
                                                <p className="capitalize text-[#333333] text-[16px]/[24px] font-medium">
                                                    $25,000+
                                                </p>
                                            </td>
                                        </tr> 
                                    </tbody>
                                </table>
                            </div> 
                            <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px] italic`}>
                                These are general estimates. Costs can go higher or lower depending on complexity, platform, and expertise.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            Key Factors That Affect Website Cost
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Several variables impact how much you’ll spend on a website. Here are the key ones to consider:
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>1. Number of Pages</span> <br /> The more pages your website has (e.g., Home, About, Services, Blog, Contact, etc.), the more design and development time is needed—especially if each page is uniquely designed.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>2. Custom Features</span><br />Do you need booking systems, user dashboards, payment gateways, or integrations with third-party tools? Custom features significantly increase both time and cost.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>3. Design Quality</span><br />A custom-designed website tailored to your brand will cost more than using a pre-made template—but it often delivers a better user experience and branding impact.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>4. Content Writing</span><br />If you don’t already have copy, you’ll need to hire a content writer. Quality web copywriting for SEO and conversion can add a few hundred to a few thousand dollars to your budget.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>5. Ongoing Maintenance</span><br />Websites are not one-time purchases. You’ll need ongoing updates, backups, security monitoring, and possibly hosting and domain renewals.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            Freelancer vs Agency: Who Should You Hire?
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Freelancers</span>
                            </p>
                            <ul className='list-disc'>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    <span className='font-bold'>Pros:</span> More affordable, flexible, good for small projects.
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    <span className='font-bold'>Cons:</span> May lack broader support (e.g., SEO, UX, security). Skillsets vary widely.
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px]`}>
                                Agencies
                            </p>
                            <ul className='list-disc'>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    <span className='font-bold'>Pros:</span> Full-service teams handle everything from design and development to SEO, branding, and post-launch support.
                                </li>
                                <li className={`${inter.className} ms-10 text-[#333333] font-normal text-[16px]/[24px]`}>
                                    <span className='font-bold'>Cons:</span> Higher costs, often require longer timelines.
                                </li>
                            </ul>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Tip:</span> Choose based on your project's complexity. A solo freelancer may suffice for a simple site, but for larger or strategic projects, an agency is usually worth the investment.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 md:gap-6">
                            <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                                Conclusion
                            </h3>
                            <div className="flex flex-col gap-2 md:gap-4">
                                <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Think of your website not as a cost, but as an investment in your brand’s online presence. A professionally designed site improves credibility, user experience, and conversions—and over time, it pays for itself.
                                </p>
                                <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                    Whether you're launching a personal blog, a local business site, or a global e-commerce platform, understanding the cost factors can help you plan effectively and avoid surprise expenses.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <MoreArticles />
            <ClientFooter/>
        </article>
    )
}