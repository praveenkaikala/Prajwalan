import React, { useEffect, useRef, useState } from "react";
import image from "../Asserts/image.png";
import AddIdea from "./AddIdea";
import { Button, Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CloseIcon from "@mui/icons-material/Close";
const UserProfile = ({ id, name, username, email, profile, setProfile }) => {
  const [addidea, setaddidea] = useState(false);
  const ref = useRef();
  useEffect(() => {
    ref.current?.scrollIntoView({
      block: "start",
    });
  });

  const [userdata, setuserdata] = useState({
    id: 1,
    username: "Chrissie123",
    name: "Ballchin",
    email: "cballchin0@nasa.gov",
    bio: "In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    ideas: [
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
    ],
  });
  const [liked, setliked] = useState(Array(userdata.ideas.length).fill(0));

  const handleRatingChange = (newValue, index) => {
    const updatedLiked = [...liked];
    updatedLiked[index] = newValue;
    setliked(updatedLiked);
  };
  return (
    <div ref={ref}>
      <div
        className="flex w-100p justify-center overflow-scroll"
        style={{ height: "100%", overflow: "scroll", scrollbarWidth: "none" }}
      >
        <div className="flex justify-center w-100p mt-5">
          <CloseIcon
            style={{
              position: "absolute",
              right: "200px",
              top: "120px",
              cursor: "pointer",
            }}
            onClick={() => {
              setProfile(false);
            }}
          />
          <div className="flex flex-col w-90p border border-grey-400 mt-5">
            <div className="flex">
              <div className="m-5">
                <img
                  src={image}
                  alt="photo"
                  style={{
                    borderRadius: "50%",
                    width: "200px",
                    height: "200px",
                  }}
                />
              </div>
              <div className="m-5 flex flex-col justify-center">
                <div className="flex mt-1">
                  <span>UserName:</span>
                  <p className="font-semibold ml-2">{username}</p>
                </div>
                <div className="flex mt-1">
                  <span>Name:</span>
                  <p className="font-semibold ml-2">{name}</p>
                </div>
                <div className="flex mt-1">
                  <span>Gmail:</span>
                  <p className="font-semibold ml-2">{email}</p>
                </div>
                {/* <div className='flex mt-1'><span>Bio:</span><p className='font-semibold ml-2'>{userdata.bio}</p></div> */}
              </div>
            </div>
            <div className="flex flex-col justify-center w-100p items-center mt-3">
              <p className="font-bold">my ideas</p>
              {userdata.ideas.map((data, index) => {
                return (
                  <div
                    className="flex flex-col border border-grey-100 w-50p m-4"
                    key={index}
                  >
                    <div className="flex m-5">
                      {/* <div className='rounded-10'>
                    <img src={image} alt='photo' className='rounded-full w-30'/>
                </div> */}
                      {/* <div>
                    <p className='ml-2'>{data.username}</p>
                </div> */}
                    </div>
                    <div className="flex flex-row ml-5">
                      <p>{data.content}</p>
                    </div>
                    <div className="flex justify-around h-10p items-center mt-2">
                      <div className="cursor-pointer flex flex-col items-center">
                        <Rating
                          name="simple-controlled"
                          value={liked[index]}
                          onChange={(event, newValue) =>
                            handleRatingChange(newValue, index)
                          }
                        />
                        <p>{data.likes}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
