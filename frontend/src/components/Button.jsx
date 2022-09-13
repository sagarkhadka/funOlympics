import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Button = ({label}) => {
  return (
    <div>
      <button className='inline-flex items-center gap-4 justify-center w-full px-6 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-md bg-blue-500 focus:outline-none hover:opacity-80 focus:opacity-80'>
        {label} <span><FiArrowRight /></span>
      </button>
    </div>
  )
}

export default Button
