import phone from '../assets/phone1.png'
import phone2 from '../assets/phone2.png'
import apple from '../assets/apple.svg'
import google from '../assets/google-play.svg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className=' max-w-7xl flex justify-between  px-8 py-8 '>
      <div className='p-6  '>
        <span className=' inline-block rounded-md bg-[#E2D7FF]  font-body text-sm px-2 py-1 text-primary font-semibold '>
          Say it, Send it, Done
        </span>
        <h1 className='py-6  text-3xl/11  leading-tight'>
          The first African banking app that <br />
          speaks your language, and listens too.
        </h1>
        <p className='font-body'>
          VoxaPay is redefining the way you move money fast, <br /> secure, and
          completely hands-free.
        </p>
        <div className='flex gap-4  pt-6'>
          <Link
            to='/'
            className='inline-flex  items-center justify-center rounded-md  text-white bg-black px-2 py-1'
          >
            <img src={apple} alt='Appl-store' className='h-6 w-6' />
            <div className='flex flex-col ml-2 text-left'>
              <h1 className='text-xs font-light'>Download on the</h1>
              <p className='text-base font-semibold'>play store</p>
            </div>
          </Link>

          <Link
            to='/'
            className='inline-flex  items-center justify-center rounded-md  text-white bg-black px-2 py-1'
          >
            <img src={google} alt='Google-Play' className='h-6 w-6' />
            <div className='flex flex-col ml-2 text-left'>
              <h1 className='text-xs font-light'>GET IT ON</h1>
              <p className='text-base font-semibold'>Google play</p>
            </div>
          </Link>
        </div>
      </div>
      <div className='flex justify-center  pr-16 '>
        <div className=' w-96 h-96 rounded-full bg-vector overflow-hidden'>
          <img
            src={phone}
            alt='Mockup'
            className='relative z-16 w-full right-16'
          />
          <img
            src={phone2}
            alt='Mockup'
            className='absolute z-10 top-30 right-30 w-96 opacity-90'
          />
        </div>
      </div>
    </div>
  )
}
