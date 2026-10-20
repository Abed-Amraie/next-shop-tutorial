"use client"

import Button from "@/components/ui/Button"
import { useCart } from "@/contexts/CartContext"
import { Product } from "@/lib/products"
import { useState } from "react"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addItem({ id: product.id, title: product.title, price: product.price })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Button
      variant={added ? "secondary" : "primary"}
      size="lg"
      onClick={handleAdd}
    >
      {added ? "✓ اضافه شد" : "افزودن به سبد خرید"}
    </Button>
  )
}
