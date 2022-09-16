import React from 'react'
import Signuphelp from '../components/account/Signuphelp'
import Currentlive from '../components/cards/Currentlive'
import Previous from '../components/cards/Previous'
import Upcomming from '../components/cards/Upcomming'
import Newscard from '../components/news/Newscard'

const Home = () => {
  return (
    <>
      <head>
        <title>funOlympics</title>
      </head>
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

        <div>
          <Signuphelp />
        </div>

        <div className='my-11'>
          <Newscard />
        </div>
      </div>
    </>
  )
}

export default Home
