import { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { ComponentProps } from "react";

type Props = {
  post: BlogPost;
  searchQuery?: string;
  className?: string;
} & Omit<LinkProps, "className" | "href"> &
  ComponentProps<"a">;

const BlogSearchCard = ({
  post,
  searchQuery = "",
  className,
  ...props
}: Props) => {
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const terms = query
      .toLowerCase()
      .split(" ")
      .filter((term) => term.length > 0);
    if (terms.length === 0) return text;

    const regex = new RegExp(`(${terms.join("|")})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, i) =>
      regex.test(part) ? (
        <span
          key={i}
          className="bg-warning text-warning-foreground font-medium"
        >
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "w-full flex justify-start items-center rounded-sm overflow-hidden gap-2 ring-1 ring-accent shadow-2xl hover:bg-accent transition-colors duration-300",
        className
      )}
      {...props}
    >
      {/* Left */}
      <div>
        <Image
          src={post.coverImage}
          alt={post.slug}
          width={64}
          height={64}
          className="size-16 object-center object-cover"
          placeholder={post.coverBlurData ? "blur" : "empty"}
          blurDataURL={post.coverBlurData}
        />
      </div>

      {/* Right */}
      <div className="flex-1/3 text-start">
        <p className="line-clamp-1 text-sm">
          {highlightMatch(post.title, searchQuery)}
        </p>
        <p className="line-clamp-1 text-xs text-muted-foreground">
          {highlightMatch(post.excerpt, searchQuery)}
        </p>
      </div>
    </Link>
  );
};

export default BlogSearchCard;
