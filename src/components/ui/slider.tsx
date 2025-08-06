import * as React from "react"

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  value: number | number[]
  min?: number
  max?: number
  step?: number
  onChange: (value: number) => void
  onValueChange?: (value: number[]) => void
  className?: string
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ value, min = 0, max = 100, step = 1, onChange, onValueChange, className = "", ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);
      onChange?.(newValue);
      onValueChange?.([newValue]);
    };

    const inputValue = Array.isArray(value) ? value[0] : value;

    return (
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={inputValue}
        onChange={handleChange}
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