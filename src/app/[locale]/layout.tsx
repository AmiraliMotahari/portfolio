import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getLangDir } from "rtl-detect";
import { getTranslations } from "next-intl/server";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("home.seo");
  const baseUrl = process.env.NEXT_PUBLIC_URL ?? "";

  return {
    title: {
      default: t("title"),
      template: `%s | ${t("title")}`,
    },
    description: t("description"),
    authors: [{ name: t("authors.name"), url: baseUrl }],
    creator: t("creator"),
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: t("openGraph.title"),
      description: t("openGraph.description"),
      url: baseUrl,
      siteName: t("openGraph.siteName"),
      images: [
        {
          url: new URL("/assets/images/amirali-motahari.jpeg", baseUrl),
          width: 400,
          height: 280,
          alt: t("openGraph.images.alt"),
        },
      ],
      locale: t("openGraph.locale"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitter.title"),
      description: t("twitter.description"),
      images: new URL("/assets/images/amirali-motahari.jpeg", baseUrl),
    },
    keywords: t.raw("keywords"),
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
      canonical: baseUrl,
    },
    verification: {
      google: "pzNPuEAjQ8w3lN9Z_NlfKOpf3pqF4nOkeDzVbZ_6Zhc",
    },
  };
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const direction = getLangDir(locale);

  return (
    <html
      lang={locale ?? "en"}
      dir={direction ?? "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster richColors position="top-center" />
          </ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
