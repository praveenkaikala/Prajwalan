import React from 'react'
import Slidebar from './Chat/Slidebar'
import Welcome from './Chat/Welcome'
import Chat from './Chat/Chat'
import { Outlet } from 'react-router-dom'

const Mychats = () => {
  return (
    <div className='flex'>
      <Slidebar/>
      <Outlet/>
    </div>
  )
}

export default Mychats