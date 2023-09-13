import React from 'react';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function Profilepage() {
  var session_username = sessionStorage.getItem('sess_user_name')
  const server_base_url = "http://localhost:3001/";
  var session_useremail = sessionStorage.getItem('sess_user_email')
  var session_userphonenumber = sessionStorage.getItem('sess_user_phnno')


  Axios.post(server_base_url + "get_user_details").then((response) => {
    sessionStorage.setItem('sess_user_email', response.data[0].user_email)
    sessionStorage.setItem('sess_user_phnno', response.data[0].user_phnno)

  });

  return (
    <div>
      <container>

        <Box sx={{ marginTop: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }} >
          <Avatar />
          <Box>
            {session_username.toUpperCase()}
          </Box>
          <Box>

            {session_useremail}
          </Box>
          <Box>
            {session_userphonenumber}
          </Box>
        </Box>
      </container>
    </div>
  )
}

export default Profilepage