'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Hydration mismatch prevent korar jonno
  useEffect(() => {
    queueMicrotask(() => {
      setMounted(true)
    })
  }, [])

  if (!mounted) {
    return <div className="w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
  }

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative inline-flex h-8 w-14 shrink-0 cursor-pointer items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${
        isDark 
          ? 'bg-slate-900 border border-slate-700 shadow-[0_0_12px_rgba(56,189,248,0.3)]' 
          : 'bg-slate-200 border border-slate-300 shadow-[0_0_12px_rgba(37,99,235,0.2)]'
      }`}
      aria-label="Toggle Theme"
      type="button"
    >
      {/* Background Static Icons */}
      <div className="flex w-full items-center justify-between px-0.5 pointer-events-none">
        <Sun className="size-3.5 text-amber-500 opacity-90" />
        <Moon className="size-3.5 text-sky-400 opacity-90" />
      </div>

      {/* Sliding Thumb Circle */}
      <span
        className={`absolute left-1 flex size-6 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-md transition-transform duration-300 ease-in-out ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      >
        {isDark ? (
          <Moon className="size-3.5 text-sky-400 transition-all duration-300 animate-in fade-in zoom-in" />
        ) : (
          <Sun className="size-3.5 text-amber-500 transition-all duration-300 animate-in fade-in zoom-in" />
        )}
      </span>
    </button>
  )
}

export default ThemeToggler