import { user } from "../data";
import { SortOptions } from "../types";

export const getProjects = async (query: {
  page: number;
  perPage: number;
  sort?: SortOptions;
}) => {
  const { page, perPage, sort } = query;

  if (!page || !perPage) {
    return {
      data: [],
      total: 0,
      totalPages: 0,
      currentPage: 1,
      perPage: 0,
    };
  }

  const totalProjects = [...user.projects]; // Avoid mutation
  const total = totalProjects.length;
  const totalPages = Math.ceil(total / perPage);

  if (sort) {
    switch (sort) {
      case "most-recent":
        totalProjects.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "asc":
        totalProjects.sort((a, b) =>
          a.title.localeCompare(b.title, undefined, {
            sensitivity: "base",
          })
        );
        break;
      case "desc":
        totalProjects.sort((a, b) =>
          b.title.localeCompare(a.title, undefined, {
            sensitivity: "base",
          })
        );
        break;
      default:
        break;
    }
  }

  const safePage = Math.max(1, page);
  const startIndex = (safePage - 1) * perPage;

  const paginatedProjects = totalProjects.slice(
    startIndex,
    startIndex + perPage
  );

  return {
    data: paginatedProjects,
    totalPages,
    total,
    currentPage: safePage,
    perPage,
  };
};
