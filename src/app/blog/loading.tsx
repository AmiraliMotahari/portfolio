export default function BlogLoading() {
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
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="glass-card overflow-hidden animate-pulse">
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="h-64 bg-muted/20"></div>
                </div>
                <div className="p-6 md:w-2/3">
                  <div className="flex gap-2 mb-3">
                    {[1, 2, 3].map((j) => (
                      <div
                        key={j}
                        className="h-6 w-16 bg-muted/20 rounded-full"
                      ></div>
                    ))}
                  </div>
                  <div className="h-8 bg-muted/20 rounded mb-3 w-3/4"></div>
                  <div className="space-y-2">
                    <div className="h-4 bg-muted/20 rounded w-full"></div>
                    <div className="h-4 bg-muted/20 rounded w-5/6"></div>
                    <div className="h-4 bg-muted/20 rounded w-4/6"></div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 bg-muted/20 rounded"></div>
                      <div className="h-4 w-24 bg-muted/20 rounded"></div>
                    </div>
                    <div className="h-8 w-28 bg-muted/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
