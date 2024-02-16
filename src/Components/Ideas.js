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
    username: "",
    name: "",
    email: "",
  });
  const [addidea, setaddidea] = useState(false);
  const [data, setdata] = useState([
    {
      id: 1,
      content:
        "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
      likes: "597",
      email: "aharbour0@github.io",
      username: "Anson",
      name: "Anson Harbour",
    },
    {
      id: 2,
      content:
        "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
      likes: "842",
      email: "wigonet1@independent.co.uk",
      username: "Waylin",
      name: "Waylin Igonet",
    },
    {
      id: 3,
      content:
        "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
      likes: "975",
      email: "jreavell2@jugem.jp",
      username: "Jacqueline",
      name: "Jacqueline Reavell",
    },
    {
      id: 4,
      content:
        "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      likes: "1875",
      email: "mhoward3@walmart.com",
      username: "Morgen",
      name: "Morgen Howard",
    },
    {
      id: 5,
      content: "Nunc purus. Phasellus in felis.",
      likes: "46933",
      email: "jbeden4@hibu.com",
      username: "Joye",
      name: "Joye Beden",
    },
    {
      id: 6,
      content:
        "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
      likes: "00",
      email: "aparmley5@issuu.com",
      username: "Aldous",
      name: "Aldous Parmley",
    },
    {
      id: 7,
      content:
        "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
      likes: "5",
      email: "cleander6@wired.com",
      username: "Coriss",
      name: "Coriss Leander",
    },
    {
      id: 8,
      content:
        "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
      likes: "096",
      email: "bgosker7@economist.com",
      username: "Basilius",
      name: "Basilius Gosker",
    },
    {
      id: 9,
      content:
        "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      likes: "17899",
      email: "lgollin8@opera.com",
      username: "Leandra",
      name: "Leandra Gollin",
    },
    {
      id: 10,
      content: "Curabitur gravida nisi at nibh.",
      likes: "5017",
      email: "cdovinson9@imdb.com",
      username: "Charline",
      name: "Charline Dovinson",
    },
  ]);
  const [liked, setliked] = useState(Array(data.length).fill(0));
  const [posts, setPosts] = useState([]);
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
    <div className="flex justify-center w-full h-full ">
      {addidea ? (
        <AddIdea addidea={addidea} setaddidea={setaddidea} />
      ) : (
        <>
          {profile ? (
            <UserProfile
              id={selectedId.id}
              name={selectedId.name}
              username={selectedId.username}
              email={selectedId.email}
              profile={profile}
              setProfile={setProfile}
            />
          ) : (
            <div className="flex">
            <div className="flex w-90p items-center flex-col z-3" style={commentsBtn ? {width:"70%"} : {}}>
              <p className="text-center font-bold">TOP IDEAS</p>
              {posts.map((post, index) => (
        <div className="flex flex-col border border-grey-100 w-50p m-4" style={commentsBtn ? {width:"70%"} : {}} key={index}>
          <div className="flex m-5">
            <div>
              <p className="ml-2 font-bold">{post.userDto.firstName} {post.userDto.lastName}</p>
            </div>
          </div>
          <div className="flex flex-row ml-5">
            <p>{post.content}</p>
          </div>
          <div className="flex justify-around h-10p items-center mt-2">
            <div className="cursor-pointer flex flex-col items-center" onClick={() => handlelikes(index)}>
              <Rating
                name="simple-controlled"
                value={liked[index]}
                onChange={(event, newValue) => handleRatingChange(newValue, index)}
              />
              <p>{post.likes}</p>
            </div>
            <Button variant="text" onClick={()=>setCommentsBtn(true)}>comments</Button>
            <Button variant="text" onClick={() => {
              setSelectedId({
                id: post.id,
                username: post.userDto.userName,
                name: post.userDto.firstName,
                email: post.userDto.email,
              });
              setProfile(true);
            }}>view profile</Button>
            <Button variant="text" onClick={() => {
              nav("/mychats/chat/" + post.id + "&" + post.userDto.userName);
            }}>Goto chat</Button>
          </div>
        </div>
      ))}
    
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
