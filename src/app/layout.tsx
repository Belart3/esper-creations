import type { Metadata } from "next";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBlock from "@/components/NavBlock";

export const metadata = {
  title: '#1 Best Rated Digital Marketing Agency | Esper Creations',
  description: 'The best digital marketing agency, Esper Creations delivers top-tier SEO, web design, and branding to help your business grow online.',
  alternates: {
    canonical: 'http://localhost:3000/',
  },
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
      <body
        className={`antialiased bg-[#F4F5FA] hide-scrollbar relative scroll-smooth overflow-x-hidden`}
      >
        <NavBlock />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
