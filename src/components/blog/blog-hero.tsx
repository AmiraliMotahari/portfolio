"use client";

import { motion } from "motion/react";

const BlogHero = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-3xl"></div>
        </div> */}

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Thoughts, ideas, and tutorials on web development, design, and
              creative coding.
            </p>
            
            {/* todo: next version */}
            {/* <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="pl-10 bg-background/50 backdrop-blur-sm border-muted"
              />
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
