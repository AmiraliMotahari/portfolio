"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/lib/types";
import BlogCardRegular from "@/components/cards/blog-card-regular";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

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
      className="overflow-hidden group h-full flex flex-col"
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
  const t = useTranslations("home.latestPosts");

  return (
    <section className="py-20 bg-muted/10 dynamic-px">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text">
            {t("heading")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <PostCard key={post.slug} post={post} postIndex={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="rtl:flex-row-reverse">
            <Link href="/blog">
              <span>{t("viewAllArticlesButton")}</span>
              <ChevronRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
