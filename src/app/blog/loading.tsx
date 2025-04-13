// import { Badge } from "@/components/ui/badge";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

//todo: add search and filter

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thoughts, ideas, and tutorials on web development, design, and
              creative coding.
            </p>

            {/* <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-background/50 backdrop-blur-sm border-muted"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="container mx-auto dynamic-px pb-20">
        {/* Tags Filter */}
        {/* <div className="flex flex-wrap gap-2 mb-12 justify-center">
          <Badge variant="outline" className="animate-pulse bg-muted/20">
            All
          </Badge>
          {[1, 2, 3, 4, 5].map((i) => (
            <Badge
              key={i}
              variant="outline"
              className="animate-pulse bg-muted/20"
            >
              Category {i}
            </Badge>
          ))}
        </div> */}

        {/* Featured Post */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
            Featured Post
            <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
          </h2>

          <div className="glass-card overflow-hidden animate-pulse">
            <div className="md:flex">
              <div className="md:w-2/3 relative">
                <div className="h-64 md:h-96 w-full bg-muted/20"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="h-6 w-16 bg-muted/30 rounded-full"
                      ></div>
                    ))}
                  </div>
                  <div className="h-8 bg-muted/30 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-muted/30 rounded w-1/2"></div>
                </div>
              </div>
              <div className="p-6 md:w-1/3">
                <div className="space-y-2">
                  <div className="h-4 bg-muted/20 rounded w-full"></div>
                  <div className="h-4 bg-muted/20 rounded w-full"></div>
                  <div className="h-4 bg-muted/20 rounded w-5/6"></div>
                  <div className="h-4 bg-muted/20 rounded w-4/6"></div>
                </div>
                <div className="h-8 bg-muted/20 rounded w-32 mt-6"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Latest Posts */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="h-px flex-grow bg-gradient-to-r from-neon-green/50 to-transparent mr-4"></span>
            Latest Articles
            <span className="h-px flex-grow bg-gradient-to-l from-neon-red/50 to-transparent ml-4"></span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="glass-card overflow-hidden h-full animate-pulse"
              >
                <div className="relative">
                  <div className="h-48 w-full bg-muted/20"></div>
                  <div className="absolute top-3 left-3 flex gap-1">
                    <div className="h-5 w-16 bg-muted/30 rounded-full"></div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="h-4 bg-muted/20 rounded w-1/2 mb-3"></div>
                  <div className="h-6 bg-muted/20 rounded w-full mb-3"></div>
                  <div className="space-y-2 mb-4">
                    <div className="h-4 bg-muted/20 rounded w-full"></div>
                    <div className="h-4 bg-muted/20 rounded w-full"></div>
                    <div className="h-4 bg-muted/20 rounded w-4/5"></div>
                  </div>
                  <div className="flex justify-end">
                    <div className="h-4 bg-muted/20 rounded w-24"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 relative overflow-hidden animate-pulse">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-green/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-red/10 rounded-full filter blur-3xl"></div>

            <div className="relative">
              <div className="h-6 bg-muted/20 rounded w-48 mx-auto mb-2"></div>
              <div className="h-4 bg-muted/20 rounded w-96 max-w-full mx-auto mb-6"></div>

              <div className="flex flex-col sm:flex-row gap-3">
                <div className="h-10 bg-muted/20 rounded flex-grow"></div>
                <div className="h-10 bg-muted/20 rounded w-32"></div>
              </div>

              <div className="h-3 bg-muted/20 rounded w-64 mx-auto mt-3"></div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
