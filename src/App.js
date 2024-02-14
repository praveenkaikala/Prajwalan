import React, { createContext, useEffect, useState } from 'react'
import Login from './Components/Login'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Ideas from './Components/Ideas'
import Profile from './Components/Profile'
import Chat from './Components/Chat/Chat'
import Slidebar from './Components/Chat/Slidebar'
import Mychats from './Components/Mychats'
import './index.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Welcome from './Components/Chat/Welcome'
import AddIdea from './Components/AddIdea'
export const mycontext = createContext()
const App = () => {
  const [loading,setloding]=useState(true)
  const [islogin,setislogin]=useState(false)
  useEffect(() => {
    const storedIsLogin = localStorage.getItem('isLogin');
    if (storedIsLogin) {
      setislogin(JSON.parse(storedIsLogin));
    }
    setloding(false)
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while retrieving login state
  }
  return (
    <div className='m-0'>
      <mycontext.Provider value={{
        islogin:islogin,
        setislogin:setislogin,
      }}>
      {islogin ? (
        <BrowserRouter>
      <Navbar/>
         <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='ideas' element={<Ideas/>}/>
        <Route path='mychats' element={<Mychats/>}>
        <Route path='welcome' element={<Welcome/>}/>
        <Route path='chat/:_id' element={<Chat/>}/>
        </Route>
        <Route path='myprofile' element={<Profile/>}/>
      </Routes>
      </BrowserRouter>
      ):<Login/>}
        
      
      </mycontext.Provider>
      
     
    </div>
  )
}

export default App
