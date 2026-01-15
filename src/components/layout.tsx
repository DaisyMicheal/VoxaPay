import type { ReactNode } from 'react'

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-[var(--color-secondary)]'>
      <div className='mx-auto max-w-7xl px-6'>{children}</div>
    </div>
  )
}
export default Layout
