import React, { useState } from 'react'
import image from "../Asserts/image.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'swiper/css';
import { Button } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIdea from './AddIdea';
const Ideas = () => {
    const [addidea,setaddidea] = useState(false)
    const [data,setdata]=useState([{
        "id": 1,
        "content": "Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
        "likes": "597",
        "email": "aharbour0@github.io",
        "username": "Anson",
        "name": "Anson Harbour"
      }, {
        "id": 2,
        "content": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        "likes": "842",
        "email": "wigonet1@independent.co.uk",
        "username": "Waylin",
        "name": "Waylin Igonet"
      }, {
        "id": 3,
        "content": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
        "likes": "975",
        "email": "jreavell2@jugem.jp",
        "username": "Jacqueline",
        "name": "Jacqueline Reavell"
      }, {
        "id": 4,
        "content": "Aliquam erat volutpat. In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
        "likes": "1875",
        "email": "mhoward3@walmart.com",
        "username": "Morgen",
        "name": "Morgen Howard"
      }, {
        "id": 5,
        "content": "Nunc purus. Phasellus in felis.",
        "likes": "46933",
        "email": "jbeden4@hibu.com",
        "username": "Joye",
        "name": "Joye Beden"
      }, {
        "id": 6,
        "content": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
        "likes": "00",
        "email": "aparmley5@issuu.com",
        "username": "Aldous",
        "name": "Aldous Parmley"
      }, {
        "id": 7,
        "content": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
        "likes": "5",
        "email": "cleander6@wired.com",
        "username": "Coriss",
        "name": "Coriss Leander"
      }, {
        "id": 8,
        "content": "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
        "likes": "096",
        "email": "bgosker7@economist.com",
        "username": "Basilius",
        "name": "Basilius Gosker"
      }, {
        "id": 9,
        "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
        "likes": "17899",
        "email": "lgollin8@opera.com",
        "username": "Leandra",
        "name": "Leandra Gollin"
      }, {
        "id": 10,
        "content": "Curabitur gravida nisi at nibh.",
        "likes": "5017",
        "email": "cdovinson9@imdb.com",
        "username": "Charline",
        "name": "Charline Dovinson"
      }])
    const [liked,setliked]=useState(Array(data.length).fill(false))
    const handlelikes=(index)=>{
        let likes=[...liked]
        likes[index]=!likes[index]
        setliked(likes)
    }
  return (
    <div className='flex justify-center w-full h-full '>
        {addidea? <AddIdea addidea={addidea} setaddidea={setaddidea}/>:
        (
             <div className='flex w-90p items-center flex-col border border-grey-400 z-3'>
        <p className='text-center font-bold'>TOP IDEAS</p>
            {data.map((data,index)=>{
                return(
                    <div className='flex flex-col border border-grey-100 w-50p m-4' key={index} >
                    <div className='flex m-5'>
                <div className='rounded-10'>
                    <img src={image} alt='photo' className='rounded-full w-30'/>
                </div>
                <div>
                    <p className='ml-2'>{data.username}</p>
                </div>
            </div>
            <div className='flex flex-row ml-5'>
                <p >{data.content}</p>
                </div>
            <div className='flex justify-around h-10p items-center mt-2'>
                <div className='cursor-pointer flex flex-col items-center' onClick={()=>handlelikes(index)}>
                    {liked[index]?<FavoriteIcon style={{color:"red"}}/>:<FavoriteBorderIcon/>}
                     
                     <p>{data.likes}</p>
                </div>
           
            <Button variant="text">view profile</Button>
            <Button variant="text">Goto chat</Button>
            
            </div> 
                    </div>
                
            )

                })}
           <div className="relative h-screen flex justify-center items-center">
  <button className="bg-blue-500 text-white px-4 py-2 rounded-md fixed bottom-0 right-0 mb-4 mr-20" onClick={()=>{
    setaddidea(true)
  }}>add idea</button>
</div>

         </div>
        
            
        )}
     
        
      </div>
  );
}

export default Ideas