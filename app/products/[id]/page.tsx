import { getProductById, products } from "@/lib/products"
import { notFound } from "next/navigation"
import Link from "next/link"
import Button from "@/components/ui/Button"
import AddToCartButton from "@/components/AddToCartButton"

type Props = {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = getProductById(Number(id))

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link
          href="/"
          className="text-violet-600 hover:text-violet-700 text-sm font-medium"
        >
          ← بازگشت به فروشگاه
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          <div className="bg-slate-100 rounded-2xl h-96 flex items-center justify-center text-slate-400">
            {product.image ? (
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl"
              />
            ) : (
              <span>بدون تصویر</span>
            )}
          </div>

          <div>
            <span className="text-sm text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
              {product.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mt-4">
              {product.title}
            </h1>
            <p className="text-slate-600 mt-4 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <p className="text-3xl font-bold text-violet-600">
                {product.price.toLocaleString("fa-IR")} تومان
              </p>
              <div className="mt-6 flex gap-3">
                <AddToCartButton product={product} />
                <Button variant="outline" size="lg">
                  علاقه‌مندی
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }))
}
