import React, { useEffect, useRef, useState } from "react";
import image from "../../Asserts/image.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import axios from "axios";
const moment = require('moment');

const Chat = () => {
  const { _id } = useParams();
  const [id,firstName,lastName] = _id.split("&");
  const [chatData,setChatData] = useState([]);
  const [message,setmessage]=useState("");
  console.log(id,sessionStorage.getItem("id"));
  const getMessages = () =>{
    axios.get(`http://localhost:8082/chats/${sessionStorage.getItem("id")}/${id}`,{
      headers: {
        'Content-Type': 'application/json', // Content-Type header
        'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
      },
    }).then((res)=>{
      if(res.status===200)
      {
        setChatData(res.data);
        
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    getMessages();
  },[id])
  // http://localhost:8082/getchats
 
  const [chat, setchat] = useState([]);
  const sendMessage=()=>{
    axios.post("http://localhost:8082/chats/save-chat",{
      senderId:parseInt(sessionStorage.getItem("id")),
      receiverId:parseInt(id),
      message:message
    },{
      headers: {
        'Content-Type': 'application/json', // Content-Type header
        'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
      },
    }).then((res)=>{
      if(res.status===200)
      {
        console.log(res.data)
      }
    }).catch(()=>{
      console.log("first")
    })
  }
  const ref=useRef()
  useEffect(()=>{
    if(chat.length>0)
    {
      ref.current?.scrollIntoView({
        block:"end"
      })
    }
  })
  return (
    <div className="flex  h-87v chat cursor-pointer" style={{ width: "100%" }}>
      <div className=" flex flex-col m-5 border border-grey-400 rounded w-100p items-center">
        <div className="flex border border-gray-400 w-100p items-center justify-between">
          <div className="flex items-center">
            {/* <div className="rounded-10  m-3">
              <img src={image} alt="photo" className="rounded-full w-30" />
            </div> */}
            <p className="font-semibold p-2">{firstName} {lastName}</p>
          </div>
          <DeleteIcon
            className=" mr"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </div>
        <div
          className="flex w-100p border border-grey-400 justify-center overflow-scroll" ref={ref}
          style={{ flex: 1, scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          <div className="w-100p ">
            <div className="flex justify-start ">
              <div
                className="m-2 bg-gray-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                
              </div>
            </div>
            
                {
                    chatData?.map((val)=>{
                      if(val?.senderId===parseInt(sessionStorage.getItem("id")))
                      {
                        return (
                           <div className="flex justify-end">
                      <div
                        className="m-2 bg-green-300 rounded"
                        style={{ maxWidth: "50%" }}
                      >
                                  <p className="px-3">{val?.message}</p>
                                  <span className="text-[#66676c] font-semibold text-xs float-right pl-6 pr-2">{moment(val.createdAt).format("hh:mma")}</span>
                       <div ref={ref} />
                                  </div>
                                  
                    </div>
                        )
                      }
                      else{
                        return(
                       
                          <div className="flex justify-start">
                          <div
                            className="m-2 bg-green-300 rounded"
                            style={{ maxWidth: "50%" }}
                          >
                                      <p className="px-3 py-0.5">{val?.message}</p>
                                      <span className="text-[#66676c] font-semibold text-xs float-right pl-6 pr-2">{moment(val.createdAt).format("hh:mma")}</span>
                       
                                      <div ref={ref} />
                                      </div>
                                      
                        </div>
                          )
                      }
                     
                     
                      
                    })
                }
              
          </div>
        </div>
        <div className="w-100p flex items-center justify-center m-3">
          <div
            className="flex w-90p border border-gray-400 items-center justify-between"
            style={{ height: "35px", borderRadius: "50px" }}
          >
            <input
              type="text"
              value={message}
              style={{ width: "85%", outline: "none", margin: "5px" }}
              onChange={(e)=>{
                setmessage(e.target.value)
              }}
              onKeyDown={(e)=>{
                if(e.key==="Enter")
                {
                 sendMessage()
                 setChatData([...chatData,{message:message,senderId:parseInt(sessionStorage.getItem("id"))}]);
                 setmessage("");

                }
              }}
            />
            <SendIcon style={{ marginRight: "10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
