import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section Loading */}
      <div className="min-h-screen flex flex-col justify-center items-center text-center py-20">
        <div className="max-w-3xl px-4">
          <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-muted/20" />
          <Skeleton className="h-8 w-5/6 mx-auto mb-8 bg-muted/20" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Skeleton className="h-12 w-40 bg-muted/20 rounded-md" />
            <Skeleton className="h-12 w-40 bg-muted/20 rounded-md" />
            <Skeleton className="h-12 w-40 bg-muted/20 rounded-md" />
          </div>
        </div>
      </div>

      {/* About Section Loading */}
      <div className="py-20">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-1/3 mx-auto mb-16 bg-muted/20" />

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Skeleton className="h-[600px] w-full rounded-2xl bg-muted/20" />
            <div>
              <Skeleton className="h-6 w-full mb-2 bg-muted/20" />
              <Skeleton className="h-6 w-full mb-2 bg-muted/20" />
              <Skeleton className="h-6 w-5/6 mb-8 bg-muted/20" />

              <div className="space-y-6 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <Skeleton className="h-4 w-40 bg-muted/20" />
                      <Skeleton className="h-4 w-10 bg-muted/20" />
                    </div>
                    <Skeleton className="h-2 w-full bg-muted/20 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section Loading */}
      <div className="py-20">
        <div className="container mx-auto">
          <Skeleton className="h-12 w-1/3 mx-auto mb-16 bg-muted/20" />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-10 w-24 bg-muted/20 rounded-md" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card overflow-hidden animate-pulse">
                <Skeleton className="w-full h-64 bg-muted/20" />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[1, 2, 3].map((j) => (
                      <Skeleton
                        key={j}
                        className="h-6 w-16 bg-muted/20 rounded-full"
                      />
                    ))}
                  </div>
                  <Skeleton className="h-8 w-3/4 mb-2 bg-muted/20" />
                  <Skeleton className="h-4 w-full mb-1 bg-muted/20" />
                  <Skeleton className="h-4 w-5/6 mb-4 bg-muted/20" />
                  <div className="flex gap-4">
                    <Skeleton className="h-6 w-24 bg-muted/20" />
                    <Skeleton className="h-6 w-24 bg-muted/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
