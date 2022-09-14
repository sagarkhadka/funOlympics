import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full py-11 mt-10'>
      <div className="container mx-auto flex justify-between">
        <div>
          <h1 className='text-white text-4xl'>fun<span className='text-blue-500'>Olympics</span></h1>
        </div>
        
        <div>
          <h1 className='text-lg text-gray-400 mb-4 cursor-pointer'>About</h1>
          <div>
            <ul>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h1 className='text-lg text-gray-400 mb-4 cursor-pointer'>Games</h1>
          <div>
            <ul>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h1 className='text-lg text-gray-400 mb-4 cursor-pointer'>News</h1>
          <div>
            <ul>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
              <li className='text-lg text-gray-400 cursor hover:text-white'>Hello</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className='bg-gray-500 my-10' />
      <div>
        <p className='text-gray-600 text-center'>Designed and Developed by Sagar Khadka.</p>
      </div>
    </div>
  )
}

export default Footer
