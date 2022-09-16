import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

const Signuphelp = () => {
  return (
    <div className='bg-black px-3 xl:px-0'>
      <div className='container mx-auto text-white py-[10rem] flex flex-col justify-center items-center'>
        <div className='text-center mb-8 sm:w-[70%] '>
            <h1 className='text-4xl font-bold text-white mb-5'>Personalize your fun<span className='text-blue-500'>Olympics</span> experience</h1>
            <p className='text-xl'>Stay up to date on your favourite sports and athletes. Get original Olympic news and updates. Get exclusive stories about your favourite Olympic athletes and sports into your e-mail inbox.</p>
        </div>
        <div className='sm:flex gap-5 items-center'>
            <Button label='Signup Now' />
            <Link to='login'>
              <button className='px-11 text-base font-semibold text-blue-500 transition-all duration-200 border border-transparent rounded-md bg-white focus:outline-none hover:bg-white hover:scale-[.9]'>Login</button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default Signuphelp
