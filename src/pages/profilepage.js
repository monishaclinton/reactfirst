import React from 'react';
import { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Axios from 'axios';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import 'bootstrap/dist/css/bootstrap.css';
import Container from '@mui/material/Container';
import { logDOM } from '@testing-library/react';
function Profilepage() {
  var session_username = sessionStorage.getItem('sess_user_name')
  var sess_user_id = sessionStorage.getItem('sess_user_id')
  const server_base_url = "http://localhost:3001/";

  useEffect(() => {
    Axios.post(server_base_url + "get_user_row_by_user_id", { userid: sess_user_id })
      .then((response) => {
        // console.log(response.data)
        document.getElementById('profile_username').innerText = response.data[0].user_firstname
        document.getElementById('profile_email').innerText = response.data[0].user_email
        document.getElementById('profile_phnno').innerText = response.data[0].user_phnno
      });
  }, []);

  return (
    <div>


      <Box >
        <Avatar />

        <Box>
        <div className="container text-center">
  <div className="row align-items-start">
    <div className="col" id="profile_username">
    
    </div>
    <div className="col">
    <span id="profile_email"></span>
    </div>
    <div className="col">
    <span id="profile_phnno"></span>
    </div>
  </div>
</div>
          

        </Box>

      </Box>

    </div>
  )
}

export default Profilepage