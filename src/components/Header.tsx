export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-violet-600">
          🛍️ کتاب‌شاپ
        </a>
        <nav className="hidden md:flex gap-8 text-slate-600">
          <a href="#" className="hover:text-violet-600 transition-colors">خانه</a>
          <a href="#" className="hover:text-violet-600 transition-colors">محصولات</a>
          <a href="#" className="hover:text-violet-600 transition-colors">درباره ما</a>
          <a href="#" className="hover:text-violet-600 transition-colors">تماس</a>
        </nav>
        <button className="px-4 py-2 bg-violet-600 text-white rounded-lg text-sm font-medium hover:bg-violet-700 transition-colors">
          ورود
        </button>
      </div>
    </header>
  )
}