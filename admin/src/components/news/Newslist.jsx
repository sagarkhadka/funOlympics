import React from 'react'
import { newsData } from './newsSource'

const Newslist = () => {
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left">
          <thead className="text-base text-gray-700 uppercase bg-gray-100 sticky top-0 h-[50px]">
            <tr>
              <th scope="col" className="py-3 px-6">
                Heading
              </th>
              <th scope="col" className="py-3 px-6">
                Highlight
              </th>
              <th scope="col" className="py-3 px-6">
                Thumbnail
              </th>
              <th scope="col" className="py-3 px-6">
                News
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>

          {newsData.map((news, index) => (
            <tbody key={index}>
              <tr className="bg-white border-b border-gray-700">
                <th scope="row" className="py-4 px-6 font-medium w-[15rem]" >
                  {news.head}
                </th>
                <td className="py-4 px-6 w-[15rem]">
                  {news.highlight}
                </td>
                <td className="py-4 px-6">
                  <img className='' src={news.img} height='250px' width='250px' alt='' />
                </td>
                <td className="py-4 px-6">
                  {news.body}
                </td>
                <td className="py-4 px-6 flex gap-4">
                  <button className='bg-green-600 text-white px-5 py-3 text-base font-semibold transition-all duration-200 border border-transparent rounded-md hover:bg-green-800'>Edit</button>
                  <button className='bg-red-500 text-white px-5 py-3 text-base font-semibold transition-all duration-200 border border-transparent rounded-md hover:bg-red-700'>Delete</button>
                </td>
              </tr>
            </tbody>
            
          ))}
        </table>
      </div>
    </div>
  )
}

export default Newslist
