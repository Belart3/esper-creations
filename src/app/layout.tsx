import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBlock from "@/components/NavBlock";
import Script from "next/script";

export const metadata = {
  title: '#1 Best Rated Digital Marketing Agency | Esper Creations',
  description: 'The best digital marketing agency, Esper Creations delivers top-tier SEO, web design, and branding to help your business grow online.',
  alternates: {
    canonical: 'https://espercreations.com/',
  },
  keywords: [
    'web design in iowa',
    'website designers for small business',
    'best website design company for small businesses',
    'digital marketing agency iowa',
    'affordable websites for small business',
    'website developers for small business',
    'small business website redesign',
    'search engine optimization agency',
    'iowa city web design',
    'website design cedar rapids iowa',
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Web Design and Digital Marketing Agency",
              "description":
                "The best digital marketing agency, Esper Creations delivers top-tier SEO, web design, and branding to help your business grow online.",
              "url": "https://espercreations.com/",
              "provider": {
                "@type": "Organization",
                "name": "Esper Creations"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "11"
              }
            })
          }}
        />
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
