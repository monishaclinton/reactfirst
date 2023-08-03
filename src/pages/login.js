import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Link as Rlink, Routes, BrowserRouter,useNavigate } from "react-router-dom";
import Register from './register';
import asserts from '../asserts/cupid-heart.jpg'
import Chatcontainer from '../components/chatcontainer';


export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  let navigate = useNavigate(); 
  const routeToChatbox = () =>{ 
   
    navigate("/chatcontainer");
  };
  return (
   
    <div>
     
 
  
      <Container id="Main"maxWidth="xs">

        
        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >

           <img src={require('../asserts/cupid-heart.jpg')} alt="logo" width={150} height={150}/>
          <Box component="form" onSubmit={handleSubmit} >
            <TextField margin="normal" fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus  required/>
            <TextField margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" required />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /><br />
            <Grid container spacing={2}><Grid item xs > <Button type="submit" variant="outlined"> Login with OTP </Button></Grid>
              <Grid item ><Button type="submit" variant="contained" onClick={routeToChatbox} target="_blank"> Log In </Button></Grid></Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 1 }}> <Link href="/Register" > Register here </Link></Box>
             
          </Box>
        </Box>

      </Container>
    </div>


  );
}