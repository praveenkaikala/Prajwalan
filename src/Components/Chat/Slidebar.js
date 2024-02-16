import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import image from "../../Asserts/image.png";
import axios from "axios";

const Slidebar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const nav = useNavigate();
  const [data, setdata] = useState([]);
  const filteredData = data.filter((chat) =>
  chat.userName.toLowerCase().includes(searchQuery.toLowerCase())
);
useEffect(()=>{
  axios.get("http://localhost:8082/getchats",{
    headers: {
      'Content-Type': 'application/json', // Content-Type header
      'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
    },
  }).then((res)=>{
    if(res.status===200)
    {
      setdata(res.data)
    }
  }).catch((err)=>{
    console.log(err)
  })
},[])
const handleSearchChange = (e) => {
  setSearchQuery(e.target.value);
};
  return (
    <div
      className="flex  h-95v slidebar bg-[#f0f0f0] shadow-2xl"
      style={{ width: "100%", minWidth: "300px" }}
    >
      <div className=" flex flex-col m-5 border border-grey-400 rounded w-100p items-center bg-white">
        <div
          className="m-5 flex justify-center border border-black bg-white"
          style={{
            width: "90%",
           
            borderRadius: "50px",
            borderColor: "1px solid black",
          }}
        >
          <input
            type="input "
            placeholder="search for chat"
            className="w-80p  py-3 px-3"
            style={{ outline: "none" }}
            onChange={handleSearchChange}
          />
          <SearchOutlinedIcon className="my-3"/>
        </div>
        <div
          className="w-100p overflow-auto"
          style={{ scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          {filteredData.map((chat, index) => {
            const Chatchange = () => {
              nav("chat/" + chat.id + "&" + chat.firstName+chat.lastName);
            };
            return (
              <div
                className="flex border-b mb-1 border-gray-400 items-center chatname"
                key={index}
                style={{
                  width: "100%",
                  height: "50px",
                  cursor: "pointer",
                }}
                onClick={Chatchange}
              >
                <div>
                  <p className="ml-2 font-semibold">{chat?.firstName}{chat?.lastName}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slidebar;
