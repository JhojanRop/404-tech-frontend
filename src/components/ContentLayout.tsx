type ContentLayoutProps = {
  children: React.ReactNode,
  className?: string
  height?: 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
}

export default function ContentLayout({ children, className, height = 100 }: ContentLayoutProps) {
  const heightClass = {
    20: 'h-[20dvh]',
    30: 'h-[30dvh]',
    40: 'h-[40dvh]',
    50: 'h-[50dvh]',
    60: 'h-[60dvh]',
    70: 'h-[70dvh]',
    80: 'h-[80dvh]',
    90: 'h-[90dvh]',
    100: 'h-dvh',
  }[height]

  return (
    <div className={`w-11/12 max-w-7xl mx-auto ${heightClass} ${className || ''}`}>
      {children}
    </div>
  )
}
