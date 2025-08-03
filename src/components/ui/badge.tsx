import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = "", ...props }, ref) => (
    <span ref={ref} className={`inline-block px-2 py-1 rounded text-xs font-semibold ${className}`} {...props} />
  )
);
Badge.displayName = "Badge"; 