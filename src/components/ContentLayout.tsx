type ContentLayoutProps = {
  children: React.ReactNode,
  className?: string
  height?: 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100
}

export default function ContentLayout({ children, className, height = 100 }: ContentLayoutProps) {
  const heightClass = {
    20: 'h-[calc(20dvh)]',
    30: 'h-[calc(30dvh)]',
    40: 'h-[calc(40dvh)]',
    50: 'h-[calc(50dvh)]',
    60: 'h-[calc(60dvh)]',
    70: 'h-[calc(70dvh)]',
    80: 'h-[calc(80dvh)]',
    90: 'h-[calc(90dvh)]',
    100: 'min-h-[calc(100dvh_-_80px)]',
  }[height]

  return (
    <div className={`w-11/12 max-w-7xl mx-auto ${heightClass} ${className || ''}`}>
      {children}
    </div>
  )
}
