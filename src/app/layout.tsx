import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBlock from "@/components/NavBlock";
import Script from "next/script";

export const metadata: Metadata = {
  title: '#1 Best Rated Digital Marketing Agency | Esper Creations',
  description: 'The best digital marketing agency, Esper Creations delivers top-tier SEO, web design, and branding to help your business grow online.',
  alternates: {
    canonical: 'https://espercreations.com/',
  },
  openGraph: {
    title: '#1 Best Rated Digital Marketing and Web Design Agency | Esper Creations',
    description: 'The best digital marketing agency, Esper Creations delivers top-tier SEO, web design, and branding to help your business grow online.',
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
