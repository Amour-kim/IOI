"use client"

import { useState } from "react"

const categories = [
  { label: "Tous", value: "all" },
  { label: "Vidéos", value: "video" },
  { label: "Articles", value: "article" },
]

interface BlogSearchBarProps {
  onSearchChange: (search: string, category: string) => void
  tags?: string[]
  selectedTag?: string | null
  onTagChange?: (tag: string | null) => void
}

export function BlogSearchBar({ onSearchChange, tags = [], selectedTag, onTagChange }: BlogSearchBarProps) {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("all")

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value)
    onSearchChange(e.target.value, category)
  }
  function handleCategory(cat: string) {
    setCategory(cat)
    onSearchChange(search, cat)
  }

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-xl flex flex-col items-center bg-white/10 rounded-3xl shadow-md py-4 px-3 mb-2 border border-white/20 transition-all duration-300">
        <div className="flex gap-1 mb-3">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`px-4 py-1.5 rounded-full font-semibold text-base transition-all border-2 duration-200 ${category === cat.value ? 'bg-orange-600 text-white border-orange-600 scale-105 shadow' : 'bg-transparent text-gray-700 border-gray-300 hover:bg-orange-50'}`}
              onClick={() => handleCategory(cat.value)}
              type="button"
            >
              {cat.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Rechercher une vidéo ou un article..."
          className="w-full px-4 py-2 rounded-xl text-base border-2 border-gray-300 focus:border-orange-600 focus:ring-2 focus:ring-orange-200 outline-none shadow-sm bg-transparent transition-all duration-200"
        />
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3 justify-center">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onTagChange && onTagChange(selectedTag === tag ? null : tag)}
                className={`px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200 shadow-sm ${selectedTag === tag ? 'bg-orange-600 text-white border-orange-600 scale-105' : 'bg-transparent text-orange-700 border-orange-200 hover:bg-orange-100'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 