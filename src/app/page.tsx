"use client";
import { Inter } from "next/font/google";
import SectionHead from "@/components/SectionHead";
import plans from '@/data/productPlans.json';
import faq from '@/data/faq.json';
import AccordionComponent from "@/components/AccordionComponent";
import WorkBanner from "@/components/WorkBanner";
import BtnOrange from "@/components/BtnOrange";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import 'react-phone-number-input/style.css';
import { useEffect, useState, useRef } from "react";
import React from "react";
import Marquee from "react-fast-marquee";
import BookingForm from "@/components/BookingForm";
import HeroForm from "@/components/HeroForm";
import PricingCards from "@/components/PricingCards";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [float, setFloat] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const router = useRouter();
  // const isActive = router.pathname;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setScrollPosition(scrollPercent);

      if (scrollTop > 0) {
        setFloat(true)
      } else {
        setFloat(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <header className="bg-[#FFEEE6CC] pt-[150px] pb-9 overflow-hidden" ref={containerRef}>
        <div className=" max-w-[1440px] mx-auto">
          <div className="mx-5 md:mx-6 flex flex-col gap-16 xl:max-w-[1226px] xl:mx-auto relative z-0">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6 max-w-[1050px] mx-auto">
                <h1 className={`${inter.className} text-[44px]/[44px] md:text-[73px]/[73px] lg:text-[104px]/[104px] font-semibold tracking-[-2.64px] text-center text-black`}>
                  #1 Web Design & <br /> Digital Marketing Agency.
                </h1>
                <p className={`${inter.className} text-center text-[#666666] text-[16px]/[24px] md:text-[18px]/[27px] font-normal tracking-[-0.64px] md:tracking-[-0.72px] max-w-[600px] mx-auto`}>
                  Bring your vision to life with results-driven design, optimized funnels, and powerful marketing. We help businesses build unforgettable brands and transform online presence into consistent revenue—at scale.
                </p>
              </div>
              <div className="flex p-4 md:p-6 xl:py-8 xl:px-10 rounded-[24px] bg-white flex-col items-center justify-between xl:flex-row xl:justify-around gap-6 xl:gap-10 w-full max-w-[500px] xl:max-w-none mx-auto">
                <HeroForm />
              </div>
            </div>
            {/* floating header boxes */}
            <ExportedImage 
              src={'/images/hero-floats/ad-1.webp'} 
              className={`${float ? ' delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute -top-[100px] lg:-top-[100px] left-1/2 -translate-x-1/2 z-[0] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} 
              alt="Less Average CPC, More Ads Impressions" 
              width={150}
              height={150}
              style={{
                transform: `translateY(-${Math.min(scrollPosition * 40, 220)}%)`,
                opacity: `${100 - (scrollPosition * 50)}%`
              }}
            />  
            <ExportedImage 
              src={'/images/hero-floats/ad-2.webp'} 
              className={`${float ? '! delay-0' : ''} transition-all duration-300 ease-linear  hidden md:flex size-[120px] lg:size-[150px] absolute top-[70px] -left-[53px] lg:left-[5px] z-[-10] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} 
              alt="Git-Global Immigration Services Ad"  
              width={150}
              height={150}
              style={{
                transform: `translateX(-${Math.min(scrollPosition * 40, 220)}%)`,
                opacity: `${100 - (scrollPosition * 50)}%`
              }}
            />
            <ExportedImage 
              src={'/images/hero-floats/ad-3.webp'} 
              className={`${float ? 'delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute top-[344px] lg:top-[350px] left-[80px] z-[-10] rotate-[15deg] shadow-2xl shadow-[#00000080]`} 
              alt="Increase in Ad Clicks"  
              width={150}
              height={150}
              style={{
                transform: `translateX(-${Math.min(scrollPosition * 40, 220)}%)`,
                opacity: `${100 - (scrollPosition * 50)}%`
              }}
            />  
            <ExportedImage 
              src={'/images/hero-floats/ad-4.webp'} 
              className={`${float ? ' delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute top-[344px] lg:top-[350px] right-[80px] z-[-10] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} 
              alt="Increase in Average Session Duration"   
              width={150}
              height={150}             
              style={{
                transform: `translateX(${Math.min(scrollPosition * 40, 220)}%)`,
                opacity: `${100 - (scrollPosition * 50)}%`
              }}
            />
            <ExportedImage 
              src={'/images/hero-floats/ad-5.webp'} 
              className={`${float ? 'delay-0' : ''} transition-all duration-300 ease-linear  hidden md:flex size-[120px] lg:size-[150px] absolute top-[70px] -right-[53px] lg:right-[5px] z-[-10] rotate-[15deg] shadow-2xl shadow-[#00000080]`} 
              alt="Git-Global Website Revivified" 
              width={150}
              height={150}
              style={{
                transform: `translateX(${Math.min(scrollPosition * 40, 220)}%)`,
                opacity: `${100 - (scrollPosition * 50)}%`
              }}
            />
          </div>
          <div className="flex flex-col gap-5 mt-16">
            <h2 className={`${inter.className} text-center text-[#999999] text-[18px]/[18px] md:text-[20px]/[20px] font-semibold tracking-[-1.08px] md:tracking-[-1.2px] max-w-[600px] mx-auto`}>
              Trusted by 2,500+ modern businesses, founders & creators
            </h2>
            <Marquee speed={100} loop={0} pauseOnHover={true} gradient={true} gradientWidth={150} gradientColor="#FFEEE6CC" className="cursor-pointer">
              <a href="" className="flex !shrink-0 mx-10">
                <ExportedImage src={"/images/partners/acapulco-grocery-and-bakery.webp"} alt="acapulco-grocery-and-bakery" className='h-[67px]' width={120} height={67}/>
              </a>
              <a href="" className="flex !shrink-0 w-[84px] md:w-[130px] mx-5 lg:mx-16">
                <ExportedImage src={"/images/partners/cardmines.webp"} alt="cardmines" className='' width={120} height={67} />
              </a>
              <a href="" className="flex !shrink-0 w-[84px] md:w-[130px] mx-5 lg:mx-16">
                <ExportedImage src={"/images/partners/iowa-digital-solutions.webp" }alt="iowa-digital-solutions" className='' width={120} height={67} />
              </a>
              <a href="" className="flex !shrink-0 w-[84px] md:w-[130px] mx-5 lg:mx-16">
                <ExportedImage src={"/images/partners/esport-iowa-city.webp" }alt="esport-iowa-city" className='' width={120} height={67} />
              </a>
              <a href="" className="flex !shrink-0 w-[84px] md:w-[130px] mx-5 lg:mx-16">
                <ExportedImage src={"/images/partners/magic-bail-bonds.webp"} alt="magic-bail-bonds" className='' width={120} height={67} />
              </a>
              <a href="" className="flex !shrink-0 w-[84px] md:w-[130px] mx-5 lg:mx-16">
                <ExportedImage src={"/images/partners/rose-heaven-nursing-home.webp"}alt="rose-heaven-nursing-home" className='' width={120} height={67} />
              </a>      
            </Marquee>
          </div>
        </div>
      </header>
      <main>
        <section className=" max-w-[1440px] mx-auto py-16 px-5 md:py-[104px] md:px-6 lg:px-14 flex flex-col gap-[104px]">
          <section className="flex flex-col gap-12 md:gap-16 scroll-mt-25" id="services">
            <SectionHead title="Results-driven Marketing." description="You deserve more than likes and pretty websites. We build systems designed to convert, scale, and dominate your market." />
            <Services />
          </section>
          <section className="flex flex-col gap-12 md:gap-16">
            <SectionHead title="Remarkable Results." description="See how we helped founders just like you scale traffic, leads, and revenue." />
            <Reviews />
          </section>
          <section className="flex flex-col gap-12 md:gap-16 scroll-mt-25" id="work">
            <SectionHead title="See Our Work." description="Still not convinced about us? see what we have created for those who trusted us." />
            <WorkBanner />
          </section>
          <section className="flex flex-col gap-12 md:gap-16 scroll-mt-25" id="pricing">
            <SectionHead title="Pricing Plans." description="All-in-one marketing solutions built to grow your business—whether you're scaling or just getting started." />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
              {
                plans.map((plan, index) => (
                  <PricingCards
                    key={index}
                    index={index}
                    productColor={plan.productColor}
                    product={plan.product}
                    price={plan.price}
                    details={plan.details}
                    features={plan.features}
                    cta={plan.cta}
                  />
                ))
              }
            </div>
          </section>
          <section className="flex flex-col lg:grid lg:grid-cols-2 lg:items-start gap-10 scroll-mt-25" id="faq">
            <div className="flex lg:hidden mx-auto">
              <SectionHead title="Frequently Asked Questions." description="Can’t find your answer? please send us a mail by clicking the button below. " />
            </div>
            <div className="flex-col gap-6 hidden justify-center items-start lg:flex">
              <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-start text-black`}>
                Frequently Asked Questions.
              </h2>
              <p className={`${inter.className} text-[#666666] text-center text-[16px]/[24px] md:text-[18px]/[27px] tracking-[-0.64px] md:tracking-[-0.72px] font-normal`}>
                Can’t find your answer? please send us a mail by clicking the button below.
              </p>
              <Link href='/#contact-us'>
                <BtnOrange cta="i still have questions!" />
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              {
                faq.map((item, index) => (
                  <AccordionComponent question={item.question} answer={item.answer} key={index} />
                ))
              }
            </div>
            <Link href='/#contact-us' className="w-fit mx-auto">
              <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] shadow-lg shadow-[#FF560060] w-full md:max-w-[300px] md:w-fit mx-auto lg:hidden cursor-pointer`}>
                i still have questions!
              </button>
            </Link>
          </section>
          <section className="flex flex-col gap-10 bg-black rounded-[40px] py-10 px-5 md:py-14 md:px-10 lg:p-10 scroll-mt-25 bg-contain bg-bottom sm:bg-[50%_110%] lg:bg-[50%_140%] bg-no-repeat relative" id="contact-us">
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-10">
              <div className="flex flex-col gap-5 h-full justify-center">
                <div className="flex flex-col gap-4 items-center lg:items-start">
                  <ExportedImage src="/images/logo.svg" alt="esper creation's logo" className="size-10 lg:size-15" width={40} height={40} />
                  <p className={`${inter.className} text-[20px]/[20px] md:text-[24px]/[24px] text-white font-semibold tracking-[-0.8px]`}>
                  Esper Creations
                </p>
                </div>
                <div className="flex flex-col gap-5">
                  <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] xl:text-[73px]/[73px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-center lg:text-start text-white`}>
                    Transform your online presence into a powerful revenue tool.
                  </h2>
                  <p className={`${inter.className} text-[18px]/[27px] tracking-[-0.72px] font-normal text-[#E6E6E6] text-center lg:text-start`}>
                    We are ready to turn your business into an unforgettable brand and transform your online presence into consistent revenue—at scale.
                  </p>
                </div>
              </div>
              <div className="p-4 md:p-6 bg-white rounded-[24px] flex flex-col items-center">
                <BookingForm />
              </div>
            </div>
            <div className="h-px w-full bg-[#333]"></div>
            <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 md:gap-10 w-full max-w-[1440px] mx-auto'>
              <h2 className={`${inter.className} text-[#FF5600] text-[16px]/[16px] text-center tracking-[-0.64px] font-semibold my-5 capitalize`}>
                  I want to send an email!
              </h2>
              <p className={`${inter.className} text-[14px]/[21px] md:text-[16px]/[24px] tracking-[-0.56px] md:tracking-[-0.64] text-[#666666] capitalize font-normal text-center`}>
                  © 2025 Esper Creations All rights reserved
              </p>
            </div>
            <ExportedImage src='/images/transparent-esper-text.png' alt='Esper Creations' className='absolute bottom-[-40px] md:bottom-[-70px] lg:bottom-[-150px] left-0 w-full z-0' width={400} height={200}  />
          </section>
        </section>
      </main>
    </>
  );
}
