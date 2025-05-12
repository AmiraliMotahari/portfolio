/**
 * Returns a mixed array of page numbers and '...' markers.
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  siblingCount = 1 // pages to show on each side of current
): (number | "...")[] {
  const totalPageNumbers = siblingCount * 2 + 5;
  // (first, last, current, two for ellipses)

  // If the total pages fit in without ellipsis, just return all
  if (totalPageNumbers >= totalPages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const shouldShowLeftEllipsis = leftSiblingIndex > 2;
  const shouldShowRightEllipsis = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;
  const pages: (number | "...")[] = [];

  if (!shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    // No left ellipsis, but right ellipsis
    const leftItemCount = 3 + 2 * siblingCount;
    const leftPages = Array.from({ length: leftItemCount }, (_, i) => i + 1);
    pages.push(...leftPages, "...", lastPageIndex);
  } else if (shouldShowLeftEllipsis && !shouldShowRightEllipsis) {
    // Left ellipsis only
    const rightItemCount = 3 + 2 * siblingCount;
    const rightPages = Array.from(
      { length: rightItemCount },
      (_, i) => totalPages - rightItemCount + i + 1
    );
    pages.push(firstPageIndex, "...", ...rightPages);
  } else if (shouldShowLeftEllipsis && shouldShowRightEllipsis) {
    // Both ellipses
    const middlePages = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );
    pages.push(firstPageIndex, "...", ...middlePages, "...", lastPageIndex);
  }

  return pages;
}
