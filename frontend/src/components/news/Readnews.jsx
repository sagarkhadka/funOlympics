import React from 'react'
import { news } from './newsSource'

const Readnews = () => {
  return (
    <div className='px-3 xl:px-0'>
      <div className="container mx-auto">
        {news.slice(0, 1).map((news, i) => (
            <div key={i}>
                <div className="title pr-[25px] md:pr-[20%] lg:pr-[30%] mt-5 mb-5 md:mb-11">
                    <h1 className='text-3xl md:text-4xl lg:text-6xl w-full font-semibold mb-5 md:mb-11'>{news.title}</h1>
                    <h3 className='text-2xl lg:text-3xl text-gray-400'>{news.sub}</h3>
                </div>
                <div className="object-cover">
                  <img
                      className="object-cover bg-cover max-h-[500px] w-full"
                      src={news.thumb}
                      alt='News'
                  />
                </div>
                <div className='block md:flex gap-0 lg:gap-11 mt-5 md:mt-11'>
                    <div className='hidden md:block lg:w-[11rem]'></div>
                    <p className='w-full lg:w-[70%] md:w-full text-lg md:text-xl leading-loose'>{news.news}</p>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Readnews
