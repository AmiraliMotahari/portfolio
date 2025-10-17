export default function NowLoading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
          Now
        </h1>

        <div className="glass-card p-8 mb-12">
          <div className="animate-pulse">
            <div className="h-6 bg-muted/20 rounded w-full mb-6"></div>
            <div className="h-6 bg-muted/20 rounded w-5/6 mb-6"></div>

            <div className="border-l-4 border-neon-green/30 pl-4 mb-8 h-6 bg-muted/20 rounded w-1/3"></div>

            <div className="space-y-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-neon-green/30 flex-shrink-0 mt-1"></div>
                  <div className="w-full">
                    <div className="h-6 bg-muted/20 rounded w-1/4 mb-2"></div>
                    <div className="h-4 bg-muted/20 rounded w-full"></div>
                    <div className="h-4 bg-muted/20 rounded w-11/12 mt-1"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
