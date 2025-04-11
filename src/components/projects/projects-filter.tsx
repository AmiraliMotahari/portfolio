"use client"

import { useState } from "react"
import { motion } from "motion/react";
import { Button } from "@/components/ui/button"

export default function ProjectsFilter() {
  const [activeFilter, setActiveFilter] = useState("All")
  const filters = ["All", "Web", "Mobile", "Design", "UI/UX", "3D"]

  return (
    <div className="container mx-auto px-4 mt-6 mb-12">
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {filters.map((filter) => (
          <Button
            key={filter}
            variant={activeFilter === filter ? "default" : "outline"}
            className={activeFilter === filter ? "bg-neon-green text-black hover:bg-neon-green/80" : ""}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </Button>
        ))}
      </motion.div>
    </div>
  )
}

