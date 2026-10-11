import ProductCard from "./ProductCard";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "کتاب برنامه‌نویسی React",
    description: "آموزش کامل React از صفر",
    price: 250000,
    category: " برنامه نویسی",
  },
  {
    id: 2,
    title: "کتاب TypeScript پیشرفته",
    description: "تایپ‌دهی حرفه‌ای",
    price: 320000,
    category: "برنامه نویسی فرانت اند",
  },
  {
    id: 3,
    title: "کتاب Tailwind CSS",
    description: "طراحی سریع و مدرن",
    price: 180000,
    category: " وب و برنامه نویسی",
  },
  {
    id: 4,
    title: "اموزش پروژه محور YOCTO",
    description: "از صفر تا صد",
    price: 25000,
    category: " سخت افزار",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-8">محصولات ویژه</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </section>
  );
}
