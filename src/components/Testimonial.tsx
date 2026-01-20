function Testimonial() {
  return (
    <div className='flex flex-row gap-6 justify-center gap-4 mt-20 mb-10'>
      {/* Testimonial slider 1  */}
      <div className='relative  w-[420px]'>
        <div className='absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gray-100'></div>

        <div className='relative z-10 rounded-2xl bg-white p-6 shadow-sm'>
          {/* Header */}
          <div className='flex items-start justify-between'>
            <div>
              <h4 className='font-semibold text-lg'>John Michael</h4>

              {/* Stars */}
              <div className='mt-1 flex gap-1 text-yellow-500'>★ ★ ★ ★ ★</div>
            </div>

            <button className='text-gray-400 hover:text-gray-600'>✕</button>
          </div>

          {/* Testimonial text */}
          <p className='mt-4 text-sm leading-relaxed text-gray-600'>
            Voxa makes banking feel effortless. Using my voice to check balances
            and transfer funds is fast, secure, and surprisingly accurate.
          </p>
        </div>
      </div>

      {/* Testimonial slider 2  */}
      <div className='relative  w-[420px]'>
        <div className='absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gray-100'></div>

        <div className='relative z-10 rounded-2xl bg-white p-6 shadow-sm'>
          {/* Header */}
          <div className='flex items-start justify-between'>
            <div>
              <h4 className='font-semibold text-lg'>Amina Daniel</h4>

              {/* Stars */}
              <div className='mt-1 flex gap-1 text-yellow-500'>★ ★ ★ ★ ★</div>
            </div>

            <button className='text-gray-400 hover:text-gray-600'>✕</button>
          </div>

          {/* Testimonial text */}
          <p className='mt-4 text-sm leading-relaxed text-gray-600'>
            The voice feature is a game-changer. I can manage my finances
            hands-free without navigating complex screens.
          </p>
        </div>
      </div>

      {/* Testimonial slider 3 */}
      <div className='relative  w-[420px]'>
        <div className='absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gray-100'></div>

        <div className='relative z-10 rounded-2xl bg-white p-6 shadow-sm'>
          {/* Header */}
          <div className='flex items-start justify-between'>
            <div>
              <h4 className='font-semibold text-lg'>Kelechi Mark</h4>

              {/* Stars */}
              <div className='mt-1 flex gap-1 text-yellow-500'>★ ★ ★ ★ ★</div>
            </div>

            <button className='text-gray-400 hover:text-gray-600'>✕</button>
          </div>

          {/* Testimonial text */}
          <p className='mt-4 text-sm leading-relaxed text-gray-600'>
            The voice feature is a game-changer. I can manage my finances
            hands-free without navigating complex screens.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
