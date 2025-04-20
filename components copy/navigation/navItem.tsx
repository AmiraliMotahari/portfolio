"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  title: string;
  className?: string;
};

const NavItem = ({ href, title, className }: Props) => {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (pathname === "/" && href.startsWith("/#")) ||
    (pathname.startsWith(href) && href !== "/");

  return (
    <Button
      asChild
      className={cn(
        isActive && "bg-accent dark:bg-accent/50",
        className
      )}
      variant={"ghost"}
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default NavItem;
