import React from "react";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = "", ...props }, ref) => (
    <textarea ref={ref} className={`block w-full rounded-lg border px-3 py-2 text-base ${className}`} {...props} />
  )
);
Textarea.displayName = "Textarea"; 