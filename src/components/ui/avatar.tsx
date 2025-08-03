import React from "react";

export function Avatar({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-full overflow-hidden bg-gray-200 ${className}`}>{children}</div>;
}

export function AvatarImage({ src, alt = "Avatar" }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return <span className="flex items-center justify-center w-full h-full bg-gray-400 text-white">{children}</span>;
} 