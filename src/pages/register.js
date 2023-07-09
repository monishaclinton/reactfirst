import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import InputMask from 'react-input-mask';


export default function Register() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('mobile_number'),
    });
  };

  return (
    <div>

      <Container maxWidth="xs">


        <Box sx={{ marginTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >


          <Box component="form" onSubmit={handleSubmit} >
            <TextField margin="normal" fullWidth id="email" label="Your Email Address" name="email" autoComplete="email" autoFocus />
            <TextField margin="normal" fullWidth name="password" label="Your Password" type="password" id="password" />
            <InputMask mask="(+99)9999999999" >
              {() => <TextField label="Your Mobile Number" fullWidth name='mobile_number' id='mobile_number' />}
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