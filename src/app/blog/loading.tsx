import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchIcon } from "lucide-react";

export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="w-full max-w-md h-12 mb-6 mx-auto" />
            <Skeleton className="w-full max-w-lg h-6 mb-6 mx-auto" />

            <div className="flex justify-center items-center gap-3 relative max-w-md mx-auto">
              <InputGroup>
                <InputGroupInput placeholder="Search..." disabled />
                <InputGroupAddon>
                  <SearchIcon />
                </InputGroupAddon>
                <InputGroupAddon align={"inline-end"}>
                  <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </InputGroupAddon>
              </InputGroup>

              <Button type="button" disabled>
                Search
              </Button>
            </div>
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
