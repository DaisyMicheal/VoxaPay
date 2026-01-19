type FooterColumnProps = {
  title: string
  links: string[]
}

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h4 className='mb-4 font-semibold text-gray-900'>{title}</h4>
      <ul className='space-y-3 text-sm text-gray-600'>
        {links.map((link) => (
          <li key={link} className='cursor-pointer hover:text-primary'>
            {link}
          </li>
        ))}
      </ul>
    </div>
  )
}
