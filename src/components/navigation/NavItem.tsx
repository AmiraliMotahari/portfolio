"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  title: string;
  className?: string;
};

const NavItem = ({ href, title, className }: Props) => {
  return (
    <Button asChild className={cn(className)} variant={"ghost"}>
      <Link href={href}>{title}</Link>
    </Button>
  );
};

export default NavItem;
