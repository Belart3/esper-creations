"use client"
import { Spiral as Hamburger } from 'hamburger-react'
import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ExportedImage from 'next-image-export-optimizer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

type Props = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  handleToggle: () => void
}

const pages = [
  { name: "Home", link: "/" },
  { name: "Our Services", link: "/#services" },
  { name: "See Our Work", link: "/#work" },
  { name: "Pricing & Packages", link: "/#pricing" }
]

const FloatingNav = (props: Props) => {
  const [float, setFloat] = useState(false);
  const [activeLink, setActiveLink] = useState('');

    const handleScroll = () => {
      const scrollPosition = window.scrollY || window.pageYOffset;
      if (scrollPosition > 150) {
        setFloat(true);
      } else {
        setFloat(false);
      }
    };
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleLinkClick = () => { 
      props.setOpen(false),
      document.body.style.overflow = props.open ? 'auto' : 'hidden';
    }

  return (
    <div className={`z-[99] overflow-hidden`}>
        {/* round menu hamburger */}
        <div className={`transition-all bg-[#FF5600] rounded-full duration-300 ease-linear fixed z-[100] flex items-center justify-center group overflow-hidden ${float ? 'translate-x-0' : 'translate-x-[200%]'} transition-all duration-300 cursor-pointer ${props.open == true ? '!translate-x-0  top-[20px] md:top-[40px] lg:top-[56px] right-[20px] md:right-[40px] lg:right-[56px] size-[56px]' : 'right-4 md:right-7 lg:right-10 top-[50px] size-[64px] md:size-[80px]'} `} onClick={props.handleToggle} >
            <div className={`absolute top-0 left-0 h-full w-full rounded-full ${props.open ? 'translate-y-0' : 'translate-y-[100%]'} bg-[#FF5622] lg:group-hover:translate-y-0 transition-all duration-300`}></div>
            <button aria-label='menu button' className='flex items-center justify-center text-white size-full'  >
              <Hamburger 
                size={32}
                toggled={props.open} toggle={props.setOpen}
              />
            </button>
        </div>
        <div className={`w-full h-screen fixed right-0 top-0 flex items-center justify-center z-[99] ${props.open ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-linear duration-300`} >
          {/* onClick={() => props.setOpen(!open)} */}
            <div className={` w-full sm:w-2/5 lg:w-[27%] min-w-[300px] h-full bg-black fixed top-0 right-0 flex flex-col items-start justify-start p-5 ps-10 md:p-10 lg:p-14`}>
                <ExportedImage src="/images/logo.svg" alt="esper creation's logo" className="size-10 translate-y-1/4" width={40} height={40} />
                <div className="flex flex-col mt-[64px] w-full">
                  {
                    pages.map((page,index) => (
                      <Link href={page.link} className='w-full rounded-[32px]'>
                        <button className={`${inter.className} text-[16px]/[16px] text-start font-semibold tracking-[-0.64px] px-6 py-5 cursor-pointer hover:bg-[#FFFFFF1A] ease-linear transition-all rounded-[32px] w-full shrink-0 
                        ${activeLink.includes(page.link) ? 'text-[#FF5622]' : 'text-white'}
                        `} 
                        onClick={handleLinkClick}
                        key={index}
                      >
                          {page.name}
                        </button>
                      </Link>
                    ))
                  }
                  <Link href="/#contact-us" onClick={handleLinkClick} className='mt-10 w-full rounded-[32px]'>
                    <button className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full custom-shadow-orange cursor-pointer transition-all ease-linear duration-300 hover:!shadow-none`}>
                      build your online presence!
                    </button>
                  </Link>
                  <a href='https://calendly.com/smbmo/30min?back=1&month=2025-05' target='_blank' className='w-full mt-5 rounded-[32px]'>
                    <button className={`${inter.className} text-[16px]/[16px] font-semibold text-[#FF5600] tracking-[-0.64px] px-6 py-5 cursor-pointer relative before:rounded-full before:size-[10px] bg-[#FFEEE6] rounded-[32px] capitalize text-center w-full`} onClick={handleLinkClick}>
                      schedule a call
                    </button>
                  </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FloatingNav