'use client'
import { Inter } from 'next/font/google'
import blogData from '@/data/blogData.json'
import Link from 'next/link'
import { Metadata } from 'next'
import ClientFooter from '@/components/ClientFooter'
import MoreArticles from '@/components/MoreArticles'


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

const metadata: Metadata = {
  title: 'How Website Design Affects UX | Esper Creations',
  description: 'Learn how smart website design improves user experience, boosts engagement, and drives conversions for Iowa City businesses.',
  alternates: {
    canonical: 'https://espercreations.com/blogs/how-website-design-affects-user-experience/',
  },
  openGraph: {
    title: 'How Website Design Affects UX | Esper Creations',
    description: 'Learn how smart website design improves user experience, boosts engagement, and drives conversions for Iowa City businesses.',
  },
};

export default function Page() {
    
    return (
        <article className='mt-[140px] md:mt-[216px] lg:mt-[224px] flex flex-col lg:max-w-[1130px] mx-5 lg:mx-auto mb-16 lg:mb-26'>
            <div className="flex flex-col gap-12 md:gap-16 w-full">
                <div className='flex flex-col gap-2 md:gap-4 items-center '>
                    <h4 className={`${inter.className} text-center text-[#666666] text-[14px]/[21px] md:text-[16px]/[24px] font-normal capitalize`}>
                        july 16,2025
                    </h4>
                    <h1 className={`${inter.className} text-center text-black text-[32px]/[32px] md:text-[53px]/[53px] font-medium capitalize`}>
                        How Website Design Affects User Experience (UX)
                    </h1>
                </div>
                <div style={{ backgroundImage: `url(/images/blogs/how-website-design-affects-user-experience.webp)` }} className="bg-center w-full h-75 md:h-[500px] bg-cover bg-[#ffeee6]">
                    <img src='/images/blogs/how-website-design-affects-user-experience.webp' alt='Check out our article on how modern website design influences user experience (UX), usability, responsiveness, and SEO performance.' className='hidden' />
                </div>
                <div className="flex flex-col gap-12 md:gap-16">
                    <div className="flex flex-col gap-5">
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            User Experience (UX) refers to every interaction a person has with a product or service. It includes how the product looks, how easy it is to use, how it makes the user feel, and how effectively it meets their needs. UX design is the process of improving these experiences—making them as smooth, enjoyable, and efficient as possible.
                        </p>
                        <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px] md:text-[18px]/[27px]`}>
                            When it comes to websites, design and user perception are deeply connected. While it’s easy to think of design as just aesthetics, it actually goes far beyond that. Good design influences how something feels, how well it functions, and how it performs. In a digital world full of competition, effective design can create strong emotional connections and shape how users perceive your brand—even if they’re not consciously aware of it.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-8 md:gap-10">
                    <h2 className={`${inter.className} text-black text-[22px]/[22px] md:text-[30px]/[30px] font-medium`}>
                        Website design best practices to remember
                    </h2>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            1. First Impressions and Visual Appeal
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Your website’s first impression matters—a lot. Visitors often decide within seconds whether they’ll stay or leave, and visual appeal is a major factor in that decision. A clean, professional look can instantly build trust and signal credibility, while a cluttered or outdated design can do the opposite.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Why aesthetics matter:</span> A visually appealing website draws users in and encourages them to stay longer, explore more, and return again. Design choices like color, layout, and spacing all contribute to a user’s initial reaction and influence their comfort level with your site.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Setting tone and trust:</span> Consistent, polished design tells users that your brand is professional and reliable. Clear visuals, thoughtful structure, and intuitive interactions show that you’ve considered their experience—which builds confidence and encourages engagement.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            2. Navigation and Site Structure
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                How a website is structured and how easily users can navigate it has a direct impact on their experience. Site structure refers to how pages are organized, while navigation is how users move between them.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>The value of intuitive layout:</span> Clear menus, logical flow, and well-placed links help users find what they need without frustration. When navigation is simple and intuitive, users are more likely to stick around and explore.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Supporting user flow:</span> A smooth experience means users can move through your site effortlessly. This reduces bounce rates, increases time spent on your site, and improves conversions. Confusing navigation, on the other hand, can quickly drive visitors away.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            3. Responsiveness and Mobile-Friendliness
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Today’s users expect websites to work flawlessly on any device—whether it’s a desktop, tablet, or smartphone. Responsive design ensures your site automatically adjusts to different screen sizes and orientations.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Designing for every screen:</span> A mobile-friendly website uses flexible grids, images, and layouts to ensure a consistent and easy-to-use experience across devices. This means users don’t need to zoom in, scroll sideways, or deal with broken layouts.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Mobile usability and engagement:</span> If your site is hard to use on a phone, users will leave—plain and simple. Good mobile design boosts satisfaction, keeps visitors engaged longer, and improves SEO rankings. It's a non-negotiable in today’s digital landscape.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            4. Page Speed and Performance
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                How fast your website loads plays a huge role in user experience. People expect speed—and if your site is slow, they’ll leave. A fast site keeps users happy, encourages them to explore, and helps your search rankings.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Why speed matters:</span> Even a delay of a few seconds can lead to higher bounce rates and lost conversions. Users associate quick loading with professionalism and reliability.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Design and performance:</span> Heavy images, animations, or messy code can drag down performance. On the flip side, optimized visuals, clean layouts, and efficient coding can make your site feel faster and more enjoyable to use.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            5. Readability and Typography
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Content is only useful if people can read it. Typography goes beyond font selection—it includes size, line spacing, contrast, and layout. When done well, it improves comprehension and keeps users engaged.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Choosing readable fonts:</span> Clear, legible fonts with enough spacing make reading effortless. On the other hand, small, decorative, or low-contrast text can frustrate users and cause them to leave.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Creating visual hierarchy:</span> Scannability is essential. Users often skim pages, so structuring content with headings, bold text, and visual cues helps them find what they’re looking for quickly.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            6. Color Psychology and Branding
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Colors do more than make your website look nice—they influence how people feel and respond. Strategic use of color helps shape your brand’s personality and can guide user behavior.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Colors and emotions:</span>Different colors evoke different feelings. Blue might feel trustworthy, red might feel urgent, and green might feel calming. Understanding this can help you design a more emotionally resonant experience.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Aligning color with brand and usability:</span> Your color choices should reflect your brand and support accessibility. A consistent color scheme builds recognition, while high-contrast colors ensure readability for all users.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            7. Calls-to-Action (CTAs) and Conversion Optimization
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                A strong website doesn’t just inform—it encourages action. Whether it’s signing up, purchasing, or contacting, CTAs guide users toward meaningful steps.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Making CTAs stand out: </span>Use bold colors, large buttons, and concise wording to make your CTAs clear and compelling. Placement matters too—don’t hide them in hard-to-find spots.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Visibility and placement: </span>CTAs should be visible and feel like a natural next step. Strategically placing them at the right moments can dramatically increase conversions without feeling pushy.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            8. Consistency and User Expectations
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Consistency helps users feel confident as they explore your website. When design patterns stay the same across pages, users don’t have to re-learn how things work—they just know.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Why consistency matters: </span>Uniform layouts, colors, buttons, and language create a seamless experience. This reduces confusion, builds trust, and keeps users focused on your content—not on figuring out how your site works.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                <span className='font-bold'>Meeting vs. breaking expectations: </span>While it’s good to be creative, it’s also important to align with common user behaviors. Surprising users can delight or frustrate—so if you’re breaking patterns, do it with purpose and clarity.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <h3 className={`${inter.className} text-black text-[18px]/[18px] md:text-[24px]/[24px] font-medium`}>
                            Conclusion
                        </h3>
                        <div className="flex flex-col gap-2 md:gap-4">
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Design shapes how users feel, think, and act on your website. From the visual layout to how fast pages load, each decision influences the user journey. When design supports clear navigation, fast performance, and engaging content, it creates a smooth, enjoyable experience.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                Putting the user first in your design choices isn't just smart—it’s essential. A user-focused approach builds trust, increases satisfaction, and lays the foundation for long-term success.
                            </p>
                            <p className={`${inter.className} text-[#333333] font-normal text-[16px]/[24px]`}>
                                UX is your silent sales rep — make it a good one.
                            </p>
                        </div>
                    </div>
                </div>
                <p className={`${inter.className} text-[#333333] font-bold text-[16px]/[24px]`}>
                    Let  
                    <span>
                        <a href='https://espercreations.com/' className={`${inter.className} text-[#F4844C] mx-1 font-normal text-[16px]/[24px]`}>
                        Esper Creations
                        </a>
                    </span>
                    upgrade your user experience today.
                </p>
            </div>
            <MoreArticles />
            <ClientFooter/>
        </article>
    )
}