import { Inter } from 'next/font/google';
import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const HeroForm = () => {
    // hero form fields logic
    const [heroForm, setHeroForm ] = useState({
        fullName: '',
        email: '',
        phone: ''
    })
return (
    <form action="" onSubmit={(e) => {e.preventDefault()}} className="flex flex-col xl:flex-row gap-3 xl:gap-6 w-full xl:w-fit">
        <input
        name="full name"
        aria-label="full name" 
        type="text" 
        className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal border-none outline-[#FF5600] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] transition-all ease-linear duration-300 ${ heroForm.fullName.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`} 
        placeholder="Full Name" 
        value={heroForm.fullName}
        onChange={(e) => {
            setHeroForm({...heroForm, fullName: e.target.value })
        }}
        />
        <input
        name="email"
        aria-label="email" 
        type="email" 
        className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal border-none outline-[#FF5600] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] transition-all ease-linear duration-300 ${ heroForm.email.trim() !== '' && heroForm.email.includes('@') ? '!bg-[#FFEEE6]' : '' }`} 
        placeholder="Email Address" 
        value={heroForm.email}
        onChange={(e) => {
            setHeroForm({ ...heroForm, email: e.target.value });
        }}
        />
        <PhoneInput
        name="phone"
        aria-label="phone"
        placeholder="Phone Number"
        defaultCountry="US"
        value={heroForm.phone}
        onChange={(value) => {
            setHeroForm({ ...heroForm, phone: value || '' });
        }}
        className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ heroForm.phone.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`}
        />
        <button 
        className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full lg:w-fit custom-shadow-orange cursor-pointer`}
        type="submit"
        >
        transform my online presence!
        </button>
    </form>
  )
}

export default HeroForm