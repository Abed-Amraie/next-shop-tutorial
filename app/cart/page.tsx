"use client"

import Link from "next/link"
import Button from "@/components/ui/Button"
import { useCart } from "@/contexts/CartContext"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <div className="text-6xl mb-6">🛒</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            سبد خرید شما خالی است
          </h1>
          <p className="text-slate-600 mb-8">
            هنوز هیچ محصولی اضافه نکردی.
          </p>
          <Link href="/">
            <Button variant="primary" size="lg">
              مشاهده محصولات
            </Button>
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">سبد خرید</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 flex-shrink-0">
                  تصویر
                </div>
                <div className="flex-1">
                  <Link
                    href={`/products/${item.id}`}
                    className="font-semibold text-slate-900 hover:text-violet-600"
                  >
                    {item.title}
                  </Link>
                  <p className="text-violet-600 font-bold mt-1">
                    {item.price.toLocaleString("fa-IR")} تومان
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100"
                  >
                    −
                  </button>
                  <span className="w-8 text-center font-medium">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-100"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 px-2"
                  aria-label="حذف"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6 sticky top-20">
              <h2 className="font-bold text-lg text-slate-900 mb-4">خلاصه سفارش</h2>
              <div className="space-y-2 text-sm text-slate-600">
                <div className="flex justify-between">
                  <span>تعداد محصولات</span>
                  <span>{items.reduce((sum, i) => sum + i.quantity, 0)} عدد</span>
                </div>
                <div className="flex justify-between">
                  <span>هزینه ارسال</span>
                  <span className="text-green-600">رایگان</span>
                </div>
              </div>
              <div className="border-t border-slate-200 mt-4 pt-4 flex justify-between font-bold text-lg">
                <span>مبلغ نهایی</span>
                <span className="text-violet-600">
                  {totalPrice.toLocaleString("fa-IR")} تومان
                </span>
              </div>
              <Button variant="primary" size="lg" className="w-full mt-6">
                ادامه خرید و پرداخت
              </Button>
              <Link
                href="/"
                className="block text-center text-sm text-violet-600 hover:text-violet-700 mt-4"
              >
                ← ادامه خرید
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
