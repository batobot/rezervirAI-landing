import { ReactNode, ElementType } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: ElementType
}

export function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  )
}
