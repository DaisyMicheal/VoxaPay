import { Link } from 'react-router-dom'
import { apple, google, mockup } from '../assets/index'

export default function Dowload() {
  return (
    <div className='w-full bg-gradient-to-r from-[#EEE6FB] via-[#F9FAFB] to-[#F9FAFB]'>
      <div className='mx-auto max-w-7xl px-6 flex items-center justify-between h-[520px]'>
        {/* Left Content*/}
        <div className='flex flex-col gap-4'>
          <h1 className='font-semibold text-2xl leading-tight'>
            This is our time, Banking By Voice in <br />
            Our Language
          </h1>

          <p className='text-sm text-asset'>
            Join thousands already sending money, paying bills, and <br />
            recharging — just by speaking.
          </p>

          <div className='flex gap-4 mt-4'>
            <Link
              to='/'
              className='flex items-center gap-3 bg-black text-white rounded-md px-4 py-2'
            >
              <img src={apple} alt='Apple Store' className='h-6 w-6' />
              <div className='text-left leading-tight'>
                <p className='text-xs'>Download on the</p>
                <p className='text-sm font-semibold'>App Store</p>
              </div>
            </Link>

            <Link
              to='/'
              className='flex items-center gap-3 bg-black text-white rounded-md px-4 py-2'
            >
              <img src={google} alt='Google Play' className='h-6 w-6' />
              <div className='text-left leading-tight'>
                <p className='text-xs'>GET IT ON</p>
                <p className='text-sm font-semibold'>Google Play</p>
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <img src={mockup} alt='Download mockup' className='h-[420px] w-auto' />
      </div>
    </div>
  )
}
