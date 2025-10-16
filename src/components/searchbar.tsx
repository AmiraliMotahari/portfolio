"use client";

import type React from "react";
import Form from "next/form";

import { useState, useEffect, useRef } from "react";
import { SearchIcon, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { getBlogPosts } from "@/lib/queries";
import { BlogPost } from "@/lib/types";
import BlogSearchCard from "@/components/cards/blog-search-card";
import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "./ui/input-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { useIsMac } from "@/hooks/use-isMac";

export default function Searchbar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("query");
  const isMac = useIsMac();
  const [searchTerm, setSearchTerm] = useState(initialQuery ?? "");
  const [results, setResults] = useState<BlogPost[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm) {
        const { data: searchResults } = await getBlogPosts({
          page: 1,
          perPage: 10,
          searchQuery: searchTerm,
        });
        setResults(searchResults);
        setIsOpen(true);
        setSelectedIndex(-1);
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll selected item into view
  useEffect(() => {
    if (selectedIndex >= 0 && resultsRef.current) {
      const selectedElement = resultsRef.current.querySelector(
        `#result-${selectedIndex}`
      );
      if (selectedElement) {
        selectedElement.scrollIntoView({
          block: "nearest",
          behavior: "smooth",
        });
      }
    }
  }, [selectedIndex]);

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (!inputRef.current) return;
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleGlobalKeyDown);

    return () => document.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    // Arrow down
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    }
    // Arrow up
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    }
    // Enter
    else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        router.push(`/blog/${results[selectedIndex].slug}`);
        setIsOpen(false);
        setSearchTerm("");
      } else if (results.length > 0) {
        // If nothing is selected but we have results, navigate to the first result
        router.push(`/blog/${results[0].slug}`);
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    // Escape
    else if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setSearchTerm("");
    setResults([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-md mx-auto" ref={searchRef}>
      <Form action={"/blog"} className="flex justify-center items-center gap-3">
        <div className="flex-2/3 relative group">
          <InputGroup>
            <InputGroupInput
              ref={inputRef}
              type="text"
              name="query"
              placeholder="Search articles..."
              className="pl-10 pr-10 bg-background/50 border-muted focus:border-muted-foreground/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => searchTerm && setIsOpen(true)}
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-controls="search-results"
              aria-activedescendant={
                selectedIndex >= 0 ? `result-${selectedIndex}` : undefined
              }
              autoComplete="off"
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
            {searchTerm ? (
              <InputGroupAddon align={"inline-end"}>
                <InputGroupButton
                  onClick={clearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </InputGroupButton>
              </InputGroupAddon>
            ) : null}
            <InputGroupAddon align={"inline-end"}>
              <KbdGroup>
                <Kbd className="border">{isMac ? "⌘" : "Ctrl"}</Kbd>
                <Kbd className="border">K</Kbd>
              </KbdGroup>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <Button type="submit" onClick={() => setIsOpen(false)}>
          Search
        </Button>
      </Form>

      {isOpen && results.length > 0 ? (
        <div
          id="search-results"
          ref={resultsRef}
          className="absolute z-50 mt-2 w-full bg-background/80 backdrop-blur-lg border border-border rounded-md shadow-lg overflow-hidden"
          role="listbox"
        >
          <div className="max-h-[60vh] overflow-y-auto p-2 space-y-2">
            {results.map((result, index) => (
              <BlogSearchCard
                key={result.slug}
                id={`result-${index}`}
                post={result}
                searchQuery={searchTerm}
                role="option"
                aria-selected={selectedIndex === index}
                className={selectedIndex === index ? "bg-accent" : ""}
              />
            ))}
          </div>
        </div>
      ) : null}

      {isOpen && searchTerm && results.length === 0 ? (
        <div className="absolute z-50 mt-2 w-full bg-background/80 backdrop-blur-lg border border-border rounded-md shadow-lg p-4 text-center">
          <p className="text-muted-foreground">
            No results found for &quot;{searchTerm}&quot;
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Try different keywords or check spelling
          </p>
        </div>
      ) : null}
    </div>
  );
}
