import { Inter } from 'next/font/google';
import React from 'react'
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for using our website',
  alternates: {
    canonical: 'https://espercreations.com/privacy-policy',
  },
};
import termsConditions from '@/data/terms-and-conditions.json';
import ClientFooter from '@/components/ClientFooter';

const page = () => {
  return (
    <div className='pt-[148px] flex flex-col gap-6 box-content px-5 md:px-10 lg:mx-auto lg:max-w-[1104px]'>
      <h1 className={`${inter.className} text-black font-semibold tracking-[-3.18px] text-[53px]/[53px] text-center`}>
        Privacy Policy.
      </h1>
      <div className="flex flex-row gap-20 mb-[104px]">
        {/* <aside className='flex flex-col gap-6 items-start w-[320px] fixed top-[23=0px]'>
          {
            termsConditions.map((section, index) => (
              <Link  href={section.link} className={`${inter.className} text-[20px]/[20px] font-semibold tracking-[-1.12px] text-black`} key={index}>
                {section.title}
              </Link>
            ))
          }
        </aside> */}
        <main className='flex flex-col gap-10'>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Introduction
            </h2>
            <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                Esper Creations we are committed to protecting your privacy. This policy explains how we collect, use, disclose, and safeguard your personal information when you visit <span className='text-[#FF5600] font-bold'>
                  <a href="https://espercreations.com "> https://espercreations.com </a>
                </span>
            </p>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Information We Collect
            </h2>
            <div className="flex flex-col">
                <p className={`${inter.className} text-[20px]/[20px] font-bold tracking-[-1.12px] text-black`}>
                    Personal Data
                </p>
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        Name, email address, phone number, postal address, etc., when voluntarily provided.
                    </li>
                    <li>
                        Payment information (e.g., credit card number) if you make purchases.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className={`${inter.className} text-[20px]/[20px] font-bold tracking-[-1.12px] text-black`}>
                    Analytical Data
                </p>
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        Website usage data: IP address, browser type/version, pages visited, time spent, referrer URL, etc., via cookies and similar technologies.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col">
                <p className={`${inter.className} text-[20px]/[20px] font-bold tracking-[-1.12px] text-black`}>
                    Third-Party Data
                </p>
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        Data from external services if you choose to sign in via Google, Facebook, etc.
                    </li>
                </ul>
            </div>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              How We Use Your Data
            </h2>
            <div className="flex flex-col">
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        To provide and maintain our services.
                    </li>
                    <li>
                        To process orders, payments, and communicate with you.
                    </li>
                    <li>
                        To improve user experience and website functionality.
                    </li>
                    <li>
                        To send marketing communications, if you’ve opted in.
                    </li>
                    <li>
                        To comply with legal obligations.
                    </li>
                </ul>
            </div>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Disclosure of Your Information
            </h2>
            <div className="flex flex-col">
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        With service providers under contract (e.g. payment processors, hosting).
                    </li>
                    <li>
                        To comply with legal requests (court orders, subpoenas).
                    </li>
                    <li>
                        In case of business transfers (e.g. merger, acquisition).
                    </li>
                    <li>
                        With your consent.
                    </li>
                </ul>
            </div>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Cookies & Tracking
            </h2>
            <div className="flex flex-col">
                <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                We use cookies and similar technologies for:
                </p>
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        Essential website functionality
                    </li>
                    <li>
                        Analytics and performance tracking
                    </li>
                    <li>
                        Advertising and retargeting (if applicable)
                    </li>
                </ul>
                <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] mt-10`}>
                    You can disable non-essential cookies via your browser settings.
                </p>
            </div>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Data Retention
            </h2>
            <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                We retain personal data only as long as needed to fulfill the purposes outlined, or to comply with legal obligations.
            </p>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Data Security
            </h2>
            <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                We implement appropriate technical and organizational measures to safeguard your data, though no method is 100% secure.
            </p>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Your Rights
            </h2>
            <div className="flex flex-col">
                <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                    Depending on your location, you may have rights such as:
                </p>
                <ul className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666] list-disc pl-6`}>
                    <li>
                        Access, correction, deletion of your data
                    </li>
                    <li>
                       Objecting to or restricting processing
                    </li>
                    <li>
                       Opting out of marketing emails
                    </li>
                    <li>
                        Withdrawing consent
                    </li>
                    <p className={`${inter.className} text-[#666666] text-[18px]/[27px] font-normal tracking-[-0.72px]`}>
                        To exercise your rights, contact us at: 
                        <span className='text-[#FF5600] font-bold'>
                            <a href="mailto:changes@espercreations.com"> 
                                changes@espercreations.com</a>
                        </span>
                    </p>
                </ul>
            </div>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Children’s Privacy
            </h2>
            <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                Our services are not intended for children under 16. We do not knowingly collect data from such individuals. If you believe we have collected data from a child, please contact us.
            </p>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Changes to This Policy
            </h2>
            <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                We may update this policy; changes will be posted with a new “Effective Date.” We encourage you to review it periodically.
            </p>
          </section>
          <section id="Contact-Us" className='flex flex-col gap-6'>
            <h2 className={`${inter.className} text-[29px]/[29px] font-semibold tracking-[-1.74px] text-black`}>
              Contact Us
            </h2>
            <div className='flex flex-col'>
              <p className={`${inter.className} text-[18px]/[27px] font-normal tracking-[-0.72px] text-[#666666]`}>
                Questions about these Terms? Contact Us
              </p>
              <p className={`${inter.className} text-black text-[18px]/[27px] font-bold tracking-[-0.72px]`}>
                Esper Creations
              </p>
              <p className={`${inter.className} text-[#666666] text-[18px]/[27px] font-normal tracking-[-0.72px]`}>
                Email: 
                <span className='text-[#FF5600] font-bold'>
                  <a href="mailto:changes@espercreations.com"> changes@espercreations.com</a>
                </span>
              </p>
              <p className={`${inter.className} text-[#666666] text-[18px]/[27px] font-normal tracking-[-0.72px]`}>
                Mailing Address: <span className='text-black font-bold'>2 E Benton St, Iowa City, Iowa, United States</span>
              </p>
            </div>
          </section>
        </main>
      </div>
      <ClientFooter />
    </div>
  )
}

export default page