# Day 03 - Persian RTL & Font Setup
Date: 2026-10-12
Duration: 1 hour

## Goals
- Setup Persian RTL support
- Add Vazirmatn font via next/font
- Fix text direction across all components
- Add 4th product (YOCTO) and section header

## Key Code

### layout.tsx — RTL + Font
import { Vazirmatn } from "next/font/google"

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
})

<html lang="fa" dir="rtl">
  <body className={`${vazirmatn.variable} antialiased`}>
    {children}
  </body>
</html>

### globals.css — Tailwind v4 theme
@theme inline {
  --font-sans: var(--font-vazirmatn);
  --font-mono: ui-monospace, monospace;
}

body {
  font-family: var(--font-vazirmatn), system-ui, sans-serif;
}

### Number formatting
{price.toLocaleString("fa-IR")}   // 250000 -> ۲۵۰,۰۰۰

### Section header pattern
<div className="flex items-center justify-between mb-8">
  <h2 className="text-3xl font-bold">محصولات ویژه</h2>
  <a href="#" className="text-violet-600">مشاهده همه ←</a>
</div>

## Components Updated
- layout.tsx — lang="fa", dir="rtl", Vazirmatn
- globals.css — font variables
- ProductGrid.tsx — added 4th product + section header
- ProductCard.tsx — hover lift effect

## Key Notes
- next/font downloads & optimizes fonts locally (no CDN)
- dir="rtl" on <html> affects whole layout
- lang="fa" is important for SEO & accessibility
- Half-space (نیم‌فاصله) with Shift+Space: برنامه‌نویسی
- Tailwind v4 uses @theme in CSS instead of tailwind.config.js

## Review Questions
- next/font vs Google Fonts CDN? next/font is local, faster, private.
- Why dir="rtl" on html not body? Affects scrollbar, form controls, page-wide direction.
- Tailwind v4 config location? In CSS via @theme, not JS file.
- Number formatting for Persian? toLocaleString("fa-IR").
- What is نیم‌فاصله and its key? Zero-width non-joiner, Shift+Space.
