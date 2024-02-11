import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location=useLocation()
  return (
    <div className='flex justify-around m-5 border-b border-grey-400 min-w-16' >
        <div className='m-2 ' >
           <p className='font-bold text-green-500'>EDUCONNECT</p>
        </div>
        <div className=' justify-between flex w-50p'>
            
           <li className={location.pathname === "/" ? "list-none font-semibold active" : "list-none font-semibold"}><Link to={"/"} >Home</Link></li>
           <li className={location.pathname === "/ideas" ? "list-none font-semibold active" : "list-none font-semibold"}><Link to={"/ideas"}>Idea</Link></li>
           <li className={location.pathname === "/mychats/welcome" || location.pathname==="/mychats/chat"? "list-none font-semibold active" : "list-none font-semibold"}><Link to={"/mychats/welcome"}>Chats</Link></li>
           <li className={location.pathname === "/myprofile" ? "list-none font-semibold active" : "list-none font-semibold"}><Link to={"/myprofile"}>Profile</Link></li>
        </div>
    </div>
  )
}

export default Navbar