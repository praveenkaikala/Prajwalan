import React, { useState } from "react";
import image from "../../Asserts/image.png";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
const Chat = () => {
  const { _id } = useParams();
  const [id, name] = _id.split("&");
  const [chat, setchat] = useState([
    {
      id: 1,
      senderId: "praveenreciver",
      reciverId: "praveensender",
      message:
        "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    },
    {
      id: 2,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message: "Donec quis orci eget orci vehicula condimentum.",
    },
    {
      id: 3,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    },
    {
      id: 4,
      senderId: "praveenreciverr",
      reciverId: "praveensender",
      message:
        "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      id: 5,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    },
    {
      id: 6,
      senderId: "praveenreciver",
      reciverId: "praveensender",
      message:
        "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    },
    {
      id: 7,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    },
    {
      id: 8,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    },
    {
      id: 9,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    },
    {
      id: 10,
      senderId: "praveensender",
      reciverId: "praveenreciver",
      message:
        "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    },
  ]);
  return (
    <div className="flex  h-87v chat cursor-pointer" style={{ width: "100%" }}>
      <div className=" flex flex-col m-5 border border-grey-400 rounded w-100p items-center">
        <div className="flex border border-gray-400 w-100p items-center justify-between">
          <div className="flex items-center">
            {/* <div className="rounded-10  m-3">
              <img src={image} alt="photo" className="rounded-full w-30" />
            </div> */}
            <p className="font-semibold p-2">{name}</p>
          </div>
          <DeleteIcon
            className=" mr"
            style={{ marginRight: "10px", cursor: "pointer" }}
          />
        </div>
        <div
          className="flex w-100p border border-grey-400 justify-center overflow-scroll"
          style={{ flex: 1, scrollbarWidth: "none", scrollBehavior: "smooth" }}
        >
          <div className="w-100p ">
            <div className="flex justify-start ">
              <div
                className="m-2 bg-gray-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="m-2 bg-green-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="m-2 bg-green-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="m-2 bg-green-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="m-2 bg-green-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <div
                className="m-2 bg-green-300 rounded-full"
                style={{ maxWidth: "50%" }}
              >
                <p className="p-2 m-3">
                  hello fdfkdlkdlkfld ;dldkfldbl dlklekvldffk kkbkdk lldk lkdlk
                  lklk ldk leklk
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-100p flex items-center justify-center m-3">
          <div
            className="flex w-90p border border-gray-400 items-center justify-between"
            style={{ height: "35px", borderRadius: "50px" }}
          >
            <input
              type="text"
              style={{ width: "85%", outline: "none", margin: "5px" }}
              onKeyDown={(e)=>{
                if(e.key==="Enter")
                {
                  console.log("hello")
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
