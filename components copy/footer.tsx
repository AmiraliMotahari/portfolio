import Link from "next/link";
import { Github, Heart, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";

const currentYear = new Date().getFullYear();

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
              <Logo/>
            </Link>
          </div>

          {/* Copy Right */}
          <div className="text-sm text-muted-foreground">
            <p className="flex items-center justify-center md:justify-end">
              © {currentYear} | Made with{" "}
              <Heart className="h-4 w-4 mx-1 text-neon-red" /> by Me
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center items-center gap-2">
            {socials.map((social) => {
              return (
                <Button key={social.title} asChild size={"icon"} variant={"ghost"}>
                  <Link href={social.href}>
                    <social.icon />
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
