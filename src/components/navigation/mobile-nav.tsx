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
import Logo from "@/components/icons/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type Props = {
  navigationList: NavigationItem[];
  className?: string;
};

const MobileNav = ({ navigationList, className }: Props) => {
  const pathname = usePathname();

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
              const isActive =
                pathname === item.href ||
                (pathname === "/" && item.href.startsWith("/#")) ||
                (pathname.startsWith(item.href) && item.href !== "/");
              return (
                <li key={`mobile-nav-item-${item.title}`} className="w-full">
                  <SheetClose asChild>
                    <Button
                      asChild
                      variant={"plain"}
                      className={cn(
                        "w-full text-lg font-medium",
                        isActive && "text-muted-foreground"
                      )}
                    >
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
