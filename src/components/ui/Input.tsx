import type { InputHTMLAttributes } from 'react'

type inputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export default function Input({ error, ...props }: inputProps) {
  return (
    <div className='w-full'>
      <input
        {...props}
        className={`w-full 
    rounded-full border px-4 py-3 outline-none ${
      error ? 'border-red=500' : 'border=gray-300'
    }focus:boder-primary`}
      />
      {error && <p className='mt-1 text-xs text-red-500'>{error}</p>}
    </div>
  )
}
