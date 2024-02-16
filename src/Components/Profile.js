import React, { useEffect, useState } from "react";
import image from "../Asserts/image.png";
import AddIdea from "./AddIdea";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Rating } from "@mui/material";
import Modal from "./Modal"
import EditIdea from "./EditIdea";
import axios from "axios";
const Profile = () => {
  const [addidea, setaddidea] = useState(false);
  const [editIdea,setEditIdea]=useState(false)
  // http://localhost:8082/get-all-posts
  const [userdata, setuserdata] = useState([]);
  const [openModal,setOpenModal]=useState(false)
  const [liked, setliked] = useState(Array(userdata.length).fill(false));
  const [deleteId,setDeleteId] = useState();
  const handlelikes = (index) => {
    let likes = [...liked];
    likes[index] = !likes[index];
    setliked(likes);
  };

  const handleOnClose = () => {
    setOpenModal(false);
  };
  useEffect(()=>{
    axios.get("http://localhost:8082/get-posts",{
      headers: {
        'Content-Type': 'application/json', // Content-Type header
        'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
      },
    }).then((res)=>{
      if(res.status===200)
      {
        console.log(res.data)
        setuserdata(res.data)
      }
    }).catch((err)=>{
      console.log(err)
    })
  },[openModal])
const [selectedIdea,setSelectedIdea]=useState({

})
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8082/delete-post/${deleteId}`, {
        headers: {
          Authorization: 'Bearer '+sessionStorage.getItem("token"),
        },
      });
      setOpenModal(false);

      // setResponse(response.data);
    } catch (error) {
      console.error('Error deleting resource:', error);
      // setResponse('Error deleting resource');
    }
  };
  return (
    <div>
      {editIdea ? (
        <EditIdea setEditIdea={setEditIdea} id={selectedIdea.id} content={selectedIdea.content}/>
      ):(
        <div
      className="flex w-100p justify-center overflow-scroll"
      style={{ height: "100%", overflow: "scroll", scrollbarWidth: "none" }}
    >
      {addidea ? (
        <AddIdea addidea={addidea} setaddidea={setaddidea} />
      ) : (
        <div className="flex flex-col w-90p border border-grey-400">
          <div className="flex">
            {/* <div className="m-5">
              <img
                src={image}
                alt="photo"
                style={{ borderRadius: "50%", width: "200px", height: "200px" }}
              />
            </div> */}
            <div className="m-5 flex flex-col justify-center">
              {/* <div className="flex mt-1">
                <span>UserName:</span>
                <p className="font-semibold ml-2">{userdata[0].userDto}</p>
              </div> */}
              <div className="flex mt-1">
                <span>Name:</span>
                <p className="font-semibold ml-2">{userdata[0]?.userDto?.firstName} {userdata[0]?.userDto?.lastName}</p>
              </div>
              <div className="flex mt-1">
                <span>Gmail:</span>
                <p className="font-semibold ml-2">{userdata[0]?.userDto?.userName}</p>
              </div>
              {/* <div className="flex mt-1">
                <span>Bio:</span>
                <p className="font-semibold ml-2">{userdata.bio}</p>
              </div> */}
            </div>
          </div>
          <div className="flex flex-col justify-center w-100p items-center mt-3">
            <p className="font-bold">my ideas</p>
            {userdata?.map((data, index) => {
              return (
                <div
                  className="flex flex-col border border-grey-100 w-50p m-4"
                  key={index}
                >
                  {/* <div className="flex m-5">
                    <div className="rounded-10">
                      <img
                        src={image}
                        alt="photo"
                        className="rounded-full w-30"
                      />
                    </div>
                    <div>
                      <p className="ml-2">{data.username}</p>
                    </div>
                  </div> */}
                  <div className="flex flex-row ml-5">
                    <p className="p-2">{data.content}</p>
                  </div>
                  <div className="flex justify-around h-10p items-center mt-2">
                  <div
                        className="cursor-pointer flex flex-col items-center"
                        onClick={(e) => {
                          e.preventDefault();
                          handlelikes(index)
                          if(!liked[index])
                          {
                            data.rating++
                          }
                          else{
                            data.rating--
                          }
                          
                        }}
                      >
                       {liked[index]?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon/>}
                        <p>{data.likeCount}</p>
                      </div>
                      <Button variant="text" onClick={()=>{
                        setEditIdea(true)
                        setSelectedIdea({
                          id:data.Id,
                          content:data.content
                        })
                      }} >Edit Idea</Button>
                    <Button variant="text" onClick={()=>{
                      setOpenModal(true)
                      setDeleteId(data.id);
                      }} >Delete Idea</Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="relative h-screen flex justify-center items-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md fixed bottom-0 right-0 mb-4 mr-20"
              onClick={() => {
                setaddidea(true);
              }}
            >
              add idea
            </button>
          </div>
        </div>
      )}
      {
openModal && (
  <Modal isOpen={openModal} onClose={handleOnClose}>
  <h2 className="text-center font-bold">Are you sure you want to delete?</h2>
  <div className="flex justify-center mt-4">
    <button className="mr-4 bg-red-500 text-white px-4 py-2 rounded" onClick={handleDelete}>
      Delete
    </button>
    <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={handleOnClose}>
      Cancel
    </button>
  </div>
</Modal>

)
      }
    </div>
      )}
    </div>
   
  );
};

export default Profile;
