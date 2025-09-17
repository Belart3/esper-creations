import React, { useState } from 'react'
import { Inter } from "next/font/google";
import PhoneInput from 'react-phone-number-input';
import services from "@/data/services.json"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { sendBookingMail } from '@/lib/actions/sendMailAction';
import { toast } from 'react-toastify';
import { ScaleLoader } from 'react-spinners';
import Select from 'react-select';
import ReCAPTCHA from 'react-google-recaptcha';
//6LeLObIrAAAAALm9mHhW_ptfOlM4svjJ3sETMdJA

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const options = [
  { 
    value: 'Website Design & Development', 
    label: 'Website Design & Development' 
},
{ 
    value: 'Organic SEO', 
    label: 'Organic SEO' 
},
  { 
    value: 'PPC Advertising', 
    label: 'PPC Advertising' 

  },
  { 
    value: 'AI Agent', 
    label: 'AI Agent' 

  },
  { 
    value: 'Social Media Marketing & Management', 
    label: 'Social Media Marketing & Management' 

  },
  { 
    value: 'Social Media Followers Growth', 
    label: 'Social Media Followers Growth' 
  },
  { 
    value: 'Full GHL Business Setup', 
    label: 'Full GHL Business Setup' 
  },
  { 
    value: 'Professional Domain Email Setup', 
    label: 'Professional Domain Email Setup' 
  }
]

const BookingForm = () => {
    const [footerForm, setFooterForm] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        issue: ''
    })
    type OptionType = { value: string; label: string };
    const [selectedService, setSelectedService] = useState<OptionType[]>([]);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [captchaValue, setCaptchaValue] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        console.log(footerForm)
        
        const leadsSheetUrl = "https://script.google.com/macros/s/AKfycbxTwDRttMM5Nm7IVV-cEr2n6vS33ztJ2-AdGjhaIs3-XhI_0dNPtG7qXojBFdvESzbmAA/exec"
            fetch(leadsSheetUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: (`Name=${footerForm.name}&Email=${footerForm.email}&Phone=${footerForm.phone}&Service=${footerForm.service}&Description=${footerForm.issue}`),
        }).then(res=>res.text()).catch(error=>console.log(error))

        try {
            const res = await fetch('https://esper-backend.vercel.app/api/send-booking-form', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(footerForm),
            });

            const data: { message?: string } = await res.json();

            if (!res.ok) throw new Error(data.message || 'Failed to send');
            setFooterForm({ name: '', email: '', phone: '', issue: '', service: '' });
            toast.success("Email sent successfully!");
        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                toast.error(err.message);
            } else {
                toast.error('An unexpected error occurred.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-6 w-full z-10">
        <input 
        name="name"
        aria-label="name"
        type="text" 
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666] p-4 rounded-[16px] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.name.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`} 
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
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666] p-4 rounded-[16px] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.email.trim() !== '' && footerForm.email.includes('@') ? '!bg-[#FFEEE6]' : '' }`} 
        placeholder="Email *" 
        required 
        value={footerForm.email}
        onChange={(e) => {
            setFooterForm({ ...footerForm , email: e.target.value})
        }}
        />
        <PhoneInput
        name="phone"
        required
        aria-label="phone"
        placeholder="Phone Number"
        defaultCountry="US"
        value={footerForm.phone}
        onChange={(value) => {
            setFooterForm({ ...footerForm, phone: value || '' });
        }}
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666] p-4 rounded-[16px] placeholder-shown:text-[#666666] placeholder-shown:text-[14px]/[21px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.phone.trim() !== '' ? '!bg-[#FFEEE6]' : '' }`}
        />
        <Select 
            options={options}
            value={selectedService}
            placeholder="What service are you in need of? *"
            onChange={
                (options) => {
                    const selected = options as OptionType[] || [];
                    setSelectedService(selected);
                    setFooterForm({ ...footerForm, service: selected.map(opt => opt.value).join(', ') });
                }
            }
            required
            isMulti
            closeMenuOnSelect={false}
            className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300`}
        />
        <textarea 
        aria-label="issue"
        value={footerForm.issue}
        name="issue" 
        onChange={(e) => {
            setFooterForm({
            ...footerForm,
            issue: e.target.value
            })
        }}
        className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#B3B3B3] p-4 rounded-[16px] bg-[#E6E6E699] focus:outline-[#FF5600] focus:border-[#FF5600] focus:ring-[#FF5600] border-none outline-[#FF5600] transition-all ease-linear duration-300 ${ footerForm.issue.trim() !== '' ? 'bg-[#FFEEE6]' : '' }`} 
        placeholder="A brief description of your issue (Optional)"
        ></textarea>
        <div className="flex">
            <input 
            type="checkbox" 
            className="mr-2 mt-1" 
            required 
            />
            <label className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666]`}>
                By checking this box I agree to the
                <a href="/privacy-policy" target='_blank' className="text-[#FF5600] underline mx-1">
                    Privacy Policy
                </a> 
                and 
                <a href="/terms-and-conditions" target='_blank' className="text-[#FF5600] underline mx-1">
                    Terms and Conditions 
                </a> 
                and consent to receive messages and important updates from the Esper Creations. You can reply STOP to unsubscribe at any time.
            </label>
        </div>
        <div className="flex">
            <input 
            type="checkbox" 
            className="mr-2 mt-1" 
            required 
            />
            <label className={`${inter.className} text-[14px]/[21px] tracking-[-0.56px] text-[#666666]`}>
                I consent to receive non-marketing text messages from Esper Creations about my order updates, appointment reminders etc. Message & data rates may apply.
            </label>
        </div>
        <ReCAPTCHA
            sitekey="6LeLObIrAAAAALm9mHhW_ptfOlM4svjJ3sETMdJA"
            onChange={(value) => setCaptchaValue(value)}
        />
        <button 
        disabled={!captchaValue || isSubmitting}
        className={`${inter.className} rounded-[32px] bg-[#FF5600] py-5 px-6 capitalize text-white font-semibold text-[16px]/[16px] tracking-[-0.64px] w-full lg:w-fit custom-shadow-orange cursor-pointer transition-all ease-linear duration-300 hover:!shadow-none max-w-[300px] mx-auto`}
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
    </form>
  )
}

export default BookingForm