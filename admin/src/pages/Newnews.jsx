import React from 'react'
import Addnew from '../components/news/Addnew'
import Topbar from '../components/Topbar'

const Newnews = () => {
  return (
    <div>
      <Topbar pageTitle={`Add New News`} />
      <Addnew />
    </div>
  )
}

export default Newnews
