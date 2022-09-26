import React from 'react'
import { MdOutlineDashboardCustomize, MdLiveTv, MdOutlinePersonOutline } from 'react-icons/md'
import { RiNewspaperLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 sticky h-full" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 h-[100vh] bg-blue-500 top-0 sticky pr-[3rem]">
          <h1 className='mt-5 mb-11 text-3xl font-extrabold text-white'>fun<span className="text-blue-800">Olympics</span></h1>
          <ul className="space-y-5">
            <li className='cursor-pointer'>
              <Link to='/'>
                <span
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
                >
                    <MdOutlineDashboardCustomize size={24} />
                    <span className="ml-3">Dashboard</span>
                </span>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link to='news'>
                <span
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
                >
                  <RiNewspaperLine size={24} />
                  <span className="flex-1 ml-3 whitespace-nowrap">News</span>
                  {/* <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    Pro
                  </span> */}
                </span>
              </Link>
            </li>
            <li className='cursor-pointer'>
              <span
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
              >
                <MdLiveTv size={24} />
                <span className="flex-1 ml-3 whitespace-nowrap">Videos</span>
                {/* <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                  3
                </span> */}
              </span>
            </li>
            <li className='cursor-pointer'>
              <span
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
              >
                <MdOutlinePersonOutline size={24} />
                <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
              </span>
            </li>
            <li className='cursor-pointer'>
              <span
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Products</span>
              </span>
            </li>
            <li className='cursor-pointer'>
              <span
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span>
              </span>
            </li>
            <li className='cursor-pointer'>
              <span
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-blue-800"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
