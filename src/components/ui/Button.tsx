type ButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  className?: string
}

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  icon,
  iconPosition = 'left',
  disabled = false,
  className = '',
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-medium transition disabled:opacity-50'

  const variants = {
    primary: 'bg-primary text-white hover:opacity-90',
    ghost: 'bg-transparent text-black hover:bg-primary/10',
    secondary: 'bg-gray-900 text-white',
    outline:
      'border border-primary text-primary hover:bg-primary hover:text-white',
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {icon && iconPosition === 'left' && (
        <span className='flex items-center'>{icon}</span>
      )}

      <span>{children}</span>

      {icon && iconPosition === 'right' && (
        <span className='flex items-center'>{icon}</span>
      )}
    </button>
  )
}

export default Button
