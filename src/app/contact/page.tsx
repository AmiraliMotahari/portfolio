import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import HeroAnimated from "@/components/hero-animated";
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld";
import { user } from "@/lib/data";
import { BreadcrumbItem } from "@/lib/types";
import Script from "next/script";
import { ContactPage as ContactPageJsonLd, WithContext } from "schema-dts";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with me for project inquiries, collaborations, or just to say hello",
  openGraph: {
    title: "Contact | Amirali Motahari",
    description:
      "Get in touch with me for project inquiries, collaborations, or just to say hello",
    url: new URL("/contact", process.env.NEXT_PUBLIC_URL),
    images: [
      {
        url: new URL(
          "/assets/images/og/contact-og.png",
          process.env.NEXT_PUBLIC_URL
        ),
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Amirali Motahari",
    description:
      "Get in touch with me for project inquiries, collaborations, or just to say hello",
    image: new URL(
      "/assets/images/og/contact-og.png",
      process.env.NEXT_PUBLIC_URL
    ),
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/contact`,
  },
};

export default function ContactPage() {
  const { personalInfo, socials } = user;
  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const jsonLd: WithContext<ContactPageJsonLd> = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: new URL("/contact", webUrl).toString(),
    mainEntity: {
      "@type": "Person",
      name: personalInfo.name,
      jobTitle: "Frontend Developer",
      url: webUrl,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: personalInfo.email,
        url: new URL("/contact", webUrl).toString(),
        areaServed: ["Global"],
        availableLanguage: ["English", "Persian"],
      },
      sameAs: socials.flatMap((elem) => elem.href),
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": new URL("/contact", webUrl).toString(),
      },
    },
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      name: "Home",
      url: webUrl,
    },
    {
      name: "Contact",
      url: new URL("/contact", webUrl).toString(),
    },
  ];

  return (
    <div className="min-h-svh">
      <HeroAnimated
        title="Get In Touch"
        description="Feel free to reach out if you have any questions or want to work
          together. I'm always open to discussing new projects, creative
          ideas, or opportunities to be part of your vision."
        className="pt-32 pb-20"
      />
      <section className="pb-20 dynamic-px relative">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo personalInfo={personalInfo} socials={socials} />
          <ContactForm />
        </div>
      </section>
      <Script
        id="contact-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumb} id="breadcrumb-schema-contact" />
    </div>
  );
}
