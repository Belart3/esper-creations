import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import NavBlock from "@/components/NavBlock";

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
    title: '#1 Best Rated Digital Marketing Agency | Esper Creations',
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
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-JYPBKBY3PP"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-JYPBKBY3PP');
        `,
      }} />
      {/* End Google Tag Manager */}
      </head>
      <body
        className={`antialiased bg-[#F4F5FA] hide-scrollbar relative scroll-smooth overflow-x-hidden`}
      >
        <NavBlock />
        {children}
      </body>
    </html>
  );
}
