import {
  line,
  woman,
  transaction,
  trust,
  Bill,
  Top,
  Send,
  shield,
  lock,
  doc,
  voxaBusiness,
  Wave,
  microphone,
  microphonZ,
} from '../../assets/index'

import { ArrowUpRight } from 'lucide-react'
import Testimonial from '../../components/Testimonial'
import Card from '../../components/Card'
import Button from '../../components/Button'

function MainSection() {
  return (
    <div className=' flex flex-col justify-center mt-6'>
      <div>
        <div className='text-center '>
          <span mb-4n className='text-primary text-sm font-semibold font-body '>
            Real voices, Real moments.{' '}
          </span>
        </div>
        <h1 className=' text-center text-3xl semibold font-heading'>
          {' '}
          Banking the way we actually live
          <img
            src={line}
            alt='Line'
            className='absolute inset-x-0 bottom-3 left-110 w-48'
          />
        </h1>
      </div>

      {/* Voice banking section */}
      <div className=' max-w-7xl mt-16 px-16  flex flex-row justify-between  gap-2'>
        <div className='  p-2'>
          <span className='text-base text-sm font-medium text-primary inline-block rounded-md px-2 py-1 bg-[#F3EEFF] '>
            {' '}
            Voice Banking{' '}
          </span>
          <h1 className='font-medium  text-3xl var(--font-montserrat) '>
            Say it, Send in minute
          </h1>
          <p className='mt-2 font-body text-base  text-asset  '>
            Send money using just your voice, in any language you speak. <br />
            Voxa understands you, no typing, no stress. Just say it and your
            rent is <br /> paid instantly.
          </p>
          <Button>OPen account</Button>
        </div>
        <div className='flex justify-center'>
          <div className='relative w-84 h-84 rounded-[98px] bg-vector overflow-hidden'>
            <img src={woman} alt='' className='w-full h-full object-cover' />
            <div className='absolute left-8 top-26'>
              <img src={Wave} alt='' className='w-16 h-16' />
            </div>

            {/* Floating voice bubble */}
          </div>
          <div className='absolute right-90  top-180 flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 rounded-bl-full rounded-tl-full rounded-tr-full '>
            <img src={microphone} alt='Mic' className='w-8 h-8' />
            <span className='text-sm text-asset'>
              Raba, turo min kudin haya
            </span>
          </div>
        </div>
      </div>
      {/* fast transaction */}
      <div className=' max-w-7xl mt-16 px-16 py-6  flex flex-row justify-between gap-2'>
        <div className='flex justify-center '>
          <div className='flex items-center w-84 h-74 rounded-[68px] bg-vector overflow-hidden'>
            <img src={transaction} alt='' className='item-center' />
          </div>
        </div>
        <div className='p-2'>
          <span className='text-base text-sm font-medium text-primary inline-block rounded-md px-2 py-1 bg-[#F3EEFF] '>
            Fast transaction
          </span>
          <h1 className=' mt-3 font-medium  text-3xl var(--font-montserrat) '>
            Zero fee charges, Fast Transfers
          </h1>
          <p className='mt-4 font-body text-base  text-asset  '>
            Even on the go, Raba ensures fast, reliable transfers. No network{' '}
            <br /> interruptions, no waiting — just open the app or speak, and
            your <br /> transaction is complete.
          </p>
          <Button>Open account</Button>
        </div>
      </div>
      {/* trust & security */}
      <div className=' max-w-7xl mt-16 px-16 py-6  flex flex-row justify-between gap-2'>
        <div className='p-2'>
          <span className='text-base text-sm font-medium text-primary inline-block rounded-md px-2 py-1 bg-[#F3EEFF] '>
            Trust & Security
          </span>
          <h1 className=' mt-2 font-medium  text-3xl var(--font-montserrat) '>
            I sabi use bank app now, no <br /> stress again
          </h1>
          <p className='mt-4 font-body text-base  text-asset  '>
            No more worrying about fraud or fake apps. Your voice is <br /> your
            password — safe, unique, and protected. With Voxa, <br /> your money
            and your peace of mind stay secure.
          </p>
          <Button>Open account</Button>
        </div>
        <div className='flex justify-center '>
          <div className='w-84 h-84 rounded-[98px] bg-vector overflow-hidden'>
            <img src={trust} alt='' />
          </div>
        </div>
      </div>
      {/* card container  */}

      <div className='w-full bg-gradient-to-b from-[#F9FAFB] via-[#EEE6FB] to-[#F9FAFB] py-20'>
        <div className='mx-auto max-w-7xl px-6 text-center'>
          {/* Tittle */}
          <h1 className='font-medium text-3xl leading-snug'>
            Banking was built for screens. <br />
            We built it for voices.
          </h1>

          {/* Cards */}
          <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* Card 1 */}
            <div className='bg-white rounded-xl shadow-lg p-6 text-left'>
              <img src={Wave} alt='' className='w-16 h-16' />
              <h2 className='font-semibold text-lg mt-2'>Speak Naturally</h2>
              <p className='mt-2 text-sm text-asset'>
                Say it the way you talk, “Raba, send ₦5,000 to Aisha.” Your
                voice is your command.
              </p>
            </div>

            {/* Card 2 */}
            <div className='bg-white rounded-xl shadow-lg p-6 text-left'>
              <img src={Wave} alt='' className='w-16 h-16' />
              <h2 className='font-semibold text-lg mt-2'>
                We Confirm It’s You
              </h2>
              <p className='mt-2 text-sm text-asset'>
                Voxa understands your voice and confirms your identity before
                any transaction.
              </p>
            </div>

            {/* Card 3 */}
            <div className='bg-white rounded-xl shadow-lg p-6 text-left'>
              <img src={Wave} alt='' className='w-16 h-16' />
              <h2 className='font-semibold text-lg mt-2'>
                Money Moves Instantly
              </h2>
              <p className='mt-2 text-sm text-asset'>
                Once you speak and confirm, your money moves immediately. Fast
                and secure.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className='mt-14'>
            <Button icon={<ArrowUpRight size={28} />} iconPosition='right'>
              Try Voxa Today{' '}
            </Button>
          </div>
        </div>
      </div>

      {/* Card image   */}
      <div className='mt-20'>
        {/* Section header */}
        <div className='text-center mb-12'>
          <span className='text-primary text-xs font-semibold'>
            Everyday money tools
          </span>

          <h1 className='mt-2 text-3xl font-semibold'>
            Do it all with just your voice
          </h1>
        </div>

        {/* Cards */}
        <div className='mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6'>
          {/* Card 1 */}
          <div className='relative flex flex-col rounded-xl bg-white shadow-md overflow-visible h-84'>
            {/* Image */}
            <img
              src={Bill}
              alt='Send Money'
              className='w-full h-48 object-cover rounded-xl'
            />

            {/* Floating voice command */}
            <div className='absolute left-4  bottom-2 flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 rounded-bl-full rounded-tl-full rounded-tr-full  shadow-md'>
              <img src={microphonZ} alt='Voice waveform' className='w-4 h-4' />
              <p className='text-xs font-medium italic text-asset'>
                Voxa, send ₦200 to James
              </p>
            </div>

            {/* Text content */}
            <div className='p-5 pt-10'>
              <h1 className='font-semibold text-xl'> Bill & Subscription</h1>
              <p className='mt-1 text-sm text-asset'>
                Electricity, TV, Internet — done in seconds.
              </p>
            </div>
          </div>
          {/* Card 2 */}

          <div className='relative flex flex-col rounded-xl bg-white shadow-md overflow-visible h-84'>
            {/* Image */}
            <img
              src={Top}
              alt='Send Money'
              className='w-full h-48 object-cover rounded-xl'
            />

            {/* Floating voice command */}
            <div className='absolute left-4  bottom-2 flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 rounded-bl-full rounded-tl-full rounded-tr-full  shadow-md'>
              <img src={microphonZ} alt='Voice waveform' className='w-4 h-4' />
              <p className='text-xs font-medium italic text-asset'>
                Voxa, send ₦200 to James
              </p>
            </div>

            {/* Text content */}
            <div className='p-5 pt-10'>
              <h1 className='font-semibold text-xl'>Top UP Airtime / Data</h1>
              <p className='mt-1 text-sm text-asset'>
                Stay connected, hands-free.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div className='relative flex flex-col rounded-xl bg-white shadow-md overflow-visible h-84'>
            {/* Image */}
            <img
              src={Send}
              alt='Send Money'
              className='w-full h-48 object-cover rounded-xl'
            />

            {/* Floating voice command */}
            <div className='absolute left-4  bottom-2 flex items-center gap-2 bg-[#F9F5FF] px-4 py-2 rounded-bl-full rounded-tl-full rounded-tr-full  shadow-md'>
              <img src={microphonZ} alt='Voice waveform' className='w-4 h-4' />
              <p className='text-xs font-medium italic text-asset'>
                Voxa, send ₦200 to James
              </p>
            </div>

            {/* Text content */}
            <div className='p-5 pt-10'>
              <h1 className='font-semibold text-xl'>Send Money</h1>
              <p className='mt-1 text-sm text-asset'>
                Send money to any bank instantly, no stress.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* language toggle section  */}
      <div className='mt-20 flex flex-col justify-center '>
        <span className='text-medium text-lg mb-3 text-primary text-center'>
          Speak money your way{' '}
        </span>
        <h1 className='font-semibold text-3xl text-center'>
          {' '}
          Bank in{' '}
          <span className='text-primary font-semibold text-3xl  '>
            {' '}
            Your Own Language
          </span>{' '}
        </h1>

        <div className='flex justify-center mt-10 mb-20 gap-2'>
          <div className='border bg-primary rounded-lg px-6 py-3 mx-4 font-medium text-white'>
            <p>Hausa</p>
          </div>
          <div className='border border-primary rounded-lg px-6 py-3 mx-4 font-medium  text-[#1A1A1A]'>
            <p>Igbo</p>
          </div>
          <div className='border border-primary rounded-lg px-6 py-3 mx-4 font-medium  text-[#1A1A1A]'>
            <p>Yoruba</p>
          </div>
          <div className='border border-primary rounded-lg px-6 py-3 mx-4  font-medium text-[#1A1A1A]'>
            <p>English</p>
          </div>
        </div>

        <div className='mx-auto flex flex-col items-center justify-center gap-4 w-[866px] h-[260px] bg-[#F5EFFF] rounded-lg font-medium'>
          <img src={Wave} alt='' className='w-20 h-20' />

          <h1 className='font-semibold text-2xl text-center'>
            “Raba, aika ₦5,000 ga Aisha.”
          </h1>
        </div>
      </div>

      {/* Testimonial section  */}
      <div className='flex flex-col justify-center mt-20 '>
        <h1 className='  text-center text-3xl font-semibold '>
          What our early users are saying{' '}
        </h1>

        <Testimonial />
      </div>

      {/* Trust & Security   */}
      <div className='mt-20'>
        <h1 className=' text-center font-semibold text-3xl '>
          Your Money. Your Voice.{' '}
          <span className='text-primary'> Protected</span>{' '}
        </h1>

        <Card />
      </div>

      {/* Voxa For Business  */}

      <div className='mx-auto max-w-5xl flex justify-between gap-8 mt-20 mb-20 border border-[#F3F2F2] px-10'>
        {/* Left Content */}
        <div className='flex flex-col py-5'>
          <div className='flex items-center gap-3'>
            <span className='w-12 h-1 bg-primary'></span>
            <h2 className='text-primary font-semibold text-lg'>Coming Soon</h2>
          </div>

          <div className='mt-6'>
            <h1 className='font-semibold text-xl'>
              Voxa For Business is Coming to You. <br />
              Get Notified When We Launch
            </h1>

            <p className='mt-6 text-sm text-asset'>
              For shops, salons, and merchants everywhere. <br />
              Accept payments with just your voice. No POS. No stress.
            </p>

            {/* Newsletter */}
            <div className='flex border border-[#AFABAB] rounded-full mt-6 w-96 h-12 overflow-hidden'>
              <input
                type='email'
                placeholder='Enter your email address'
                className='flex-grow px-4 outline-none'
              />
              <button className='bg-primary text-white px-6'>
                Join waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Right Image*/}
        <img
          src={voxaBusiness}
          alt='Voxa For Business'
          className='h-80 w-auto rounded-lg ml-20'
        />
      </div>
    </div>
  )
}

export default MainSection
