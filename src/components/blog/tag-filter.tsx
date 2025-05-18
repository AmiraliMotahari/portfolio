"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { Badge } from "../ui/badge";
import { use, useCallback } from "react";
import { createQueryFunction } from "@/lib/query-function";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  getTags: Promise<string[]>;
};

const BlogTagFilter = ({ getTags }: Props) => {
  // Fix later
  const tags = use(getTags);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentTag = searchParams.get("tags");

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      return createQueryFunction(params, searchParams, pathname);
    },
    [pathname, searchParams]
  );

  return (
    <div className="max-w-3xl mx-auto flex flex-wrap gap-2 mb-12 justify-center">
      <Badge
        variant="outline"
        className={cn(
          "hover:bg-muted-foreground hover:text-background cursor-pointer transition-colors",
          !currentTag &&
            "bg-muted-foreground text-background hover:bg-background hover:text-foreground"
        )}
      >
        <Link href={createQueryString({ tags: null })}>All</Link>
      </Badge>
      {tags.map((tag) => (
        <Badge
          key={tag}
          variant="outline"
          className={cn(
            "hover:bg-muted-foreground hover:text-background cursor-pointer transition-colors",
            currentTag === tag &&
              "bg-muted-foreground text-background hover:bg-background hover:text-foreground"
          )}
        >
          <Link href={createQueryString({ tags: tag })}>{tag}</Link>
        </Badge>
      ))}
    </div>
  );
};

export default BlogTagFilter;
