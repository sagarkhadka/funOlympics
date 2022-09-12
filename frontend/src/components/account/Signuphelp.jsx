import React from 'react'
import Button from '../Button'

const Signuphelp = () => {
  return (
    <div className='bg-black px-3 xl:px-0'>
      <div className='container mx-auto text-white py-[10rem] flex flex-col justify-center items-center'>
        <div className='text-center mb-8 sm:w-[70%] '>
            <h1 className='text-4xl font-bold text-white mb-5'>Personalize your fun<span className='text-blue-500'>Olympics</span> experience</h1>
            <p className='text-xl'>Stay up to date on your favourite sports and athletes. Get original Olympic news and updates. Get exclusive stories about your favourite Olympic athletes and sports into your e-mail inbox.</p>
        </div>
        <div className='sm:flex gap-10 items-center'>
            <Button label='Signup Now' />
            <button className='text-2xl rounded-full uppercase font-bold px-[4rem] outline outline-blue-500 bg-transparent ease-linear duration-100 hover:scale-110 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Signuphelp
