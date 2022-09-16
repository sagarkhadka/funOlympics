import React from 'react'
import { news } from './newsSource'

const Newscard = () => {
  return (
    <div className="container mx-auto px-3 xl:px-0">
      <h1 className="text-3xl font-bold mb-9">Recent News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.slice(0, 4).map((news, index) => (
          <div key={index} className="drop-shadow-xl bg-white rounded-lg">
            <div className="myCard cursor-pointer relative">
              <div className="overflow-hidden max-h-[16rem]">
                <img
                  className="rounded-t-lg object-cover bg-cover"
                  src={news.thumb}
                  alt='News'
                />
              </div>
                
              <div className="px-5 pb-6">
                <div className="mt-4">
                  <h1 className="text-2xl md:text-2xl font-bold">{news.title}</h1>
                  <p className="mt-3 text-lg md:text-lg">{news.desc}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Newscard
