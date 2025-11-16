import { ThemeModeScript } from "flowbite-react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400"], // Figma says weight 400
});

export const metadata: Metadata = {
  title: "Ellty | Demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <ThemeModeScript mode="dark" />
      </head>
      <body className={`${montserrat.className} bg-white text-[#1F2128]`}>{children}</body>
    </html>
  );
}
