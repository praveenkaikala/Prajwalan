import React, { useEffect, useState } from "react";
import image from "../Asserts/image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css";
import { Button, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIdea from "./AddIdea";
import UserProfile from "./UserProfile";
import { useNavigate } from "react-router-dom";
import Comments from "./Comments";
import axios from "axios";
const Ideas = () => {
  const nav=useNavigate()
  const [commentsBtn,setCommentsBtn]=useState(false)
  const [profile, setProfile] = useState(false);
  const [selectedId, setSelectedId] = useState({
    id: "", 
    userName: "",
    firstName: "",
    lastName:"",
    email: "",
  });
  const [addidea, setaddidea] = useState(false);
 
  
  const [posts, setPosts] = useState([
    {
        "id": 5,
        "content": "This post is good Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ip",
        "category": null,
        "rating": 0,
        "userDto": {
            "id": 3,
            "userName": "kaikalapraveen24@gmail.com",
            "firstName": "Praveen",
            "lastName": "Kaikala",
            "email": "kaikalapraveen24@gmail.com"
        }
    },
    {
        "id": 4,
        "content": "Hello",
        "category": null,
        "rating": 0,
        "userDto": {
            "id": 4,
            "userName": "karthikarava1802@gmail.com",
            "firstName": "Karthik",
            "lastName": "Arava",
            "email": "karthikarava1802@gmail.com"
        }
    },
    {
        "id": 3,
        "content": "Srkr engineering college",
        "category": null,
        "rating": 0,
        "userDto": {
            "id": 4,
            "userName": "karthikarava1802@gmail.com",
            "firstName": "Karthik",
            "lastName": "Arava",
            "email": "karthikarava1802@gmail.com"
        }
    },
    {
        "id": 2,
        "content": "Srkr engineering college",
        "category": null,
        "rating": 0,
        "userDto": {
            "id": 2,
            "userName": "jp7903424@gmail.com",
            "firstName": "Balireddy",
            "lastName": "John Prakash",
            "email": "jp7903424@gmail.com"
        }
    },
    {
        "id": 1,
        "content": "This Post May Contain Best Algorithms lorem",
        "category": "WEB_DEV",
        "rating": 0,
        "userDto": {
            "id": 2,
            "userName": "jp7903424@gmail.com",
            "firstName": "Balireddy",
            "lastName": "John Prakash",
            "email": "jp7903424@gmail.com"
        }
    }
]);
  const [liked, setliked] = useState(Array(posts.length).fill(false));
  console.log(liked);
  const handlelikes = (index) => {
    let likes = [...liked];
    likes[index] = !likes[index];
    setliked(likes);
  };
  useEffect( ()=>{
    axios.get('http://localhost:8082/get-all-posts', {
      headers: {
        'Content-Type': 'application/json', // Content-Type header
        'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
      },
    })
    .then((res) => {
      // Handle the response here
      setPosts(res.data);
      console.log(res.data);
    })
    .catch((error) => {
      // Handle errors here
      console.error('Error fetching data:', error);
    });
  },[])
  const handleRatingChange = (newValue, index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = newValue;
    setliked(updatedLiked);
  };
  return (
    <div className="flex justify-center " style={{width:"100%"}}>
      {addidea ? (
        <AddIdea addidea={addidea} setaddidea={setaddidea} />
      ) : (
        <>
          {profile ? (
            <UserProfile
              id={selectedId.id}
              firstName={selectedId.firstName}
              userName={selectedId.userName}
              lastName={selectedId.lastName}
              email={selectedId.email}
              profile={profile}
              setProfile={setProfile}
            />
          ) : (
            <div className="flex 100p" style={commentsBtn ? {}:{justifyContent:"center"}} >
            <div className="flex w-80p items-center justify-center flex-col z-3" style={commentsBtn ? {width:"70%"} : {}}>
              <p className="text-center font-bold">TOP IDEAS</p>
              {posts.map((data, index) => {
                return (
                  <div
                    className="flex flex-col border border-grey-100 w-100p m-4" style={commentsBtn ? {width:"70%"} : {}}
                    key={index}
                  >
                    <div className="flex m-5">
                     
                      <div>
                        <p className="ml-2 font-bold">{data.userDto.firstName} {data.userDto.lastName}</p>
                      </div>
                    </div>
                    <div className="flex flex-row ml-5">
                      <p>{data.content}</p>
                    </div>
                    <div className="flex justify-around h-10p items-center mt-2">
                      <div
                        className="cursor-pointer flex flex-col items-center"
                        onClick={() => {
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
                        <p>{data.rating}</p>
                      </div>
                        <Button variant="text" onClick={()=>setCommentsBtn(true)}>comments</Button>
                      <Button
                        variant="text"
                        onClick={() => {
                          setSelectedId({
                            id: data.id,
                            userName: data.userName,
                            firstName: data.userDto.firstName,
                            lastName:data.userDto.lastName,
                            email: data.userDto.email,
                          });
                          setProfile(true);
                        }}
                      >
                        view profile
                      </Button>
                      <Button variant="text" onClick={()=>{
                        nav("/mychats/chat/" + data.id + "&" + data.userDto.firstName+ "&"+data.userDto.lastName);
                      }}>Goto chat</Button>
                    </div>
                  </div>
                );
              })}
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
            {commentsBtn && (
              <div className=" flex flex-1 fixed top-15 right-0">
                <Comments/>
                </div>
            )}
            </div>
          )}
        </>
      )}
      ;
    </div>
  );
};

export default Ideas;
