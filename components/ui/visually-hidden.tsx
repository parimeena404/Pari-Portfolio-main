"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export interface VisuallyHiddenProps extends React.HTMLAttributes<HTMLSpanElement> {}

const VisuallyHidden = React.forwardRef<HTMLSpanElement, VisuallyHiddenProps>(
  ({ className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "absolute h-px w-px overflow-hidden whitespace-nowrap border-0 p-0",
          "clip-[rect(0,0,0,0)]",
          className
        )}
        {...props}
      />
    )
  }
)
VisuallyHidden.displayName = "VisuallyHidden"

export { VisuallyHidden }
