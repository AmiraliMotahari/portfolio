import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/blog-data";
import { defaultImage } from "@/lib/constants/images";
import { formatDate } from "@/lib/formatter";
import BlogCardRegular from "@/components/cards/blog-card-regular";

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

//todo: add search and filter

export default function BlogPage() {
  // Get all unique tags from blog posts
  // todo: next version
  // const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)));

  // Featured post (first post)
  const featuredPost = blogPosts[0];

  // Rest of the posts
  const regularPosts = blogPosts
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 md:py-32 overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-3xl"></div>
        </div> */}

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thoughts, ideas, and tutorials on web development, design, and
              creative coding.
            </p>
            {/* todo: next version */}
            {/* <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-background/50 backdrop-blur-sm border-muted"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-12 pb-20">
        {/* Tags Filter */}
        {/* todo:next version */}
        {/* <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Badge
            variant="outline"
            className="hover:bg-neon-green/10 hover:text-neon-green cursor-pointer transition-colors"
          >
            All
          </Badge>
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="hover:bg-neon-green/10 hover:text-neon-green cursor-pointer transition-colors"
            >
              {tag}
            </Badge>
          ))}
        </div> */}

        {/* Featured Post */}
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
                    className="h-64 md:h-96 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {featuredPost.tags.map((tag) => (
                        <Badge
                          key={tag}
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

        {/* Latest Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
            Latest Articles
            <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <BlogCardRegular key={post.slug} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* todo: next version */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-green/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-red/10 rounded-full filter blur-3xl"></div>

            <div className="relative">
              <h3 className="text-2xl font-bold mb-2 text-center">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Subscribe to my newsletter to get the latest articles and
                updates.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow bg-background/50 backdrop-blur-sm"
                />
                <Button className="bg-neon-green hover:bg-neon-green/80 text-black">
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-muted-foreground mt-3 text-center">
                I respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
