"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Working with this developer was an absolute pleasure. Their technical expertise combined with an eye for design resulted in a product that exceeded our expectations. They were responsive, proactive, and delivered on time.",
    },
    {
      name: "Michael Chen",
      role: "Founder of StartupX",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "I've worked with many developers, but few have the combination of technical skill and creative vision that this developer brings to the table. They transformed our concept into a beautiful, functional product that our users love.",
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director at DesignStudio",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "As a designer, I appreciate working with developers who understand the importance of pixel-perfect implementation. This developer not only respected the design but enhanced it with thoughtful animations and interactions.",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-red/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-neon-green to-neon-red"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Testimonials
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-12 -left-12 text-neon-green opacity-20">
              <Quote size={80} />
            </div>

            <div className="glass-card p-8 md:p-12 relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={cn(
                    "transition-opacity duration-500 absolute inset-0 p-8 md:p-12",
                    activeIndex === index ? "opacity-100 z-10" : "opacity-0 z-0",
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    y: activeIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg md:text-xl mb-8 italic text-muted-foreground">"{testimonial.content}"</p>

                  <div className="flex items-center">
                    <div className="mr-4 rounded-full overflow-hidden border-2 border-neon-green p-1">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neon-green">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full h-10 w-10 border-neon-green text-neon-green hover:bg-neon-green/10"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      activeIndex === index ? "w-6 bg-neon-green" : "w-2 bg-muted",
                    )}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full h-10 w-10 border-neon-green text-neon-green hover:bg-neon-green/10"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

