import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black w-full py-11 mt-10'>
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <h1 className='text-white text-3xl'>funOlympics</h1>
          </div>
          <div>
            <h1 className='text-white text-xl mb-3'>About</h1>
            <ul className='text-gray-100'>
              <li className='mb-2'>hi</li>
              <li className='mb-2'>hello</li>
              <li className='mb-2'>front</li>
            </ul>
          </div>
          <div>
            <h1 className='text-white text-xl mb-3'>Games</h1>
            <ul className='text-gray-100'>
              <li className='mb-2'>kfj</li>
              <li className='mb-2'>kdjfkd</li>
              <li className='mb-2'>kdjfd</li>
              <li className='mb-2'>ieuri</li>
            </ul>
          </div>
          <div>
            <h1 className='text-white text-xl mb-3'>News</h1>
            <ul className='text-gray-100'>
              <li className='mb-2'>iihg</li>
              <li className='mb-2'>nvf</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Footer
