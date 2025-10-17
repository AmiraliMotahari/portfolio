"use client";
import NextLink from "next/link";
import { Link } from "@/i18n/navigation";
import { Github, Heart, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";
import { withUTM } from "@/lib/utm";
import { useFormatter, useTranslations } from "next-intl";

const socials = [
  {
    title: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/amirali-motahari-252a651a7",
  },
  {
    title: "GitHub",
    icon: Github,
    href: "https://github.com/AmiraliMotahari",
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  const format = useFormatter();

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
            >
              <Logo />
            </Link>
          </div>

          {/* Copy Right */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center md:justify-end">
              <span>
                <span className="mx-1">&copy;</span>
                {format.dateTime(new Date(), {
                  year: "numeric",
                  formatMatcher: "basic",
                })}
                <span className="mx-2">|</span>
                <span>{t("pl")}</span>
              </span>
              <Heart className="size-4 text-red-600 mx-1" />
              <span>{t("pr")}</span>
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center items-center gap-2">
            {socials.map((social) => {
              return (
                <Button
                  key={social.title}
                  asChild
                  size={"icon"}
                  variant={"ghost"}
                >
                  <NextLink
                    href={withUTM(social.href, {
                      utm_source: process.env.NEXT_PUBLIC_URL ?? "",
                      utm_medium: "social",
                      utm_campaign: social.title.toLocaleLowerCase(),
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon />
                  </NextLink>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
