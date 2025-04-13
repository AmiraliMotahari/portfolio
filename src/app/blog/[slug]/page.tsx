import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data/blog-data";
import { user } from "@/lib/data";
import { defaultImage } from "@/lib/constants/images";
import xss from "xss";
import { formatDate } from "@/lib/formatter";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ShareButton from "@/components/share-button";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((post) => post.slug === slug);
  const { personalInfo } = user;

  if (!post) return notFound();

  // Get related posts (posts with at least one matching tag)
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.slug !== post.slug && p.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative pt-20 pb-10 md:pt-32 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>

            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              {post.title}
            </h1>

            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{formatDate(new Date(post.date))}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto dynamic-px pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-1 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <article className="glass-card p-8 mb-12">
            <div
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: xss(post.content) }}
            />
          </article>

          <div className="flex justify-center gap-3 mb-12">
            <ShareButton title="share" className="rounded-full" size={"lg"} />
          </div>

          {/* Author Bio */}
          <div className="glass-card p-6 mb-12">
            <div className="flex items-center gap-4">
              <Avatar className="size-16">
                <AvatarImage
                  src={personalInfo.picture || defaultImage}
                  alt="Author"
                  width={60}
                  height={60}
                />
                <AvatarFallback>
                  {personalInfo.firstName.at(0)}
                  {personalInfo.lastName.at(0)}
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-bold text-lg">
                  {personalInfo.firstName} {personalInfo.lastName}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {personalInfo.summary}
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 ? (
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
                Related Articles
                <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                  >
                    <article className="glass-card overflow-hidden group hover:ring transition-colors duration-300">
                      <div className="relative">
                        <Image
                          src={relatedPost.coverImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          width={400}
                          height={200}
                          className="h-40 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold mb-2 transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h4>
                        <div className="flex flex-col justify-center items-start gap-2 text-xs text-muted-foreground">
                          <p className="flex items-center">
                            <Calendar className="h-3 w-3 mr-1" />
                            <span>
                              {formatDate(new Date(relatedPost.date))}
                            </span>
                          </p>
                          <p className="flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            <span>{relatedPost.readingTime} min read</span>
                          </p>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          ) : null}

          <div className="flex justify-center">
            <Button asChild variant={"default"}>
              <Link href="/blog">
                Explore more articles
                <ChevronRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
