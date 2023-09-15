import { useState } from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import axios from 'axios'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function CreateFormOrg() {
  const [name, setName] = useState('');
  const [acronym, setAcronym] = useState('');
  const [type, setType] = useState('');
  const [homeCountry, setHomeCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [website, setWebsite] = useState('');
  const [year, setYear] = useState('');
  const [comment, setComment] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name,
      acronym,
      type,
      homeCountry,
      phoneNumber,
      website,
      year,
      comment,
    };

    try {
      const response = await axios.post('http://localhost:3000/api/organizations', formData);
      console.log('Data submitted successfully:', response.data);
      // You can reset the form or perform any other action upon success
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };
   

    
  return (
    <div className='createFormContainer'>
        <form action="" className='createForm' onSubmit={handleSubmit}>
          <h1>Create Organization</h1>

          <TextField 
              onChange={(e) => setName(e.target.value)} 
              value={name}  
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              required 
            />

          <TextField 
              onChange={(e) => setAcronym(e.target.value)} 
              id="outlined-basic" 
              label="Acronym" 
              variant="outlined"
              value={acronym}
            />
           <div className="flex gap-5">
              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={type}
                        label="Age"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <MenuItem value={'type1'}>Type1</MenuItem>
                        <MenuItem value={'type2'}>Type2</MenuItem>
                        <MenuItem value={'type3'}>Type3</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Home Country</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={homeCountry}
                        label="Home Country"
                        onChange={(e) => setHomeCountry(e.target.value)}
                    >
                        <MenuItem value={"home1"}>Home1</MenuItem>
                        <MenuItem value={"home2"}>Home2</MenuItem>
                        <MenuItem value={"home3"}>Home3</MenuItem>
                </Select>
              </FormControl>
           </div>
          <TextField
              onChange={(e) => setPhoneNumber(e.target.value)}
              id="outlined-basic" 
              label="Phone Number" 
              variant="outlined"
              value={phoneNumber} 
            />
          <TextField 
              onChange={(e) => setWebsite(e.target.value)}
              id="outlined-basic" 
              label="Website" 
              variant="outlined" 
              value={website}
            />
          <TextField 
              onChange={(e) => setYear(e.target.value)}
              id="outlined-basic" 
              label="Year" 
              variant="outlined" 
              value={year}
            />


          <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Organization Logo
            <VisuallyHiddenInput type="file" />
         </Button>
         <TextField
            onChange={(e) => setComment(e.target.value)}
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            value={comment}
            defaultValue="Write your message here..." // Remove the value prop
          />
          <div className="createBtnWrapper">
             <button className='btnSave' type='submit'>Save</button>
             <button className='btnCancel'>Cancel</button>
          </div>
        </form>
    </div>
  )
}
