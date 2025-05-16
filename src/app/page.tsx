"use client";
import { Inter } from "next/font/google";
import services from "@/data/services.json"
import SectionHead from "@/components/SectionHead";
import plans from '@/data/productPlans.json';
import faq from '@/data/faq.json';
import AccordionComponent from "@/components/AccordionComponent";
import WorkBanner from "@/components/WorkBanner";
import BtnOrange from "@/components/BtnOrange";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useEffect, useState, useRef } from "react";
import React from "react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [value, setValue]= useState<string | undefined>(undefined)
  const [float, setFloat] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // const router = useRouter();
  // const isActive = router.pathname;

  useEffect(() => {
    // if (containerRef.current) {
    //   console.log("Actual height:", containerRef.current.offsetHeight);
    // }

    const handleScroll = () => {

      const scrollPosition = window.scrollY || window.pageYOffset;
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setScrollPosition(scrollPercent);
      // console.log(scrollPercent)
      // const scrollHeight = containerRef.current ? containerRef.current.offsetHeight : 0;

      if (scrollPosition > 0) {
        setFloat(true)
      } else {
        setFloat(false);
      }
  };
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener on component unmount
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
                <form action="" className="flex flex-col xl:flex-row gap-3 xl:gap-6 w-full xl:w-fit">
                    <input type="text" className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal border-none outline-[#FF5600] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600]`} placeholder="Full Name" />
                    <input type="email" className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal border-none outline-[#FF5600] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600]`} placeholder="Email Address" />
                    <PhoneInput
                    placeholder="Phone Number"
                    defaultCountry="US"
                    value={value}
                    onChange={setValue}
                    className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600]`}/>
                </form>
                <BtnOrange  cta="transform my online presence!" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <h2 className={`${inter.className} text-center text-[#999999] text-[18px]/[18px] md:text-[20px]/[20px] font-semibold tracking-[-1.08px] md:tracking-[-1.2px] max-w-[600px] mx-auto`}>
                Trusted by 2,500+ modern businesses, founders & creators
              </h2>
              <div className="flex gap-8 md:gap-14 items-center justify-center overflow-hidden">
                <a href="" className="flex !shrink-0">
                  <img src={"/images/partners/acapulco-grocery-and-bakery.png"} alt="acapulco-grocery-and-bakery" className='h-[67px]'/>
                </a>
                <a href="" className="flex !shrink-0 w-[84px] md:w-[130px]">
                  <img src={"/images/partners/cardmines.png"} alt="cardmines" className='' />
                </a>
                <a href="" className="flex !shrink-0 w-[84px] md:w-[130px]">
                  <img src={"/images/partners/iowa-digital-solutions.png" }alt="iowa-digital-solutions" className='' />
                </a>
                <a href="" className="flex !shrink-0 w-[84px] md:w-[130px]">
                  <img src={"/images/partners/esport-iowa-city.png" }alt="esport-iowa-city" className='' />
                </a>
                <a href="" className="flex !shrink-0 w-[84px] md:w-[130px]">
                  <img src={"/images/partners/magic-bail-bonds.png"} alt="magic-bail-bonds" className='' />
                </a>
                <a href="" className="flex !shrink-0 w-[84px] md:w-[130px]">
                  <img src={"/images/partners/rose-heaven-nursing-home.png"}alt="rose-heaven-nursing-home" className='' />
                </a>
              </div>
            </div>
            {/* floating header boxes */}
            <img src={'/images/hero-floats/ad-1.webp'} className={`${float ? ' delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute -top-[100px] lg:-top-[100px] left-1/2 -translate-x-1/2 z-[0] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} alt="Less Average CPC, More Ads Impressions" style={{transform: `translateY(-${scrollPosition * 40}%)`}} />
            <img src={'/images/hero-floats/ad-2.webp'} className={`${float ? '! delay-0' : ''} transition-all duration-300 ease-linear  hidden md:flex size-[120px] lg:size-[150px] absolute top-[70px] -left-[53px] lg:left-[5px] z-[-10] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} alt="Git-Global Immigration Services Ad" style={{transform: `translateX(-${scrollPosition * 40}%)`}} />
            <img src={'/images/hero-floats/ad-3.webp'} className={`${float ? 'delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute top-[344px] lg:top-[350px] left-[80px] z-[-10] rotate-[15deg] shadow-2xl shadow-[#00000080]`} alt="Increase in Ad Clicks" style={{transform: `translateX(-${scrollPosition * 40}%)`}} />
            <img src={'/images/hero-floats/ad-4.webp'} className={`${float ? ' delay-0' : ''} transition-all duration-300 ease-linear hidden md:flex size-[120px] lg:size-[150px] absolute top-[344px] lg:top-[350px] right-[80px] z-[-10] rotate-[-15deg] shadow-2xl shadow-[#00000080]`} alt="Increase in Average Session Duration" style={{transform: `translateX(${scrollPosition * 40}%)`}} />
            <img src={'/images/hero-floats/ad-5.webp'} className={`${float ? 'delay-0' : ''} transition-all duration-300 ease-linear  hidden md:flex size-[120px] lg:size-[150px] absolute top-[70px] -right-[53px] lg:right-[5px] z-[-10] rotate-[15deg] shadow-2xl shadow-[#00000080]`} alt="Git-Global Website Revivified" style={{transform: `translateX(${scrollPosition * 40}%)`}} />
          </div>
        </div>
      </header>
      <main className="">
        <section className=" max-w-[1440px] mx-auto py-16 px-5 md:py-[104px] md:px-6 lg:py- lg:px-14 flex flex-col gap-[104px]">
          <section className="flex flex-col gap-12 md:gap-16 lg:p-5 scroll-mt-25" id="services">
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
                  <div className="p-4 rounded-[40px] bg-white flex flex-col gap-16" key={index}>
                    <div className="flex flex-col gap-8">
                      <div className="rounded-[32px] p-6 flex flex-col gap-10 items-start bg-[#FF15491A]" style={{backgroundColor: `${plan.productColor}`}}>
                        <button className={`${inter.className} px-4 py-3 bg-white rounded-[32px] text-black text-[16px]/[24px] tracking-[-0.64px] font-semibold`}>
                          {plan.product}
                        </button>
                        <div className="flex flex-col gap-2">
                          <p className={`${inter.className} text-[18px]/[27px] tracking-[-0.72px] font-normal text-[#999999]`}>
                            Starts at
                          </p>
                          <p className={`${inter.className} text-[53px]/[53px] tracking-[-3.18px] font-semibold text-black`}>
                            {plan.price}
                          </p>
                        </div>
                      </div>
                        <p className={`${inter.className} text-[16px]/[24px] tracking-[-0.64px] font-normal text-black`}>
                          {plan.details}
                        </p>
                        <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] custom-shadow-orange w-full`}>
                          {plan.cta}
                        </button>
                    </div>
                    <div className="py-6 px-2 rounded-[24px] flex flex-col gap-2 bg-[#F4F5FA] shadow-inner shadow-[inset_0px_4px_8px_rgba(0,0,0,0.08)]">
                      {
                        plan.features.map((feature, index) => (
                          <div className="flex items-center gap-2" key={index}>
                            <span className="text-[24px]">👌</span>
                            <p className={`${inter.className} text-[16px]/[24px] tracking-[-0.64px] font-normal text-[#666666]`}>
                              {feature}
                            </p>
                          </div>
                        ))
                      }
                    </div>
                </div>
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
              <BtnOrange cta="i still have questions!" />
            </div>
            <div className="flex flex-col gap-3">
              {
                faq.map((item, index) => (
                  <AccordionComponent question={item.question} answer={item.answer} key={index} />
                ))
              }
            </div>
            <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] shadow-lg shadow-[#FF560060] w-full md:w-fit mx-auto lg:hidden`}>
              i still have questions!
            </button>
          </section>
          <section className="flex flex-col gap-10 bg-black rounded-[40px] p-10 scroll-mt-25 bg-contain bg-bottom bg-no-repeat" id="contact-us" style={{backgroundImage: 'url(./images/transparent-esper-text.png)'}}>
            <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-10">
              <div className="flex flex-col gap-5">
                <h2 className={`${inter.className} text-[32px]/[32px] md:text-[53px]/[53px] xl:text-[73px]/[73px] font-semibold tracking-[-1.92px] md:tracking-[-3.18px] text-center lg:text-start text-white`}>
                  Transform your online presence into a powerful revenue tool.
                </h2>
                <p className={`${inter.className} text-[18px]/[27px] tracking-[-0.72px] font-normal text-[#E6E6E6]`}>
                  We are ready to turn your business into an unforgettable brand and transform your online presence into consistent revenue—at scale.
                </p>
              </div>
              <div className="p-4 md:p-6 gap-6 md:gap-10 bg-white rounded-[24px] flex flex-col items-center">
                <form action="" className="flex flex-col gap-4 md:gap-6 w-full">
                  <input type="text" className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} placeholder="Name *" required />
                  <input type="email" className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} placeholder="Email *" required />
                  <input type="tel" className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} placeholder="Phone" />
                  <select name="" id="" className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`}>
                    <option value="A brief description of your issue (Optional)" disabled selected className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`}>
                      A brief description of your issue (Optional)
                    </option>
                  {
                    services.map((service, index) => (
                      <option value={service.title} className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} key={index}>
                        {service.title}
                      </option>
                    ))
                  }
                  </select>
                  <textarea name="" id="" className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} placeholder="A brief description of your issue (Optional)"></textarea>
                </form>
                <BtnOrange cta="transform my online presence!" />
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
          </section>
        </section>
      </main>
    </>
  );
}
