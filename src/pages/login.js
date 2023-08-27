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
import { BrowserRouter as Router, Route, Link as Rlink, Routes, BrowserRouter, useNavigate } from "react-router-dom";
import Register from './register';
import asserts from '../asserts/cupid-1.png'
import Chatcontainer from '../components/chatcontainer';
import Axios from 'axios';
import './home.css'


const server_base_url = "http://localhost:3001/";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });

    Axios.post(server_base_url + "get_user_row", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log(response.data)

      if (response.data[0]) {
        alert("Logined As : " + response.data[0].user_firstname +' '+ response.data[0].user_lastname);
        sessionStorage.setItem('sess_user_name',response.data[0].user_firstname +' '+ response.data[0].user_lastname)
        sessionStorage.setItem('sess_user_id',response.data[0].user_id)
        window.location.replace('http://localhost:3000/chatcontainer');
      }else{
        alert('Invalid Username or Password')
      }
    });

  };

  return (

    <div >

    < Box width="100%" height="100%"  >

      <Container id="Main" maxWidth="xs" >


        <Box sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center'}} >

          <img src={require('../asserts/cupid-1.png')} alt="logo" width={150} height={150} />
          <Box component="form" onSubmit={handleSubmit} >
            <TextField margin="normal" fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus required text variant="filled" />
            <TextField margin="normal" fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password" required variant="filled" />
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" /><br />
            <Grid container spacing={2}><Grid item xs > <Button type="submit" variant="outlined"> Login with OTP </Button></Grid>
              <Grid item ><Button type="submit" variant="contained"> Log In </Button></Grid></Grid>
            <Box sx={{ display: 'flex', flexDirection: 'row-reverse', marginTop: 1 }}> <Link href="/Register" > Register here </Link></Box>

          </Box>
        </Box>

      </Container>
      </Box>
    </div>


  );
}