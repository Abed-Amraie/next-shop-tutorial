export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-24 text-center">
      <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
        فروشگاه <span className="text-violet-600">کتاب</span> من
      </h1>
      <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
        بهترین کتاب‌ها با بهترین قیمت، ارسال سریع به سراسر کشور.
      </p>
      <div className="mt-10 flex gap-4 justify-center">
        <button className="px-8 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors">
          مشاهده محصولات
        </button>
        <button className="px-8 py-3 bg-white text-slate-700 border border-slate-300 rounded-lg font-medium hover:bg-slate-50 transition-colors">
          تماس با ما
        </button>
      </div>
    </section>
  )
}