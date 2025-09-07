import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EstateEase | Premium Real Estate Solutions",
  description:
    "EstateEase provides seamless real estate services to help you buy, sell, or invest in properties effortlessly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-slate-50 text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <Header className="shadow-md bg-white sticky top-0 z-50" />

        {/* Main Content */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8">
          {children}
        </main>

        {/* Footer */}
        <Footer className="bg-teal-700 text-white py-8 mt-12" />
      </body>
    </html>
  );
}
