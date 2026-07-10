import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { CareerFocusProvider } from "./context/CareerFocusContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeremy Cain — IT Operations & Systems Administration Professional",
  description:
    "Enterprise support experience strengthened by hands-on identity, Windows Server, virtualization, networking, automation, and infrastructure deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
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
