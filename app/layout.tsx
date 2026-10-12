import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  title: "کتاب‌شاپ",
  description: "بهترین کتاب‌ها با بهترین قیمت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
