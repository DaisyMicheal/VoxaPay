import { Link } from 'react-router-dom'
import Nav from '../../components/layout/Nav'
import { ChevronRight } from 'lucide-react'
import { group } from '../../assets'
import Footer from '../../components/layout/Footer/Footer'
import Dowload from '../../components/layout/Dowload'

export default function Contact() {
  return (
    <div>
      <Nav />
      <div className='flex flex-row justify-center justify-between mt-20  mb-20 gap-20'>
        <div className='flex flex-col justify-center '>
          <h1 className='font-semibold text-3xl text-primary '>Contact Us </h1>
          <p className='text-sm/6 text-asset'>
            Even though everything we do lives in the app, our customers are{' '}
            <br />
            never left on their own. You’ll always find what you need right at{' '}
            <br />
            your fingertips, and whenever you need support or just feel like{' '}
            <br />
            reaching out, we’re here and ready to help.
          </p>

          <div className=' flex flex-col mt-6'>
            <Link
              to='/'
              className='text-sm text-primary font-medium inline-flex items-center underline '
            >
              Call:029283820930
              <ChevronRight color='#6B2BD9' size={16} />
            </Link>
            <Link
              to='/'
              className=' mt-3 text-sm text-primary font-medium inline-flex items-center underline '
            >
              Support:support@voxa.ng
              <ChevronRight color='#6B2BD9' size={16} />
            </Link>
            <Link
              to='/'
              className=' mt-3 text-sm text-primary font-medium inline-flex items-center underline '
            >
              Legal:legal@voxa.com
              <ChevronRight color='#6B2BD9' size={16} />
            </Link>
          </div>
        </div>

        <div>
          <img src={group} alt='contact image' className='w-full h-48' />
        </div>
      </div>
      <Dowload />

      <Footer />
    </div>
  )
}
