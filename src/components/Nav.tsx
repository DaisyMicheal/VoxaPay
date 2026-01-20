import { Link } from 'react-router-dom'
import { logo } from '../assets/index'
import Button from './Button'

function Nav() {
  return (
    <nav className=' shadow-sm'>
      <div className='  px-6 flex items-center justify-between h-16'>
        <Link to='/' className='flex items-center'>
          <img src={logo} alt='Logo' className='h-10 w-auto' />
          <span className=' text-xl font-semibold '>
            Voxa
            <span className='text-primary font-bold '>Pay</span>
          </span>
        </Link>
        <div className='flex text-center gap-6'>
          <Link to='/'>Personal</Link>
          <Link to='/'>Business</Link>
          <Link to='about'>Company</Link>
          <Link to='contact'>Help</Link>
        </div>
        <div className='flex flex-row justify-between gap-5'>
          <Button variant='ghost'>Sign in</Button>
          <Button>Join voxa</Button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
