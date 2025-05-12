import ProjectsGridSkeleton from "@/components/skeletons/projects/projects-grid-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
  return (
    <div className="w-full mx-auto px-4 py-20">
      <div className="">
        <div className="max-w-4xl mx-auto">
          <Skeleton className="h-12 w-3/4 mb-6 bg-muted/20" />
          <Skeleton className="h-6 w-full mb-12 bg-muted/20" />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-10 w-24 bg-muted/20 rounded-md" />
          ))}
        </div>
        <ProjectsGridSkeleton />
      </div>
    </div>
  );
}
