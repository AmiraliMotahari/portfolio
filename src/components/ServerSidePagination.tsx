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
import { useCallback, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { getPaginationRange } from "@/lib/pagination";

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
  const hasNext = page < totalPages;
  const hasPrev = page > 1;
  const prevPage = hasPrev ? page - 1 : 1;
  const nextPage = hasNext ? page + 1 : totalPages;

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

  const pagesToShow = useMemo(
    () => getPaginationRange(page, totalPages, 1),
    [page, totalPages]
  );

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

        {pagesToShow.map((item, idx) =>
          item === "..." ? (
            <PaginationItem key={`ellipsis-${idx}`}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={item}>
              <PaginationLink
                href={createQueryString({ page: item })}
                isActive={item === page}
              >
                {item}
              </PaginationLink>
            </PaginationItem>
          )
        )}

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
