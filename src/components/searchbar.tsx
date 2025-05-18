"use client";

import Form from "next/form";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState, useTransition } from "react";

import { CommandLoading } from "cmdk";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverAnchor,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import { cn } from "@/lib/utils";
import { getBlogPosts } from "@/lib/queries";
import { BlogPost } from "@/lib/types";
import BlogSearchCard from "@/components/cards/blog-search-card";
import { DebouncedInput } from "@/components/inputs/debounced-input";

type Props = {
  action: string;
  query: string;
  initialQueryValue?: string;
  className?: string;
};

const Searchbar = ({ action, query, initialQueryValue, className }: Props) => {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState<string>(
    initialQueryValue ?? ""
  );
  const [data, setData] = useState<BlogPost[] | []>([]);
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();

  const fetchPosts = useCallback(async () => {
    const result = await getBlogPosts({ page: 1, perPage: 9, searchQuery });
    return result?.data ?? [];
  }, [searchQuery]);

  useEffect(() => {
    if (!searchQuery?.trim()) {
      setData([]);
      setOpen(false);
      return;
    }

    startTransition(async () => {
      const posts = await fetchPosts();
      setData(posts);
    });
  }, [searchQuery, fetchPosts]);

  return (
    <Form
      action={action}
      className={cn(
        "flex gap-2 justify-center items-center relative",
        className
      )}
    >
      <Popover open={open} onOpenChange={setOpen}>
        <Command>
          <PopoverAnchor>
            <CommandInput asChild>
              <DebouncedInput
                className="bg-transparent"
                name={query}
                placeholder="Search ..."
                value={searchQuery || ""}
                onChange={(value) => setSearchQuery(String(value).trim() || "")}
                debounce={500}
                onKeyDown={(e) => setOpen(e.key !== "Escape")}
                onMouseDown={() => setOpen((open) => !!searchQuery || !open)}
                onFocus={() => setOpen(true)}
                onBlur={() => setOpen(false)}
                autoComplete={"off"}
              />
            </CommandInput>
          </PopoverAnchor>
          {!open && <CommandList aria-hidden="true" className="hidden" />}
          <PopoverContent
            className="p-1"
            align="start"
            onOpenAutoFocus={(e) => e.preventDefault()}
            onInteractOutside={(e) => {
              if (
                e.target instanceof Element &&
                e.target.hasAttribute("cmdk-input")
              ) {
                e.preventDefault();
              }
            }}
          >
            <CommandList>
              {isPending ? (
                <CommandLoading>
                  <div className="p-1">
                    <Skeleton className="h-6 w-full" />
                  </div>
                </CommandLoading>
              ) : data && data.length > 0 ? (
                <CommandGroup>
                  {data?.map((elem) => (
                    <CommandItem
                      key={`search-result-${elem?.slug}`}
                      onSelect={() => router.push(`blog/${elem.slug}`)}
                      className="space-y-1"
                    >
                      <BlogSearchCard post={elem} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ) : (
                <CommandEmpty>
                  {searchQuery
                    ? "No result."
                    : "Search in title, description,..."}
                </CommandEmpty>
              )}
            </CommandList>
          </PopoverContent>
        </Command>
      </Popover>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Searchbar;
