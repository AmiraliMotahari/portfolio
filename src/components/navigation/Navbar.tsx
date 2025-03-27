"use client";

import NavItem from "./NavItem";
import { motion, TargetAndTransition } from "motion/react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";
import Logo from "../icons/logo";
import { useIsMobile } from "@/hooks/use-mobile";
import MobileNav from "./mobile-nav";

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
    title: "Home",
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/contact",
    title: "Contact",
  },
  {
    href: "/projects",
    title: "Projects",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/now",
    title: "Now",
  },
];

const initialState: TargetAndTransition = { opacity: 0.5, y: -100 };
const finalState = { opacity: 1, y: 0 };
const transition = {
  type: "spring", // Use a spring for a natural movement
  stiffness: 100, // Control the stiffness (how "tight" the spring is)
  damping: 20, // Damping to prevent oscillation
  duration: 0.8, // Duration of the animation
  delay: 0.3,
  ease: "easeInOut",
};

const Navbar = ({ className }: Props) => {
  const isMobile = useIsMobile();

  return (
    <motion.nav
      initial={initialState} // Start above the viewport
      animate={finalState} // Animate to its original position
      transition={transition}
      viewport={{ once: true }}
      className={cn(
        "w-fit border py-2 px-6 fixed left-1/2 top-3 -translate-x-1/2 rounded-full z-50 bg-background/30 backdrop-blur-sm",
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
          : navigationList.map((item) => {
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
            <MobileNav navigationList={navigationList} />
          </li>
        ) : null}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
