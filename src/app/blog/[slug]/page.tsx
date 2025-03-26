import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, ArrowLeft, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/data/blog-data";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((post) => post.slug === params.slug);

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

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-muted-foreground hover:text-neon-green mb-8 transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all posts
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              {post.title}
            </h1>

            <div className="flex items-center text-sm text-muted-foreground mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
              <span className="mx-2">•</span>
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readingTime} min read</span>
            </div>
          </div>

          <div className="glass-card p-1 rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              width={1200}
              height={630}
              className="w-full h-auto rounded-2xl"
            />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              In the fast-evolving landscape of web development, staying ahead
              means constantly adapting to new technologies and methodologies.
              This post explores the latest trends that are reshaping how we
              build for the web in {new Date().getFullYear()}.
            </p>

            <h2>The Rise of AI-Assisted Development</h2>
            <p>
              Artificial intelligence is no longer just a buzzword—it&apos;s becoming
              an integral part of the development workflow. From code completion
              to automated testing, AI tools are enhancing productivity and
              enabling developers to focus on more creative aspects of their
              work.
            </p>
            <p>
              Tools like GitHub Copilot and AI-powered code review systems are
              just the beginning. We&apos;re seeing the emergence of systems that can
              generate entire components from descriptions or mockups,
              dramatically accelerating the development process.
            </p>

            <h2>Web Performance as a Core Metric</h2>
            <p>
              With Core Web Vitals now directly impacting search rankings,
              performance optimization has moved from a nice-to-have to a
              business-critical concern. Developers are increasingly adopting
              techniques like:
            </p>
            <ul>
              <li>Partial hydration and island architecture</li>
              <li>Streaming server-side rendering</li>
              <li>Optimized asset loading strategies</li>
              <li>Edge computing for reduced latency</li>
            </ul>

            <h2>The Maturation of Jamstack</h2>
            <p>
              The Jamstack approach has evolved beyond static site generators to
              encompass a broader ecosystem of tools and services. Modern
              Jamstack sites leverage:
            </p>
            <ul>
              <li>Incremental static regeneration</li>
              <li>Distributed persistent rendering</li>
              <li>Headless CMS systems with robust APIs</li>
              <li>Edge functions for dynamic content</li>
            </ul>

            <h2>Design Systems at Scale</h2>
            <p>
              As applications grow in complexity, the need for consistent,
              maintainable UI components becomes paramount. Design systems are
              becoming more sophisticated, with features like:
            </p>
            <ul>
              <li>Automated accessibility testing</li>
              <li>Theme switching capabilities</li>
              <li>Component variant management</li>
              <li>Integration with design tools</li>
            </ul>

            <h2>Looking Ahead</h2>
            <p>
              The web development landscape will continue to evolve, with a
              focus on performance, accessibility, and developer experience. By
              staying informed about these trends and selectively adopting new
              tools and techniques, developers can create better experiences for
              users while maintaining sustainable codebases.
            </p>
            <p>
              What trends are you most excited about? Share your thoughts in the
              comments below!
            </p>
          </div>
        </article>

        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Share this post</h3>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full h-10 w-10"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <Link href="/blog">
              <Button className="bg-neon-green hover:bg-neon-green/80 text-black">
                Read more articles
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
