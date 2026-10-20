"use client"

import Link from "next/link"
import { useCart } from "@/contexts/CartContext"

export default function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-violet-600">
          🛍️ کتاب‌شاپ
        </Link>
        <nav className="hidden md:flex gap-8 text-slate-600">
          <Link href="/" className="hover:text-violet-600 transition-colors">خانه</Link>
          <a href="#" className="hover:text-violet-600 transition-colors">محصولات</a>
          <a href="#" className="hover:text-violet-600 transition-colors">درباره ما</a>
          <a href="#" className="hover:text-violet-600 transition-colors">تماس</a>
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/cart"
            className="relative px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors"
          >
            🛒 سبد خرید
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  )
}
