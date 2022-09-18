import React from 'react'
import vid from './video.mp4'

const Player = () => {
  return (
    <div className='container mx-auto flex justify-center px-3 xl:px-0'>
      <video className='mt-5 aspect-video' autoPlay controls>
        <source src={vid} />
        Video not supported
      </video>
    </div>
  )
}

export default Player
