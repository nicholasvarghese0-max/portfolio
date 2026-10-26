import type { Metadata } from "next";
import { Urbanist, Cormorant_Garamond } from "next/font/google";
import CursorGlow from "@/components/CursorGlow";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

// Stand-in for Canela Trial until the font file is added.
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Nicholas Mathew Varghese | UI/UX Designer",
  description:
    "Portfolio 26': crafting digital solutions that create measurable impact across platforms.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${cormorant.variable} antialiased`}
    >
      <head>
        {/* Satoshi from Fontshare */}
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
        />
      </head>
      <body className="min-h-screen">
        <SmoothScroll />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
