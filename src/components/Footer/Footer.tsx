import { logo } from '../../assets/index'
import FooterColumn from './FooterColumn'
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

function Footer() {
  return (
    <footer className='bg-secondary mt-20'>
      <div className='mx-auto max-w-7xl px-6 py-16'>
        {/* Top Section */}
        <div className='grid grid-cols-1 gap-12 md:grid-cols-5'>
          {/* Left Side */}
          <div className='md:col-span-2 space-y-6'>
            {/* Logo */}
            <div className='flex items-center gap-2'>
              <img src={logo} alt='VoxaPay' className='h-6 w-auto' />
              <span className='text-lg font-semibold'>
                Voxa<span className='text-primary'>Pay</span>
              </span>
            </div>

            <p className='text-sm text-gray-600 max-w-sm'>
              Voxa is Nigeria’s first voice-powered banking experience — built
              to make everyday money moments effortless.
            </p>

            {/* Social icons */}
            <div className='flex gap-4 text-primary'>
              <Facebook color='#6B2BD9' size={28} />
              <Twitter color='#6B2BD9' size={28} />
              <Instagram color='#6B2BD9' size={28} />
              <Linkedin color='#6B2BD9' size={28} />
            </div>
          </div>

          {/* Links*/}
          <FooterColumn
            title='Company'
            links={[
              'About us',
              'How it works',
              'Legal notice',
              'Privacy Policy',
              'Terms of use',
            ]}
          />
          <FooterColumn
            title='Products / Features'
            links={[
              'Virtual cards',
              'Voice Transfers',
              'Airtime & Data Purchase',
              'Subscription & Bill Payments',
              'Merchant Business Wallet',
            ]}
          />
          <FooterColumn
            title='Resources'
            links={['Blog', 'User documentation']}
          />
          <FooterColumn
            title='Support'
            links={['FAQ', 'Become a Field Agent']}
          />
        </div>

        {/* Divider */}
        <hr className='my-10 border-gray-200' />

        {/* Bottom Section */}
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm text-gray-500'>
          <p>© 2025 Voxa. All rights reserved</p>

          <div className='flex gap-6'>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-gray-500 text-xs'>
            VoxaPay is not a bank. We operate as a Wallet-as-a-Service (WaaS)
            platform, working with licensed financial service partners who
            provide the regulated wallet and payment infrastructure. VoxaPay is
            operated by a registered brand collaborator, legally incorporated in
            Nigeria, and licensed in partnership with Providus Bank.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
