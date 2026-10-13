export type Product = {
  id: number
  title: string
  description: string
  price: number
  category: string
  image?: string
}

export const products: Product[] = [
  {
    id: 1,
    title: "کتاب برنامه‌نویسی React",
    description: "آموزش کامل React از صفر",
    price: 250000,
    category: "برنامه‌نویسی",
  },
  {
    id: 2,
    title: "کتاب TypeScript پیشرفته",
    description: "تایپ‌دهی حرفه‌ای",
    price: 320000,
    category: "فرانت‌اند",
  },
  {
    id: 3,
    title: "کتاب Tailwind CSS",
    description: "طراحی سریع و مدرن",
    price: 180000,
    category: "طراحی وب",
  },
  {
    id: 4,
    title: "آموزش پروژه‌محور YOCTO",
    description: "از صفر تا صد",
    price: 25000,
    category: "سخت‌افزار",
  },
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}
