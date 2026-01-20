type BadgesProps = {
  children: string
  variant?: 'primary' | 'neutral'
}
function Badges({ children, variant = 'primary' }: BadgesProps) {
  const base =
    'text-center px-6 py-1 inline-block font-medium text-sm rounded-full '
  const variants = {
    primary: 'bg-[#E2D2FF] text-primary rounded-full',
    neutral: 'bg-primary text-gray-600',
  }
  return <span className={`${base}${variants[variant]}`}>{children}</span>
}

export default Badges
