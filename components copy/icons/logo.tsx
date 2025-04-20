import Image from "next/image";
import logo from "@/assets/images/logo-round.png"
import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src={logo}
      alt="The Mt"
      width={1000}
      height={1000}
      placeholder="blur"
      blurDataURL={logo.blurDataURL}
      className={cn("size-10",className)}
    />
  );
};

export default Logo;
