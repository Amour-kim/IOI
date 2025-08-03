import * as React from "react"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: number
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
  className?: string
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ value, min = 0, max = 100, step = 1, onChange, className = "", ...props }, ref) => {
    return (
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className={
          "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer transition-all focus:outline-none focus:ring-2 focus:ring-orange-400 " +
          className
        }
        {...props}
      />
    )
  }
)

Slider.displayName = "Slider"

export { Slider } 