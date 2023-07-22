
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React,{ useState,useEffect } from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';


export default function Register() {
  let [values, setValues]=useState({
    email:" ",
    password:" ",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('mobile_number'),
    });
  };
  const handleChange=(event)=>{
  setValues=({...values, [event.target.name]: event.target.value});
  
};
  return (
    <div>

      <Container maxWidth="xs">


        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >


          <Box component="form" onSubmit={handleSubmit} >
            <TextField margin="normal" fullWidth id="email" label="Your Email Address" name="email" autoComplete="email" autoFocus onChange={(e)=>handleChange(e)} />
            <TextField margin="normal" fullWidth name="password" label="Your Password"  type="password" id="password" onChange={(e)=>handleChange(e)}/>
            <InputMask mask="(+99)9999999999" >
              {() => <TextField label="Your Mobile Number" fullWidth name='mobile_number' id='mobile_number'/>}
            </InputMask>
            <Box > <Link href="#" > Sent OTP </Link></Box>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 1 }}> <Button type="submit" variant="contained"> Create Account </Button>
            </Box>




          </Box>
        </Box>

      </Container>
    </div>


  );
}