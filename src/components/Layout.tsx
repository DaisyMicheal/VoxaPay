import type { ReactNode } from 'react'
type LayoutProps = {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <div className='bg-secondary'>
      <div className='mx-auto max-w-7xl px-6'>{children}</div>
    </div>
  )
}
export default Layout
