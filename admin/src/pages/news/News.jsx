import React from 'react'
import { Link } from 'react-router-dom'
import Newslist from '../../components/news/Newslist'
import Topbar from '../../components/Topbar'
// import Newnews from '../Newnews'

const News = () => {
  return (
    <div>
      <Topbar pageTitle={`News`} />
      <span>
        <div className='my-5'>
          <Link to='createnew'>
            <button className='bg-gray-400 text-white px-5 py-3 text-base font-semibold transition-all duration-200 border border-transparent rounded-md hover:bg-gray-800'>Add New News</button>
          </Link>
        </div>
      </span>
      <Newslist />
      {/* <Newnews /> */}
    </div>
  )
}

export default News
