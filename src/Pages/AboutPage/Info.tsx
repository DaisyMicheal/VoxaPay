import CountUp from 'react-countup'

import Button from '../../components/Button'

import {
  about1,
  about2,
  about3,
  mockup1,
  mockup2,
  shield,
  team1,
  team2,
  value,
  vision,
} from '../../assets'
import { ArrowUpRight, Facebook, Linkedin, Twitter } from 'lucide-react'

export default function About() {
  return (
    <div className=' max-w-7xl flex flex-col justify-center mt-20'>
      <div className='p-2 flex flex-col items-center'>
        <span className='text-center px-6 py-1 inline-block font-medium text-sm rounded-full bg-highlight'>
          About Us{' '}
        </span>
        <h1 className='mt-6 font-bold text-3xl text-center '>
          Empowering Africa With Fast, Secure, <br /> & Intelligent Payment
        </h1>
        <p className='mt-6 text-center text-asset text-sm'>
          Voxapay is a secure digital wallet that makes payments effortless with
          <br />
          voice-powered convenience.
        </p>
      </div>
      <div className='flex flex-row justify-between justify-center gap-10 mt-20'>
        <img src={about1} alt='Teams' className='w-84 h-84 ' />
        <img src={about2} alt='' className='w-84 h-94' />
        <img src={about3} alt='' className='w-84 h-84' />
        <div className='mt-20'></div>
      </div>
      {/* Number  Counter  */}
      <div className=' mt-20 flex flex-row justify-between justify-center gap-40'>
        <div>
          <span className='font-semibold text-primary text-2xl'>
            <CountUp end={500} duration={2} />
            K+
          </span>

          <h1 className='text-xs text-asset text-center'>Active users</h1>
        </div>
        {/* Transaction Processed */}
        <div>
          <span className='font-semibold text-primary text-2xl'>
            <CountUp end={1} duration={2} />
            M+
          </span>

          <h1 className='text-xs text-asset text-center'>
            Transaction Processed
          </h1>
        </div>
        {/* Total Amount of Transaction */}
        <div>
          <span className='font-semibold text-primary text-2xl'>
            <CountUp end={100} duration={2} />
            M+
          </span>

          <h1 className='text-xs text-asset text-center'>
            Total Amount of <br /> Transaction{' '}
          </h1>
        </div>
        <div>
          <span className='font-semibold text-primary text-2xl'>
            <CountUp end={99} duration={2} />%
          </span>

          <h1 className='text-xs text-asset text-center'>
            Customer Satisfaction{' '}
          </h1>
        </div>
      </div>

      {/* Why we built Voxa  */}
      <div className=' flex flex-row justify-between gap-10 justify-center w-full h-94 bg-gradient-to-r from-[#EEE6FB] via-[#F9FAFB] to-[#F9FAFB] mt-20'>
        <div className='mt-10'>
          <img src={value} alt='' className='w-84 h-64' />
        </div>
        <div className='flex flex-col mt-10 '>
          <h1 className='text-2xl font-semibold '>Why we built VoxaPay</h1>
          <p className='  mt-10 inline-block text-sm text-asset '>
            {' '}
            From long steps to confusing interfaces, people were still
            struggling to perform basic <br /> actions like sending money,
            checking balances, or paying bills. We believed digital <br />{' '}
            payments should feel effortless, not
          </p>
          <p className='  mt-6 inline-block text-sm text-asset'>
            overwhelming. So we created Voxapay, a wallet that listens,
            understands, and helps you take action <br /> instantly. By
            combining clean design, secure systems, and intelligent tools, we
            built a <br /> platform where modern finance feels natural and
            accessible.
          </p>
          <div className='mt-10'>
            <Button icon={<ArrowUpRight size={20} />} iconPosition='right'>
              {' '}
              Try Voxa Today
            </Button>
          </div>
        </div>
      </div>

      {/* Vission & Mission  */}
      <div className=' flex flex-row justify-between gap-10 justify-center  mt-20'>
        <div className='flex flex-col mt-10 '>
          <h1 className='text-2xl font-semibold '>Our Mission & Vision</h1>
          <p className=' mt-10 inline-block text-sm text-asset '>
            Our vision is to become Africa’s most trusted and intelligent
            digital wallet, <br /> where technology adapts to you, and payments
            happen effortlessly.
          </p>
          <p className='mt-6  inline-block text-sm text-asset'>
            Our vision is to become Africa’s most trusted and intelligent
            digital wallet,
            <br /> where technology adapts to you, and payments happen
            effortlessly.
          </p>
        </div>
        <div className='mt-10'>
          <img src={vision} alt=' Mission & Vision' className='w-84 h-48' />
        </div>
      </div>

      {/* Foundation of voxaPay */}

      <div className='mt-20'>
        <h1 className=' text-center font-semibold text-3xl '>
          The Foundation of <span className='text-primary'> VoxaPay</span>{' '}
        </h1>

        <div className='flex flex-row justify-center gap-10 mt-20'>
          {/* Shield */}
          <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
            <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
              <img src={shield} alt='Security Shield' className='w-6 h-6 ' />
            </div>

            <h1 className='  font-semibold text-lg'>Innovation</h1>
            <p className='mt-2 text-sm text-asset'>
              Bringing modern technology like voice <br />
              intelligence into everyday finance.
            </p>
          </div>

          {/* Lock */}
          <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
            <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
              <img src={shield} alt='Security ' className='w-6 h-6 ' />
            </div>

            <h1 className='  font-semibold text-lg'>Trust</h1>
            <p className='mt-2 text-sm text-asset'>
              Providing transparent and reliable financial <br /> services.
            </p>
          </div>
          {/* Lincesed */}
          <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
            <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
              <img
                src={shield}
                alt='Lincesed & Protection'
                className='w-6 h-6 '
              />
            </div>

            <h1 className='  font-semibold text-lg'>Security</h1>
            <p className='mt-2 text-sm text-asset'>
              Protecting your money and data with <br /> advanced systems.
            </p>
          </div>
        </div>
      </div>

      {/* Teams */}
      <div className='flex flex-col justify-center mt-20'>
        <h1 className='  text-center text-3xl font-semibold'>
          Meet The Team Behind VoxaPay
        </h1>
        <div className=' mt-10 flex flex-row justify-between justify-center gap-20'>
          <div className='flex flex-col justify-center items-center'>
            <div className=' flex justify-center  w-48 h-48 rounded-full bg-highlight overflow-hidden'>
              <img src={team1} alt='' className='  items-center' />
            </div>
            <div className='flex flex-col justify-center  '>
              <h1 className='  text-2xl font-semibold'>James John</h1>
              <span className='  mt-2 text-sm text-asset'>CEO & Founder</span>
              <div className='flex gap-4  mt-2 text-primary'>
                <Facebook color='#6B2BD9' size={16} />
                <Twitter color='#6B2BD9' size={16} />
                <Linkedin color='#6B2BD9' size={16} />
              </div>
            </div>
          </div>

          {/* CTO */}

          <div className='flex flex-col justify-center items-center'>
            <div className=' flex justify-center  w-48 h-48 rounded-full bg-highlight overflow-hidden'>
              <img src={team2} alt='' className='  items-center' />
            </div>
            <div className='flex flex-col justify-center  '>
              <h1 className='  text-2xl font-semibold'>Ana Mark</h1>
              <span className='  mt-2 text-sm text-asset'>
                CTO & CO Founder
              </span>
              <div className='flex gap-4  mt-2 text-primary'>
                <Facebook color='#6B2BD9' size={16} />
                <Twitter color='#6B2BD9' size={16} />

                <Linkedin color='#6B2BD9' size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Foo Footer  */}

      <div className=' mt-20 w-full bg-gradient-to-r from-[#EEE6FB] via-[#F9FAFB] to-[#F9FAFB]'>
        <div className='mx-auto max-w-7xl px-6 flex items-center justify-between h-[520px]'>
          {/* Left Content*/}
          <div className='flex flex-col gap-4'>
            <h1 className='font-semibold text-2xl leading-tight'>
              Join Voxapay Future of digital <br /> finance
            </h1>

            <p className='text-sm/6 text-asset'>
              We believe the future of payments is natural, fast, intuitive, and{' '}
              <br />
              human-centered. With Voxapay and Voxa Voice Intelligence, <br />{' '}
              we’re creating a world where technology works with you, not
              against you. <br />
              This is just the beginning. Join us as we shape the future of
              smart <br /> digital payments.
            </p>
            <div>
              <Button>Get in Touch</Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className='relative overflow-visible h-84'>
            <img
              src={mockup1}
              alt='Download mockup'
              className='relative z-16 w-full right-16'
            />
            <div className='absolute z-10 left-20  top-2 '>
              <img
                src={mockup2}
                alt='Download mockup'
                className='h-[320px] w-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
