import React from "react"

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'filled' | 'bordered' | 'classic'
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = "classic", onClick, className = '' }: ButtonProps) {
  const base = "block font-medium uppercase transition-all cursor-pointer relative"
  const variants = {
    filled: "bordered text-black bg-viridian-600 -skew-x-[20deg] hover:text-white hover:bg-transparent",
    bordered: "bordered bg-transparent -skew-x-[20deg] hover:bg-viridian-600",
    classic: "bg-viridian-600 rounded-md"
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className={variant !== "classic" ? "skew-x-[20deg]" : ""}>{children}</span>
    </button>
  )
} 