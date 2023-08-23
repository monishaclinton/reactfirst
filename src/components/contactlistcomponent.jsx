import React from 'react';
import { contactList } from './data/contactlist';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material'
import { useState,useEffect } from 'react';
import Axios from 'axios';
const server_base_url = "http://localhost:3001/";
const ContactComponent =(event) => {
 
  // const { userData } = props;
  const [users, setUsers] = useState([]);
  useEffect(() => {
    Axios.post(server_base_url + "get_user_row", data, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then((response) => {
      console.log(response.data)

      if (response.data[0]) {
        alert("Logined As : " + response.data[0].user_firstname );
      
    
      }
    });

  
  }, []);
    

  // function Contacts({ contacts, changeChat }){
  
  // }
  // useEffect(async () => {
  //   const data = await JSON.parse(
  //     localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //   );
  
    
  // }, []);
  // const changeCurrentChat = (index, contact) => {
  //   setCurrentSelected(index);
  //   changeChat(contact);
  // };
  return ( 
    
    <Box>
      {/* <Avatar src={userData.profilePic}/> */}
      
      <Box display="flex" justifyContent="space-between" width="100%">
          <Typography variant="body1" color="#d1d7db">
          <ul>
        {users.map((user, index) => (
          <li key={index}>{user.user_name}</li>
        ))}
      </ul>
          </Typography>
          <Typography variant="caption" color="#d1d7db">
             {/* {userData.lastText} */}
          </Typography>
      </Box>
      <Typography variant="subtitle2" color="#d1d7db">
        {/* {userData.lastTextTime} */}
      </Typography>
      <Box
          width="100%"
          mt="13px"
          sx={{
            border: ".05px solid #2f3b44",
          }}
        />
  </Box>
  );
};

const ContactListComponent = () => {

  return( 
      <Box>
      {/* <Box>
          <Avatar src= "/profile/profilephoto.jpeg"/>
      </Box> */}
      {contactList.map((userData)=>(
      <ContactComponent userData={userData}/>
      ))}
        </Box>
  );
};
export default ContactListComponent;