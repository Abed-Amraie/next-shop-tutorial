import { cn } from "@/lib/utils"
import { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "outline"
type Size = "sm" | "md" | "lg"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  size?: Size
}

const variants: Record<Variant, string> = {
  primary: "bg-violet-600 text-white hover:bg-violet-700",
  secondary: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "bg-white text-slate-700 border border-slate-300 hover:bg-slate-50",
}

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
}

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-lg font-medium transition-colors",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
