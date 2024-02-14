import { Button, FormControl, InputLabel, NativeSelect, TextField } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const AddIdea = ({addidea,setaddidea}) => {
  return (
   <div className='flex w-100p h-80v justify-center items-center flex-col'>
    <div className='flex justify-center w-100p'>
        <p className='m-6 font-bold'>Idea Subbmission</p>

      <CloseIcon style={{position:'absolute',right:'200px',cursor:"pointer"}} onClick={()=>{
        setaddidea(false)
      }}/>
    </div>
    
    <div className='flex w-50p h-50p items-center flex-col'>
    <TextField
          id="outlined-multiline-flexible"
          label="Enter Idea"
          multiline
          maxRows={4}
         style={{width:"100%"}} required/>
         <FormControl fullWidth style={{margin:"10px"}}>
  <InputLabel variant="standard" htmlFor="uncontrolled-native" required>
    Categoty
  </InputLabel>
  <NativeSelect
    defaultValue={30}
    inputProps={{
      name: 'Category',
      id: 'uncontrolled-native',
    }} required
  >
    <option value={"web development"}>web development</option>
    <option value={"app development"}>app development</option>
    <option value={"machine learning"}>machine learning</option>
    <option value={"cyber security"}>cyber security</option>
    <option value={"others"}>others</option>

  </NativeSelect>
</FormControl>
         <Button variant="contained" style={{margin:'10px'}}>Submit</Button>

    </div>
   </div>
  )
}

export default AddIdea