"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  recentPosts: {
    title: string;
    slug: string;
    date: string;
    readingTime: number;
    excerpt: string;
    coverImage: string;
    tags: string[];
  }[];
};

export default function LatestPosts({ recentPosts }: Props) {
  return (
    <section className="py-20 bg-muted/10 px-12">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughts, ideas, and tutorials on web development, design, and
            creative coding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              className="glass-card overflow-hidden group h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="flex flex-col h-full"
              >
                <div className="relative">
                  <Image
                    src={post.coverImage || "/placeholder.svg"}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readingTime} min read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-neon-green transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <span className="text-sm text-neon-green flex items-center">
                      Read more <ArrowRight className="ml-1 h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button
              variant="outline"
              className="border-neon-green text-neon-green hover:bg-neon-green/10"
            >
              View all articles <ChevronRight className="ml-2" size={16} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
