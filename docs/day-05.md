# Day 05 - Shopping Cart
Date: 2026-10-15
Duration: 1 hour

## Goals
- Build CartContext for state management
- Add "add to cart" logic on product pages
- Show cart count in Header
- Create /cart page
- Persist cart in localStorage

## Key Code

### CartContext (use client)
"use client"
import { createContext, useContext, useState, useEffect } from "react"

type CartItem = {
  id: number
  title: string
  price: number
  quantity: number
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  totalPrice: number
  totalItems: number
}

const CartContext = createContext<CartContextType | null>(null)

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}

### Provider in layout
<CartProvider>
  {children}
  <Footer />
</CartProvider>

### Add to cart button
const { addItem } = useCart()
addItem({ id: product.id, title: product.title, price: product.price })

### Cart count in Header
const { totalItems } = useCart()
<span>{totalItems}</span>

## Key Concepts
- "use client" = client component (browser-side)
- createContext + useContext = share state without prop drilling
- useReducer for complex state, useState for simple
- localStorage for persistence
- Hydration: server HTML + client JS must match
- Omit<T, K> = type without certain keys

## Review Questions
- Why "use client" at top? Required for hooks like useState/useEffect.
- Context vs props? Context avoids prop drilling for global state.
- Why localStorage in useEffect? Window not available on server.
- What is hydration mismatch? Server-rendered HTML differs from client render.
