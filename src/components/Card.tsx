import { shield, lock, doc } from '../assets'

function Card() {
  return (
    <div className='flex flex-row justify-center gap-10 mt-20'>
      {/* Shield */}
      <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
        <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
          <img src={shield} alt='Security Shield' className='w-6 h-6 ' />
        </div>

        <h1 className='  font-semibold text-lg'>One Voice, One Phone</h1>
        <p className='mt-2 text-sm text-asset'>
          Your unique voice signature keeps your account secure.
        </p>
      </div>

      {/* Lock */}
      <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
        <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
          <img src={lock} alt='Security ' className='w-6 h-6 ' />
        </div>

        <h1 className='  font-semibold text-lg'>Voice PIN Security</h1>
        <p className='mt-2 text-sm text-asset'>
          Your unique voice signature keeps your account secure.
        </p>
      </div>
      {/* Lincesed */}
      <div className=' w-68 h-48 bg-white rounded-xl shadow-lg p-4'>
        <div className=' mb-2  mx-20 rounded-full bg-[#F5EFFF] w-12 h-12 flex items-center justify-center  '>
          <img src={doc} alt='Lincesed & Protection' className='w-6 h-6 ' />
        </div>

        <h1 className='  font-semibold text-lg'>Lincensed & Protected</h1>
        <p className='mt-2 text-sm text-asset'>
          Your unique voice signature keeps your account secure.
        </p>
      </div>
    </div>
  )
}

export default Card
