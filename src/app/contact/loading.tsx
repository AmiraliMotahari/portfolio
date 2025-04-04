import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <div className="container mx-auto px-12 py-20">
      <Skeleton className="h-12 w-1/2 mx-auto mb-6 bg-muted/20" />
      <Skeleton className="h-6 w-3/4 mx-auto mb-16 bg-muted/20" />

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Skeleton className="h-8 w-1/2 bg-muted/20 mb-6" />
          <Skeleton className="h-4 w-full bg-muted/20" />
          <Skeleton className="h-4 w-5/6 bg-muted/20" />

          <div className="space-y-6 mb-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center">
                <Skeleton className="h-10 w-10 rounded-full bg-muted/20 mr-4" />
                <Skeleton className="h-4 w-40 bg-muted/20" />
              </div>
            ))}
          </div>

          <div className="glass-card p-6 animate-pulse">
            <Skeleton className="h-6 w-1/3 bg-muted/20 mb-4" />
            <div className="flex space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton
                  key={i}
                  className="h-10 w-10 rounded-full bg-muted/20"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="glass-card p-8 animate-pulse">
          <Skeleton className="h-8 w-1/2 bg-muted/20 mb-6" />
          <div className="space-y-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="h-5 w-1/4 bg-muted/20" />
                <Skeleton className="h-12 w-full bg-muted/20 rounded-md" />
              </div>
            ))}
            <Skeleton className="h-12 w-full bg-muted/20 rounded-md mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
