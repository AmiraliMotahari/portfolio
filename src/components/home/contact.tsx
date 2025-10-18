"use client";

import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/ui/particles";
import { Button } from "@/components/ui/button";
import { Globe } from "@/components/ui/globe";
import { MapPin } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

type Props = {
  contactData: {
    email: string;
    location: string;
  };
  socials: {
    title: string;
    href: string;
  }[];
};

export default function Contact({ contactData }: Props) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
  const t = useTranslations("home.contact");
  const t2 = useTranslations("general");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <section className="py-20 dynamic-px relative ">
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="container mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {t("heading")}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-12 border rounded-lg shadow bg-card relative">
            <div className="flex flex-col justify-start items-start gap-4 max-w-md py-3 px-5 ">
              <h3 className="text-2xl font-semibold">{t("card.title")}</h3>
              <p className="text-muted-foreground">{t("card.description")}</p>
              <div className="flex flex-col justify-start items-start gap-4 text-center ">
                <address className="font-normal not-italic flex justify-items-start gap-2">
                  <MapPin />
                  {contactData.location}
                </address>
              </div>
              <Button asChild variant={"default"} className={"mt-3 w-full"}>
                <Link href={"/contact"}>
                  <span>{t2("contactButton")}</span>
                </Link>
              </Button>
            </div>
            <div className="size-[340px] relative">
              <Globe className="inset-0" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
