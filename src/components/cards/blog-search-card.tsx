import { BlogPost } from "@/lib/types";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Props = {
  post: BlogPost;
  className?: string;
};

const BlogSearchCard = ({ post, className }: Props) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "w-full flex justify-start items-center rounded-sm overflow-hidden gap-2 ring-1 ring-accent shadow-2xl hover:bg-accent transition-colors duration-300",
        className
      )}
    >
      {/* Left */}
      <div>
        <Image
          src={post.coverImage}
          alt={post.slug}
          width={64}
          height={64}
          className="size-16 object-center object-cover"
          placeholder={post.coverBlurData ? "blur" : "empty"}
          blurDataURL={post.coverBlurData}
        />
      </div>

      {/* Right */}
      <div className="flex-1/3">
        <p className="line-clamp-1 text-sm">{post.title}</p>
        <p className="line-clamp-1 text-xs text-muted-foreground">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
};

export default BlogSearchCard;
