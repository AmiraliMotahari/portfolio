import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import HeroAnimated from "@/components/hero-animated";
import { user } from "@/lib/data";

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
    </div>
  );
}
