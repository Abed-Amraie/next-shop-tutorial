type ProductCardProps = {
  title: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

export default function ProductCard({
  title,
  description,
  price,
  category,
  image,
}: ProductCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="h-40 bg-slate-100 rounded-lg mb-4 overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-400">
            بدون تصویر
          </div>
        )}
      </div>
      <h3 className="font-semibold text-slate-900">
        {title}
      </h3>
      <div className="flex justify-between items-center text-sm mt-1">
        <p className="text-slate-500">{description}</p>
        <p className="text-slate-500">{category}</p>
      </div>
      <p className="text-violet-600 font-bold mt-3 text-3xl">
        {price.toLocaleString("fa-IR")} تومان
      </p>
    </div>
  );
}
