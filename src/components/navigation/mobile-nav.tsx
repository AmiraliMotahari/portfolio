"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { NavigationItem } from "./Navbar";
import Logo from "../icons/logo";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {
  navigationList: NavigationItem[];
  className?: string;
};

const MobileNav = ({ navigationList, className }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className={className}>
        <Menu />
      </SheetTrigger>
      <SheetContent className="max-w-sm bg-background/30 backdrop-blur-sm">
        <SheetHeader>
          <SheetTitle>
            <Logo className="size-16 mx-auto" />
          </SheetTitle>
          <ul className="w-full flex flex-col justify-center items-center gap-5 mt-12">
            {navigationList.map((item) => {
              return (
                <li key={`mobile-nav-item-${item.title}`}>
                  <SheetClose asChild>
                    <Button asChild variant={"ghost"}>
                      <Link href={item.href}>{item.title}</Link>
                    </Button>
                  </SheetClose>
                </li>
              );
            })}
          </ul>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
