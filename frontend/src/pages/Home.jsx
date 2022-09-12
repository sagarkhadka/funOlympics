import React from 'react'
import Currentlive from '../components/cards/Currentlive'
import Previous from '../components/cards/Previous'
import Upcomming from '../components/cards/Upcomming'

const Home = () => {
  return (
    <div className='mx-auto mt-6'>
      <div className='mt-9'>
        <Currentlive />
      </div>
      
      <div className='mt-[50px] md:mt-[70px]'>
        <Upcomming />
      </div>
      
      <div className='mt-[50px] md:mt-[70px]'>
        <Previous />
      </div>
    </div>
  )
}

export default Home
