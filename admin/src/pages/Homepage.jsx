import React from 'react'
import { Link } from 'react-router-dom'
import Topbar from '../components/Topbar'

const Homepage = () => {
  return (
    <div>
      <Topbar pageTitle='Dashboard' />
      <Link to='news'>News</Link>
    </div>
  )
}

export default Homepage
