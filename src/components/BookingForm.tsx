import React, { useState } from 'react'
import { Inter } from "next/font/google";
import PhoneInput from 'react-phone-number-input';
import services from "@/data/services.json"
import { sendBookingMail } from '@/lib/actions/sendMailAction';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const BookingForm = () => {
    const [footerForm, setFooterForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        issue: ''
    })
  return (
    <form action={sendBookingMail} className="flex flex-col gap-4 md:gap-6 w-full z-10">
        <input 
        name="name"
        aria-label="name"
        type="text" 
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.name.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`} 
        placeholder="Name *" 
        required 
        value={footerForm.name}
        onChange={(e) => {
            setFooterForm({...footerForm, name: e.target.value})
        }}
        />
        <input 
        name="email"
        aria-label="email"
        type="email" 
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.email.trim() !== '' && footerForm.email.includes('@') ? '!bg-[#FFEEE6]' : '' }`} 
        placeholder="Email *" 
        required 
        value={footerForm.email}
        onChange={(e) => {
            setFooterForm({ ...footerForm , email: e.target.value})
        }}
        />
        <PhoneInput
        name="phone"
        aria-label="phone"
        placeholder="Phone Number"
        defaultCountry="US"
        value={footerForm.phone}
        onChange={(value) => {
            setFooterForm({ ...footerForm, phone: value || '' });
        }}
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.phone.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`}
        />
        <select 
        defaultValue='What service are you in need of? *'
        name="service" 
        id="" 
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300`}
        value={footerForm.service}
        onChange={
            (e) => {
                setFooterForm({...footerForm, service: e.target.value}),
                console.log(footerForm.service)
            }
        }
        >
            <option value="A brief description of your issue (Optional)" disabled className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`}>
                What service are you in need of? *
            </option>
        {
        services.map((service, index) => (
            <option value={service.title} className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699]`} key={index}>
            {service.title}
            </option>
        ))
        }
        </select>
        <textarea 
        aria-label="issue"
        value={footerForm.issue}
        name="issue" 
        id="" 
        onChange={(e) => {
            setFooterForm({
            ...footerForm,
            issue: e.target.value
            })
        }}
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.issue.trim() !== '' ? 'bg-[#FFEEE6]' : '' }`} 
        placeholder="A brief description of your issue (Optional)"
        ></textarea>
        <button 
        className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full lg:w-fit custom-shadow-orange cursor-pointer mx-auto transition-all ease-linear duration-300 hover:!shadow-none`}
        type="submit"
        >
            transform my online presence!
        </button>
    </form>
  )
}

export default BookingForm