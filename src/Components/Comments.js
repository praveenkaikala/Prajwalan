import React, { useEffect, useState } from 'react'
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
const Comments = ({id,firstName,lastName}) => {
    const  [comments, setComments] =useState([]);
    const [comment,setcomment]=useState("");
    const moment = require('moment');
    console.log(id)
    useEffect(()=>{
       axios.get(`http://localhost:8082/comments/get-comments/${id}`,{
        headers: {
          'Content-Type': 'application/json', // Content-Type header
          'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
        },
      }).then((res)=>{
        if(res.status===200)
        {
            setComments(res.data)
            console.log(res.data);
        }
      }).catch((error) => {
        // Handle errors here
        console.error('Error fetching data:', error);
      });
    },[id])
    const submitComment=()=>{
        axios.post("http://localhost:8082/comments/save-comment",{
            content:comment,
            postIdeaId:id
        },{
            headers: {
              'Content-Type': 'application/json', // Content-Type header
              'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
            },
          }).then((res)=>{
            if(res.status===200)
            {
                setComments([...comments,{content:comment
            }])
            }
            setcomment("")
          }).catch((error)=>{
            console.log(error)
          })
      }
  return (
    <div className='flex mt-9 mr-8 border rounded-md shadow-lg border-grey-400  min-w-full' style={{height:"70vh"}}>
        <div className='flex flex-col w-100p items-center'>
            <div className='w-100p flex justify-center mt-5'>
             <p className='font-bold'>Comments</p>
            </div>
            <div className='w-100p flex flex-1 overflow-scroll mt-3 mb-3 flex-col items-center' style={{scrollbarWidth:"none",scrollBehavior:"smooth"}}>
           
               {comments?.map((data)=>{
                return(
                     <div className='flex w-90p border border-gray-400 rounded-md flex-col px-3 py-1 gap-1 my-2'>
                        <div>
                            <p className='font-semibold'>{data?.user?.firstName} {data?.user?.lastName}</p>
                            </div>
                            <p className=''>{data.content}</p>
                                <div>
                                <span className="text-[#66676c] font-semibold text-xs float-right">{moment(data.createdAt).format("DD-MM-YYYY   hh:mma")}</span>
                                </div>
                   
                </div>
                )
               })}
               {comments.length===0 && (
                <>
                <p className='font-semibold mt-5'>no comments yet</p>
                </>
               )}
            </div>
            <div className='flex w-90p justify-between items-center border border-grey-400 rounded-full mb-2 bg-white' style={{backgroundColor:"transparent"}}>
                <input type='text' placeholder='add comment' value={comment} className='p-2 ml-2 shadow-inner' style={{outline:"none"}} onKeyDown={(e)=>{
                    if(e.key==="Enter")
                    {
                        submitComment()
                    }
                }} onChange={(e)=>setcomment(e.target.value)}/>
                 <SendIcon className='mr-2' onClick={submitComment}/>
            </div>
        </div>
    </div>
  )
}

export default Comments