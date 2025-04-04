import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { user } from "@/lib/data";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch with me for project inquiries, collaborations, or just to say hello",
};

export default function ContactPage() {
  const { personalInfo, socials } = user;
  return (
    <section className="min-h-svh pb-20 pt-32 px-12 relative">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
          Get In Touch
        </h1>
        <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto">
          Feel free to reach out if you have any questions or want to work
          together. I&apos;m always open to discussing new projects, creative
          ideas, or opportunities to be part of your vision.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo personalInfo={personalInfo} socials={socials} />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
