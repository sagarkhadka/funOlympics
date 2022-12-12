import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
// import Button from '../Button'

const Nav = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    // <div className='z-50 px-3 xl:px-0 container mx-auto'>
    //   <div className="py-5 flex justify-between items-center border-b-2 border-zinc-300 w-full md:px-0">
    //     <div className="text-2xl md:text-3xl select-none">
    //       <Link to='/'>
    //         fun<span className='font-bold text-blue-500 cursor-pointer'>Olympics</span>
    //       </Link>
    //     </div>
    //     <div>
    //       <ul className='hidden lg:flex items-center text-xl gap-8'>
    //         <li><Link to='/'>Home</Link></li>
    //         <li>Sports</li>
    //         <li>
    //           <Link to='news'>News</Link></li>
    //         <li><Link to='login'>Live Now</Link></li>
    //         <li>
    //           <Link to='login'>
    //             <Button label='Login' />
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className="lg:hidden cursor-pointer" onClick={handleClick}>
    //       { !nav ? <CgMenuRightAlt size={35} color='#3b82f6' /> : <CgClose size={35} color='#3b82f6' /> }
    //     </div>
    //   </div>

    //   <div className=''>
    //     <ul className={ !nav ? 'hidden' : 'absolute bg-zinc-200 w-full h-[100vh] px-8 text-2xl py-8 ml-0 z-50' }>
    //       <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Home</li>
    //       <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Sports</li>
    //       <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>News</li>
    //       <li className='border-b-2 pb-3 border-zinc-300 w-full mb-8'>Live Now</li>
    //       <li>
    //           <Link to='login'>
    //             <Button label='Login' />
    //           </Link>
    //         </li>
    //     </ul>
    //   </div>
    // </div>
    
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://flowbite.com/" className="flex items-center">
        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo"> */}
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
        </li>
        <li>
          <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Nav
