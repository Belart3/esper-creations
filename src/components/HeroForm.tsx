import { sendHeroFormEmail } from '@/lib/actions/sendMailAction';
import { Inter } from 'next/font/google';
import React from 'react'
import { useState } from 'react'
import PhoneInput from 'react-phone-number-input';
import { ScaleLoader } from 'react-spinners';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const HeroForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [heroForm, setHeroForm ] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    interface SubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(heroForm)
        try {
            const res = await fetch('https://esper-backend.onrender.com/send-hero-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(heroForm),
            });

            const data: { message?: string } = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to send');
            setHeroForm({ fullName: '', email: '', phone: '' });
            toast.success("Email sent successfully!");
        } catch (err) {
            console.error(err);
            toast.error("Failed to send email.");
        } finally {
            setIsSubmitting(false);
        }
    };

return (
    <form onSubmit={handleSubmit} className="flex flex-col xl:flex-row gap-3 xl:gap-6 w-full xl:w-fit">
        <input
        name="fullName"
        aria-label="full name" 
        type="text" 
        required
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
        required
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
        required
        value={heroForm.phone}
        onChange={(value) => {
            setHeroForm({ ...heroForm, phone: value || '' });
        }}
        className={`${inter.className} w-full xl:w-[250px] p-4 rounded-[16px] bg-[#F4F5FA] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] tracking-[-0.56px] font-normal focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ heroForm.phone.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`}
        />
        <input type="hidden" name="phone" required value={heroForm.phone} />
        <button 
        className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full lg:w-fit custom-shadow-orange cursor-pointer transition-all ease-linear duration-300 hover:!shadow-none mx-auto`}
        type='submit'
        >
            {
            isSubmitting ? (
                <div className="flex items-center justify-center gap-1">
                    Submitting
                    <ScaleLoader height={10} color='white' />
                </div>
            ) : 'Transform my online presence!'
            }
        </button>
        <ToastContainer />
    </form>
  )
}

export default HeroForm