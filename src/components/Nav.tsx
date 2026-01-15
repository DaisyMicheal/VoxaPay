import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

function Nav() {
  return (
    <nav className=' bg-white shadow-sm'>
      <div className='mx-auto max-w-7xl px-6 flex items-center justify-between h-16'>
        <Link to='/' className='flex items-center'>
          <img src={Logo} alt='Logo' className='h-10 w-auto' />
          <span className=' text-xl font-semibold '>
            Voxa
            <span className='text-primary font-bold '>Pay</span>
          </span>
        </Link>
        <div className='flex text-center gap-6'>
          <Link to='/'>Personal</Link>
          <Link to='/'>Business</Link>
          <Link to='/'>Company</Link>
          <Link to='/'>Help</Link>
        </div>
        <div className='flex flex-row justify-between gap-5'>
          <button className='font-md'>Sign in</button>
          <button className='bg-primary text-white rounded-full px-4 py-2 '>
            Join Voxa
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
