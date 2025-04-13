"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {  ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/types";
import BlogCardRegular from "../cards/blog-card-regular";

type Props = {
  recentPosts: BlogPost[];
};

const PostCard = ({
  post,
  postIndex,
}: {
  post: BlogPost;
  postIndex: number;
}) => {
  return (
    <motion.div
      className="glass-card overflow-hidden group h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: postIndex * 0.1 }}
    >
      <BlogCardRegular post={post} />
    </motion.div>
  );
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
            <PostCard key={post.slug} post={post} postIndex={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <Link href="/blog">
              View all articles <ChevronRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
