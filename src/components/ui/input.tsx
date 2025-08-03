import React from "react";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => (
    <input ref={ref} className={`block w-full rounded-lg border px-3 py-2 text-base ${className}`} {...props} />
  )
);
Input.displayName = "Input"; 