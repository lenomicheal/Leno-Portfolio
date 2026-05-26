"use client"

import { motion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

type MotionBoxProps = HTMLMotionProps<"div"> & {
  children: ReactNode
}

export const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
}

export const fadeUpItem = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

export function MotionContainer({
  children,
  className,
  ...props
}: MotionBoxProps) {
  return (
    <motion.div
      {...props}
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function MotionItem({
  children,
  className,
  ...props
}: MotionBoxProps) {
  return (
    <motion.div
      {...props}
      variants={fadeUpItem}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
