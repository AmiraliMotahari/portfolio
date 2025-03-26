export default function BlogPostLoading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <div className="h-6 w-40 bg-muted/20 rounded mb-8 animate-pulse"></div>

        <article>
          <div className="mb-8">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-20 bg-muted/20 rounded-full animate-pulse"
                ></div>
              ))}
            </div>

            <div className="h-12 bg-muted/20 rounded mb-4 w-3/4 animate-pulse"></div>

            <div className="flex items-center gap-4 mb-6">
              <div className="h-4 w-32 bg-muted/20 rounded animate-pulse"></div>
              <div className="h-4 w-32 bg-muted/20 rounded animate-pulse"></div>
            </div>
          </div>

          <div className="h-80 bg-muted/20 rounded-2xl mb-8 animate-pulse"></div>

          <div className="space-y-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="space-y-2">
                {i % 3 === 1 && (
                  <div className="h-8 bg-muted/20 rounded w-1/3 animate-pulse"></div>
                )}
                <div className="h-4 bg-muted/20 rounded w-full animate-pulse"></div>
                <div className="h-4 bg-muted/20 rounded w-11/12 animate-pulse"></div>
                <div className="h-4 bg-muted/20 rounded w-10/12 animate-pulse"></div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
