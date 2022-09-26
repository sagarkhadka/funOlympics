import React from 'react'

const Newslist = () => {
  return (
    <div>
      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left">
          <thead className="text-base text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="py-3 px-6">
                Heading
              </th>
              <th scope="col" className="py-3 px-6">
                Highlight
              </th>
              <th scope="col" className="py-3 px-6">
                News
              </th>
              <th scope="col" className="py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium"
              >
                Apple MacBook Pro 17"
              </th>
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
              <td className="py-4 px-6">$2999</td>
            </tr>
            <tr className="bg-white border-b border-gray-700">
              <th
                scope="row"
                className="py-4 px-6 font-medium"
              >
                Microsoft Surface Pro
              </th>
              <td className="py-4 px-6">White</td>
              <td className="py-4 px-6">Laptop PC</td>
              <td className="py-4 px-6">$1999</td>
            </tr>
            <tr className="bg-white">
              <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
              >
                Magic Mouse 2
              </th>
              <td className="py-4 px-6">Black</td>
              <td className="py-4 px-6">Accessories</td>
              <td className="py-4 px-6">$99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Newslist
