import React from 'react';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { Typography, Grid, Divider } from '@mui/material'

import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Input } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import FilterListIcon from "@mui/icons-material/FilterList";

import SearchIcon from '@mui/icons-material/Search'
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
    // console.log(user)
    Axios.post(server_base_url + "get_message_by_userid", { receiver_id: user.user_id, sender_id: session_id }).then((response) => {
      // setUsers(response.data);
      console.log(response.data)
      setsentChatProps(response.data)
      setsentChat_receiverid(user.user_id)
      document.getElementById('main_chat_div').innerHTML = '';
    });
  };

  const [filtername, setfilter_name] = useState('');

  var side_selected_contact_id = localStorage.getItem('side_selected_contact_localstorage');
  useEffect(() => {
    var filter_name = document.getElementById("FilteredSearch").value
    Axios.get(server_base_url + "get_user_name_user?user_id=" + session_id + "&name_filter=" + filter_name).then((response) => {
      if (response.data.length == 0) {
        // alert("No Friends Found")
        setUsers([{ user_id: "", user_firstname: 'No Data Found', user_lastname: "" }])
      } else {
        setUsers(response.data);
      }
      if (side_selected_contact_id) {
        // console.log({user_id:side_selected_contact_id})
        handleUserSelection({user_id:side_selected_contact_id})
      }

    });
  }, [filtername]);

  const onnamefilterinput = (e) => {
    // var filter_name=document.getElementById("FilteredSearch").value

    setfilter_name(e.target.value)
    // console.log(e.target.value)
  };

  const side_selected_contact = (user_id) => {
    // console.log(user_id);

    var side_selected_contact_class = document.getElementsByClassName("side_selected_contact_class");
    for (var i = 0; i < side_selected_contact_class.length; i++) {
      side_selected_contact_class[i].classList.remove("btn-secondary");
    }
    var myElement = document.getElementById("side_selected_contact_" + user_id);
    localStorage.setItem('side_selected_contact_localstorage', user_id);
    myElement.classList.remove("btn-light");
    myElement.classList.add("btn-secondary");
  };


  return (
    <Box>

      <Grid container spacing={1}>
        <Grid item xs={6} md={3}>
          <Box
            display="flex"
            sx={{
              // background: "#1f2c33",
              borderRadius: "8px",
              padding: "0px 8px",
              margin: "10px 0px",
              width: "99%"
            }}
            flex={1}
            alignItems="center" current_id
          >


            <IconButton onClick={() => { }}>
              <SearchIcon
                sx={{
                  color: "#8696a1",
                  height: "20px",
                  width: "20px",
                }}
              />
            </IconButton>

            <Input
              fullWidth
              disableUnderline
              id='FilteredSearch'
              // onkeypress={onnamefilterinput}
              onInput={onnamefilterinput}
              placeholder="Search or start a new chat"
              sx={{
                height: "35px",
                // color: "white",
                padding: "0px 13px",
                fontSize: "14px",
                width: "100%"


              }}
            />
         </Box>
             {users.map((user, index) => (

            <div key={index} style={{ display: (session_id != user.user_id) ? 'block' : 'none', }} onClick={() => handleUserSelection(user)}> <IconButton>
              <Avatar src={user.image_name} alt={user.user_firstname.toUpperCase()} ></Avatar>
            </IconButton><span id={"side_selected_contact_" + user.user_id} className={(side_selected_contact_id == user.user_id) ? "side_selected_contact_class btn btn-secondary" : "side_selected_contact_class btn btn-light"} onClick={(e) => side_selected_contact(user.user_id)}>{user.user_firstname} {user.user_lastname}</span> </div>

          ))}


        </Grid>

        <Grid item xs={6} md={9}>

          <ConversationComponent propsArray={sentChatProps} receiverid={sentchat_receiverid} />

        </Grid>
      </Grid>


    </Box>

  );
};

export default ContactListComponent;