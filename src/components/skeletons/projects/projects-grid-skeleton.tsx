import { Skeleton } from "@/components/ui/skeleton";

const ProjectsGridSkeleton = () => {
  return (
    <section className="pt-10 pb-20 dynamic-px">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
};

export default ProjectsGridSkeleton;
