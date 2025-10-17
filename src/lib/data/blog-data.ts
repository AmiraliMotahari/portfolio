import { BlogPost } from "../types";

// const dummyPosts = Array.from({ length: 20 }, (_, i) => {
//   const index = i + 1;
//   return {
//     title: `Dummy Blog Post ${index}`,
//     slug: `dummy-blog-post-${index}`,
//     date: `2025-01-${((index % 28) + 1).toString().padStart(2, "0")}`,
//     readingTime: Math.floor(Math.random() * 5) + 3,
//     excerpt: `This is a short excerpt for blog post number ${index}, discussing web dev concepts.`,
//     coverImage: defaultImage,
//     coverBlurData: "data:image/jpeg;base64,...",
//     content: `## Blog Post ${index}\nThis is the content for dummy blog post number ${index}. It includes markdown and ideas related to development.`,
//     tags: [
//       "web",
//       index % 2 === 0 ? "react" : "design",
//       index % 3 === 0 ? "typescript" : "css",
//     ],
//     isFeatured: index % 5 === 0,
//   };
// });

export const blogPosts: BlogPost[] = [
  {
    title: "Next.js 15: A Deep Dive into Its Latest Features",
    slug: "nextjs-15-deep-dive",
    date: new Date("2025-04-10"),
    readingTime: 8,
    excerpt:
      "Explore the ground breaking features of Next.js 15, including React 19 support, caching improvements, and the stabilization of Turbopack.",
    coverImage: "/assets/images/blog/nextjs-15-cover.png",
    coverBlurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nGNgYOThE5UKi8308AtniE3Nb+mZ3jtz+d2v/xlcfUJiU/Pf/////P9/BgZGHjUtk+buGdYOngDrnRStCEg5pAAAAABJRU5ErkJggg==",
    content: `<h3>Introduction</h3><p>Next.js 15 has arrived, and with it comes a fresh wave of innovation for frontend developers building fast, scalable web applications. Whether you're an experienced React developer or a newcomer to the Jamstack ecosystem, Next.js 15 delivers powerful tools that enhance performance, developer productivity, and scalability.</p><p>In this post, we&apos;ll explore the major improvements in Next.js 15, dive into practical use cases, and understand how these new features align with the future of React (especially React 19).</p><hr><h3>🚀 What's New in Next.js 15?</h3><p>Next.js has always been at the forefront of modern web development. With version 15, the framework takes a significant leap forward, focusing on performance, predictability, and developer experience.</p><p>Let&apos;s unpack the most impactful updates.</p><hr><h3>1. <strong>Full Compatibility with React 19</strong></h3><p>React 19 introduces a more refined developer experience and includes new APIs like <code>use</code>, <code>useOptimistic</code>, <code>useActionState</code>, and automatic memoization with the experimental React Compiler. Next.js 15 now supports these React 19 features out of the box.</p><h4>✅ Benefits:</h4><ul class="list-disc ml-4"><li><p>Seamless server-side rendering with React's new features</p></li><li><p>Enhanced form state handling with <code>useActionState</code></p></li><li><p>Optimistic UI patterns with <code>useOptimistic</code> for better UX</p></li><li><p>Cleaner async logic using the <code>use</code> hook</p></li></ul><p>🔍 <em>Real World Tip:</em> Use <code>useActionState</code> in server components to manage form submissions with fewer re-renders and better SSR support.</p><hr><h3>2. <strong>Turbopack Reaches Stability</strong></h3><p>Turbopack, the long-anticipated successor to Webpack, has now reached a stable release in dev mode.</p><h4>🚀 Key Improvements:</h4><ul class="list-disc ml-4"><li><p>Lightning-fast local builds and HMR (Hot Module Replacement)</p></li><li><p>Better memory management compared to Webpack</p></li><li><p>Built-in Rust performance optimizations</p></li></ul><p>To enable:</p><pre><code>bash</code></pre><p>CopyEdit</p><p><code>next dev --turbo </code></p><p>📈 <em>Impact:</em> Developers report up to 10x faster build speeds for large projects.</p><hr><h3>3. <strong>Improved Client-Side Caching</strong></h3><p>Next.js 15 refines the way the Client Router cache behaves, especially when navigating between pages that use server data (e.g., via <code>getServerSideProps</code> or <code>fetch</code> in Server Components).</p><h4>🔁 What's Changed:</h4><ul class="list-disc ml-4"><li><p><code>GET</code> Route Handlers now leverage default caching</p></li><li><p>You can opt into or out of the cache with greater control</p></li><li><p>SSR and revalidation strategies (e.g., <code>revalidate: 10</code>) now work more predictably across the client/server boundary</p></li></ul><p>🛠️ <em>Use Case:</em> If you're building a news site, caching headlines while dynamically updating comment sections becomes seamless.</p><hr><h3>4. <strong>Experimental React Compiler Support</strong></h3><p>The React Compiler—still experimental—is integrated into Next.js 15. It's designed to automatically optimize your code by eliminating unnecessary re-renders, essentially making <code>useMemo</code> and <code>useCallback</code> optional in many cases.</p><h4>⚙️ Why It Matters:</h4><ul class="list-disc ml-4"><li><p>Reduces boilerplate</p></li><li><p>Enhances runtime performance</p></li><li><p>Future-proofs code for React-native compatibility</p></li></ul><p>🔧 <em>Note:</em> Use cautiously in production. Enable via:</p><pre><code>js</code></pre><p>CopyEdit</p><pre><code>experimental: {   reactCompiler: true, } </code></pre><hr><h3>5. <strong>Enhanced Hydration Error Reporting</strong></h3><p>Hydration errors can be tricky to debug. With Next.js 15, developers get clearer, contextual error messages for hydration mismatches, complete with improved stack traces and suggestions.</p><p>🧪 <em>Before:</em> “Text content mismatch” ✅ <em>Now:</em> “Hydration mismatch on element <code>&lt;div&gt;</code>. Server rendered ‘Welcome!&apos; but client rendered ‘Welcome back!&apos;.”</p><p>This makes debugging SSR-related issues significantly faster.</p><hr><h3>6. <strong>Static Route Indicator in Dev Mode</strong></h3><p>Next.js 15 introduces a visual overlay in development mode that shows whether a route is static or dynamic. This is incredibly helpful when optimizing for performance and deploying static pages with edge caching.</p><p>👀 <em>Example:</em> On route change, you&apos;ll see a label like:</p><pre><code>bash</code></pre><p>CopyEdit</p><p><code>🟢 Static | /about 🔵 Dynamic | /dashboard </code></p><hr><h3>7. <strong>Routing and App Directory Enhancements</strong></h3><p>The App Router continues to evolve. Now you can:</p><ul class="list-disc ml-4"><li><p>Nest dynamic routes more deeply</p></li><li><p>Use advanced loading strategies via <code>&lt;Suspense&gt;</code></p></li><li><p>Create better segmented layouts</p></li></ul><p>Also, new conventions are being adopted for colocation and error handling (e.g., <code>error.tsx</code> at the layout level).</p><p>🧩 <em>Example:</em> You can colocate loading, error, and layout files with the route components themselves, improving modularity.</p><hr><h3>8. <strong>Expanded Middleware Capabilities</strong></h3><p>Middleware now has deeper integration with the Request/Response lifecycle, and more edge functions are supported in Vercel's platform.</p><p>You can:</p><ul class="list-disc ml-4"><li><p>Set response headers</p></li><li><p>Perform geo-based redirection</p></li><li><p>Inject content conditionally</p></li></ul><p>This opens doors to enhanced personalization without sacrificing speed.</p><hr><h3>9. <strong>Improved Image Optimization (Vercel Only)</strong></h3><p>With the upgraded image component in Next.js 15:</p><ul class="list-disc ml-4"><li><p>Automatic AVIF/WebP fallback support is better</p></li><li><p>Responsive image loading is smarter</p></li><li><p>Custom loaders are easier to configure</p></li></ul><p>This means leaner pages and happier Core Web Vitals!</p><hr><h2>⚖️ Next.js 14 vs Next.js 15 — What&apos;s Changed?</h2><table style="min-width: 75px"><colgroup><col style="min-width: 25px"><col style="min-width: 25px"><col style="min-width: 25px"></colgroup><tbody><tr><th colspan="1" rowspan="1"><p>Feature</p></th><th colspan="1" rowspan="1"><p>Next.js 14</p></th><th colspan="1" rowspan="1"><p>Next.js 15</p></th></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>React 19 Support</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>❌</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>✅</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>Turbopack (dev)</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Beta</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Stable</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>Client Cache</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Basic</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Advanced</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>Hydration Debugging</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Limited</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Improved</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>Route Indicator</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>❌</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>✅</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>React Compiler</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>❌</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>Experimental</p></td></tr><tr><td colspan="1" rowspan="1" style="background-color: null"><p>Static Generation</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>✅</p></td><td colspan="1" rowspan="1" style="background-color: null"><p>✅ (Improved)</p></td></tr></tbody></table><hr><h3>🌐 SEO Implications</h3><p>All these updates impact SEO directly or indirectly:</p><ul class="list-disc ml-4"><li><p>Faster page loads (Turbopack, image optimization) = <strong>Better LCP scores</strong></p></li><li><p>More accessible routes (App Router, Middleware) = <strong>Higher crawlability</strong></p></li><li><p>React 19 compatibility = <strong>Future-proofing for frameworks like Vercel, Netlify</strong></p></li></ul><p>Pro tip: combine <code>revalidate</code> with Middleware to create dynamic static pages that still feel personalized.</p><hr><h3>📚 Conclusion</h3><p>Next.js 15 is not just a framework update—it's a signal of where the web is heading. With improved tooling, deeper React 19 support, and smarter performance defaults, developers are more empowered than ever to create blazing-fast, modern web applications.</p><p>If you're already using Next.js, upgrading to v15 is a no-brainer. If you&apos;re new, now&apos;s the best time to dive in.</p><p>Stay ahead of the curve—optimize, personalize, and scale with Next.js 15.</p>`,
    tags: [
      "Next.js",
      "React 19",
      "Turbopack",
      "Web Development",
      "JavaScript",
      "Performance Optimization",
    ],
    isFeatured: false,
  },
  {
    title: "Implementing Voice Search Optimization in Web Applications",
    slug: "voice-search-optimization-web-apps",
    date: new Date("2025-04-11"),
    readingTime: 8,
    excerpt:
      "Voice search is transforming the way users interact with the web. Learn how to optimize your React or Next.js app for the voice-first era.",
    coverImage: "/assets/images/blog/voice-search-cover.png",
    coverBlurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AAAlTSdHdQEdOjJGZQDH8P/L9P90gpzL3PsAstH/1Pz/P1V3WG2PAJWu/6rI/wAfRgAILHdxGS84rRwsAAAAAElFTkSuQmCC",
    content: `<h3>Introduction</h3><p>Voice search has rapidly transformed the digital landscape, with over 1 billion voice searches conducted monthly. As virtual assistants like Siri, Alexa, and Google Assistant become integral to daily life, optimizing web applications for voice search is no longer optional—it's essential.<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH</a></p><p>This guide delves into the importance of voice search optimization, its impact on web development, and actionable strategies to ensure your applications are voice-search friendly.</p><hr><h3>📈 The Rise of Voice Search</h3><ul class="list-disc ml-4"><li><p><strong>User Adoption</strong>: Approximately 28% of consumers in the US and UK use voice assistants daily. <a target="_blank" rel="noopener" href="https://www.searchenginejournal.com/voice-search-optimization-strategy/379946/">Search Engine Journal</a></p></li><li><p><strong>Search Behavior</strong>: Voice searches are more conversational, often phrased as questions, differing significantly from traditional text queries.</p></li><li><p><strong>Local Intent</strong>: A significant portion of voice searches are local, with users seeking nearby services or businesses.</p></li></ul><hr><h3>🤖 Understanding Voice Search Mechanics</h3><p>Voice search operates through a combination of Automatic Speech Recognition (ASR) and Natural Language Processing (NLP). When a user speaks, the voice assistant converts speech to text (ASR) and then interprets the intent behind the query (NLP) to provide relevant results.</p><hr><h3>🛠️ Strategies for Voice Search Optimization</h3><h4>1. <strong>Incorporate Conversational Keywords</strong></h4><p>Voice queries are typically longer and more natural. Instead of targeting short keywords like "weather NYC," optimize for phrases like "What's the weather like in New York City today?"</p><p><strong>Implementation Tips</strong>:</p><ul class="list-disc ml-4"><li><p>Use tools like AnswerThePublic or Ubersuggest to identify common question-based queries.<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">Digital Marketing Institute+5The HOTH+5Content Whale+5</a></p></li><li><p>Integrate these phrases naturally into your content, especially in headings and FAQs.<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH+1Content Whale+1</a></p></li></ul><h4>2. <strong>Optimize for Featured Snippets</strong></h4><p>Voice assistants often pull answers from featured snippets. To increase the chances of your content being selected:<a target="_blank" rel="noopener" href="https://www.linkedin.com/pulse/integrating-voice-search-optimization-your-web-development-strategy-q4r5f">Content Whale+3LinkedIn+3The HOTH+3</a><a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH+1LinkedIn+1</a></p><ul class="list-disc ml-4"><li><p>Provide clear, concise answers to common questions.</p></li><li><p>Use structured data and proper HTML tags to highlight important information.</p></li></ul><h4>3. <strong>Enhance Local SEO</strong></h4><p>Given the local nature of many voice searches:<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH+1LinkedIn+1</a></p><ul class="list-disc ml-4"><li><p>Ensure your business information (Name, Address, Phone Number) is consistent across all platforms.<a target="_blank" rel="noopener" href="https://www.linkedin.com/pulse/integrating-voice-search-optimization-your-web-development-strategy-q4r5f">LinkedIn</a></p></li><li><p>Maintain an up-to-date Google Business Profile.<a target="_blank" rel="noopener" href="https://www.linkedin.com/pulse/integrating-voice-search-optimization-your-web-development-strategy-q4r5f">LinkedIn+1Content Whale+1</a></p></li><li><p>Include local keywords and landmarks in your content.<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">Content Whale+2The HOTH+2LinkedIn+2</a></p></li></ul><h4>4. <strong>Improve Website Loading Speed</strong></h4><p>Voice search users expect quick answers. A slow-loading website can hinder your chances of appearing in voice search results.<a target="_blank" rel="noopener" href="https://www.linkedin.com/pulse/integrating-voice-search-optimization-your-web-development-strategy-q4r5f">LinkedIn</a><a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">Best Digital Marketing Agency+6The HOTH+6SPsoft+6</a></p><p><strong>Optimization Techniques</strong>:</p><ul class="list-disc ml-4"><li><p>Compress images and use modern formats like WebP.</p></li><li><p>Implement lazy loading for non-critical resources.</p></li><li><p>Utilize caching and Content Delivery Networks (CDNs).</p></li></ul><h4>5. <strong>Ensure Mobile-Friendliness</strong></h4><p>Since many voice searches occur on mobile devices:<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">Search Engine Journal+4The HOTH+4LinkedIn+4</a></p><ul class="list-disc ml-4"><li><p>Adopt responsive design principles.</p></li><li><p>Use legible fonts and appropriately sized buttons.<a target="_blank" rel="noopener" href="https://content-whale.com/blog/voice-search-optimization/">Content Whale+1WIRED+1</a></p></li><li><p>Test your site's mobile performance using tools like Google's Mobile-Friendly Test.</p></li></ul><h4>6. <strong>Implement Structured Data</strong></h4><p>Structured data helps search engines understand your content better. By using schema markup:</p><ul class="list-disc ml-4"><li><p>Highlight key information like reviews, events, and products.<a target="_blank" rel="noopener" href="https://www.linkedin.com/pulse/integrating-voice-search-optimization-your-web-development-strategy-q4r5f">LinkedIn</a></p></li><li><p>Increase the likelihood of your content appearing in rich results.<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH</a></p></li></ul><h4>7. <strong>Create Comprehensive FAQ Sections</strong></h4><p>FAQs address specific questions users might ask. By structuring them effectively:<a target="_blank" rel="noopener" href="https://www.thehoth.com/learn/seo/advanced/voice-search-seo/">The HOTH</a></p><ul class="list-disc ml-4"><li><p>Use clear headings for each question.</p></li><li><p>Provide concise, informative answers.</p></li><li><p>Incorporate relevant keywords naturally.</p></li></ul><hr><h3>🧪 Technical Implementation in Web Applications</h3><h4><strong>Front-End Considerations</strong></h4><ul class="list-disc ml-4"><li><p><strong>Semantic HTML</strong>: Use appropriate tags like <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;header&gt;</code> to structure content.</p></li><li><p><strong>ARIA Labels</strong>: Enhance accessibility by providing additional context to assistive technologies.</p></li></ul><h4><strong>Back-End Considerations</strong></h4><ul class="list-disc ml-4"><li><p><strong>Server-Side Rendering (SSR)</strong>: Frameworks like Next.js can improve load times and SEO by rendering pages on the server.</p></li><li><p><strong>Dynamic Content</strong>: Ensure that dynamic content is crawlable by search engines, possibly by using pre-rendering techniques.</p></li></ul><hr><h3>📊 Monitoring and Analytics</h3><p>Regularly assess the effectiveness of your voice search optimization efforts:</p><ul class="list-disc ml-4"><li><p>Use tools like Google Search Console to monitor search performance.</p></li><li><p>Analyze user behavior to identify common voice search queries.</p></li><li><p>Adjust your content strategy based on insights gathered.</p></li></ul>`,
    tags: [
      "Voice Search",
      "SEO",
      "Next.js",
      "React",
      "Web Development",
      "Web Accessibility",
    ],
    isFeatured: false,
  },
  {
    title: "Mastering SEO in Next.js: A Comprehensive Guide",
    slug: "nextjs-seo-guide",
    date: new Date("2025-04-12"),
    readingTime: 10,
    excerpt:
      "Explore the essential SEO features in Next.js, including metadata management, Open Graph integration, structured data, and dynamic routing.",
    coverImage: "/assets/images/blog/nextjs-seo-guide.png",
    coverBlurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAL0lEQVR4nGNg4FVU1ndU0nVkYJdniEir/PDn/7tf/yV13Bi4pPRUTTx4ZY0YBFQB0AUKkHQ2kPkAAAAASUVORK5CYII=",
    content: `<h3>Introduction</h3><p>Search Engine Optimization (SEO) is pivotal for enhancing the visibility and reach of web applications. Next.js, a powerful React framework, offers robust features to streamline SEO implementation, including metadata management, Open Graph integration, structured data, and more. This guide delves into these features, providing practical insights to optimize your Next.js applications effectively.<a target="_blank" rel="noopener" href="https://javascript.plainenglish.io/mastering-metadata-in-next-js-a-comprehensive-guide-to-seo-excellence-ab9c2cf0dc35">JavaScript in Plain English</a></p><hr><h3>🏷️ Understanding Metadata in Next.js</h3><p>Metadata plays a crucial role in SEO, providing search engines with information about your web pages. Next.js facilitates metadata management through its <code>metadata</code> object and <code>generateMetadata</code> function.<a target="_blank" rel="noopener" href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata">JavaScript in Plain English+2Next.js by Vercel - The React Framework+2Next.js by Vercel - The React Framework+2</a></p><h4>Static Metadata</h4><p>For static pages, you can export a <code>metadata</code> object directly:<a target="_blank" rel="noopener" href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata">Next.js by Vercel - The React Framework+1Stack Overflow+1</a></p><pre><code>// app/page.tsx

export const metadata = {
  title: 'Home Page',
  description: 'Welcome to our homepage.',
};</code></pre><p></p><p>This approach is ideal for pages with content that doesn't change frequently.</p><h4>Dynamic Metadata with <code>generateMetadata</code></h4><p>For dynamic content, Next.js provides the <code>generateMetadata</code> function, allowing metadata generation based on route parameters or fetched data:<a target="_blank" rel="noopener" href="https://javascript.plainenglish.io/mastering-metadata-in-next-js-a-comprehensive-guide-to-seo-excellence-ab9c2cf0dc35">JavaScript in Plain English+1Stack Overflow+1</a></p><pre><code>// app/blog/[slug]/page.tsx
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post.title,
    description: post.excerpt,
  };
}</code></pre><p></p><p>This dynamic approach ensures that each page has relevant metadata, enhancing SEO performance.</p><hr><h3>🌐 Enhancing Social Sharing with Open Graph and Twitter Metadata</h3><p>Open Graph and Twitter metadata enrich how your content appears when shared on social platforms. Next.js supports these through the <code>openGraph</code> and <code>twitter</code> fields within the metadata object.<a target="_blank" rel="noopener" href="https://dev.to/danmugh/understand-open-graph-og-in-next-js-a-practical-guide-3ade">DEV Community+1Stack Overflow+1</a><a target="_blank" rel="noopener" href="https://nextjs.org/docs/app/api-reference/functions/generate-metadata">Next.js by Vercel - The React Framework</a></p><h4>Open Graph Metadata</h4><pre><code>export const metadata = {
  openGraph: {
    title: 'Next.js Guide',
    description: 'A comprehensive guide to Next.js.',
    url: 'https://example.com/nextjs-guide',
    siteName: 'Example Site',
    images: [
      {
        url: 'https://example.com/images/nextjs-guide.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'article',
  },
};</code></pre><p></p><h4>Twitter Metadata</h4><pre><code>export const metadata = {
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Guide',
    description: 'A comprehensive guide to Next.js.',
    creator: '@example',
    images: ['https://example.com/images/nextjs-guide.png'],
  },
};</code></pre><p></p><p>These metadata configurations ensure your content is presented attractively on social media platforms, potentially increasing engagement.</p><hr><h3>📊 Implementing Structured Data with JSON-LD</h3><p>Structured data helps search engines understand your content better, enabling rich search results. Next.js allows the inclusion of JSON-LD structured data within the metadata object.<a target="_blank" rel="noopener" href="https://nextjs.org/docs/app/building-your-application/optimizing/metadata">Next.js by Vercel - The React Framework</a></p><pre><code>export const metadata = {
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Next.js Guide',
      description: 'A comprehensive guide to Next.js.',
      author: {
        '@type': 'Person',
        name: 'John Doe',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Example Site',
        logo: {
          '@type': 'ImageObject',
          url: 'https://example.com/logo.png',
        },
      },
      datePublished: '2025-04-13',
    }),
  },
};</code></pre><p></p><p>Incorporating structured data enhances your site's visibility in search engine results through rich snippets.</p><hr><h3>⚙️ Leveraging <code>generateStaticParams</code> for Dynamic Routes</h3><p>For dynamic routes, Next.js's <code>generateStaticParams</code> function enables pre-rendering pages at build time, improving performance and SEO.</p><pre><code>// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) =&gt; ({
    slug: post.slug,
  }));
}</code></pre><p></p><p>This function ensures that all dynamic routes are statically generated, reducing load times and enhancing crawlability.</p><hr><h3>🧰 Additional SEO Best Practices in Next.js</h3><ul class="list-disc ml-4"><li><p><strong>Canonical URLs</strong>: Prevent duplicate content issues by specifying canonical URLs.</p></li></ul><pre><code>  export const metadata = {
    alternates: {
      canonical: 'https://example.com/nextjs-guide',
    },
  };</code></pre><p></p><ul class="list-disc ml-4"><li><p><strong>Robots Meta Tag</strong>: Control how search engines index your pages.</p></li></ul><pre><code>  export const metadata = {
    robots: {
      index: true,
      follow: true,
      nocache: false,
    },
  };</code></pre><p></p><ul class="list-disc ml-4"><li><p><strong>Sitemap Generation</strong>: Use tools like <code>next-sitemap</code> to generate sitemaps, aiding search engine indexing.</p></li><li><p><strong>Performance Optimization</strong>: Implement lazy loading, image optimization, and code splitting to enhance page load speeds, positively impacting SEO.</p></li></ul><hr><h3>📌 Conclusion</h3><p>Optimizing SEO in Next.js involves a multifaceted approach, leveraging built-in features like metadata management, Open Graph and Twitter integration, structured data, and dynamic routing. By implementing these strategies, you can significantly improve your web application's visibility, user engagement, and search engine rankings.</p>`,
    tags: ["SEO", "Next.js", "React", "Web Development", "Web Accessibility"],
    isFeatured: false,
  },
  {
    title:
      "Mastering the View Transition API: Smooth UX in CSS, JS, React, and Next.js",
    slug: "view-transition-api",
    date: new Date("2025-04-13"),
    readingTime: 8,
    excerpt:
      "Explore the new View Transition API from CSS, JavaScript, React, and Next.js perspectives. Learn how to implement seamless animations and enhance your web application's UX.",
    coverImage: "/assets/images/blog/view-transition-api-cover.png",
    coverBlurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nAEnANj/AIyN0LWx866n6pSR0gAHI2AADksAAEIAD0wA7eX/tKvh/fP/493/dCkUuAmok9UAAAAASUVORK5CYII=",
    tags: [
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "UX",
      "Web Animations",
      "ViewTransition",
    ],
    isFeatured: false,
    content: `<p>Creating smooth, native-like transitions has long been a challenge for developers. Whether building single-page applications (SPAs) or multi-page applications (MPAs), managing animated state transitions often required complex logic or third-party tools. Enter the <strong>View Transition API</strong>—a powerful, modern browser feature designed to streamline and standardize animated transitions between DOM states.</p><p>In this post, we&apos;ll dive into how this API works, and how you can use it effectively across <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and <strong>Next.js</strong>.</p><hr><h2>🚀 What is the View Transition API?</h2><p>The View Transition API enables developers to animate between two visual states in a way that feels smooth and natural. Think page-to-page animations or component-level transitions that look native to the platform.</p><p>With just a few lines of code, the API captures the current DOM state, applies updates, and renders the transition—all natively and efficiently.</p><hr><h2>🎨 Styling with CSS</h2><p>The View Transition API introduces several new CSS features:</p><pre><code>@view-transition;

.my-element {
  view-transition-name: fade-slide;
}

::view-transition-old(fade-slide) {
  opacity: 1;
  transform: translateY(0);
}

::view-transition-new(fade-slide) {
  opacity: 0;
  transform: translateY(20px);
}</code></pre><p>Key pseudo-elements:</p><ul class="list-disc ml-4"><li><p><code>::view-transition-old(NAME)</code>: The outgoing state.</p></li><li><p><code>::view-transition-new(NAME)</code>: The incoming state.</p></li></ul><p>You can define these transitions inline, in your stylesheets, or dynamically via CSS-in-JS.</p><hr><h2>🧠 JavaScript: Starting a Transition</h2><p>In JavaScript, you use the <code>document.startViewTransition()</code> method to initiate the transition:</p><pre><code>document.startViewTransition(() =&gt; {
  document.querySelector(".content").textContent = "New Content";
});</code></pre><p>The callback contains your DOM mutation logic. The browser handles capturing before/after states and smoothly animating between them.</p><hr><h2>⚛️ React Support</h2><p>React&apos;s architecture complicates things slightly, but it&apos;s still possible. There&apos;s experimental support using:</p><pre><code>import { unstable_ViewTransition as ViewTransition } from 'react';

function MyComponent() {
  return (
    &lt;ViewTransition&gt;
      &lt;div&gt;Content goes here&lt;/div&gt;
    &lt;/ViewTransition&gt;
  );
}</code></pre><p>Expect improvements to land as React&apos;s Concurrent Features become more widely adopted.</p><hr><h2>🔁 Next.js Integration</h2><p>To use view transitions in <strong>Next.js</strong>, we recommend <code>next-view-transitions</code>:</p><pre><code>npm install next-view-transitions</code></pre><p>Then, wrap your layout:</p><pre><code>// layout.tsx
import { ViewTransitions } from 'next-view-transitions';

export default function Layout({ children }) {
  return (
    &lt;ViewTransitions&gt;
      &lt;html lang="en"&gt;
        &lt;body&gt;{children}&lt;/body&gt;
      &lt;/html&gt;
    &lt;/ViewTransitions&gt;
  );
}</code></pre><p>Use the provided <code>&lt;Link /&gt;</code> component to trigger animated navigation:</p><pre><code>import { Link } from 'next-view-transitions';

&lt;Link href="/about"&gt;About&lt;/Link&gt;</code></pre><hr><h2>📈 Why Use It?</h2><ul class="list-disc ml-4"><li><p>✅ <strong>Performance</strong>: Browser-optimized animations</p></li><li><p>✅ <strong>Simplified logic</strong>: No manual keyframe juggling</p></li><li><p>✅ <strong>Enhanced UX</strong>: Feels smoother, especially during navigation</p></li></ul><hr><h2>👀 Browser Support</h2><p>View Transition API is currently supported in <strong>Chromium-based browsers</strong> like Chrome and Edge. Firefox and Safari are in progress, so use progressive enhancement:</p><pre><code>if (document.startViewTransition) {
  document.startViewTransition(() =&gt; updateDOM());
} else {
  updateDOM();
}</code></pre><hr><h2>💡 Final Thoughts</h2><p>The View Transition API unlocks a new level of polish and interactivity for web apps. With clean integration points across CSS, JavaScript, React, and frameworks like Next.js, it&apos;s a game-changer for modern UX.</p><p>Start experimenting today—your users will feel the difference.</p>`,
  },
  {
    title: "Harnessing Web Workers in JavaScript, React, and Next.js",
    slug: "web-workers-js-react-nextjs",
    date: new Date("2025-04-20"),
    readingTime: 8,
    excerpt:
      "Learn how to leverage Web Workers in JavaScript, React, and Next.js to offload heavy computations and improve performance.",
    tags: ["JavaScript", "React", "Next.js", "Web Workers", "Performance"],
    coverBlurData:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAP0lEQVR4nAE0AMv/AAAOKwAGJR01Vhw0VABLXoWGn8e0wt1HWH8ABSBAAh8/BRs3BiA/ALLC5PH+/+Pw/4+fvnxBE8HZPpkHAAAAAElFTkSuQmCC",
    coverImage: "/assets/images/blog/web-worker-integration-in-javascript.png",
    isFeatured: false,
    content: `<h2>Introduction</h2><p>Modern web applications are increasingly dynamic and interactive, but that often comes at a performance cost. One powerful tool for managing CPU-intensive tasks without blocking the main thread is the <strong>Web Worker</strong>.</p><p>In this post, we&apos;ll explore what Web Workers are, how to use them in JavaScript, React, and Next.js, and real-world scenarios where they can significantly enhance your project&apos;s performance and UX.</p><hr><h2>🧠 What Are Web Workers?</h2><p>Web Workers are scripts that run in background threads separate from the main execution thread of a web application. This allows you to perform computationally expensive operations—like data processing, file manipulation, or long-running algorithms—without freezing the UI.</p><p>The main thread stays responsive while the Web Worker does the heavy lifting.</p><hr><h2>📦 Basic Web Worker Usage in JavaScript</h2><pre><code>// worker.js
self.onmessage = function(e) {
  const result = heavyCalculation(e.data);
  self.postMessage(result);
};

function heavyCalculation(data) {
  // some expensive logic
  return data * 2;
}</code></pre><pre><code>// main.js
const worker = new Worker('worker.js');
worker.postMessage(10);

worker.onmessage = function(e) {
  console.log('Result:', e.data);
};</code></pre><hr><h2>⚛️ Using Web Workers in React</h2><p>You can integrate workers with React by separating state management from the computational tasks:</p><pre><code>useEffect(() =&gt; {
  const worker = new Worker(new URL('./worker.js', import.meta.url));
  worker.postMessage(100);
  worker.onmessage = (e) =&gt; {
    setResult(e.data);
  };
  return () =&gt; worker.terminate();
}, []);</code></pre><p>You may need tools like <strong>worker-loader</strong> or <strong>Vite/webpack plugins</strong> to help bundle workers correctly.</p><hr><h2>🌐 Web Workers in Next.js</h2><p>Since Next.js runs in both client and server environments, you must ensure workers are only instantiated on the client side:</p><pre><code>useEffect(() =&gt; {
  if (typeof window !== 'undefined') {
    const worker = new Worker(new URL('./worker.js', import.meta.url));
    worker.postMessage({ data: 'hello' });
    worker.onmessage = (e) =&gt; console.log(e.data);
  }
}, []);</code></pre><p>With Next.js 13+, you can also utilize <strong>dynamic imports</strong> and <strong>Edge functions</strong> to extend performance enhancements even further.</p><hr><h2>🌍 Real-World Use Cases</h2><p>Web Workers can be extremely useful in:</p><ul class="list-disc ml-4"><li><p><strong>Image processing</strong> (e.g., resizing, filters)</p></li><li><p><strong>PDF generation or parsing</strong></p></li><li><p><strong>Cryptographic operations</strong></p></li><li><p><strong>Data visualization</strong> with libraries like D3.js</p></li><li><p><strong>Machine learning inference</strong> on the client</p></li><li><p><strong>Large dataset filtering or sorting</strong></p></li><li><p><strong>Syntax highlighting or code formatting</strong> in online editors</p></li></ul><hr><h2>📈 How Much Can It Improve Performance?</h2><p>Using Web Workers offloads intensive work from the main thread, resulting in:</p><ul class="list-disc ml-4"><li><p>🚀 Faster load times</p></li><li><p>🧭 Smoother scrolling and interactions</p></li><li><p>🧩 Better responsiveness under load</p></li><li><p>💻 Improved user experience on lower-powered devices</p></li></ul><p>Here&apos;s a practical benchmark:</p><ul class="list-disc ml-4"><li><p><strong>Without Worker</strong>: A complex operation might freeze the UI for 500ms+</p></li><li><p><strong>With Worker</strong>: The same task is offloaded, UI remains responsive</p></li></ul><p>Example: Sorting a list of 100,000 items—without workers, the app stutters; with workers, the animation continues seamlessly.</p><hr><h2>🧪 Tips for Using Workers Effectively</h2><ul class="list-disc ml-4"><li><p><strong>Always terminate workers</strong> when done to avoid memory leaks.</p></li><li><p><strong>Use transferable objects</strong> (e.g., <code>ArrayBuffer</code>) for faster data transfer.</p></li><li><p>Consider <strong>Comlink</strong> library to simplify message-passing syntax.</p></li><li><p>Make sure to handle <strong>error events</strong> gracefully.</p></li></ul><hr><h2>⚠️ Gotchas and Caveats</h2><p>While Web Workers are powerful, there are a few important considerations to keep in mind:</p><h3>1. ❌ No Access to DOM</h3><p>Web Workers run in a separate global context and <strong>cannot access the DOM</strong> directly. If you need to update the UI, you'll have to send data back to the main thread and update the DOM there.</p><h3>2. 📦 Bundling and Path Issues</h3><p>In frameworks like Next.js or Vite, creating workers using <code>new Worker('./worker.js')</code> may not work out-of-the-box. You often need to:</p><ul class="list-disc ml-4"><li><p>Use a bundler plugin (like <code>vite-plugin-worker</code> or Webpack&apos;s <code>worker-loader</code>)</p></li><li><p>Use <code>new URL('./worker.js', import.meta.url)</code> syntax to resolve paths</p></li></ul><h3>3. 📤 Communication Overhead</h3><p>Passing large data between the main thread and worker can be slow if not optimized. Use <strong>transferable objects</strong> instead of cloning (e.g., <code>ArrayBuffer</code>) to reduce overhead.</p><h3>4. 🧯 Memory Leaks from Unterminated Workers</h3><p>If you forget to terminate a worker, it can linger in memory and consume resources. Always call <code>worker.terminate()</code> when the worker is no longer needed (e.g., in <code>useEffect</code> cleanup).</p><h3>5. 🔄 Hot Reloading in Dev Mode</h3><p>Workers may not reload properly during development due to caching or build tools. You may need to manually refresh or configure worker-friendly dev plugins.</p><h3>6. 🧠 Limited APIs</h3><p>Web Workers have access to a limited set of web APIs. For example:</p><ul class="list-disc ml-4"><li><p>No access to <code>window</code>, <code>document</code>, or <code>localStorage</code></p></li><li><p>Limited event handling</p></li><li><p>No native fetch in older browsers (though supported in modern ones)</p></li></ul><h3>7. ❗ Error Handling</h3><p>Uncaught errors in a worker don&apos;t propagate to the main thread. Use <code>worker.onerror</code> or <code>onmessageerror</code> to catch and log worker-side issues.</p><hr><h2>✅ Summary</h2><p>Web Workers are a hidden gem for client-side performance optimization. Whether you're building data-intensive dashboards, image manipulation tools, or interactive SPAs, they can dramatically improve responsiveness and perceived speed.</p><p>With careful integration into JavaScript, React, and Next.js projects, Web Workers become a must-have tool for building modern web applications.</p><p>Take a moment to look through your app—what tasks are blocking the main thread? That&apos;s your cue to start using Web Workers.</p>`,
  },
  {
    title: "Next.js 16 (Beta): A Deep, Pragmatic Walkthrough",
    slug: "nextjs-16-beta-deep-dive",
    date: new Date("2025-10-16"),
    readingTime: 14,
    excerpt:
      "Explore the major upgrades in Next.js 16 — Turbopack as the default bundler, refined caching APIs, React Compiler integration, Build Adapters, and more. Learn with practical code examples and migration guidance.",
    coverImage: "/assets/images/blog/nextjs-16-beta-deep-dive.png",
    coverBlurData: `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAIAAAA7ljmRAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nGNg5TeSVgqUVQhlEbBgmNDx5sO3/4tn/3ex7GLQVE8tyj6qqpDCxKIHAPGxDRTXkNNTAAAAAElFTkSuQmCC`,
    isFeatured: true,
    tags: [
      "React.js",
      "Next.js",
      "Next.js 16",
      "React Compiler",
      "Turbopack",
      "PPR",
    ],
    content: `<h1>Next.js 16: A deep, pragmatic walkthrough</h1>
<p>
  <em>What&apos;s new, why it matters, and how to adopt it.</em>
</p>
<p>
  Next.js 16 is a major step forward for the framework&apos;s DX, performance,
  and architecture. It ships Turbopack as the default bundler, tighter caching
  primitives, new Server Action APIs for immediate cache updates, deeper React
  integration (React Compiler + React 19.2 features), and a Build Adapters API
  for customizing the build pipeline — plus a set of breaking changes and
  updated defaults you need to know before upgrading.
</p>
<p>
  Below I&apos;ll explain the big ideas, show concrete code you can drop into
  your app, and give a practical upgrade checklist to minimize friction.
</p>
<hr />
<h2>What&apos;s the headline (short version)</h2>
<ul class="list-disc ml-4">
  <li>
    <p>
      <strong>Turbopack is now stable and the default bundler</strong> for new
      projects — faster hot reload / Fast Refresh and faster builds. You can opt
      back into webpack if necessary.
    </p>
  </li>
  <li>
    <p>
      <strong>New &amp; refined caching APIs</strong>:
      <code>revalidateTag()</code> requires a <code>cacheLife</code> profile
      (for SWR behavior), and there are two new Server Actions APIs —
      <code>updateTag()</code> (read-your-writes) and
      <code>refresh()</code> (refresh uncached data). These are designed for
      clear, reliable invalidation patterns for modern interactive apps.
    </p>
  </li>
  <li>
    <p>
      <strong>React Compiler support (stable)</strong>
      — automatic memoization that can reduce re-renders (opt-in).
    </p>
  </li>
  <li>
    <p>
      <strong>Build Adapters API (alpha)</strong> — hook into and customize
      Next.js&apos;s build pipeline for platforms or special needs.
    </p>
  </li>
  <li>
    <p>
      <strong>React 19.2 support</strong> — includes View Transitions,
      <code>useEffectEvent</code>, <code>&lt;Activity/&gt;</code> and more (via
      React canary integration).
    </p>
  </li>
  <li>
    <p>
      <strong>Breaking / behavior changes</strong>: Node and TypeScript minimum
      versions raised, AMP removed, <code>next lint</code> behavior changed,
      some APIs are now async-only. Read the breaking changes section carefully
      before upgrading.
    </p>
  </li>
</ul>
<hr />
<h2>Developer Experience improvements</h2>
<h3>Turbopack as default</h3>
<p>
  Turbopack (now stable) is the default bundler for new apps and aims for
  dramatically faster Fast Refresh (up to ~10x) and faster builds (~2-5x faster
  builds) — a major developer productivity win for iterative development. If you
  have a custom webpack setup you can still use webpack by passing
  <code>--webpack</code> to dev and build commands:
</p>
<pre><code># use the new automated upgrade CLI
npx @next/codemod@canary upgrade beta

# or install manually
npm install next@beta react@latest react-dom@latest

# to opt back into webpack for dev or build:
next dev --webpack
next build --webpack
</code></pre>
<p>
  If you have a very large repo, enable Turbopack file-system caching for dev
  (stores compiled artifacts between runs):
</p>
<pre><code>// next.config.ts
const nextConfig = {
  experimental: {
    turbopackFileSystemCacheForDev: true,
  },
};
export default nextConfig;
</code></pre>
<p>
  This caches compiler artifacts on disk and speeds up restarts for large
  projects. (Vercel reports meaningful build/dev speedups internally.)
</p>

<h2>React Compiler (stable, opt-in)</h2>
<p>
  Next.js 16 includes built-in support for the React Compiler. The compiler
  introduces automatic memoization of React components in many cases — fewer
  unnecessary re-renders without you changing component code.
</p>
<p>
  It&apos;s <em>not</em> enabled by default because enabling it can increase
  compile times (it uses Babel). Enable it if you want to experiment:
</p>
<pre><code>// next.config.ts
const nextConfig = {
  reactCompiler: true,
};
export default nextConfig;
</code></pre>
<p>You also need the plugin:</p>
<pre><code>npm install babel-plugin-react-compiler@latest
</code></pre>
<p>
  Be aware of the compile-time trade-off: lower runtime re-renders, potentially
  longer compile times. Test on your codebase before enabling in production
  builds.
</p>

<h2>Simplified <code>create-next-app</code></h2>
<p>
  The project bootstrap has been simplified and favors the App Router,
  TypeScript-first, Tailwind, and ESLint out of the box — a sensible modern
  default for new projects.
</p>

<hr />
<h2>Routing, navigation, and prefetching: more efficient by default</h2>
<p>Next.js 16 reworks prefetching and routing to reduce wasted downloads:</p>
<ul class="list-disc ml-4">
  <li>
    <p>
      <strong>Layout deduplication</strong>: when prefetching links that share
      the same root layout, that shared layout is downloaded once (instead of
      repeatedly). This reduces network transfer for lists of links that use the
      same layout.
    </p>
  </li>
  <li>
    <p>
      <strong>Incremental prefetching</strong>: instead of prefetching entire
      pages, Next.js prefetches only parts not already cached; it cancels
      prefetches that leave the viewport and prioritizes hover/viewport
      re-entry. The tradeoff is more small requests, but much smaller total
      bytes transferred. No code changes required.
    </p>
  </li>
</ul>
<p>
  <strong>Practical effect:</strong> pages keep snappy navigations while
  reducing bandwidth and page payloads — particularly noticeable on large
  catalogs or content-heavy apps.
</p>
<hr />
<h2>
  Cache primitives: <code>revalidateTag()</code>, <code>updateTag()</code>,
  <code>refresh()</code>
</h2>
<p>Next.js 16 tightens cache control and clarifies common patterns:</p>
<h3><code>revalidateTag(tag, cacheLife)</code></h3>
<p>
  <code>revalidateTag()</code> is still used to invalidate tag-based caches, but
  it now <strong>requires</strong> a <code>cacheLife</code> profile as the
  second argument (or an inline <code>{ revalidate: number }</code> object).
  This enables stale-while-revalidate semantics in a consistent, explicit way.
</p>
<p>Examples:</p>
<pre><code>import { revalidateTag } from 'next/cache';

// Use a named cacheLife profile
revalidateTag('blog-posts', 'max');

// Use built-in profiles
revalidateTag('news-feed', 'hours');

// Inline custom TTL (seconds)
revalidateTag('products', { revalidate: 3600 });
</code></pre>
<p>
  Recommendation: use <code>'max'</code> for long-lived content where background
  revalidation is acceptable.
</p>

<h3><code>updateTag(tag)</code></h3>
<p>
  <code>updateTag()</code> is a brand-new Server Actions-only API to provide
  <strong>read-your-writes semantics</strong>: it expires and refreshes the
  cached entry immediately within the same request. That means after a Server
  Action updates the DB, the cache can show the updated data immediately, which
  is perfect for forms, settings, and workflows where users expect to see their
  changes at once.
</p>
<pre><code>// app/actions/updateUserProfile.ts
'use server';
import { updateTag } from 'next/cache';

export async function updateUserProfile(userId: string, profile: Profile) {
  await db.users.update(userId, profile);

  // Immediately expire &amp; refresh the cache for this user's profile
  updateTag(&grave;user-\${userId}&grave;);
}
</code></pre>
<p>
  This solves a common issue where you write to the DB and then the UI still
  shows stale cached data until a background revalidation happens. Use
  <code>updateTag()</code> when immediate consistency matters.
</p>

<h3><code>refresh()</code></h3>
<p>
  <code>refresh()</code> is another Server Actions-only helper. It refreshes
  <em>uncached</em> data only — it does <strong>not</strong> touch the cache.
  This is useful when you have parts of a page that are intentionally uncached
  (eg. notification counts) and you want to refresh those after a Server Action.
</p>
<pre><code>// app/actions/markNotificationRead.ts
'use server';
import { refresh } from 'next/cache';

export async function markNotificationAsRead(notificationId: string) {
  await db.notifications.markAsRead(notificationId);

  // Refresh uncached data elsewhere (eg. header count)
  refresh();
}
</code></pre>
<p>
  This complements the client-side <code>router.refresh()</code> but is designed
  to be used inside Server Actions for more predictable server-side refresh
  behavior.
</p>

<hr />
<h2>Partial Pre-Rendering (PPR) → Cache Components</h2>
<p>
  The previous experimental <code>ppr</code> flag is being folded into a new
  Cache Components model. If you depend on the older
  <code>experimental.ppr</code> flag, <strong>do not</strong> upgrade blindly —
  stay on the pinned canary you currently use and wait for the migration guide
  if you need help.
</p>

<hr />
<h2>Build Adapters API (alpha)</h2>
<p>
  If you build custom deployment flows or target platforms with special build
  requirements, the Build Adapters API lets you plug into the build process. The
  API is alpha; example config:
</p>
<pre><code>// next.config.js
const nextConfig = {
  experimental: {
    adapterPath: require.resolve('./my-adapter.js'),
  },
};
module.exports = nextConfig;
</code></pre>
<p>
  This opens the door for platform-specific build transforms and custom output
  handling (useful for edge-only platforms, bespoke artifact formats, or
  integrating with alternative CDNs). Expect the API to evolve; treat this as
  early experimentation and collaborate in the RFC if you need platform support.
</p>

<hr />
<h2>React 19.2 (Canary) features available in the App Router</h2>
<p>
  Next.js 16 ships with the latest React canary features available to App Router
  apps — including View Transitions, <code>useEffectEvent()</code>, and
  <code>&lt;Activity/&gt;</code>. These are powerful primitives:
</p>
<ul class="list-disc ml-4">
  <li>
    <p>
      <strong>View Transitions</strong> let you animate element changes between
      navigations in an increasingly ergonomic way.
    </p>
  </li>
  <li>
    <p>
      <code>useEffectEvent</code> helps extract non-reactive logic from effects
      into reusable, stable callbacks.
    </p>
  </li>
  <li>
    <p>
      <code>&lt;Activity/&gt;</code> provides a declarative model to represent
      background activity while keeping UI responsive.
    </p>
  </li>
</ul>
<p>
  These features are best learned via the React docs, but Next.js 16 makes them
  accessible to App Router apps without extra wiring.
</p>

<hr />
<h2>Breaking changes, removals, and new minimums (must-read)</h2>
<p><strong>Platform &amp; language requirements</strong></p>
<ul class="list-disc ml-4">
  <li>
    <p>
      Node.js: minimum <strong>20.9.0</strong>. Node 18 is no longer supported.
    </p>
  </li>
  <li>
    <p>TypeScript: minimum <strong>5.1.0</strong>.</p>
  </li>
  <li>
    <p>Browser support: Chrome/Edge/Firefox 111+, Safari 16.4+.</p>
  </li>
</ul>
<p><strong>Removed features</strong> (you must migrate away from these)</p>
<ul class="list-disc ml-4">
  <li>
    <p><strong>AMP support</strong>: all AMP APIs/config removed.</p>
  </li>
  <li>
    <p>
      <code>next lint</code> no longer runs during <code>next build</code>; use
      Biome or ESLint directly (codemods available).
    </p>
  </li>
  <li>
    <p>
      Several experimental flags were removed or moved:
      <code>experimental.turbopack</code> moved to top-level,
      <code>experimental.ppr</code> evolves into Cache Components, etc.
    </p>
  </li>
</ul>
<p><strong>Behavioral defaults changed</strong> (examples)</p>
<ul class="list-disc ml-4">
  <li>
    <p>
      Default bundler is now Turbopack (opt out with <code>--webpack</code>).
    </p>
  </li>
  <li>
    <p><code>images.minimumCacheTTL</code> default increased (4 hours).</p>
  </li>
  <li>
    <p>
      <code>revalidateTag()</code> requires <code>cacheLife</code> argument.
    </p>
  </li>
  <li>
    <p>
      <code>next/image</code> local src with query strings now requires
      <code>images.localPatterns</code> to avoid enumeration attacks.
    </p>
  </li>
  <li>
    <p>
      Some previously synchronous helpers (like <code>params</code>,
      <code>searchParams</code>, <code>cookies()</code>, <code>headers()</code>,
      <code>draftMode()</code>) may now be async and need <code>await</code> in
      some paths. Carefully test any code relying on synchronous access to
      these.
    </p>
  </li>
</ul>
<p>
  <strong>Migration guidance:</strong> If your app depends on removed or
  deprecated flags, follow the blog guidance and migration codemods. For PPR
  users, stay pinned to your current canary until the migration docs are
  published.
</p>

<hr />
<h2>Concrete upgrade &amp; migration checklist (practical)</h2>
<ol class="list-decimal ml-4">
  <li>
    <p>
      <strong>Lock toolchain versions</strong>: Upgrade Node to &gt;= 20.9 and
      TypeScript to &gt;= 5.1 before installing <code>next@beta</code>.
    </p>
  </li>
  <li>
    <p><strong>Run the upgrade codemod</strong> (recommended):</p>
    <pre><code>npx @next/codemod@canary upgrade beta
</code></pre>
  </li>
  <li>
    <p>
      <strong>Search for removed APIs</strong>: find usages of AMP and
      experimental flags, <code>devIndicators</code> options,
      <code>export const experimental_ppr</code>, etc. Replace or remove as
      guided.
    </p>
  </li>
  <li>
    <p>
      <strong>Audit </strong><code>next/image</code><strong> usage</strong>:
      ensure <code>images.localPatterns</code> is present if you rely on local
      images with query strings.
    </p>
  </li>
  <li>
    <p>
      <strong>Check server-side helpers</strong>: search for any code that
      assumes synchronous <code>params</code> / <code>cookies()</code> — convert
      to <code>await</code> usage where necessary.
    </p>
  </li>
  <li>
    <p>
      <strong>Test with Turbopack</strong>: start dev with default (Turbopack).
      If you see tooling breakage due to custom webpack plugins/config, run
      <code>next dev --webpack</code> while you adapt.
    </p>
  </li>
  <li>
    <p>
      <strong>Try </strong><code>reactCompiler</code
      ><strong> in a branch</strong> (optional): enable and run your test suite
      — watch for compile time changes.
    </p>
  </li>
  <li>
    <p>
      <strong>Cache &amp; Server Actions</strong>: identify flows that need
      read-your-writes semantics and replace ad-hoc invalidation with
      <code>updateTag()</code> where appropriate. Also ensure
      <code>revalidateTag()</code> calls use a <code>cacheLife</code> profile.
    </p>
  </li>
</ol>
<hr />
<h2>Example: Putting it all together</h2>
<p>
  Imagine a blog app where users can edit their profile and see the updated
  profile card and notification counts immediately.
</p>
<p>
  <strong
    >Server Action that updates profile and forces immediate cache
    refresh:</strong
  >
</p>
<pre><code>// app/actions/updateProfile.ts
'use server';
import { updateTag } from 'next/cache';
import { db } from '@/lib/db';

export async function updateProfile(userId: string, data: Partial&lt;Profile&gt;) {
  await db.users.update(userId, data);
  // Ensure the user's profile cache shows the new data immediately
  updateTag(&grave;user-\${id}&grave;);
}
</code></pre>
<p>
  <strong
    >Server Action that marks a notification read and refreshes uncached
    counts:</strong
  >
</p>
<pre><code>// app/actions/markRead.ts
'use server';
import { refresh } from 'next/cache';
import { db } from '@/lib/db';

export async function markNotificationRead(notificationId: string) {
  await db.notifications.update(notificationId, { read: true });
  // Refresh uncached data (eg. header notification count)
  refresh();
}
</code></pre>
<p><strong>Server-rendered profile page that uses tag-based caching</strong></p>
<pre><code>// app/users/[id]/page.tsx (Server Component)
import { getUser } from '@/lib/users';
import { cache } from 'react';
import { revalidateTag } from 'next/cache';

// fetcher that tags the cache
export default async function UserPage({ params }: { params: { id: string } }) {
  const id = params.id;
  // When fetching profile data, ensure we tag it for later invalidation
  // (how you tag depends on your fetcher; conceptual example)
  const profile = await getUser(id);
  return (
    &lt;div&gt;
      &lt;ProfileCard user={profile} /&gt;
      &lt;EditProfileForm user={profile} /&gt;
    &lt;/div&gt;
  );
}
</code></pre>
<p>
  When you invalidate: <code>updateTag(</code>user-$\{id}<code
    >)will now ensure the cache entry is refreshed immediately after the Server
    Action. UserevalidateTag('blog-posts', 'max')</code
  >
  for stale-while-revalidate behavior in collection pages.
</p>

<hr />
<h2>Performance &amp; observability notes</h2>
<ul class="list-disc ml-4">
  <li>
    <p>
      <strong>Turbopack</strong> reduces developer iteration time substantially;
      measure before/after with real tasks (cold build, incremental build, Fast
      Refresh). Some third-party plugins or exotic webpack configurations may
      need migration or opt-out.
    </p>
  </li>
  <li>
    <p>
      <strong>React Compiler</strong> reduces runtime work but may increase
      build cost. Use perf profilers to verify real-world improvements on your
      components.
    </p>
  </li>
  <li>
    <p>
      Use the redesigned terminal output and improved error messages in Next.js
      16 to diagnose slow builds or render blockers — the CLI now surfaces
      better build metrics.
    </p>
  </li>
</ul>
<hr />
<h2>When to wait vs upgrade now</h2>
<ul class="list-disc ml-4">
  <li>
    <p>
      <strong>Upgrade now</strong> if you want Turbopack, the new cache APIs,
      and React Compiler experimentation and you have test coverage to validate
      changes.
    </p>
  </li>
  <li>
    <p>
      <strong>Wait</strong> if your app depends on deprecated experimental flags
      (PPR) or uses a lot of custom webpack plugins that are not yet compatible.
      For PPR users, stay pinned to canary until migration docs are available.
    </p>
  </li>
</ul>
<hr />
<h2>Final thoughts (practical author&apos;s advice)</h2>
<p>
  Next.js 16 is more than incremental: it&apos;s an architectural step that
  makes caching, prefetching, and bundling more explicit and more performant.
  The new Server Actions cache APIs (<code>updateTag</code>,
  <code>refresh</code>) fill a painful gap most apps hacked around for years —
  read-your-writes and predictable refresh flows — and Turbopack as default will
  dramatically speed day-to-day developer loops for many teams. That said, the
  release has breaking changes and new minimums, so treat the beta as a careful
  upgrade: pin, test, and migrate features in small steps.
</p>
<p>If you&apos;d like, I can:</p>
<ul class="list-disc ml-4">
  <li>
    <p>
      produce a <strong>migration plan tailored to your repo</strong> (search
      for likely breakpoints like AMP, <code>params</code> usages, or custom
      webpack plugins), or
    </p>
  </li>
  <li>
    <p>
      generate a <strong>codemod checklist</strong> that scans for the exact
      tokens that changed across your codebase (eg.
      <code>experimental.ppr</code>, <code>useAmp</code>, synchronous
      <code>cookies()</code> usage).
    </p>
  </li>
</ul>
<p>Tell me which you prefer and I&apos;ll draft the next steps.</p>
<hr />
<p>
  <strong>Source:</strong>
  <a
    target="_blank"
    rel="noopener noreferrer nofollow"
    href="https://nextjs.org/blog/next-16-beta"
    >Next.js 16 (beta) announcement and release notes.</a
  >
</p>
`,
  },
];

export const blogPostSorted = blogPosts.sort(
  (a, b) => b.date.getTime() - a.date.getTime()
);
