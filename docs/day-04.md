# Day 04 - Design System + Product Detail Page
Date: 2026-10-13
Duration: 1 hour

## Goals
### Part 1: Reusable Components (20 min)
- Install clsx + tailwind-merge
- Create cn() utility
- Build Button component with variants
- Refactor Hero to use Button

### Part 2: Product Detail Page (40 min)
- Create dynamic route src/app/products/[id]/page.tsx
- Link ProductCard to detail page
- Read id from URL with useParams
- Handle missing product with notFound()

## Key Code

### cn() utility
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

### Button component
type Variant = "primary" | "secondary" | "outline"
type Size = "sm" | "md" | "lg"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary: "bg-violet-600 text-white hover:bg-violet-700",
  outline: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50",
}

### Dynamic route
src/app/products/[id]/page.tsx

import { useParams } from "next/navigation"

export default function ProductPage() {
  const params = useParams()
  const id = params.id
}

### Link to product
import Link from "next/link"

<Link href={`/products/${product.id}`}>
  <ProductCard ... />
</Link>

## Key Concepts
- cn() = combine clsx (conditional) + tailwind-merge (resolve conflicts)
- Record<K, V> = TypeScript type for key-value map
- Intersection Type (&) = merge two types
- Rest Props (...props) = pass all native props through
- Dynamic Routes = [id] in folder name
- useParams = read URL params in client component
- notFound() = render 404 page
- Link = client-side navigation (no full reload)

## Review Questions
- Why cn() and not just template literals? Handles conflicts, conditionals.
- Record vs object? Record is typed key-value map.
- When to use Link vs <a>? Link for internal, <a> for external links.
- What does [id] mean? Dynamic segment, value from URL.
- How to read params in Server Component? Pass as prop: { params: { id } }.
