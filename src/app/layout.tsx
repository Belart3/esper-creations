import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBlock from "@/components/NavBlock";

export const metadata: Metadata = {
  title: 'Web Design & Digital Marketing Agency in Iowa | Esper Creations',
  description: 'Iowa-based web design and digital marketing agency helping businesses grow with custom websites, SEO, PPC, and conversion-focused strategies.',
  alternates: {
    canonical: 'https://espercreations.com/',
  },
  openGraph: {
    title: 'Web Design & Digital Marketing Agency in Iowa | Esper Creations',
    description: 'Iowa-based web design and digital marketing agency helping businesses grow with custom websites, SEO, PPC, and conversion-focused strategies.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-5SSPNNXL');
              `,
            }}
          />
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`antialiased bg-[#F4F5FA] hide-scrollbar relative scroll-smooth overflow-x-hidden`}
      >
        {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-5SSPNNXL"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        {/* End Google Tag Manager (noscript) */}
        <NavBlock />
        {children}
      </body>
    </html>
  );
}
