import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import Footer from "@/components/footer";
import logo from "./icon.svg"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amirali Motahari",
  description: "Front-End Developer",
  openGraph: {
    title: "Amirali Motahari",
    description: "Front-End Developer",
    type: "website",
    url: "https://yourwebsite.com",
    images: [
      {
        url: logo.src, // Ensure logo.src is the correct URL
        width: 800,
        height: 600,
        alt: "Amirali Motahari Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className={inter.className}>
        <Navbar>{children}</Navbar>
        <Footer />
      </body>
    </html>
  );
}
