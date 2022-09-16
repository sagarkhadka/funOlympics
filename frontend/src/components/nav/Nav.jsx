import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import Button from '../Button'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='z-50 px-3 xl:px-0 container mx-auto'>
      <div className="py-5 flex justify-between items-center border-b-2 border-zinc-300 w-full sm:px-[5rem] md:px-0">
        <div className="text-2xl md:text-3xl select-none">
          <Link to='/'>
            fun<span className='font-bold text-blue-500 cursor-pointer'>Olympics</span>
          </Link>
        </div>
        <div>
          <ul className='hidden lg:flex items-center text-xl gap-8'>
            <li><Link to='/'>Home</Link></li>
            <li>Sports</li>
            <li>News</li>
            <li><Link to='login'>Live Now</Link></li>
            <li>
              <Link to='login'>
                <Button label='Login' />
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:hidden cursor-pointer" onClick={handleClick}>
          { !nav ? <CgMenuRightAlt size={35} color='#3b82f6' /> : <CgClose size={35} color='#3b82f6' /> }
        </div>
      </div>

      <div className=''>
        <ul className={ !nav ? 'hidden' : 'absolute bg-zinc-200 w-full h-[100vh] px-8 text-2xl py-8 ml-0 z-50' }>
          <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Home</li>
          <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Sports</li>
          <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>News</li>
          <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Live Now</li>
          <li>
              <Link to='login'>
                <Button label='Login' />
              </Link>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Nav
