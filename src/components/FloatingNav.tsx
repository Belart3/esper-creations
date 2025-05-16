"use client"
import { Spiral as Hamburger } from 'hamburger-react'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Inter } from 'next/font/google';
// import { useRouter } from 'next/router';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const FloatingNav = () => {
    const [open, setOpen] = useState(false);
    const [float, setFloat] = useState(false);
    const handleToggle = () => {
        setOpen(!open);
        document.body.style.overflow = open ? 'auto' : 'hidden';
    }

    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 100) {
          setFloat(true);
        } else {
          setFloat(false);
        }
    };

    // const router = useRouter();
    // const isActive = router.pathname;
    
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const handleLinkClick = () => {
      setOpen(false),
      document.body.style.overflow = open ? 'auto' : 'hidden';
    }

  return (
    <div className={`z-[99] overflow-hidden`}>
        {/* round menu hamburger */}
        <div className={`size-[64px] md:size-[80px] transition-all bg-[#FF5600] rounded-full duration-300 ease-linear fixed z-[100] flex items-center justify-center right-4 md:right-7 lg:right-10 top-[50px] lg:hover:top-[40px] lg:hover:right-8 group overflow-hidden ${float ? 'translate-x-0' : 'translate-x-[150%]'} transition-all duration-500 cursor-pointer ${open == true ? '!translate-x-0' : ''} `} onClick={handleToggle} >
            <div className={`absolute top-0 left-0 h-full w-full rounded-full ${open ? 'translate-y-0' : 'translate-y-[100%]'} bg-[#FF5622] lg:group-hover:translate-y-0 transition-all duration-300`}></div>
            <button className='flex items-center justify-center text-white size-full'  >
              <Hamburger 
                toggled={open} toggle={setOpen}
              />
            </button>
        </div>
        <div className={`w-full h-screen fixed right-0 top-0 flex items-center justify-center z-[99] ${open ? 'translate-x-0' : 'translate-x-[100%]'} transition-all ease-linear duration-300`}>
            <div className={` w-full sm:w-1/2 lg:w-1/3 h-full bg-black fixed top-0 right-0 flex items-start justify-start p-10`}>
                <div className="flex flex-col gap-10 mt-[128px]">
                    <Link href={'/'} className={`${inter.className} text-[53px]/[53px] font-semibold text-white tracking-[-3.18px] relative before:rounded-full before:size-[10px] before:bg-white rounded-full before:content-[""] before:absolute before:-left-[20px] before:-translate-y-1/2 before:top-1/2`} onClick={handleLinkClick}>
                        Home
                    </Link>
                    <Link href={'/#work'} className={`${inter.className} text-[53px]/[53px] font-semibold text-white tracking-[-3.18px] capitalize`} onClick={handleLinkClick}>
                        work
                    </Link>
                    <Link href={'/#contact-us'} className={`${inter.className} text-[53px]/[53px] font-semibold text-white tracking-[-3.18px] capitalize`} onClick={handleLinkClick}>
                        contact
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FloatingNav