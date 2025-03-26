"use client"

import { motion } from "framer-motion"

export default function ContactMap() {
  return (
    <motion.div
      className="rounded-xl overflow-hidden glass-card p-1"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-muted/20 flex items-center justify-center">
          <div className="text-center p-8">
            <h3 className="text-xl font-semibold mb-2">Map Placeholder</h3>
            <p className="text-muted-foreground">
              In a real implementation, this would be an interactive map showing my location in San Francisco, CA.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

