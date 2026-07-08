import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CareerFocusProvider } from "./context/CareerFocusContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Cain — Enterprise IT & Systems Administration",
  description:
    "Enterprise IT professional with 8+ years supporting Microsoft environments — infrastructure, identity, virtualization, and enterprise applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <Nav />
        <CareerFocusProvider>
          <main>{children}</main>
        </CareerFocusProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
