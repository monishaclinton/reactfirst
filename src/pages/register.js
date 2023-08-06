import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState} from 'react';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';
import Axios from 'axios';



function Register() {
  const [isFormInvalid, setIsFormInvalid] = useState(false)
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
     Axios.post("http://localhost:3001/user/", data)
      .then((response) => {

        if (response.data.status == "success") {
          window.location.replace('http://localhost:3000/');
        } else {
          setIsFormInvalid(true)
        }
      });

  };
 
    
    
  return (
    <div>

      <Container maxWidth="xs">


        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >


          <Box component="form" onSubmit={handleSubmit} >
            <TextField margin="normal" fullWidth id="email" label="Your Email Address" name="email" autoComplete="email" error={isFormInvalid} autoFocus  required />
            <TextField margin="normal" fullWidth name="password" label="Your Password"  type="password" id="password"  required/>
            <TextField margin="normal" fullWidth name="confirm_password" label="confirm Password"  type="password" id="confirm_password"  required/>
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
export default Register