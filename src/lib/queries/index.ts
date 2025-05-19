import { user } from "../data";
import { blogPosts } from "../data/blog-data";
import { BlogPost, ProjectsType, QueryFunction, SortOptions } from "../types";

export const getProjects: QueryFunction<ProjectsType[number]> = async (query: {
  page: number;
  perPage: number;
  sort?: SortOptions;
}) => {
  const { page, perPage, sort } = query;

  if (!page || !perPage || perPage > 100) {
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

export const getBlogPosts: QueryFunction<BlogPost> = async (query: {
  page: number;
  perPage: number;
  sort?: SortOptions;
  searchQuery?: string;
}) => {
  const { page, perPage, sort, searchQuery } = query;
  if (!page || !perPage || perPage > 100) {
    return {
      data: [],
      total: 0,
      totalPages: 0,
      currentPage: 1,
      perPage: 0,
    };
  }

  const posts = [...blogPosts];
  const normalizedSearch = searchQuery?.toLowerCase().trim();
  const searchTokens = normalizedSearch ? normalizedSearch.split(/\s+/) : [];

  const filteredPosts = posts.filter(({ title, excerpt, tags }) => {
    const normalizedTitle = title.toLowerCase();
    const normalizedExcerpt = excerpt.toLowerCase();
    const normalizedTags = tags.map((tag) => tag.toLowerCase());

    return searchTokens.every(
      (token) =>
        normalizedTitle.includes(token) ||
        normalizedExcerpt.includes(token) ||
        normalizedTags.some((tag) => tag.includes(token))
    );
  });

  if (sort) {
    switch (sort) {
      case "most-recent":
        filteredPosts.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        break;
      case "asc":
        filteredPosts.sort((a, b) =>
          a.title.localeCompare(b.title, undefined, {
            sensitivity: "base",
          })
        );
        break;
      case "desc":
        filteredPosts.sort((a, b) =>
          b.title.localeCompare(a.title, undefined, {
            sensitivity: "base",
          })
        );
        break;
      default:
        break;
    }
  }
  const total = filteredPosts.length;
  const totalPages = Math.ceil(total / perPage);
  const safePage = Math.max(1, page);
  const startIndex = (safePage - 1) * perPage;

  const paginatedProjects = filteredPosts.slice(
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

export const getAllTags = async () => {
  return Array.from(new Set(blogPosts.flatMap((post) => post.tags)));
};

export const getFeaturedBlogPosts = () => {
  return blogPosts.filter((post) => post.isFeatured);
};
