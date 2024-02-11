import React, { useContext } from 'react'
import { mycontext } from '../App'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const nav=useNavigate()
    const {islogin,setislogin}=useContext(mycontext)
  return (
    <div>Home</div>
  )
}

export default Home