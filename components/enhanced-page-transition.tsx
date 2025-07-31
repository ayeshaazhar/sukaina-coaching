"use client"

import type React from "react"

import { motion, AnimatePresence, Transition } from "framer-motion"
import { usePathname } from "next/navigation"

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.02,
  },
}

const pageTransition: Transition = {
  type: "tween" as const, // 👈 casting as literal string
  ease: "easeInOut",
  duration: 0.3,
}

export function EnhancedPageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <>
      {/* Page Content */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
