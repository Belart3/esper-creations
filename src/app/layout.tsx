import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SpeedInsights } from "@vercel/speed-insights/next"
import NavBlock from "@/components/NavBlock";

export const metadata: Metadata = {
  title: "Esper Creations",
  description: "Transforming Your Online Presence",
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
