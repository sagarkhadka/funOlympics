import React from 'react'

const Addnew = () => {
  return (
    <div>
        <div className="mb-6">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300">Heading</label>
            <input type="email" name="" id="" placeholder="News Headline" className="block w-full py-3 px-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
        </div>
        <div className="mb-6">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300">Highlight</label>
            <input type="email" name="" id="" placeholder="News Highlight" className="block w-full py-3 px-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" />
        </div>
        
        <div className="flex justify-center flex-col w-full mb-6">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300">Cover Photo</label>
            <label for="dropzone-file" className="bg-gray-50 flex flex-col justify-center items-center w-full h-64 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-bray-800">
                <div className="flex flex-col justify-center items-center pt-5 pb-6">
                    <svg aria-hidden="true" className="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
            </label>
        </div>

        <div className='mb-6'>
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-blue-300">News Body</label>
            <textarea id="message" rows="4" class="block w-full py-3 px-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600" placeholder="News"></textarea>
        </div>
        <button className='bg-blue-500 text-white px-5 py-3 text-base font-semibold transition-all duration-200 border border-transparent rounded-md hover:bg-blue-800'>Publish</button>
    </div>
  )
}

export default Addnew
