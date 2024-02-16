import {
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddIdea = ({ addidea, setaddidea }) => {
  const [data, setdata] = useState({
    content: "",
    Category: "web",
  });
  const Datachange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const handleCategoryChange = (e) => {
    setdata({ ...data, category: e.target.value });
  };
  return (
    <div className="flex w-100p h-80v justify-center items-center flex-col">
      <div className="flex justify-center w-100p">
        <p className="m-6 font-bold">Idea Subbmission</p>

        <CloseIcon
          style={{ position: "absolute", right: "200px", cursor: "pointer" }}
          onClick={() => {
            setaddidea(false);
          }}
        />
      </div>

      <div className="flex w-50p h-50p items-center flex-col">
        <TextField
          id="outlined-multiline-flexible"
          label="Enter Idea"
          multiline
          name="content"
          maxRows={4}
          style={{ width: "100%" }}
          required
          onChange={Datachange}
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
          onClick={() => console.log(data)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddIdea;
