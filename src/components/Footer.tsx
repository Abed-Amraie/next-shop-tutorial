export default function Footer() {
  return (
    <footer className="bg-slate-700 text-slate-400 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-3">🛍️ کتاب‌شاپ</h3>
          <p className="text-sm">بهترین کتاب‌ها با بهترین قیمت</p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">لینک‌های سریع</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">درباره ما</a></li>
            <li><a href="#" className="hover:text-white transition-colors">تماس</a></li>
            <li><a href="#" className="hover:text-white transition-colors">سوالات متداول</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3">ارتباط با ما</h4>
          <p className="text-sm">support@bookshop.ir</p>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs">
        © ۱۴۰۴ کتاب‌شاپ — تمام حقوق محفوظ است
      </div>
    </footer>
  )
}