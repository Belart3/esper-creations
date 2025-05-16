import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
        <FloatingNav />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
