import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import image from "../../Asserts/image.png"

const Slidebar = () => {
    const nav=useNavigate()
    const [data,setdata]=useState([{
        "id": 1,
        "username": "Has"
      }, {
        "id": 2,
        "username": "Margi"
      }, {
        "id": 3,
        "username": "Dulcie"
      }, {
        "id": 4,
        "username": "Glenda"
      }, {
        "id": 5,
        "username": "Marietta"
      }, {
        "id": 6,
        "username": "Harwell"
      }, {
        "id": 7,
        "username": "Martelle"
      }, {
        "id": 8,
        "username": "Cordelie"
      }, {
        "id": 9,
        "username": "Lona"
      }, {
        "id": 10,
        "username": "Charissa"
      }])
  return (
    <div className='flex  h-87v slidebar' style={{width:"100%",minWidth:"300px"}}>
    <div className=' flex flex-col m-5 border border-grey-400 rounded w-100p items-center' >
    <div className='m-5 flex justify-center border border-black' style={{width:"90%",height:"30px",borderRadius:"50px",borderColor:"1px solid black"}}>
       <input type='input ' placeholder='search for chat' className='w-80p' style={{outline:"none"}}/>
       <SearchOutlinedIcon/>
    </div>  
    <div className='w-100p overflow-auto' style={{scrollbarWidth:'none',scrollBehavior:"smooth"}}>
        {data.map((chat,index)=>{
            const Chatchange=()=>{
                nav('chat/'+chat.id+'&'+chat.username)
            }
            return(
                <div className='flex border mb-1 border-gray-400 items-center chatname' key={index} style={{width:"100%",height:"50px",cursor:'pointer',borderRadius:"50px"}} onClick={Chatchange}>
                     <div className='rounded-10'>
                    <img src={image} alt='photo' className='rounded-full ml-2' style={{width:"30px",height:"30px"}}/>
                </div>
                <div>
                    <p className='ml-2'>{chat.username}</p>
                </div>
                    </div>
            )
        })}
    </div>     
</div>
</div>
  )
}

export default Slidebar