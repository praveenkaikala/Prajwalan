import {
    Button,
    FormControl,
    InputLabel,
    NativeSelect,
    TextField,
  } from "@mui/material";
  import React, { useState } from "react";
  import CloseIcon from "@mui/icons-material/Close";
  import axios from "axios";
  
  const EditIdea = ({ id,content,setEditIdea }) => {
    const [data, setdata] = useState({
      content: "",
      category: "web",
    });
    const submitPost=()=>{
      axios.post("http://localhost:8082/create-post", data, {
        headers: {
          'Content-Type': 'application/json', // Content-Type header
          'Authorization': 'Bearer '+sessionStorage.getItem("token"), // Authorization header
        },
      }).then((res)=>{
        console.log(res.data)
        if(res.status === 201)
          window.location.href = "/ideas";
  
      }).catch((err)=>{
        console.log(err)
      })
    }
    const handleCategoryChange = (e) => {
      setdata({ ...data, category: e.target.value });
    };
    return (
      <div className="flex w-100p h-80v justify-center items-center flex-col">
        <div className="flex justify-center w-100p">
          <p className="m-6 font-bold">Edit Idea</p>
  
          <CloseIcon
            style={{ position: "absolute", right: "200px", cursor: "pointer" }}
            onClick={() => {
              setEditIdea(false);
            }}
          />
        </div>
  
        <div className="flex w-50p h-50p items-center flex-col">
          <TextField
            id="outlined-multiline-flexible"
            label="Enter Idea"
            multiline
            value={content}
            name="content"
            maxRows={4}
            style={{ width: "100%" }}
            required

          />
          <FormControl fullWidth style={{ margin: "10px" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
              Categoty
            </InputLabel>
            <NativeSelect
              defaultValue={30}
              inputProps={{
                name: "Category",
                id: "uncontrolled-native",
              }}
              required
              onChange={(e) => {
                setdata({ ...data, Category: e.target.value });
              }}
            >
              <option value="web">web development</option>
              <option value="app">app development</option>
              <option value="machine">machine learning</option>
              <option value="cyber">cyber security</option>
              <option value="others">others</option>
            </NativeSelect>
          </FormControl>
          <Button
            variant="contained"
            style={{ margin: "10px" }}
            onClick={()=>submitPost()}
          >
            Edit
          </Button>
        </div>
      </div>
    );
  };
  
  export default EditIdea;
  