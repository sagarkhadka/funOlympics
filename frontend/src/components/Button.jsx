import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Button = ({label}) => {
  return (
    <div>
      <button className='rounded-full text-xl uppercase font-bold px-[3rem] flex items-center gap-4 shadow-md ease-linear duration-100 hover:scale-110 outline outline-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
        {label} <span><FiArrowRight /></span>
    </button>
    </div>
  )
}

export default Button
