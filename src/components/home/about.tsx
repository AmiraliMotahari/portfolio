"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Code, Palette, Lightbulb, Rocket, LucideIcon } from "lucide-react";
import { defaultImage } from "@/lib/constants/images";
import { PersonalInfoType } from "@/lib/types";
import { useTranslations } from "next-intl";

type Props = {
  personalInfo: PersonalInfoType;
};

const ICONS: Record<string, LucideIcon> = {
  Code,
  Palette,
  Lightbulb,
  Rocket,
};

export default function About({ personalInfo }: Props) {
  const t = useTranslations("home.aboutMe");

  const abilities = t.raw("abilities") as unknown as Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  return (
    <section id="about" className="py-20 dynamic-px">
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

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* User Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="xl:row-span-2"
          >
            <div className="glass-card p-1 rounded-2xl overflow-hidden relative">
              <Image
                src={personalInfo.picture || defaultImage}
                alt={t("imageAlt")}
                width={600}
                height={600}
                placeholder="blur"
                blurDataURL={personalInfo.blurData}
                className="rounded-2xl w-full h-auto"
              />
            </div>
          </motion.div>

          <div className="">
            {/* Description */}
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("description.lead")}
            </motion.p>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {t("description.approach")}
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:col-span-full xl:col-span-1">
            {abilities.map((item, index) => {
              const Icon = ICONS[item.icon] ?? ICONS["Code"]; // fallback

              return (
                <motion.div
                  key={index}
                  className="glass-card p-6 text-center hover:border-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex justify-center mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
