export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">



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



      <section className="max-w-6xl mx-auto px-6 py-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          محصولات ویژه
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-40 bg-slate-100 rounded-lg mb-4" />
              <h3 className="font-semibold text-slate-900">محصول {i}</h3>
              <p className="text-slate-500 text-sm mt-1">توضیح کوتاه محصول</p>
              <p className="text-violet-600 font-bold mt-3">۲۵۰,۰۰۰ تومان</p>
            </div>
          ))}
        </div>
      </section>


<section className="max-w-6xl mx-auto px-6 py-4">
  <h2 className="text-3xl font-bold text-slate-900 mb-2">محصولات ویژه</h2>
  <p className="text-slate-600">در اینجا محصولات ویژه نمایش داده می‌شوند.</p>
</section>
    </main>
  )
}