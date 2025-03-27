import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data/blog-data";

export const metadata = {
  title: "Blog",
  description: "Thoughts, ideas, and tutorials on web development and design",
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
          Blog
        </h1>

        <p className="text-lg mb-12 text-muted-foreground">
          Thoughts, ideas, and tutorials on web development, design, and
          creative coding.
        </p>

        <div className="space-y-12">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass-card overflow-hidden group"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <Image
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="h-64 md:h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 md:w-2/3 md:flex md:flex-col md:justify-between">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readingTime} min read</span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-neon-green"
                      >
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
