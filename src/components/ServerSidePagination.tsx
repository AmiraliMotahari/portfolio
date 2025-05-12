"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Button } from "@/components/ui/button";

type ServerSidePaginationProps = {
  totalPages: number;
  className?: string;
};

const ServerSidePagination = ({
  totalPages,
  className,
}: ServerSidePaginationProps) => {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const pageNum = searchParams.get("page") ?? "";

  const page = parseInt(pageNum, 10) || 1;

  const hasMore = totalPages > 3;

  const getPageNumbers = () => {
    if (hasMore) {
      // Ensure we generate a valid range around the current page
      const start = Math.max(0, page - 1); // At least 1
      const end = Math.min(totalPages, start + 3); // At most totalPages

      // Adjust start if end exceeds totalPages
      const adjustedStart = end - start < 3 ? Math.max(0, end - 3) : start;

      return Array.from(
        { length: end - adjustedStart },
        (_, i) => adjustedStart + i
      );
    }
    return Array.from({ length: totalPages }, (_, i) => i);
  };

  const createQueryString = useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString());

      for (const [key, value] of Object.entries(params)) {
        if (value == null) {
          newSearchParams.delete(key);
        } else {
          newSearchParams.set(key, String(value));
        }
      }

      return `${pathName}?${newSearchParams.toString()}`;
    },
    [searchParams, pathName]
  );

  const hasNext = page < totalPages;
  const hasPrev = page > 1;
  const prevPage = hasPrev ? page - 1 : 1;
  const nextPage = hasNext ? page + 1 : totalPages;

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* Previous Button */}

        <PaginationItem>
          {hasPrev ? (
            <PaginationPrevious
              href={hasPrev ? createQueryString({ page: prevPage }) : ""}
            />
          ) : (
            <Button variant={"ghost"} disabled>
              <ChevronLeft />
              <span>Previous</span>
            </Button>
          )}
        </PaginationItem>

        {/* Page Numbers */}
        {getPageNumbers().map((pageNumber) => (
          <PaginationItem key={`projects-page-index-${pageNumber}`}>
            <PaginationLink
              isActive={page === pageNumber + 1}
              href={createQueryString({ page: pageNumber + 1 })}
            >
              {pageNumber + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Ellipsis */}
        {hasMore && page <= totalPages - 3 ? (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        ) : null}

        {/* Next Button */}

        <PaginationItem>
          {hasNext ? (
            <PaginationNext
              href={hasNext ? createQueryString({ page: nextPage }) : ""}
            />
          ) : (
            <Button variant={"ghost"} disabled>
              <span>Next</span> <ChevronRight />
            </Button>
          )}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default ServerSidePagination;
