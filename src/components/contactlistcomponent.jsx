import React from 'react';
import { contactList } from './data/contactlist';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Typography, Grid, Divider } from '@mui/material'
import ChangeProfilePicture from './changeprofilepicture';
import { useState, useEffect } from 'react';
import Axios from 'axios';
// import } from '@mui/material/Grid';
import { Block } from '@mui/icons-material';
import ConversationComponent from './conversationcomponent';
const server_base_url = "http://localhost:3001/";
const ContactListComponent = (event, user, changeChat) => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [sentChatProps, setsentChatProps] = useState([]);
  const [sentchat_receiverid, setsentChat_receiverid] = useState();
  const [users, setUsers] = useState([]);
  const [currentSelected, setCurrentSelected] = useState();
  const [message, setMessage] = useState('');

  var session_id = sessionStorage.getItem('sess_user_id');

  const handleUserSelection = (user) => {
    // setSelectedUser(user);
    console.log(user)
    Axios.post(server_base_url + "get_message_by_userid", { receiver_id: user.user_id, sender_id: session_id }).then((response) => {
      // setUsers(response.data);
      console.log(response.data)
      setsentChatProps(response.data)
      setsentChat_receiverid(user.user_id)
      document.getElementById('main_chat_div').innerHTML = '';
    });
  };





  useEffect(() => {
    Axios.get(server_base_url + "get_user_name").then((response) => {
      setUsers(response.data);
    });
  }, []);

  // const changeCurrentChat = (index, users) => {
  //   setCurrentSelected(index);
  //   changeChat(users);

  // };
  const [imageUrl, setImageUrl] = useState('');


  return (
    <Box>

      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <Typography color="#d1d7db">

            {users.map((user, index) => (

            <span key={index} style={{ display: (session_id != user.user_id) ? 'block':'none' }} onClick={() => handleUserSelection(user)}>{user.user_firstname} {user.user_lastname} </span>

            ))}

          </Typography>
        </Grid>

        <Grid item xs={6} md={9}>

          <ConversationComponent propsArray={sentChatProps} receiverid={sentchat_receiverid} />

        </Grid>
      </Grid>


    </Box>

  );
};

export default ContactListComponent;