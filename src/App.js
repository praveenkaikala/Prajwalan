import React, { createContext, useEffect, useState } from "react";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Ideas from "./Components/Ideas";
import Profile from "./Components/Profile";
import Chat from "./Components/Chat/Chat";
import Slidebar from "./Components/Chat/Slidebar";
import Mychats from "./Components/Mychats";
import "./index.css";
import { BrowserRouter, Route, Router, Routes, useNavigate } from "react-router-dom";
import Welcome from "./Components/Chat/Welcome";
import AddIdea from "./Components/AddIdea";

export const mycontext = createContext();
const App = () => {
  const [loading, setloding] = useState(true);
  const [islogin, setislogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    // const storedUseLogin = sessionStorage.getItem("isLogin");
    
    if (sessionStorage.getItem("isLogin")) {
      // navigate("/ideas")
      
      setislogin(JSON.parse(sessionStorage.getItem("isLogin")));
      
    }
    setloding(false);
  }, []);
  if (loading) {
    return <div>Loading...</div>; // Render loading indicator while retrieving login state
  }
  return (
    <div className="m-0">
      <mycontext.Provider
        value={{
          islogin: islogin,
          setislogin: setislogin,
        }}
      >
        {islogin ? (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="ideas" element={<Ideas />} />
              <Route path="mychats" element={<Mychats />}>
                <Route path="welcome" element={<Welcome />} />
                <Route path="chat/:_id" element={<Chat />} />
              </Route>
              <Route path="myprofile" element={<Profile />} />
            </Routes>
            </>
        ) : (
          <Login />
        )}
      </mycontext.Provider>
    </div>
  );
};

export default App;
