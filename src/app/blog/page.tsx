import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { defaultImage } from "@/lib/constants/images";
import { formatDate } from "@/lib/formatter";
import BlogCardRegular from "@/components/cards/blog-card-regular";
import HeroAnimated from "@/components/hero-animated";
import { Blog, WithContext } from "schema-dts";
import Script from "next/script";
import { getBlogPosts, getFeaturedBlogPosts } from "@/lib/queries";
import Searchbar from "@/components/searchbar";
import { BreadcrumbItem, SortOptions } from "@/lib/types";
import AdvancePagination from "@/components/advance-pagination";
import BreadcrumbJsonLd from "@/components/seo/breadcrumb-json-ld";

type Props = {
  searchParams: Promise<{
    page: string | undefined;
    perPage: string | undefined;
    query: string | undefined;
    sort: string | undefined;
  }>;
};

//todo: add image
export const metadata = {
  title: "Blog",
  description: "Thoughts, ideas, and tutorials on web development and design",
  openGraph: {
    title: "Blog | Amirali Motahari",
    description: "Thoughts, ideas, and tutorials on web development and design",
    url: new URL("/blog", process.env.NEXT_PUBLIC_URL),
    images: [
      {
        url: new URL(
          "/assets/images/og/blog-og.png",
          process.env.NEXT_PUBLIC_URL
        ),
        width: 400,
        height: 280,
        alt: "Amirali Motahari Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Amirali Motahari",
    description: "Thoughts, ideas, and tutorials on web development and design",
    image: new URL(
      "/assets/images/og/blog-og.png",
      process.env.NEXT_PUBLIC_URL
    ),
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_URL}/blog`,
  },
};

export default async function BlogPage({ searchParams }: Props) {
  const search = await searchParams;
  const page = parseInt(search?.page || "", 10) || 1;
  const perPage = parseInt(search?.perPage || "", 10) || 9;
  const searchQuery = search?.query;
  const sort = search?.sort as SortOptions;

  // Tags
  // const tags = getAllTags()

  // Featured posts
  const featuredPosts = getFeaturedBlogPosts();
  const featuredPost = featuredPosts[0];

  // Blog posts
  const { data: posts, totalPages } = await getBlogPosts({
    page,
    perPage,
    searchQuery,
    sort,
  });

  const webUrl = process.env.NEXT_PUBLIC_URL ?? "";

  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Amirali Motahari",
    url: new URL("/blog", webUrl).toString(),
    description:
      "Thoughts, ideas, and tutorials on web development, design, and creative coding.",
    author: {
      "@type": "Person",
      "@id": `${webUrl}#person`,
      name: "Amirali Motahari",
      url: webUrl,
    },
    blogPost: posts.map((post) => {
      return {
        "@type": "BlogPosting",
        "@id": new URL(`/blog/${post.slug}#post`, webUrl).toString(),
        headline: post.title,
        url: new URL(`/blog/${post.slug}`, webUrl).toString(),
        image: new URL(post.coverImage, webUrl).toString(),
        description: post.excerpt,
        keywords: post?.tags || [],
        datePublished: post.date,
        dateModified: post.date,
        author: {
          "@type": "Person",
          "@id": `${webUrl}#person`,
          name: "Amirali Motahari",
          url: webUrl,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": new URL(`/blog/${post.slug}`, webUrl).toString(),
        },
      };
    }),
  };

  const breadcrumb: BreadcrumbItem[] = [
    {
      name: "Home",
      url: webUrl,
    },
    {
      name: "Blog",
      url: new URL("/blog", webUrl).toString(),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroAnimated
        title="Blog & Insights"
        description=" Thoughts, ideas, and tutorials on web development, design, and
              creative coding."
        className="pt-32 pb-20"
      >
        <Searchbar
        // action="/blog"
        // query="query"
        />
      </HeroAnimated>

      <section className="container mx-auto dynamic-px pb-20">
        {/* Tags Filter */}
        {/* <BlogTagFilter getTags={tags}/> */}

        {/* Featured Post */}
        {featuredPost ? (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
              Featured Post
              <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
            </h2>

            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="glass-card overflow-hidden group hover:border-foreground transition duration-300">
                <div className="md:flex">
                  <div className="md:w-2/3 relative overflow-hidden">
                    <Image
                      src={featuredPost.coverImage || defaultImage}
                      alt={featuredPost.title}
                      width={1200}
                      height={630}
                      placeholder="blur"
                      blurDataURL={featuredPost.coverBlurData}
                      className="h-64 md:h-96 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {/* TODO: Add slider */}
                        {featuredPost.tags.map((tag, i) => (
                          <Badge
                            key={`${tag}-${i}`}
                            variant="secondary"
                            className="bg-background/70 backdrop-blur-sm"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 transition-colors">
                        {featuredPost.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatDate(new Date(featuredPost.date))}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{featuredPost.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:w-1/3 md:flex md:flex-col md:justify-between">
                    <p className="text-muted-foreground mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button
                      variant="ghost"
                      className="justify-start pl-0 hover:pl-2 transition-all"
                    >
                      Read article <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ) : null}

        {/* Latest Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
            Latest Articles
            <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts?.length > 0 ? (
              posts.map((post) => (
                <BlogCardRegular key={post.slug} post={post} />
              ))
            ) : (
              <p>No posts found!</p>
            )}
          </div>
        </div>

        {totalPages > 1 ? (
          <AdvancePagination totalPages={totalPages} className="mb-8" />
        ) : null}

        {/* Newsletter Signup */}
      </section>
      <Script
        id="blog-page-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd items={breadcrumb} id="blog-breadcrumb-schema" />
    </div>
  );
}
