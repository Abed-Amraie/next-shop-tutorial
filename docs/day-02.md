# Day 02 - Component Architecture & Props
Date: 2026-10-11
Duration: 1 hour

## Goals
- Configure @/ alias to point to src/
- Break project into reusable components
- Learn Props with TypeScript
- Build Header, Hero, Footer, ProductCard, ProductGrid

## Setup
### tsconfig.json
"paths": { "@/*": ["./src/*"] }

### Folder structure
src/components/Header.tsx
src/components/Hero.tsx
src/components/Footer.tsx
src/components/ProductCard.tsx
src/components/ProductGrid.tsx
src/app/page.tsx

## Key Code

### Props with TypeScript
type ProductCardProps = {
  title: string
  description: string
  price: number
  category: string
  image?: string           // optional
}

export default function ProductCard({ title, description, price, category, image }: ProductCardProps) {
  return <div>{title}</div>
}

### Using component
<ProductCard
  key={product.id}
  title={product.title}
  price={product.price}
  category={product.category}
/>

### Conditional render
{image ? <img src={image} /> : <div>بدون تصویر</div>}

### Flex for two ends of a row
<div className="flex justify-between items-center">
  <p>{description}</p>
  <p>{category}</p>
</div>

## Key Tailwind Classes (day 2)
flex justify-between    first at start, last at end
items-center            vertical center
gap-4                   space between items
flex-1                  grow to fill space
shrink-0                don't shrink
truncate                cut text with ...
sticky top-0            stick to top on scroll
backdrop-blur           glass effect

## Key Concepts
- Props = data passed from parent to child
- Props = constructor parameters in Flutter
- Destructuring: { title, price } from props object
- @/ alias = src/ (avoids ../../..)
- export default mandatory
- key must be unique in .map()

## Errors Fixed
- <link> as self-closing tag — use <a> or <Link>
- @/components/Header not found — fix tsconfig paths
- Port 3000 in use — Next.js fell back to 3001

## Review Questions
- Props vs state? Props are read-only, state is mutable.
- Why @/ alias? Cleaner imports, independent of file location.
- Why key in .map()? React uses it to track which items changed.
- Optional prop syntax? ?: string means the prop is optional.
- Difference <a> vs <Link>? Link does client-side navigation without full reload.
