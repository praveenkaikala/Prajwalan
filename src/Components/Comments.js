import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const Comments = () => {
  return (
    <div className='flex mt-9 mr-8 border border-grey-400  w-100p' style={{height:"70vh"}}>
        <div className='flex flex-col w-100p items-center'>
            <div className='w-100p flex justify-center mt-5'>
             <p className='font-bold'>Comments</p>
            </div>
            <div className='w-100p flex flex-1 overflow-scroll mt-3 mb-3 flex-col items-center' style={{scrollbarWidth:"none",scrollBehavior:"smooth"}}>
            <div className='flex w-90p m-2 border border-gray-400 rounded-full'>
                    <p className='p-3'>hello man fodfl klfldkv lfkslk kfklkl kefklk kleklekfl</p>
                </div>
                <div className='flex w-90p m-2 border border-gray-400 rounded-full'>
                    <p className='p-3'>hello man fodfl klfldkv lfkslk kfklkl kefklk kleklekfl</p>
                </div>
                <div className='flex w-90p m-2 border border-gray-400 rounded-full'>
                    <p className='p-3'>hello man fodfl klfldkv lfkslk kfklkl kefklk kleklekfl</p>
                </div>
                <div className='flex w-90p m-2 border border-gray-400 rounded-full'>
                    <p className='p-3'>hello man fodfl klfldkv lfkslk kfklkl kefklk kleklekfl</p>
                </div>
                <div className='flex w-90p m-2 border border-gray-400 rounded-full'>
                    <p className='p-3'>hello man fodfl klfldkv lfkslk kfklkl kefklk kleklekfl</p>
                </div>
            </div>
            <div className='flex w-90p justify-between items-center border border-grey-400 rounded-full mb-2 bg-white' style={{backgroundColor:"transparent"}}>
                <input type='text' placeholder='add comment' className='p-2 ml-2' style={{outline:"none"}} onKeyDown={(e)=>{
                    if(e.key==="Enter")
                    {
                        console.log("hello")
                    }
                }}/>
                 <SendIcon className='mr-2'/>
            </div>
        </div>
    </div>
  )
}

export default Comments