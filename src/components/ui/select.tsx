"use client";

import React, { useState, useRef, useEffect, createContext, useContext } from "react";

// Context pour partager l'état du select
const SelectContext = createContext<any>(null);

export interface SelectProps {
  defaultValue?: string;
  children: React.ReactNode;
}
export function Select({ defaultValue, children }: SelectProps) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        contentRef.current &&
        !contentRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <SelectContext.Provider value={{ open, setOpen, value, setValue, triggerRef, contentRef }}>
      <div className="relative inline-block w-full">{children}</div>
    </SelectContext.Provider>
  );
}

Select.displayName = "Select";

export interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
export const SelectTrigger = React.forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ className = "", children, ...props }, ref) => {
    const { open, setOpen, triggerRef } = useContext(SelectContext);
    return (
      <button
        type="button"
        ref={(node) => {
          triggerRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLButtonElement | null>).current = node;
        }}
        className={`flex items-center justify-between rounded-lg border px-3 py-2 w-full ${className}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o: boolean) => !o)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SelectTrigger.displayName = "SelectTrigger";

export interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const SelectContent = React.forwardRef<HTMLDivElement, SelectContentProps>(
  ({ className = "", children, ...props }, ref) => {
    const { open, contentRef } = useContext(SelectContext);
    if (!open) return null;
    return (
      <div
        ref={(node) => {
          contentRef.current = node;
          if (typeof ref === "function") ref(node);
          else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }}
        className={`absolute mt-1 w-full rounded-lg border bg-white shadow-lg z-10 ${className}`}
        {...props}
      >
        <ul role="listbox">{children}</ul>
      </div>
    );
  }
);
SelectContent.displayName = "SelectContent";

export interface SelectItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: React.ReactNode;
  value: string;
}
export const SelectItem = React.forwardRef<HTMLLIElement, SelectItemProps>(
  ({ className = "", children, value, ...props }, ref) => {
    const { setValue, setOpen, value: selectedValue } = useContext(SelectContext);
    const isSelected = selectedValue === value;
    return (
      <li
        ref={ref}
        role="option"
        aria-selected={isSelected}
        className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${isSelected ? "bg-gray-100 font-semibold" : ""} ${className}`}
        onClick={() => {
          setValue(value);
          setOpen(false);
        }}
        {...props}
      >
        {children}
      </li>
    );
  }
);
SelectItem.displayName = "SelectItem";

export interface SelectValueProps {
  placeholder?: string;
}
export const SelectValue = ({ placeholder }: SelectValueProps) => {
  const { value } = useContext(SelectContext);
  return <span className="truncate text-left">{value ? value : placeholder}</span>;
};
SelectValue.displayName = "SelectValue"; 