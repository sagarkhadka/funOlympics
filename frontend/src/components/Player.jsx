import React from 'react'
// import './video.mkv'

const Player = () => {
  return (
    <div className='container mx-auto flex justify-center'>
      <video className='mt-5' width={1080} height={720} autoPlay controls>
        <source src="./video.mp4" />
        Video not supported
      </video>
    </div>
  )
}

export default Player
