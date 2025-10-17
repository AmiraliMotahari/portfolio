"use client";

import NavItem from "./navItem";
import { motion, TargetAndTransition, Transition } from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/icons/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "@/components/navigation/mobile-nav";
import { ModeToggle } from "../mode-toggle";
import { Link } from "@/i18n/navigation";
import { useMemo } from "react";
import { Messages, useTranslations } from "next-intl";

export type NavigationItem = {
  title: string;
  href: string;
};

type Props = {
  className?: string;
};

const navigationList: NavigationItem[] = [
  {
    href: "/",
    title: "home",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/contact",
    title: "contact",
  },
  {
    href: "/projects",
    title: "projects",
  },
  {
    href: "/blog",
    title: "blog",
  },
  {
    href: "/now",
    title: "now",
  },
];

const initialState: TargetAndTransition = { opacity: 0.5, y: -100 };
const finalState = { opacity: 1, y: 0 };
const transition: Transition = {
  type: "spring", // Use a spring for a natural movement
  stiffness: 100, // Control the stiffness (how "tight" the spring is)
  damping: 20, // Damping to prevent oscillation
  duration: 0.8, // Duration of the animation
  delay: 0.3,
  ease: "easeInOut",
};

const Navbar = ({ className }: Props) => {
  const isMobile = useIsMobile();
  const t = useTranslations("header");

  const nav18: NavigationItem[] = useMemo(() => {
    return navigationList.map((elem) => ({
      title: t(`${elem.title as keyof Messages["header"]}.title`),
      href: elem.href,
    }));
  }, [t]);

  return (
    <motion.nav
      initial={initialState} // Start above the viewport
      animate={finalState} // Animate to its original position
      transition={transition}
      viewport={{ once: true }}
      className={cn(
        "w-fit max-w-11/12 border py-2 px-6 fixed left-1/2 top-3 -translate-x-1/2 rounded-full z-50 bg-background/30 backdrop-blur-sm",
        isMobile && "w-full",
        className
      )}
    >
      <ul className="w-full flex justify-center items-center gap-2">
        <li className="flex justify-center items-center mr-auto">
          <Button
            asChild
            variant={"ghost"}
            size={"icon"}
            className="rounded-full"
          >
            <Link href={"/"}>
              <Logo className="size-8" />
            </Link>
          </Button>
        </li>
        {isMobile
          ? null
          : nav18.map((item) => {
              return (
                <li key={`nav-item-${item.title}`}>
                  <NavItem href={item.href} title={item.title} />
                </li>
              );
            })}
        <li>
          <ModeToggle />
        </li>
        {isMobile ? (
          <li className="flex justify-center items-center">
            <MobileNav navigationList={nav18} />
          </li>
        ) : null}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
