import ProductCard from "./ProductCard"
import { products } from "@/lib/products"

export default function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-slate-900">محصولات ویژه</h2>
        <a
          href="#"
          className="text-violet-600 hover:text-violet-700 text-sm font-medium transition-colors"
        >
          مشاهده همه ←
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </section>
  )
}
