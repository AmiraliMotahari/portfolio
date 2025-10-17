import { blogPosts } from "@/lib/data/blog-data";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs: MetadataRoute.Sitemap = blogPosts.map((b) => ({
    url: `https://amiralimotahari.com/blog/${b.slug}`,
    lastModified: b.date,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://amiralimotahari.com",
      lastModified: new Date().toISOString(), // Dynamic timestamp
      changeFrequency: "weekly", // More frequent updates
      priority: 1,
    },
    {
      url: "https://amiralimotahari.com/blog",
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://amiralimotahari.com/contact",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://amiralimotahari.com/about",
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://amiralimotahari.com/projects",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://amiralimotahari.com/now",
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...blogs,
  ];
}
