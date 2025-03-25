"use client";

import NavItem from "./NavItem";
import { motion, TargetAndTransition } from "motion/react";

type NavigationItem = {
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

const Navbar = ({}: Props) => {
  return (
    <motion.nav
      initial={initialState} // Start above the viewport
      animate={finalState} // Animate to its original position
      transition={transition}
      className="w-fit border py-2 px-4 fixed left-1/2 top-3 -translate-x-1/2 rounded-full z-50 bg-background/30 backdrop-blur-sm"
    >
      <ul className="w-full flex justify-center items-center gap-2 ">
        {navigationList.map((item) => {
          return (
            <li key={`nav-item-${item.title}`}>
              <NavItem href={item.href} title={item.title} />
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
