import { DotLottieReact } from '@lottiefiles/dotlottie-react'
import line from '../assets/line.svg'
import woman from '../assets/voxa Woman .svg'
import transaction from '../assets/trasaction.png'
import trust from '../assets/trust.png'
import Bill from '../assets/bill.png'
import Top from '../assets/top.png'
import Send from '../assets/Onboarding.png'

function MainSection() {
  return (
    <div className=' flex flex-col justify-center py-6'>
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
      <div className=' max-w-7xl mt-16 px-16 py-6  flex flex-row justify-between gap-2'>
        <div className='p-2'>
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
          <button className='mt-6 bg-[#6B2BD9] text-white rounded-full px-4 py-2 '>
            Open account
          </button>
        </div>
        <div className='flex justify-center '>
          <div className='w-84 h-84 rounded-[98px] bg-vector overflow-hidden'>
            <img src={woman} alt='' />
            <div className='absolute top-200 right-90'>
              <span className='text-sm text-base inline-block rounded-tr-full rounded-bl-lg px-3 py-2 bg-white shadow-md '>
                Raba, turo min kudin haya{' '}
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* fast transaction */}
      <div className=' max-w-7xl mt-16 px-16 py-6  flex flex-row justify-between gap-2'>
        <div className='flex justify-center '>
          <div className='w-84 h-64 rounded-[68px] bg-vector overflow-hidden'>
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
          <button className='mt-6 bg-[#6B2BD9] text-white rounded-full px-4 py-2 '>
            Open account
          </button>
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
          <button className='mt-6 bg-[#6B2BD9] text-white rounded-full px-4 py-2 '>
            Open account
          </button>
        </div>
        <div className='flex justify-center '>
          <div className='w-84 h-84 rounded-[98px] bg-vector overflow-hidden'>
            <img src={trust} alt='' />
          </div>
        </div>
      </div>
      {/* card container  */}

      <div className='  justify-center mt-20 w-full h-84 bg-container-gradient items-center '>
        <h1 className='font-medium text-3xl  text-center'>
          {' '}
          Banking was built for screen. <br /> We build for voice{' '}
        </h1>

        <div className='mt-16 flex flex-row justify-center '>
          {/* speak neturally */}
          <div className='w-68  h-48 bg-white rounded-xl ml-6 flex  shadow-lg '>
            <div className='flex flex-col p-4'>
              <h1 className='mt-4 font-semibold text-lg'>Speak Neturally </h1>
              <p className='mt-2 text-base text-asset'>
                Say it the way you talk, “Raba , send ₦5,000 to Aisha.” Your
                voice is your command
              </p>
            </div>
          </div>
          {/* we comfirm */}

          <div className='w-68  h-48 bg-white rounded-xl ml-6 flex  shadow-lg '>
            <div className='flex flex-col p-4'>
              <h1 className='mt-4 font-semibold text-lg'>
                We Comfirm it's you{' '}
              </h1>

              <p className='mt-2 text-base text-asset'>
                Say it the way you talk, “Raba , send ₦5,000 to Aisha.” Your
                voice is your command
              </p>
            </div>
          </div>
          {/* money move  */}
          <div className='w-68  h-48 bg-white rounded-xl ml-6 flex  shadow-lg '>
            <div className='flex flex-col p-4'>
              <h1 className='mt-2 font-semibold text-lg '>
                Money Move Instantly
              </h1>

              <p className='mt-2 text-base text-asset'>
                Say it the way you talk, “Raba , send ₦5,000 to Aisha.” Your
                voice is your command
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* image card  */}
      <div className='justify-center mt-20'>
        <div className='text-center'>
          <span className='text-primary text-xs font-semibold '>
            Everyday money tools{' '}
          </span>
          <h1 className=' mt-2 text-3xl font-medium font-semibold '>
            {' '}
            Do it all with just your voice{' '}
          </h1>
        </div>
        <div className=' flex justify-center p-6 gap-10 mt-6'>
          <div className=' flex flex-col justify-center w-68 h-96 rounded-xl overflow-hidden bg-white shadow-md'>
            <div className='aspect-[4/3] w-full '>
              <img
                src={Bill}
                alt='Bill & Subscription'
                className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-4'>
              <h1 className='font-semibold text-2xl'>Bill & Subscription</h1>
              <p className='text-base text-asset '>
                Electricity, TV, Internet — done in seconds.
              </p>
            </div>
            <span className='text-sm text-base inline-block rounded-tr-full rounded-bl-lg py-2 bg-[#F9F5FF] shadow-md h-8'></span>
          </div>
          {/* top  */}

          <div className=' flex flex-col justify-center w-68 rounded-xl overflow-hidden bg-white shadow-md'>
            <div className='aspect-[4/3] w-full '>
              <img
                src={Top}
                alt='Bill & Subscription'
                className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-4'>
              <h1 className='font-semibold text-2xl'>Bill & Subscription</h1>
              <p className='text-base text-asset '>
                Electricity, TV, Internet — done in seconds.
              </p>
            </div>
          </div>

          {/* voice  */}

          <div className=' flex flex-col justify-center w-68 rounded-xl overflow-hidden bg-white shadow-md'>
            <div className='aspect-[4/3] w-full '>
              <img
                src={Send}
                alt='Bill & Subscription'
                className='w-full h-48 object-cover rounded-xl'
              />
            </div>
            <div className='p-4'>
              <h1 className='font-semibold text-2xl'>Bill & Subscription</h1>
              <p className='text-base text-asset '>
                Electricity, TV, Internet — done in seconds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
