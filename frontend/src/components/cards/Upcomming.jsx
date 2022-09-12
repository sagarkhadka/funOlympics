import React from 'react'
import { upcomming } from './cardSource'

const Upcomming = () => {
  return (
    <>
      <div className="container mx-auto px-3 xl:px-0">
        <h1 className="text-3xl font-bold mb-9">Upcomming Live</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomming.map((live, index) => (
            <div key={index} className="drop-shadow-xl bg-white rounded-lg">
              <div className="myCard cursor-pointer relative">
                <div className="overflow-hidden max-h-[17rem]">
                  <img
                    className="rounded-t-lg object-cover"
                    src={live.img}
                    alt={live.game}
                  />
                </div>
                
                <div className="px-5 py-6">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div>{live.icon}</div>
                      <h5 className="text-lg text-zinc-400">{live.game}</h5>
                    </div>
                    <div className="date text-zinc-400">
                      <p className="inline-block">{live.date}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h1 className="text-2xl md:text-3xl font-bold">{live.title}</h1>
                    <p className="mt-3 text-lg md:text-2xl">{live.desc}</p>
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

export default Upcomming
