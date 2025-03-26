import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <Skeleton className="h-12 w-3/4 mb-6 bg-muted/20" />
        <Skeleton className="h-6 w-full mb-12 bg-muted/20" />

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24 bg-muted/20 rounded-md" />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
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
  );
}
