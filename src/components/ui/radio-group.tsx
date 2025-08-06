"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioGroupProps {
  value?: string
  onValueChange?: (value: string) => void
  className?: string
  children: React.ReactNode
}

export interface RadioGroupItemProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  value: string
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onValueChange, className, children, ...props }, ref) => {
    const handleChange = (newValue: string) => {
      onValueChange?.(newValue)
    }

    return (
      <div ref={ref} className={cn("flex flex-col space-y-2", className)} {...props}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioGroupItemProps>(child) && child.type === RadioGroupItem) {
            return React.cloneElement<RadioGroupItemProps>(child, {
              checked: value === child.props.value,
              onChange: () => handleChange(child.props.value),
            } as Partial<RadioGroupItemProps>)
          }
          return child
        })}
      </div>
    )
  }
)

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="radio"
        ref={ref}
        className={cn(
          "h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 focus:ring-2",
          className
        )}
        {...props}
      />
    )
  }
)

RadioGroup.displayName = "RadioGroup"
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroup, RadioGroupItem } 