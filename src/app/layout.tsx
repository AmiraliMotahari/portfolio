import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amirali Motahari",
    template: `%s | Amirali Motahari`,
  },
  description:
    "Explore the portfolio of Amirali Motahari - a web developer specializing in frontend technologies, AI, and full-stack projects. Showcasing web apps, coding projects, and ongoing learning in tech and design.",
  authors: [{ name: "Amirali Motahari", url: process.env.NEXT_PUBLIC_URL }],
  creator: "Amirali Motahari",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ""),
  openGraph: {
    title: "Amirali Motahari",
    description:
      "Explore the portfolio of Amirali Motahari - a web developer specializing in frontend technologies, AI, and full-stack projects. Showcasing web apps, coding projects, and ongoing learning in tech and design.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Amirali Motahari",
    images: [
      {
        url: new URL(
          "/assets/images/amirali-motahari.jpeg",
          process.env.NEXT_PUBLIC_URL
        ),
        width: 400,
        height: 280,
        alt: "Amirali Motahari Portrait",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amirali Motahari",
    description:
      "Explore the portfolio of Amirali Motahari - a web developer specializing in frontend technologies, AI, and full-stack projects. Showcasing web apps, coding projects, and ongoing learning in tech and design.",
    images: new URL(
      "/assets/images/amirali-motahari.jpeg",
      process.env.NEXT_PUBLIC_URL
    ),
  },
  keywords: [
    "Amirali Motahari",
    "Creative Developer",
    "Frontend Engineer",
    "JavaScript",
    "Next.js",
    "React",
    "Web Development",
    "Developer Portfolio",
  ],
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL,
  },
  verification: {
    google: "pzNPuEAjQ8w3lN9Z_NlfKOpf3pqF4nOkeDzVbZ_6Zhc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
