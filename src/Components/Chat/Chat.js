import React, { useState } from 'react'
import image from '../../Asserts/image.png'
import DeleteIcon from '@mui/icons-material/Delete';
import { useParams } from 'react-router-dom';
import SendIcon from '@mui/icons-material/Send';
const Chat = () => {
    const {_id}=useParams()
   const [id,name]=_id.split("&")
   const [chat,setchat]=useState()
  return (
    <div className='flex  h-87v chat cursor-pointer' style={{width:"100%"}}>
         <div className=' flex flex-col m-5 border border-grey-400 rounded w-100p items-center' >
            <div className='flex border border-gray-400 w-100p items-center justify-between'>
                <div className='flex items-center'>
                      <div className='rounded-10  m-3'>
                    <img src={image} alt='photo' className='rounded-full w-30'/>
                </div>
                <p className='font-semibold'>
                    {name}
                </p>
                </div>
               <DeleteIcon className=' mr' style={{marginRight:"10px",cursor:"pointer"}}/>
            </div>
            <div className='flex w-100p justify-center' style={{flex:1}}>
                <div className='w-100p border border-grey-400'>
s
                </div>

            </div>
            <div className='w-100p flex items-center justify-center m-3'>
                <div className='flex w-90p border border-gray-400 items-center justify-between' style={{height:'35px',borderRadius:"50px"}}>
                     <input type='text' style={{width:'85%',outline:'none',margin:"5px"}}/>
                     <SendIcon style={{marginRight:"10px"}}/>
                </div>
              
            </div>

         </div>
    </div>
  )
}

export default Chat