import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import { live } from './cardSource'

const Currentlive = () => {
  return (
    <>
        <div className='container mx-auto'>
            <h1 className='text-3xl font-bold'>Currently Live</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {live.map((live, index) => (
                    <div key={index} className='drop-shadow-xl bg-white rounded-lg'>
                        <div className='myCard cursor-pointer relative'>
                            <div className='overflow-hidden max-h-[12rem]'>
                                <img className='rounded-t-lg object-cover' src={live.img} alt={live.game} />
                                <div className='absolute top-5 right-5 bg-red-500 px-4 py-1 rounded-full flex'>
                                    <p className='text-white'>25:30</p>
                                </div>
                            </div>
                            <div className='px-5 py-6'>
                                <div className='flex justify-between'>
                                    <div className='h-9 w-15 text-xl bg-red-500 flex gap-1 items-center pl-1 pr-3 rounded-lg'>
                                        <GoPrimitiveDot size={24} color='#fff' />
                                        <h5 className='text-white md:font-bold md:text-lg'>Live</h5>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <div>{live.icon}</div>
                                        <h5 className='text-lg text-zinc-400'>{live.game}</h5>
                                    </div>
                                    {/* <div className="date text-zinc-400">
                                        <p className='inline-block'>{live.date}</p>
                                    </div> */}
                                </div>
                                <div className='mt-4'>
                                    <h1 className='text-3xl font-bold'>{live.title}</h1>
                                    <p className='mt-3 text-2xl'>{live.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}

export default Currentlive
