import { defaultImage } from "@/lib/constants/images";
import { BlogPost } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Clock } from "lucide-react";
import { formatDate } from "@/lib/formatter";

type Props = {
  post: BlogPost;
};

const BlogCardRegular = ({ post }: Props) => {
  return (
    <Link key={post.slug} href={`/blog/${post.slug}`}>
      <article className="glass-card overflow-hidden h-full flex flex-col group hover:border-foreground transition-colors duration-300">
        <div className="relative">
          <Image
            src={post.coverImage || defaultImage}
            alt={post.title}
            width={600}
            height={400}
            placeholder="blur"
            blurDataURL={post.coverBlurData}
            className="h-48 w-full object-center object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 flex flex-wrap gap-1">
            {post.tags.slice(0, 1).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-background/70 backdrop-blur-sm text-xs"
              >
                {tag}
              </Badge>
            ))}
            {post.tags.length > 1 && (
              <Badge
                variant="secondary"
                className="bg-background/70 backdrop-blur-sm text-xs"
              >
                +{post.tags.length - 1}
              </Badge>
            )}
          </div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <div className="flex items-center text-xs text-muted-foreground mb-3">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{formatDate(new Date(post.date))}</span>
            <span className="mx-2">•</span>
            <Clock className="h-3 w-3 mr-1" />
            <span>{post.readingTime} min read</span>
          </div>
          <h3 className="text-xl font-bold mb-3 transition-colors">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
          <div className="flex justify-end mt-auto">
            <span className="text-sm flex items-center group-hover:translate-x-1 transition-transform">
              Read more <ChevronRight className="ml-1 h-3 w-3" />
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogCardRegular;
