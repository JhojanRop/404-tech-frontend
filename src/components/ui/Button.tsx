import Link from "next/link";
import React from "react"

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'filled' | 'bordered' | 'classic' | 'icon'
  type?: 'button' | 'link'
  href?: string
  icon?: ""
  selected?: boolean
  onClick?: () => void
  className?: string
}

export default function Button({ children, variant = "classic", onClick, className = '', selected = false, type = 'button', href = "" }: ButtonProps) {
  const base = "block font-medium uppercase transition-all cursor-pointer relative"
  const variants = {
    filled: "bordered text-black bg-viridian-600 -skew-x-[20deg] hover:text-white hover:bg-transparent",
    bordered: "bordered bg-transparent -skew-x-[20deg] hover:bg-viridian-600",
    classic: "bg-viridian-600 rounded-md",
    icon: `px-3 py-1 rounded-2xl inset-shadow ${selected ? " bg-viridian-600 text-black" : "bg-black text-white"}`
  }


  if (type === "button") {
    return (
      <button
        onClick={onClick}
        className={`${base} ${variants[variant]} ${className}`}
      >
        <span className={variant !== "classic" ? "skew-x-[20deg]" : ""}>{children}</span>
      </button>
    )
  }

  if (type === "link") {
    return (
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        <span className={variant !== "classic" ? "skew-x-[20deg]" : ""}>{children}</span>
      </Link>
    )
  }
} 