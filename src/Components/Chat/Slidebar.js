import React from 'react'
import { useNavigate } from 'react-router-dom'

const Slidebar = () => {
    const nav=useNavigate()
  return (
    <div className='slidebar'>Slidebar
        <button onClick={()=>{nav("chat")}}>click</button>
    </div>
  )
}

export default Slidebar